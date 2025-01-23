"use client";
import React from "react";
import ProjectCard from "../components/ProjectCard";
import { Project } from "../components/ProjectCard";
import Image from "next/image";
import InfoCard from "../components/InfoCard";
import Chip from "../components/Chip";
import projects from "../data/projects.json";
import stacks from "../data/stacks.json";
import Link from "next/link";
import { useSelector } from "react-redux";

type filter = {
  name: string;
  active: boolean;
  id: number;
  image: string;
};

export default function Home() {
  const [filters, setFilter] = React.useState([...stacks]);
  const [selectedProjects, setSelectedProjects] = React.useState([...projects]);
  const darkMode = useSelector(
    (state: { darkMode: boolean }) => state.darkMode
  );

  /**
   * Handles the filtering of projects based on the selected stack ID.
   * @param id - The ID of the selected stack. If id is 0, all stacks are selected.
   */
  const handleFilter = (id: number) => {
    // If all stacks are selected (id is 0), reset filters and projects
    if (id === 0) {
      setFilter([...stacks]); // Reset filters to include all stacks
      setSelectedProjects([...projects]); // Reset selected projects to include all projects
      return;
    }

    // Create new filters array with updated active status based on the selected stack ID
    const newFilters = filters.map((filter: filter) => ({
      ...filter,
      active: id === filter.id ? true : false,
    }));

    // Extract IDs of active stacks from the new filters
    const activeStacks = newFilters
      .filter((filter: filter) => filter.active)
      .map((filter: filter) => filter.id);

    // Initialize an array to store filtered projects
    let filteredProjects: Project[] = [];

    // Iterate through each project
    projects.forEach((project: Project) => {
      for (const stack of project.stack) {
        // Check if the project is not already in the filteredProjects array
        const filteredProjs = filteredProjects.find(
          (filteredProj: Project) => filteredProj.id === project.id
        );

        // Add the project to filteredProjects if its stack is active
        if (!filteredProjs && activeStacks.includes(stack.id)) {
          filteredProjects.push(project);
        }
      }
    });

    // Update state with new filters and selected projects
    setFilter(newFilters); // Update filters
    setSelectedProjects(filteredProjects); // Update selected projects
  };

  return (
    <div className="pt-5">
      <div className="flex flex-col-reverse sm:flex-row py-7 sm:justify-between items-center">
        <div className="hero-content sm:w-[600px] text-center sm:text-left">
          <p className="mt-6 text-sm text-slate-500 dark:text-slate-400 mb-2">
            Tyson Monteiro - Full Stack JavaScript Developer
          </p>
          <h1 className="text-[1.75rem] font-extrabold  text-slate-900 dark:text-white md:text-4xl">
            Hey there! I&apos;m Tyson Monteiro, a Full Stack JavaScript
            developer with a laser focus on React.js and its vibrant ecosystem.
          </h1>
          <Link
            href="/Tyson_Monteiro_CV.pdf"
            download="Tyson_Monteiro_CV.pdf"
            target="_blank"
            className="sm:hidden inline-block mt-3 px-4 py-2 bg-indigo-500 select-none text-white text-sm shadow-md rounded-md uppercase hover:text-white"
          >
            Download CV
          </Link>
        </div>
        <div className="profile">
          <div className="avatar w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded-full bg-gray-100 relative">
            <Image
              src="/tysonmonteiro.jpg"
              alt="profile"
              className="rounded-full object-contain"
              fill
            />
          </div>
        </div>
      </div>
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
      <div className="mt-5 pt-[80px]" id="stack">
        <h2 className="text-2xl font-bold">My Stack</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 ">
          I specialize in building web applications using a robust stack of
          technologies:
        </p>
        <div className="mt-4 flex flex-row flex-wrap gap-4">
          {stacks.map(
            (stack) =>
              stack.image && (
                <Image
                  key={stack.id}
                  src={
                    darkMode && (stack.id === 3 || stack.id === 17)
                      ? `/icons/${stack.name.toLowerCase()}${
                          darkMode ? "_white" : ""
                        }.svg`
                      : stack.image
                  }
                  alt={stack.name}
                  width={90}
                  height={90}
                />
              )
          )}
        </div>
      </div>
      <div className="mt-5 py-[80px]" id="skills">
        <h2 className="text-2xl font-bold">More About Me</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 ">
          I&apos;m a highly skilled and results-driven Full-Stack Developer with
          a passion for crafting innovative solutions that enhance the daily
          lives of individuals
        </p>
        <div className="mt-4 flex flex-col items-center sm:items-stretch sm:flex-row gap-4">
          <InfoCard
            title="Skills"
            htlm
            className="shadow-md dark:shadow-indigo-700"
            description="My tech toolkit includes strong proficiency in <strong>JavaScript</strong>, <strong>React</strong>, <strong>React Native</strong>, <strong>Expo Go</strong>, <strong>Node.js</strong>, <strong>MongoDB</strong>, <strong>Nextjs</strong>, <strong>Tailwind</strong>, <strong>TypeScript</strong>, <strong>Express</strong>, <strong>Lit Web Components</strong>, <strong>Storybook</strong>, <strong>Docker</strong> and more. I thrive in a variety of development environments, whether it's building the frontend magic with <strong>React</strong>, diving into backend intricacies with <strong>Node.js</strong> and <strong>MongoDB</strong> or building a fullstack application with <strong>Nextjs</strong>."
          />
          <InfoCard
            title="Why I code"
            description="My driving force is a desire to create projects that have a meaningful impact on people's day-to-day activities. I firmly believe that technology should simplify and improve our lives. That's why I'm passionate about leveraging my expertise to develop solutions that make a real difference."
          />
        </div>
      </div>
    </div>
  );
}
