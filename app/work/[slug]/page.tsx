import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { PROJECTS } from "@/lib/contants";
import type { Project } from "@/lib/types";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.name,
    description: `${project.blurb}. ${project.role} on a project by Tyson Monteiro, fullstack developer in Cape Town.`,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.name} | Tyson Monteiro`,
      description: project.blurb,
      images: [{ url: project.image, alt: project.name }],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug) as Project | undefined;

  if (!project) notFound();

  return (
    <article className="py-10 max-w-3xl">
      <Link
        href="/#work"
        className="no-underline inline-flex items-center gap-1 text-sm text-black/60 dark:text-white/60 hover:underline"
      >
        <ArrowLeft size={16} /> Back to work
      </Link>

      <h1 className="mt-6 text-3xl md:text-4xl font-extrabold">
        {project.name}
      </h1>
      <p className="mt-2 text-black/60 dark:text-white/60">{project.blurb}</p>

      <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-xl border border-black/15 dark:border-white/15">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </div>

      <dl className="mt-8 grid gap-6 sm:grid-cols-2">
        <div>
          <dt className="text-sm font-semibold">My role</dt>
          <dd className="mt-1 text-black/70 dark:text-white/70">
            {project.role}
          </dd>
        </div>
        <div>
          <dt className="text-sm font-semibold">Access</dt>
          <dd className="mt-1 text-black/70 dark:text-white/70">
            {project.access}
          </dd>
        </div>
      </dl>

      <div className="mt-8">
        <h2 className="text-sm font-semibold">About the project</h2>
        <p className="mt-2 leading-relaxed text-black/80 dark:text-white/80">
          {project.description}
        </p>
      </div>

      {project.stack.length > 0 && (
        <div className="mt-8">
          <h2 className="text-sm font-semibold">Built with</h2>
          <ul className="mt-2 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li
                key={tech.id}
                className="rounded-full border border-black/20 dark:border-white/20 px-3 py-1 text-sm"
              >
                {tech.name}
              </li>
            ))}
          </ul>
        </div>
      )}

      {project.link && (
        <Link
          href={project.link}
          target="_blank"
          className="mt-8 inline-block"
        >
          View live project
        </Link>
      )}
    </article>
  );
}
