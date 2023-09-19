import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="pt-5">
      <div className="flex flex-row py-7 justify-between items-center">
        <div className="hero-content w-[600px]">
          <p className="mt-6 text-sm text-slate-500 dark:text-slate-400 mb-2">
            Tyson Monteiro - Full Stack JavaScript Developer
          </p>
          <h1 className="text-[1.75rem] font-extrabold leading-9 text-slate-900 dark:text-white md:text-4xl">
            Hey there! I&apos;m Tyson Monteiro, a Full Stack JavaScript
            developer with a laser focus on React.js and its vibrant ecosystem.
          </h1>
          <p></p>
        </div>
        <div></div>
      </div>
    </div>
  );
}
