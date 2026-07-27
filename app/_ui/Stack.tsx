import { STACK } from "@/lib/contants";

export default function Stack() {
  return (
    <section className="scroll-mt-24" id="stack">
      <h2 className="text-2xl font-bold">My stack</h2>
      <p className="text-sm text-black/60 dark:text-white/60 mt-2">
        The main technologies I reach for on my projects.
      </p>

      <ul className="mt-6 border-t border-black/15 dark:border-white/15">
        {STACK.map((tech) => (
          <li
            key={tech.name}
            className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 border-b border-black/15 dark:border-white/15 py-4"
          >
            <span className="font-semibold sm:w-40 shrink-0">{tech.name}</span>
            <span className="text-sm text-black/60 dark:text-white/60">
              {tech.description}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
