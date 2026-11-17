const TOKEN_URL = "https://oauth2.googleapis.com/token";
const SCOPE = "https://www.googleapis.com/auth/spreadsheets";

function base64url(value: ArrayBuffer | string) {
  const bytes =
    typeof value === "string"
      ? new TextEncoder().encode(value)
      : new Uint8Array(value);

  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);

  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function pemBytes(value: string) {
  let pem = value.trim();

  // Accept the whole service-account JSON as well as just the PEM.
  if (pem.startsWith("{")) {
    try {
      const parsed = JSON.parse(pem) as { private_key?: string };
      if (parsed.private_key) pem = parsed.private_key;
    } catch {
      // Not JSON; the base64 check below reports the bad input.
    }
  }

  const base64 = pem
    .replace(/\\n/g, "\n")
    .replace(/^["']+|["']+$/g, "")
    .replace(/-----BEGIN [^-]+-----/g, "")
    .replace(/-----END [^-]+-----/g, "")
    .replace(/\s/g, "");

  if (!/^[A-Za-z0-9+/]+={0,2}$/.test(base64)) {
    const invalid = base64.match(/[^A-Za-z0-9+/=]/)?.[0];
    throw new Error(
      `GOOGLE_PRIVATE_KEY is not valid PEM base64${
        invalid ? ` (found "${invalid}")` : ""
      }`
    );
  }

  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);

  return bytes.buffer as ArrayBuffer;
}

async function accessToken() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY;
  if (!email || !privateKey) {
    throw new Error("Google service account is not configured");
  }

  const now = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claim = base64url(
    JSON.stringify({
      iss: email,
      scope: SCOPE,
      aud: TOKEN_URL,
      iat: now,
      exp: now + 3600,
    })
  );
  const unsigned = `${header}.${claim}`;

  const key = await crypto.subtle.importKey(
    "pkcs8",
    pemBytes(privateKey),
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    key,
    new TextEncoder().encode(unsigned)
  );

  const response = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: `${unsigned}.${base64url(signature)}`,
    }),
  });

  const data = (await response.json().catch(() => null)) as {
    access_token?: string;
    error_description?: string;
  } | null;

  if (!response.ok || !data?.access_token) {
    throw new Error(
      `Google token request failed (${response.status}): ${
        data?.error_description ?? "invalid response"
      }`
    );
  }

  return data.access_token;
}

export async function appendFeedbackRow(values: (string | number)[]) {
  const sheetId = process.env.GOOGLE_SHEET_ID;
  if (!sheetId) throw new Error("GOOGLE_SHEET_ID is not configured");

  const tab = process.env.GOOGLE_SHEET_TAB || "Feedback";
  const name = /^[A-Za-z0-9_]+$/.test(tab)
    ? tab
    : `'${tab.replace(/'/g, "''")}'`;
  const range = encodeURIComponent(`${name}!A:L`);
  const token = await accessToken();

  const response = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ values: [values] }),
    }
  );

  if (!response.ok) {
    const detail = (await response.text()).slice(0, 300);
    throw new Error(`Sheets append failed (${response.status}): ${detail}`);
  }
}
