import React from "react";
import Image from "next/image";
import Link from "next/link";

type Stack = {
  id: number;
  name: string;
};

export type Project = {
  id: number;
  tag: string;
  name: string;
  description: string;
  role: string;
  stack: Stack[];
  access: string;
  link: string;
};

export default function ProjectCard(props: Project) {
  return (
    <div className="w-[400px] min-w-[280px] shadow-md rounded-md transition-shadow bg-white dark:bg-slate-800 hover:shadow-xl ">
      <div className="h-[200px] relative bg-gray-200 rounded-t-md ">
        <span
          className={`py-1 px-2 rounded-md absolute top-5 left-5 text-white text-sm ${
            props.tag === "Completed" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {props.tag}
        </span>
      </div>
      <div className="content p-5">
        <p className="text-md mb-3">
          <b>{props.name}</b>
        </p>
        <p className="text-sm mb-2">
          <b>Description:</b>{" "}
          <span className="text-slate-500 dark:text-slate-400">
            {props.description}
          </span>
        </p>
        <p className="text-sm  mb-2">
          <b>My Role:</b>{" "}
          <span className="text-slate-500 dark:text-slate-400">
            {props.role}
          </span>
        </p>
        <p className="text-sm  mb-2">
          <b>Access:</b>{" "}
          <span
            className={
              props.access.toLocaleLowerCase() === "public"
                ? "text-green-500"
                : "text-red-500"
            }
          >
            {props.access}
          </span>
        </p>
        <p className="text-sm">
          <b>Stack:</b>{" "}
          <span className="text-slate-500 dark:text-slate-400">
            {props.stack.map((stack: Stack, i: number, arr: Stack[]) =>
              i !== arr.length - 1 ? `${stack.name}, ` : `${stack.name}`
            )}
          </span>
        </p>
        {props.link && (
          <div className="flex flex-row justify-end mt-5 mb-2">
            <Link
              href={props.link}
              target="_blank"
              className="text-sm text-indigo-500 inline-block  hover:text-indigo-500"
            >
              View Project
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
