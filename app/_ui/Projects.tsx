"use client";
import React from "react";
import ProjectRow from "@/components/ProjectRow";
import Chip from "@/components/Chip";
import { PROJECTS, FILTERS } from "@/lib/contants";
import type { Project } from "@/lib/types";

type Filter = {
  name: string;
  active: boolean;
  id: number;
};

export default function Projects() {
  const [filters, setFilter] = React.useState<Filter[]>([...FILTERS]);
  const [selectedProjects, setSelectedProjects] = React.useState<Project[]>([
    ...PROJECTS,
  ]);

  const handleFilter = (id: number) => {
    if (id === 0) {
      setFilter([...FILTERS]);
      setSelectedProjects([...PROJECTS]);
      return;
    }

    const newFilters = filters.map((filter) => ({
      ...filter,
      active: id === filter.id,
    }));

    const activeStacks = newFilters
      .filter((filter) => filter.active)
      .map((filter) => filter.id);

    const filteredProjects: Project[] = [];

    PROJECTS.forEach((project) => {
      for (const stack of project.stack) {
        const already = filteredProjects.find((p) => p.id === project.id);
        if (!already && activeStacks.includes(stack.id)) {
          filteredProjects.push(project);
        }
      }
    });

    setFilter(newFilters);
    setSelectedProjects(filteredProjects);
  };

  return (
    <section className="scroll-mt-24" id="work">
      <h2 className="text-2xl font-bold">Some of my work</h2>
      <p className="text-sm text-black/60 dark:text-white/60 mt-2">
        Filter by a technology, then click a project to see the details.
      </p>

      <div className="mt-5 flex flex-row flex-wrap gap-2">
        {filters.map((filter) => (
          <Chip key={filter.id} onClick={() => handleFilter(filter.id)} {...filter} />
        ))}
      </div>

      <div className="mt-6 border-t border-black/15 dark:border-white/15">
        {selectedProjects.length === 0 ? (
          <p className="py-6 text-sm text-black/60 dark:text-white/60">
            No projects match that filter.
          </p>
        ) : (
          selectedProjects.map((project) => (
            <ProjectRow key={project.id} {...project} />
          ))
        )}
      </div>
    </section>
  );
}
