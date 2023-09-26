"use client";
import React from "react";
import ProjectCard from "./components/ProjectCard";
import Image from "next/image";
import Javascript from "./components/icons/Javascript";
import Reactjs from "./components/icons/Reactjs";
import Nodejs from "./components/icons/Nodejs";
import Expressjs from "./components/icons/Expressjs";
import Nextjs from "./components/icons/Nextjs";
import Mongodb from "./components/icons/Mongodb";
import Typescript from "./components/icons/Typescript";
import Tailwind from "./components/icons/Tailwind";
import InfoCard from "./components/InfoCard";
import Chip from "./components/Chip";

type filter = {
  name: string;
  active: boolean;
  id: number;
};

const initialFilterData = [
  {
    name: "Reactjs",
    active: true,
    id: 1,
  },
  {
    name: "Typescript",
    active: true,
    id: 2,
  },
  {
    name: "Nextjs",
    active: true,
    id: 3,
  },
  {
    name: "React native",
    active: true,
    id: 4,
  },
  {
    name: "Nodejs",
    active: true,
    id: 5,
  },
  {
    name: "Mongodb",
    active: true,
    id: 6,
  },
];

export default function Home() {
  const [filters, setFilter] = React.useState([...initialFilterData]);

  const handleFilter = (id: number) => {
    setFilter((prev: filter[]) =>
      prev.map((filter: filter) => ({
        ...filter,
        active: id === filter.id ? !filter.active : filter.active,
      }))
    );
  };

  return (
    <div className="pt-5">
      <div className="flex flex-row py-7 justify-between items-center">
        <div className="hero-content w-[600px]">
          <p className="mt-6 text-sm text-slate-500 dark:text-slate-400 mb-2">
            Tyson Monteiro - Full Stack JavaScript Developer
          </p>
          <h1 className="text-[1.75rem] font-extrabold  text-slate-900 dark:text-white md:text-4xl">
            Hey there! I&apos;m Tyson Monteiro, a Full Stack JavaScript
            developer with a laser focus on React.js and its vibrant ecosystem.
          </h1>
        </div>
        <div className="profile">
          <div className="avatar w-[300px] h-[300px] rounded-full bg-gray-100 relative">
            <Image
              src="/tysonmonteiro.jpg"
              alt="profile"
              className="rounded-full object-contain"
              fill
            />
          </div>
        </div>
      </div>
      <div className="mt-5 ">
        <h2 className="text-2xl font-bold">Feature Projects</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 ">
          Below is a list of few projects I was involved
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
        <div className="mt-4 flex flex-row flex-wrap gap-5">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
      <div className="mt-5 pt-[80px] ">
        <h2 className="text-2xl font-bold">My Stack</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 ">
          I specialize in building web applications using a robust stack of
          technologies:
        </p>
        <div className="mt-4 flex flex-row gap-4">
          <Javascript />
          <Reactjs />
          <Typescript />
          <Nodejs />
          <Expressjs />
          <Nextjs />
          <Mongodb />
          <Tailwind />
        </div>
      </div>
      <div className="mt-5 py-[80px] ">
        <h2 className="text-2xl font-bold">More About Me</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 ">
          I&apos;m a highly skilled and results-driven Full-Stack Developer with
          a passion for crafting innovative solutions that enhance the daily
          lives of individuals
        </p>
        <div className="mt-4 flex flex-row flex-wrap gap-4">
          <InfoCard
            title="Skills"
            htlm
            className="shadow-md dark:shadow-indigo-700"
            description="My tech toolkit includes strong proficiency in <strong>JavaScript</strong>, <strong>React</strong>, <strong>React Native</strong>, <strong>Expo Go</strong>, <strong>Node.js</strong>, <strong>MongoDB</strong>, <strong>Nextjs</strong>, <strong>Tailwind</strong>, <strong>TypeScript</strong>, <strong>Express</strong>, and more. I thrive in a variety of development environments, whether it's building the frontend magic with <strong>React</strong>, diving into backend intricacies with <strong>Node.js</strong> and <strong>MongoDB</strong> or building a fullstack application with <strong>Nextjs</strong>."
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
