"use client";

import React, { useState } from "react";
import type { IconType } from "react-icons";
import { FaAws, FaCertificate, FaMicrosoft } from "react-icons/fa";
import { GrOracle } from "react-icons/gr";
import { PiBootFill } from "react-icons/pi";
import {
  SiDatacamp,
  SiLinuxfoundation,
  SiSap,
} from "react-icons/si";
import { CalendarDays, ChevronDown, ExternalLink } from "lucide-react";

type Certification = {
  name: string;
  issuer: string;
  issued?: string;
  expires?: string;
  credentialId?: string;
  skills?: string[];
  credentialUrl?: string;
};

// Ordered strongest first: the first four are shown before "See more".
const certifications: Certification[] = [
  {
    name: "Oracle Cloud Infrastructure Foundations Associate (1Z0-1085-26)",
    issuer: "Oracle",
    issued: "Nov 2026",
    expires: "Nov 2028",
    skills: ["Cloud Computing"],
    credentialUrl:
      "https://catalog-education.oracle.com/pls/certview/sharebadge?id=B04A397CC2F46B81F22D05684825425939C968CF993773ACB76FCE3F624DD8A0",
  },
  {
    name: "GitHub Foundations GH-900",
    issuer: "Microsoft",
    issued: "Nov 2026",
    credentialId: "4EF6937D89875AE9",
    credentialUrl:
      "https://learn.microsoft.com/api/credentials/share/en-us/KhalidLAZRAG-1678/4EF6937D89875AE9?sharingId",
  },
  {
    name: "LFS158: Introduction to Kubernetes",
    issuer: "The Linux Foundation",
    issued: "Sep 2026",
    credentialUrl:
      "https://www.credly.com/badges/158a2e3b-e05c-4295-a319-468faf538140/linked_in_profile",
  },
  {
    name: "LFEL1014: Scaling Cloud Native Applications with KEDA",
    issuer: "The Linux Foundation",
    issued: "Sep 2026",
    credentialUrl:
      "https://www.credly.com/badges/60b20afe-35c8-4f37-bdf2-3540f464f797/linked_in_profile",
  },
  {
    name: "AWS Educate Introduction to Cloud 101 - Training Badge",
    issuer: "Amazon Web Services (AWS)",
    issued: "Oct 2026",
    credentialUrl:
      "https://www.credly.com/badges/df9cb166-96d5-48bf-b0ab-f57c1a166675/linked_in_profile",
  },
  {
    name: "Introducing Joule Studio",
    issuer: "SAP",
    issued: "Nov 2026",
    credentialUrl:
      "https://badger.learning.sap.com/verify/xemen-lumuh-vogys-byhat-vefyc",
  },
  {
    name: "Boot.dev's Learn Kubernetes Course",
    issuer: "Boot.dev",
    issued: "Nov 2026",
    credentialId: "e6d5e6fd-2fbe-4bf2-8c9d-b0d544a33988",
    skills: ["Kubernetes"],
    credentialUrl:
      "https://www.boot.dev/certificates/e6d5e6fd-2fbe-4bf2-8c9d-b0d544a33988",
  },
  {
    name: "Boot.dev's Build an AI Agent in Python Course",
    issuer: "Boot.dev",
    issued: "Sep 2026",
    credentialId: "8ae1a77e-ead6-4dcf-ab6f-3c8356ea3efb",
    credentialUrl:
      "https://www.boot.dev/certificates/8ae1a77e-ead6-4dcf-ab6f-3c8356ea3efb",
  },
  {
    name: "Boot.dev's Build a Web Scraper in Python Course",
    issuer: "Boot.dev",
    issued: "Sep 2026",
    credentialId: "1bc25abe-3019-42bd-917d-ae3716db5e74",
    credentialUrl:
      "https://www.boot.dev/certificates/1bc25abe-3019-42bd-917d-ae3716db5e74",
  },
  {
    name: "GitHub Foundations",
    issuer: "DataCamp",
    credentialUrl:
      "https://www.datacamp.com/completed/statement-of-accomplishment/track/ebb7f1fc00d32ad5dbfe9cbdc5cc497b6fde6b75",
  },
];

const issuerLogos: Record<string, { icon: IconType; color: string }> = {
  Microsoft: { icon: FaMicrosoft, color: "#0067B8" },
  "Boot.dev": { icon: PiBootFill, color: "#22C55E" },
  Oracle: { icon: GrOracle, color: "#C74634" },
  SAP: { icon: SiSap, color: "#0FAAFF" },
  "Amazon Web Services (AWS)": { icon: FaAws, color: "#FF9900" },
  "The Linux Foundation": { icon: SiLinuxfoundation, color: "#0B72B9" },
  DataCamp: { icon: SiDatacamp, color: "#03A94C" },
};

const fallbackLogo = { icon: FaCertificate, color: "#575279" };

const INITIAL_COUNT = 4;

const Certifications = () => {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded
    ? certifications
    : certifications.slice(0, INITIAL_COUNT);

  return (
    <div className="mt-8 mb-20">
      <div className="mb-8 flex items-center gap-3">
        <h1 className="font-serif font-bold text-2xl text-[#575279] dark:text-[#c3c0b6]">
          Certifications
        </h1>
        <span className="rounded-full border px-2.5 py-0.5 text-xs text-neutral-600 dark:text-neutral-400">
          {certifications.length}
        </span>
      </div>

      <ul className="overflow-hidden rounded-xl border bg-card divide-y">
        {visible.map((cert, index) => {
          const { icon: Icon, color } = issuerLogos[cert.issuer] ?? fallbackLogo;

          return (
            <li
              key={`${cert.name}-${index}`}
              className="group relative flex gap-4 p-5 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900/50"
            >
              <span
                aria-hidden
                className="absolute inset-y-0 left-0 w-1 origin-center scale-y-0 transition-transform group-hover:scale-y-100"
                style={{ backgroundColor: color }}
              />

              <span
                aria-hidden
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border"
                style={{ backgroundColor: `${color}1a`, color }}
              >
                <Icon className="h-5 w-5" />
              </span>

              <div className="min-w-0 flex-1 space-y-2">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <h2 className="font-serif text-lg font-bold leading-snug text-[#575279] dark:text-[#c3c0b6]">
                      {cert.name}
                    </h2>
                    <p className="text-sm text-[#3d3929] dark:text-[#c3c0b6]">
                      {cert.issuer}
                    </p>
                  </div>

                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shrink-0 items-center gap-1 self-start text-xs underline decoration-dotted underline-offset-4 transition-colors hover:text-[#575279] dark:hover:text-[#c3c0b6]"
                    >
                      Show credential
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-neutral-600 dark:text-neutral-400">
                  {cert.issued && (
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="h-3.5 w-3.5" />
                      Issued {cert.issued}
                      {cert.expires && ` · Expires ${cert.expires}`}
                    </span>
                  )}

                  {cert.skills?.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border px-2.5 py-0.5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {cert.credentialId && (
                  <p className="break-all text-xs text-neutral-500 dark:text-neutral-400">
                    Credential ID:{" "}
                    <span className="font-mono">{cert.credentialId}</span>
                  </p>
                )}
              </div>
            </li>
          );
        })}
      </ul>

      {certifications.length > INITIAL_COUNT && (
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
          className="mt-6 inline-flex items-center gap-1 text-sm underline decoration-dotted underline-offset-4 transition-colors hover:text-[#575279] dark:hover:text-[#c3c0b6]"
        >
          {expanded ? "See less" : "See more"}
          <ChevronDown
            className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`}
          />
        </button>
      )}
    </div>
  );
};

export default Certifications;
