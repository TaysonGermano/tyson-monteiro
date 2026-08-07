"use client";
import React from "react";
import { Circle, Palette } from "lucide-react";
import { useColorMode, type ColorMode } from "../app/theme/ColorProvider";

const OPTIONS: { value: ColorMode; label: string; Icon: typeof Circle }[] = [
  { value: "mono", label: "Black and white", Icon: Circle },
  { value: "color", label: "Colour", Icon: Palette },
];

export default function ColorToggle() {
  const { colorMode, setColorMode } = useColorMode();

  return (
    <div
      role="group"
      aria-label="Colour"
      className="inline-flex items-center rounded-md border border-black dark:border-white"
    >
      {OPTIONS.map(({ value, label, Icon }) => {
        const active = colorMode === value;
        return (
          <button
            key={value}
            type="button"
            aria-label={label}
            aria-pressed={active}
            onClick={() => setColorMode(value)}
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
