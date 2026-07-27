const STEPS = [
  {
    title: "Plan before I build",
    description:
      "I use AI to pressure test the approach up front. Requirements, edge cases and architecture all get mapped into a clear spec before a single line of code is written.",
  },
  {
    title: "Accelerate the build",
    description:
      "AI handles the repetitive scaffolding and boilerplate so I can spend my time on the hard problems, product decisions and the details that actually matter to you.",
  },
  {
    title: "Review everything, twice",
    description:
      "Every change goes through AI assisted code review alongside my own. Bugs, security issues and rough edges get caught long before they reach production.",
  },
  {
    title: "Verify against the real thing",
    description:
      "Nothing ships on assumption. I test and verify each feature running in the real app, so what you get is something that genuinely works.",
  },
];

export default function AiWorkflow() {
  return (
    <section className="scroll-mt-24" id="ai">
      <h2 className="text-2xl font-bold">
        How I use AI to deliver the highest quality software
      </h2>
      <p className="text-sm text-black/60 dark:text-white/60 mt-2 max-w-2xl">
        AI is a force multiplier in my workflow, not a shortcut that cuts
        corners. It lets me move faster while raising the bar on quality. Here is
        how it fits into every project.
      </p>

      <ol className="mt-6 grid gap-4 sm:grid-cols-2">
        {STEPS.map((step, i) => (
          <li
            key={step.title}
            className="rounded-lg border border-black/15 dark:border-white/15 p-5"
          >
            <span className="text-sm font-mono text-black/50 dark:text-white/50">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-2 font-semibold">{step.title}</h3>
            <p className="mt-1 text-sm text-black/60 dark:text-white/60">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
