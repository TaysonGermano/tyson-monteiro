import React from "react";
import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/components/ProjectCard";
import Chip from "@/components/Chip";
import { PROJECTS } from "@/lib/contants";
import { FILTERS } from "@/lib/contants";

type filter = {
  name: string;
  active: boolean;
  id: number;
};

export default function Projects() {
  const [filters, setFilter] = React.useState([...FILTERS]);
  const [selectedProjects, setSelectedProjects] = React.useState([...PROJECTS]);

  const handleFilter = (id: number) => {
    if (id === 0) {
      setFilter([...FILTERS]);
      setSelectedProjects([...PROJECTS]);
      return;
    }

    const newFilters = filters.map((filter: filter) => ({
      ...filter,
      active: id === filter.id ? true : false,
    }));

    const activeStacks = newFilters
      .filter((filter: filter) => filter.active)
      .map((filter: filter) => filter.id);

    let filteredProjects: Project[] = [];

    PROJECTS.forEach((project: Project) => {
      for (const stack of project.stack) {
        const filteredProjs = filteredProjects.find(
          (filteredProj: Project) => filteredProj.id === project.id
        );

        if (!filteredProjs && activeStacks.includes(stack.id)) {
          filteredProjects.push(project);
        }
      }
    });

    setFilter(newFilters);
    setSelectedProjects(filteredProjects);
  };

  return (
    <div className="mt-5" id="projects">
      <h2 className="text-2xl font-bold">Feature Projects</h2>
      <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 ">
        Below is a list of few projects I&apos;m involved
      </p>
      <div className="mt-4 flex flex-row flex-wrap gap-3">
        {filters.map((filter: filter) => (
          <Chip
            key={filter.id}
            onClick={() => handleFilter(filter.id)}
            {...filter}
          />
        ))}
      </div>
      <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 items-center sm:items-stretch gap-4">
        {selectedProjects.map((project: Project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}
