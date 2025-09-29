"use client";
import React from "react";
import { useSelector } from "react-redux";
import Hero from "./_ui/Hero";
import Projects from "./_ui/Projects";
import Stack from "./_ui/Stack";
import Skills from "./_ui/Skills";

export default function Home() {
  return (
    <div className="pt-5">
      <Hero />
      <Projects />
      <Stack />
      <Skills />
    </div>
  );
}
