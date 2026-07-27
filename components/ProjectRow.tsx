import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/types";

export default function ProjectRow(props: Project) {
  return (
    <Link
      href={`/work/${props.slug}`}
      className="no-underline group flex items-center justify-between gap-4 border-b border-black/15 dark:border-white/15 py-5 text-black dark:text-white"
    >
      <span className="flex items-center gap-2 font-semibold shrink-0">
        {props.name}
        <ArrowUpRight
          size={16}
          className="opacity-0 -translate-x-1 transition group-hover:opacity-100 group-hover:translate-x-0"
        />
      </span>
      <span className="text-sm text-right text-black/60 dark:text-white/60">
        {props.blurb}
      </span>
    </Link>
  );
}
