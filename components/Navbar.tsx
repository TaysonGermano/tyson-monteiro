"use client";
import React from "react";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";
import { DiGithubBadge } from "react-icons/di";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode } from "../app/redux/dark-mode/action/action";

export default function Navbar() {
  const dispatch = useDispatch();
  const darkMode = useSelector(
    (state: { darkMode: boolean }) => state.darkMode
  );

  /**
   * Toggles the dark mode by dispatching the setDarkMode action.
   */
  function toggleDarkMode() {
    dispatch(setDarkMode()); // Dispatch the action to toggle dark mode
  }

  /**
   * React Hook to set dark mode based on the value stored in localStorage.
   * It runs immediately after all DOM mutations. It checks if the theme in localStorage is "dark"
   * and dispatches the setDarkMode action accordingly.
   */
  React.useLayoutEffect(() => {
    // Check if the theme in localStorage is "dark" and dispatch setDarkMode action
    localStorage.theme === "dark" && dispatch(setDarkMode());
  }, [dispatch]);

  return (
    <nav className="mx-auto max-w-7xl px-4">
      <div className="flex flex-col sm:flex-row justify-between items-center py-4">
        <Image src={"/react.png"} alt="logo" width={50} height={50} />
        <div className="flex flex-row flex-wrap justify-center mt-2 sm:mt-0 sm:justify-start items-center gap-4 sm:gap-6">
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
            className="sm:pr-5 sm:border-r-2 sm:border-gray"
            onClick={toggleDarkMode}
          >
            <DarkModeToggle darkMode={darkMode} />
          </button>
          <Link
            href="https://github.com/TaysonGermano/tyson-monteiro"
            target="_blank"
            className="text-[#a2a8b3] hover:text-[#64748B]"
          >
            <DiGithubBadge size={30} />
          </Link>
          <Link
            href="https://docs.google.com/document/d/1sNdd2IUSSFdoSkFhVeyAFFE_Wtazhtz5C_F88zNRGbU/edit?usp=sharing"
            target="_blank"
            className="hidden px-4 py-2 bg-indigo-500 select-none text-white text-sm shadow-md rounded-md uppercase sm:inline hover:text-white"
          >
            Download CV
          </Link>
        </div>
      </div>
    </nav>
  );
}
