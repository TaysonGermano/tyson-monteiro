import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard() {
  return (
    <div className="w-[400px] min-w-[280px] shadow-md rounded-md transition-shadow bg-white dark:bg-slate-800 hover:shadow-xl ">
      <div className="h-[200px] relative bg-gray-200 rounded-t-md "></div>
      <div className="content p-5">
        <p className="text-md mb-3">
          <b>PlaylistGenius</b>
        </p>
        <p className="text-sm mb-2">
          <b>Description:</b>{" "}
          <span className="text-slate-500 dark:text-slate-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur natus architecto error totam doloribus.
          </span>
        </p>
        <p className="text-sm  mb-2">
          <b>My Role:</b>{" "}
          <span className="text-slate-500 dark:text-slate-400">
            Frontend Developer
          </span>
        </p>
        <p className="text-sm">
          <b>Stack:</b>{" "}
          <span className="text-slate-500 dark:text-slate-400">
            Reactjs, Nextjs, MongoDb
          </span>
        </p>
        <div className="flex flex-row justify-end mt-5 mb-2">
          <Link
            href="#"
            className="text-sm text-indigo-500 inline-block  hover:text-indigo-500"
          >
            View Project
          </Link>
        </div>
      </div>
    </div>
  );
}
