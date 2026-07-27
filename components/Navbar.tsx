"use client";
import React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Reactjs from "./logos/Reactjs";
import ThemeToggle from "./ThemeToggle";

const MENU = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Stack", href: "/#stack" },
  { label: "AI", href: "/#ai" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="mx-auto max-w-5xl px-4">
      <div className="flex items-center justify-between py-5">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Home"
          className="no-underline text-black dark:text-white"
        >
          <Reactjs className="h-8 w-8" />
        </Link>

        {/* Center menu (desktop) */}
        <ul className="hidden md:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
          {MENU.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="no-underline text-sm text-black dark:text-white hover:underline"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right controls (desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="/work-with-me"
            className="no-underline rounded-md bg-black px-4 py-2 text-sm text-white dark:bg-white dark:text-black"
          >
            Work with me
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="text-black dark:text-white"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden pb-5">
          <ul className="flex flex-col gap-4">
            {MENU.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="no-underline text-black dark:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/work-with-me"
                onClick={() => setOpen(false)}
                className="no-underline inline-block rounded-md bg-black px-4 py-2 text-sm text-white dark:bg-white dark:text-black"
              >
                Work with me
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
