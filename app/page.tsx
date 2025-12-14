"use client";
import React from "react";
import { useSelector } from "react-redux";
import Hero from "./_ui/Hero";
import Projects from "./_ui/Projects";
import Stack from "./_ui/Stack";
import Skills from "./_ui/Skills";
import Services from "./_ui/Services";
import HireMe from "./_ui/HireMe";

export default function Home() {
  return (
    <div className="pt-5 flex flex-col gap-14">
      <Hero />
      <Projects />
      <Services />
      <Stack />
      <HireMe />
    </div>
  );
}
