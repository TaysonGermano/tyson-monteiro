import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="pt-5">
      <div className="flex flex-row py-7 justify-between items-center">
        <div className="hero-content">
          <p className="mt-6 text-sm text-slate-500 dark:text-slate-400 mb-2">
            Welcome to my space
          </p>
          <h1 className="text-[1.75rem] font-extrabold leading-9 text-slate-900 dark:text-white md:text-4xl">
            Hey I&apos;m Tyson <br />a Full-stack <span>Javascript</span>{" "}
            developer
          </h1>
        </div>
        <div></div>
      </div>
    </div>
  );
}
