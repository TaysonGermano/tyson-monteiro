"use client";
import React from "react";
import { SERVICES } from "@/lib/contants";

type Status = "idle" | "submitting" | "success" | "error";

export default function WorkWithMePage() {
  const [status, setStatus] = React.useState<Status>("idle");
  const [errorMessage, setErrorMessage] = React.useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong.",
      );
    }
  }

  const inputClass =
    "mt-1 w-full rounded-md border border-black/20 dark:border-white/20 bg-transparent px-3 py-2 text-sm outline-none focus:border-black dark:focus:border-white";
  const labelClass = "block text-sm font-medium";

  if (status === "success") {
    return (
      <section className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-extrabold">Thanks — message sent!</h1>
        <p className="mt-3 max-w-md text-black/60 dark:text-white/60">
          I&apos;ve received your request and will get back to you as soon as I
          can.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-md bg-black px-5 py-2.5 text-sm text-white dark:bg-white dark:text-black"
        >
          Send another
        </button>
      </section>
    );
  }

  return (
    <section className="py-14 max-w-xl">
      <h1 className="text-3xl md:text-4xl font-extrabold">Work with me</h1>
      <p className="mt-3 text-black/60 dark:text-white/60">
        Tell me what you&apos;re building and I&apos;ll get back to you.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input id="name" name="name" required className={inputClass} />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="company" className={labelClass}>
            Company <span className="text-black/40 dark:text-white/40">(optional)</span>
          </label>
          <input id="company" name="company" className={inputClass} />
        </div>

        <div>
          <label htmlFor="service" className={labelClass}>
            Service
          </label>
          <select
            id="service"
            name="service"
            required
            defaultValue=""
            className={inputClass}
          >
            <option value="" disabled>
              Select a service…
            </option>
            {SERVICES.map((service) => (
              <option key={service.title} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="budget" className={labelClass}>
            Budget <span className="text-black/40 dark:text-white/40">(optional)</span>
          </label>
          <input id="budget" name="budget" className={inputClass} />
        </div>

        <div>
          <label htmlFor="message" className={labelClass}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className={inputClass}
          />
        </div>

        {status === "error" && (
          <p className="text-sm" role="alert">
            {errorMessage}
          </p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-md bg-black px-5 py-2.5 text-sm text-white dark:bg-white dark:text-black disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Send request"}
        </button>
      </form>
    </section>
  );
}
