"use client";
import React from "react";
import { ArrowUp } from "lucide-react";

export default function ScroolToTop() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black"
    >
      <ArrowUp size={18} />
    </button>
  );
}
