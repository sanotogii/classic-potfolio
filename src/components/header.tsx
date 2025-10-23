"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { ModeToggle } from "./theme-toggle";

export default function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const scrollToContact = () => {
    setOpen(false);

    if (pathname !== "/") {
      router.push("/#contact");
      setTimeout(() => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/75 py-4 backdrop-blur-sm">
      <nav className="flex max-w-[792px] mx-auto items-center justify-between px-2">
        <div>
          <Link href="/" className="font-serif text-2xl font-bold">
            Khalid Lazrag
          </Link>
        </div>

        {/* desktop menu */}
        <ul className="hidden sm:flex items-center gap-6 text-sm font-light text-muted-foreground sm:gap-10">
          <li className="transition-colors hover:text-foreground">
            <Link href="/posts">Posts</Link>
          </li>
          <li className="transition-colors hover:text-foreground">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="transition-colors hover:text-foreground">
            <button onClick={scrollToContact}>Contact</button>
          </li>
        </ul>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <ModeToggle />
          </div>

          {/* mobile hamburger */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="sm:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-neutral-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <path d="M3 12h18" />
                  <path d="M3 6h18" />
                  <path d="M3 18h18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* mobile menu panel */}
      {open && (
        <div className="sm:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <div className="max-w-[792px] mx-auto px-4 py-4">
            <ul className="flex flex-col gap-3 text-base font-light text-muted-foreground">
              <li className="transition-colors hover:text-foreground">
                <Link href="/posts" onClick={() => setOpen(false)}>
                  Posts
                </Link>
              </li>
              <li className="transition-colors hover:text-foreground">
                <Link href="/projects" onClick={() => setOpen(false)}>
                  Projects
                </Link>
              </li>
              <li className="transition-colors hover:text-foreground">
                <button onClick={scrollToContact}>Contact</button>
              </li>
              <li>
                <div className="pt-2">
                  <ModeToggle />
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
