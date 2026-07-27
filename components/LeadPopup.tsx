"use client";
import React from "react";
import Image from "next/image";
import { X, ArrowRight, Sparkles } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

const STORAGE_KEY = "lead-popup-dismissed";
const SHOW_DELAY_MS = 6000;

export default function LeadPopup() {
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = React.useState<Status>("idle");
  const [errorMessage, setErrorMessage] = React.useState("");

  // Show once, after a short delay, unless already dismissed/submitted.
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.localStorage.getItem(STORAGE_KEY)) return;

    const timer = window.setTimeout(() => setOpen(true), SHOW_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  // Lock body scroll while the popup is open.
  React.useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const dismiss = React.useCallback(() => {
    setOpen(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {}
  }, []);

  // Close on Escape.
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, dismiss]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const responseBody = await res.json().catch(() => ({}));
        throw new Error(
          responseBody.error || "Something went wrong. Please try again.",
        );
      }

      setStatus("success");
      try {
        window.localStorage.setItem(STORAGE_KEY, "1");
      } catch {}
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong.",
      );
    }
  }

  if (!open) return null;

  const inputClass =
    "w-full rounded-lg border border-black/15 bg-black/[0.03] px-4 py-3 text-sm outline-none transition-colors placeholder:text-black/40 focus:border-black focus:bg-transparent dark:border-white/15 dark:bg-white/[0.04] dark:placeholder:text-white/40 dark:focus:border-white";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-popup-title"
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close"
        onClick={dismiss}
        className="lead-backdrop absolute inset-0 h-full w-full cursor-default bg-black/70 backdrop-blur-sm"
      />

      {/* Card */}
      <div className="lead-card relative z-10 w-full max-w-[860px] overflow-hidden rounded-3xl bg-white text-black shadow-2xl ring-1 ring-black/10 dark:bg-black dark:text-white dark:ring-white/15">
        <button
          type="button"
          aria-label="Close"
          onClick={dismiss}
          className="absolute right-4 top-4 z-20 rounded-full bg-black/5 p-2 text-black/60 backdrop-blur transition-colors hover:bg-black/10 hover:text-black dark:bg-white/10 dark:text-white/70 dark:hover:bg-white/20 dark:hover:text-white"
        >
          <X size={18} />
        </button>

        <div className="grid md:grid-cols-2">
          {/* Left: full-bleed photo panel */}
          <div className="relative hidden min-h-[460px] md:block">
            <Image
              src="/tysonmonteiro.jpg"
              alt="Tyson Monteiro"
              fill
              className="object-cover object-top grayscale"
              sizes="430px"
            />
            {/* Gradient so the overlaid text stays legible */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-white">
              <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                Tyson Monteiro
              </p>
              <p className="mt-1 text-lg font-bold">Fullstack Developer</p>
              <p className="mt-0.5 text-sm text-white/60">
                Cape Town · South Africa
              </p>
            </div>
          </div>

          {/* Right: content panel */}
          <div className="relative flex flex-col justify-center p-7 sm:p-9">
            {/* Compact avatar, mobile only (desktop has the full photo panel) */}
            {status !== "success" && (
              <div className="lead-stagger mb-5 flex items-center gap-3 md:hidden">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-1 ring-black/10 dark:ring-white/15">
                  <Image
                    src="/tysonmonteiro.jpg"
                    alt="Tyson Monteiro"
                    fill
                    className="object-cover object-top grayscale"
                    sizes="48px"
                  />
                </div>
                <div className="text-sm leading-tight">
                  <p className="font-bold">Tyson Monteiro</p>
                  <p className="text-black/50 dark:text-white/50">
                    Fullstack Developer
                  </p>
                </div>
              </div>
            )}

            {status === "success" ? (
              <div className="lead-stagger text-center md:text-left">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white md:mx-0 dark:bg-white dark:text-black">
                  <Sparkles size={22} />
                </div>
                <h2 id="lead-popup-title" className="text-2xl font-extrabold">
                  You&apos;re on my radar.
                </h2>
                <p className="mt-2 text-black/60 dark:text-white/60">
                  Thanks! I&apos;ve got your details and I&apos;ll be in touch
                  shortly to talk about your project.
                </p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.02] dark:bg-white dark:text-black"
                >
                  Back to the site
                </button>
              </div>
            ) : (
              <>
                {/* Availability badge */}
                <div
                  className="lead-stagger inline-flex w-fit items-center gap-2 rounded-full border border-black/15 px-3 py-1 text-xs font-medium dark:border-white/20"
                  style={{ animationDelay: "0.05s" }}
                >
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black/60 dark:bg-white/60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-black dark:bg-white" />
                  </span>
                  Available for new projects
                </div>

                <h2
                  id="lead-popup-title"
                  className="lead-stagger mt-4 text-3xl font-extrabold leading-[1.1] sm:text-[2.1rem]"
                  style={{ animationDelay: "0.1s" }}
                >
                  Let&apos;s build something people
                  <span className="relative whitespace-nowrap">
                    {" "}
                    remember.
                  </span>
                </h2>

                <p
                  className="lead-stagger mt-3 text-black/60 dark:text-white/60"
                  style={{ animationDelay: "0.15s" }}
                >
                  Web apps, mobile apps, APIs and websites, built fast and built
                  right. Drop your details and I&apos;ll personally reach out.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="mt-6 flex flex-col gap-3"
                >
                  <div
                    className="lead-stagger"
                    style={{ animationDelay: "0.2s" }}
                  >
                    <input
                      id="lead-name"
                      name="name"
                      required
                      placeholder="Your name"
                      aria-label="Your name"
                      className={inputClass}
                    />
                  </div>
                  <div
                    className="lead-stagger"
                    style={{ animationDelay: "0.25s" }}
                  >
                    <input
                      id="lead-email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      aria-label="Your email"
                      className={inputClass}
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-red-600 dark:text-red-400" role="alert">
                      {errorMessage}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    style={{ animationDelay: "0.3s" }}
                    className="lead-stagger group mt-1 inline-flex items-center justify-center gap-2 rounded-lg bg-black px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.01] disabled:opacity-60 dark:bg-white dark:text-black"
                  >
                    {status === "submitting" ? (
                      "Sending…"
                    ) : (
                      <>
                        Let&apos;s talk
                        <ArrowRight
                          size={16}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </>
                    )}
                  </button>
                </form>

                <div
                  className="lead-stagger mt-4 flex items-center justify-between text-xs text-black/45 dark:text-white/45"
                  style={{ animationDelay: "0.35s" }}
                >
                  <span>No spam. Just a real reply.</span>
                  <button
                    type="button"
                    onClick={dismiss}
                    className="underline underline-offset-2 hover:text-black dark:hover:text-white"
                  >
                    Maybe later
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
