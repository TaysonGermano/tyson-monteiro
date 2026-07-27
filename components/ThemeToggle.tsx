"use client";
import React from "react";
import { Monitor, Sun, Moon } from "lucide-react";
import { useTheme, type Theme } from "../app/theme/ThemeProvider";

const OPTIONS: { value: Theme; label: string; Icon: typeof Monitor }[] = [
  { value: "system", label: "System theme", Icon: Monitor },
  { value: "light", label: "Light theme", Icon: Sun },
  { value: "dark", label: "Dark theme", Icon: Moon },
];

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      role="group"
      aria-label="Theme"
      className="inline-flex items-center rounded-md border border-black dark:border-white"
    >
      {OPTIONS.map(({ value, label, Icon }) => {
        const active = theme === value;
        return (
          <button
            key={value}
            type="button"
            aria-label={label}
            aria-pressed={active}
            onClick={() => setTheme(value)}
            className={`flex h-8 w-8 items-center justify-center transition-colors first:rounded-l-md last:rounded-r-md ${
              active
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "text-black dark:text-white"
            }`}
          >
            <Icon size={16} strokeWidth={2} />
          </button>
        );
      })}
    </div>
  );
}
