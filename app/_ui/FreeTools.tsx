import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

/**
 * Benefit-led promo strip for the three products I own and run.
 *
 * The headline above each card is the outcome for the visitor ("Build your CV
 * for free"), not the product name — people click what a tool does for them.
 * The product name lives inside the card so it still builds recognition.
 * Cards link straight to the live tool rather than the case study: the goal
 * here is usage, and "how I built it" is one click further down the page.
 */
const TOOLS = [
  {
    headline: "Build your CV for free",
    name: "Tyson CV Builder",
    pitch:
      "13 templates, 9 of them ATS-safe, and a live preview that renders the real PDF you'll download.",
    href: "https://cvbuilder.tysonmonteiro.dev/",
    image: "/cvbuilder.png",
    slug: "tyson-cv-builder",
  },
  {
    headline: "Score your website in 30 seconds",
    name: "BClear",
    pitch:
      "Grades any site out of 100 on speed, SEO and conversion readiness, then tells you what to fix in plain English.",
    href: "https://bclear.tysonmonteiro.dev/",
    image: "/bclear.png",
    slug: "bclear",
  },
  {
    headline: "Generate the perfect playlist",
    name: "PlaylistGenius",
    pitch:
      "AI playlists built around mood, BPM or genre, exportable straight to Spotify and YouTube.",
    href: "https://www.playlistgenius.app/",
    image: "/screenshot-playlistgenius-v2.png",
    slug: "playlistgenius",
  },
];

export default function FreeTools() {
  return (
    <section className="scroll-mt-24" id="tools">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold">Free tools I built</h2>
          <p className="mt-2 text-sm text-black/60 dark:text-white/60">
            Real products I designed, shipped and still run. Try any of them,
            no strings attached.
          </p>
        </div>
        <Link
          href="/products"
          className="accent-text inline-flex items-center gap-1 text-sm whitespace-nowrap"
        >
          All products
          <ArrowUpRight size={15} />
        </Link>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TOOLS.map((tool) => (
          <div key={tool.slug} className="flex flex-col">
            {/* Headline sits above the card, as its label. */}
            <h3 className="text-base font-bold leading-snug">
              {tool.headline}
            </h3>

            <Link
              href={tool.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${tool.headline} — open ${tool.name}`}
              className="group accent-border no-underline mt-3 flex flex-1 flex-col overflow-hidden rounded-2xl border border-black/15 dark:border-white/15 transition-colors hover:border-black dark:hover:border-white"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-black/10 dark:border-white/10">
                <Image
                  src={tool.image}
                  alt={`${tool.name} screenshot`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex flex-1 flex-col p-4">
                <div className="flex items-center gap-2">
                  <span className="accent-soft-bg accent-text rounded-full px-2.5 py-0.5 text-xs font-semibold">
                    {tool.name}
                  </span>
                </div>

                <p className="mt-2.5 text-sm leading-relaxed text-black/70 dark:text-white/70">
                  {tool.pitch}
                </p>

                <span className="accent-text mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold">
                  Try it free
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
