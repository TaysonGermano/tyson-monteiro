"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

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
          <Link href="/" className="text-sm font-bold">
            Me
          </Link>
          <Link href="/blog" className="text-sm font-bold">
            Blog
          </Link>
          <button
            className="pr-5 border-r-2 border-gray"
            onClick={toogleDarkMode}
          >
            <DarkModeToggle darkMode={darkMode} />
          </button>
          <Link
            href="/contact"
            className="px-4 py-2 bg-indigo-500 text-white text-sm shadow-md rounded-md uppercase hover:text-white"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
