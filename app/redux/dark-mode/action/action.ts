import { DarkMode } from "./type";

export function setDarkMode() {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  } else {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  }

  return {
    type: DarkMode.IS_DARK_MODE,
    description: "Sets dark mode",
  };
}
