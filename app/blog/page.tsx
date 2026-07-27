import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Tyson Monteiro",
  description: "Coming soon.",
};

export default function BlogPage() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <h1 className="text-3xl md:text-4xl font-extrabold">Blog</h1>
      <p className="mt-3 text-black/60 dark:text-white/60">Coming soon.</p>
    </section>
  );
}
