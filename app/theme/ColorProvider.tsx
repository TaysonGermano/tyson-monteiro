"use client";
import React from "react";

export type ColorMode = "mono" | "color";

type ColorContextValue = {
  colorMode: ColorMode;
  setColorMode: (mode: ColorMode) => void;
};

const ColorContext = React.createContext<ColorContextValue | null>(null);

const STORAGE_KEY = "color";

function getStoredColorMode(): ColorMode {
  if (typeof window === "undefined") return "mono";
  return window.localStorage.getItem(STORAGE_KEY) === "color"
    ? "color"
    : "mono";
}

function applyColorMode(mode: ColorMode) {
  document.documentElement.classList.toggle("color", mode === "color");
}

export default function ColorProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [colorMode, setColorModeState] = React.useState<ColorMode>("mono");

  // Initialise from storage on mount. The anti-FOUC script in the layout has
  // already applied the correct class, so this only syncs React state.
  React.useEffect(() => {
    setColorModeState(getStoredColorMode());
  }, []);

  const setColorMode = React.useCallback((next: ColorMode) => {
    if (next === "color") {
      window.localStorage.setItem(STORAGE_KEY, "color");
    } else {
      window.localStorage.removeItem(STORAGE_KEY);
    }
    setColorModeState(next);
    applyColorMode(next);
  }, []);

  const value = React.useMemo(
    () => ({ colorMode, setColorMode }),
    [colorMode, setColorMode],
  );

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
}

export function useColorMode(): ColorContextValue {
  const ctx = React.useContext(ColorContext);
  if (!ctx) throw new Error("useColorMode must be used within a ColorProvider");
  return ctx;
}
