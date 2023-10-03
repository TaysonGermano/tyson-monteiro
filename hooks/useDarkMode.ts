"use client";
import React from "react";

export default function useDarkMode() {
  const [darkMode, setDarkMode] = React.useState(localStorage.theme === "dark");

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

  return { darkMode, setDarkMode };
}
