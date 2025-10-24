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
  image: string;
};

export default function ProjectCard(props: Project) {
  return (
    <div className="shadow-md h-full flex flex-col rounded-md transition-shadow bg-white dark:bg-slate-800 hover:shadow-xl">
      <div className="h-[200px] relative bg-gray-200 rounded-t-md ">
        <Image
          src={props.image}
          alt={props.name}
          fill
          className="object-cover rounded-t-md"
        />
        <span
          className={`py-1 px-2 rounded-md absolute top-5 left-5 text-white text-sm ${
            props.tag ? "bg-red-500" : "hidden"
          }`}
        >
          {props.tag}
        </span>
      </div>
      <div className="content flex-1 p-5 flex flex-col gap-2">
        <p className="text-md">
          <b>{props.name}</b>
        </p>
        <p className="text-sm">
          <b>Description:</b>{" "}
          <span className="text-slate-500 dark:text-slate-400">
            {props.description}
          </span>
        </p>
        <p className="text-sm ">
          <b>My Role:</b>{" "}
          <span className="text-slate-500 dark:text-slate-400">
            {props.role}
          </span>
        </p>
        <p className="text-sm ">
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
          <Link
            href={props.link}
            target="_blank"
            className="text-sm mt-auto ml-auto cursor-pointer text-indigo-500 inline-block  hover:text-indigo-500"
          >
            View Project
          </Link>
        )}
      </div>
    </div>
  );
}
