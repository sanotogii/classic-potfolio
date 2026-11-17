"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Check, QrCode, Star, X } from "lucide-react";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "cv-qr-feedback";
const RATING_LABELS = ["Not for me", "Meh", "Okay", "Good", "Great idea"];

export function CvQrFeedback() {
  const [visible, setVisible] = useState(false);
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");
  const dialogRef = useRef<HTMLDivElement>(null);
  const reportedRef = useRef(false);
  const mountedAtRef = useRef(0);

  useEffect(() => {
    mountedAtRef.current = Date.now();
    const params = new URLSearchParams(window.location.search);
    if (params.get("from")?.toLowerCase() !== "qrcode") return;
    if (localStorage.getItem(STORAGE_KEY)) return;

    const timer = setTimeout(() => setVisible(true), 8000);
    return () => clearTimeout(timer);
  }, []);

  const send = useCallback((payload: Record<string, unknown>) => {
    return fetch("/api/cv-feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        path: window.location.pathname + window.location.search,
        referrer: document.referrer,
        language: navigator.language,
        viewport: `${window.innerWidth}x${window.innerHeight}`,
        timeOnPage: Math.round((Date.now() - mountedAtRef.current) / 1000),
        ...payload,
      }),
      keepalive: true,
    });
  }, []);

  const close = useCallback(
    (action: "skipped" | "closed") => {
      if (reportedRef.current) return;
      reportedRef.current = true;
      localStorage.setItem(STORAGE_KEY, action);
      void send({ action }).catch(() => {});
      setVisible(false);
    },
    [send]
  );

  const handleSkip = useCallback(() => close("skipped"), [close]);
  const handleClose = useCallback(() => close("closed"), [close]);

  useEffect(() => {
    if (!visible) return;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") handleClose();
    };

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [visible, handleClose]);

  const submit = async () => {
    if (!rating || status === "sending" || reportedRef.current) return;
    reportedRef.current = true;
    setStatus("sending");

    try {
      const response = await send({
        action: "submitted",
        rating,
        comment,
      });
      if (!response.ok) throw new Error("Request failed");

      localStorage.setItem(STORAGE_KEY, "submitted");
      setStatus("sent");
      setTimeout(() => setVisible(false), 2000);
    } catch {
      reportedRef.current = false;
      setStatus("error");
    }
  };

  if (!visible) return null;

  const label = RATING_LABELS[(hovered || rating) - 1] ?? "Tap a star";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-in fade-in-0"
      onClick={handleClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cv-feedback-title"
        tabIndex={-1}
        onClick={(event) => event.stopPropagation()}
        className="relative w-full max-w-md rounded-xl border bg-card p-6 shadow-2xl outline-none animate-in fade-in-0 zoom-in-95 duration-200"
      >
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close feedback"
          className="absolute right-4 top-4 rounded-md p-1 text-neutral-500 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800"
        >
          <X className="h-4 w-4" />
        </button>

        {status === "sent" ? (
          <div className="flex flex-col items-center py-6 text-center">
            <Check className="h-10 w-10 text-green-600 dark:text-green-400" />
            <p className="mt-3 font-serif text-lg font-bold text-[#575279] dark:text-[#c3c0b6]">
              Thanks, feedback sent.
            </p>
          </div>
        ) : (
          <>
            <div className="flex h-11 w-11 items-center justify-center rounded-lg border bg-neutral-100 text-[#575279] dark:bg-neutral-800 dark:text-[#c3c0b6]">
              <QrCode className="h-5 w-5" />
            </div>

            <h2
              id="cv-feedback-title"
              className="mt-4 font-serif text-xl font-bold text-[#575279] dark:text-[#c3c0b6]"
            >
              How was the QR code?
            </h2>
            <p className="mt-1 text-sm text-[#3d3929] dark:text-[#c3c0b6]">
              You scanned the QR code on my CV. Was it a good idea?
            </p>

            <div className="mt-4 flex gap-1">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  type="button"
                  aria-label={`${value} out of 5`}
                  onClick={() => setRating(value)}
                  onMouseEnter={() => setHovered(value)}
                  onMouseLeave={() => setHovered(0)}
                  className="rounded-md p-1 transition-transform hover:scale-110"
                >
                  <Star
                    className={cn(
                      "h-9 w-9 transition-colors",
                      value <= (hovered || rating)
                        ? "fill-amber-400 text-amber-400"
                        : "text-neutral-300 dark:text-neutral-600"
                    )}
                  />
                </button>
              ))}
            </div>
            <p
              aria-live="polite"
              className="mt-1 text-xs text-neutral-600 dark:text-neutral-400"
            >
              {label}
            </p>

            <textarea
              value={comment}
              onChange={(event) => setComment(event.target.value)}
              maxLength={500}
              rows={3}
              placeholder="Anything else? (optional)"
              className="mt-4 w-full resize-none rounded-md border bg-background px-3 py-2 text-sm outline-none focus:border-neutral-500"
            />

            <div className="mt-4 flex items-center justify-end gap-3">
              {status === "error" && (
                <span className="mr-auto text-xs text-red-600 dark:text-red-400">
                  Could not send. Try again.
                </span>
              )}
              <button
                type="button"
                onClick={handleSkip}
                className="rounded-md px-3 py-2 text-sm text-neutral-600 transition-colors hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800"
              >
                Not now
              </button>
              <button
                type="button"
                onClick={submit}
                disabled={!rating || status === "sending"}
                className="rounded-md bg-[#575279] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#4a4770] disabled:cursor-not-allowed disabled:opacity-50 dark:bg-[#c3c0b6] dark:text-[#1f1d2b] dark:hover:bg-[#d5d2c8]"
              >
                {status === "sending" ? "Sending..." : "Send feedback"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
