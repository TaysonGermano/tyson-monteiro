"use client";
import React from "react";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";
import { DiGithubBadge } from "react-icons/di";

export default function Navbar() {
  const [darkMode, setDarkMode] = React.useState(localStorage.theme === "dark");

  function toogleDarkMode() {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }

    setDarkMode(!darkMode);
  }

  React.useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <nav className="mx-auto max-w-7xl px-4">
      <div className="flex flex-row justify-between items-center py-4">
        <Image src={"/react.png"} alt="logo" width={50} height={50} />
        <div className="flex flex-row items-center gap-6">
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            className="text-sm font-bold hover:cursor-pointer"
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="stack"
            smooth={true}
            duration={500}
            className="text-sm font-bold hover:cursor-pointer"
          >
            Stack
          </ScrollLink>
          <ScrollLink
            to="skills"
            smooth={true}
            duration={500}
            className="text-sm font-bold hover:cursor-pointer"
          >
            Skills
          </ScrollLink>
          <Link
            href="mailto:taysongermano@gmail.com"
            className="text-sm font-bold"
          >
            Contact
          </Link>
          <button
            className="pr-5 border-r-2 border-gray"
            onClick={toogleDarkMode}
          >
            <DarkModeToggle darkMode={darkMode} />
          </button>
          <Link
            href="/Tyson_Monteiro_CV.pdf"
            className="text-[#a2a8b3] hover:text-[#64748B]"
          >
            <DiGithubBadge size={30} />
          </Link>
          <Link
            href="/Tyson_Monteiro_CV.pdf"
            download="Tyson_Monteiro_CV.pdf"
            target="_blank"
            className="px-4 py-2 bg-indigo-500 select-none text-white text-sm shadow-md rounded-md uppercase hover:text-white"
          >
            Download CV
          </Link>
        </div>
      </div>
    </nav>
  );
}
