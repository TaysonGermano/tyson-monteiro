"use client";
import React from "react";
import { FaAngleUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

export default function ScroolToTop() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <button
      onClick={scrollToTop}
      className="text-white bg-black dark:bg-indigo-500 flex flex-row justify-center items-center h-[40px] w-[40px] shadow-md rounded-full fixed bottom-5 right-10"
    >
      <FaAngleUp size={20} />
    </button>
  );
}
