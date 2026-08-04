import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { PROJECTS } from "@/lib/contants";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products I built",
  description: `Products ${SITE.name} designed, built and runs independently, including BClear, Tyson CV Builder and PlaylistGenius. Real, live tools you can use today.`,
  alternates: { canonical: "/products" },
};

const OWN_PRODUCTS = PROJECTS.filter((project) => project.owner === "self");

export default function ProductsPage() {
  return (
    <section className="py-14">
      <h1 className="text-3xl md:text-4xl font-extrabold">Products I built</h1>
      <p className="mt-4 max-w-2xl text-black/70 dark:text-white/70 leading-relaxed">
        I don&apos;t just build software for clients. I design, build and run my
        own products end to end, from the first idea to a live tool people use
        every day. Below are a few I&apos;ve shipped and still maintain.
      </p>
      <p className="mt-3 max-w-2xl text-black/60 dark:text-white/60 leading-relaxed">
        Building for myself means I feel every decision the way a founder does:
        the speed, the cost, the bugs, the way real users actually behave. That
        is the same care I bring to your project. Go ahead and try any of these
        yourself.
      </p>

      <div className="mt-10 flex flex-col gap-6">
        {OWN_PRODUCTS.map((product) => (
          <article
            key={product.id}
            className="group grid gap-6 rounded-2xl border border-black/15 dark:border-white/15 p-5 sm:grid-cols-[220px_1fr] sm:p-6"
          >
            <Link
              href={`/work/${product.slug}`}
              aria-label={`${product.name} details`}
              className="no-underline relative block aspect-video overflow-hidden rounded-xl border border-black/10 dark:border-white/10 sm:aspect-[4/3]"
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 220px"
              />
            </Link>

            <div className="flex flex-col">
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-xl font-bold">{product.name}</h2>
                <span className="shrink-0 rounded-full border border-black/15 dark:border-white/15 px-2.5 py-0.5 text-xs text-black/60 dark:text-white/60">
                  Built &amp; run by me
                </span>
              </div>

              <p className="mt-2 text-sm text-black/70 dark:text-white/70 leading-relaxed">
                {product.description}
              </p>

              <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-4">
                {product.link && (
                  <Link
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold"
                  >
                    Try it live
                    <ExternalLink size={15} />
                  </Link>
                )}
                <Link
                  href={`/work/${product.slug}`}
                  className="inline-flex items-center gap-1 text-sm text-black/60 dark:text-white/60"
                >
                  How I built it
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Closing trust + CTA */}
      <div className="mt-12 rounded-2xl bg-black px-6 py-8 text-white dark:bg-white dark:text-black">
        <h2 className="text-xl font-bold">
          Want something like this built for you?
        </h2>
        <p className="mt-2 max-w-xl text-sm text-white/70 dark:text-black/70">
          If I can build and ship products like these on my own, imagine what I
          can do focused on yours. Tell me what you have in mind.
        </p>
        <Link
          href="/work-with-me"
          className="no-underline mt-5 inline-block rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-black dark:bg-black dark:text-white"
        >
          Work with me
        </Link>
      </div>
    </section>
  );
}
