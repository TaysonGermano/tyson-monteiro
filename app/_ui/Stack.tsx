import Laravel from "@/components/logos/Laravel";
import Nextjs from "@/components/logos/Nextjs";
import Nodejs from "@/components/logos/Node";
import { PostgreSQL } from "@/components/logos/Postgres";
import Reactjs from "@/components/logos/Reactjs";
import TypeScript from "@/components/logos/Typescript";
import React from "react";

const stackList = {
  react: <Reactjs />,
  typescript: <TypeScript />,
  nextjs: <Nextjs />,
  nodejs: <Nodejs />,
  postgres: <PostgreSQL />,
  laravel: <Laravel />,
};

export default function Stack() {
  return (
    <div id="stack">
      <h2 className="text-2xl font-bold">My Main Stack</h2>
      <p className="text-sm text-slate-500 dark:text-slate-400 mt-3 ">
        These are the main technologies I use in my projects:
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {Object.entries(stackList).map(([name, component]) => (
          <div
            key={name}
            className="w-20 h-20 flex items-center justify-center"
          >
            {React.cloneElement(component, { className: "w-15 h-15" })}
          </div>
        ))}
      </div>
    </div>
  );
}
