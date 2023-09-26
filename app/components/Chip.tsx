import React, { HTMLAttributes } from "react";

type Props = {
  active: boolean;
  name: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Chip(props: Props) {
  return (
    <button
      className={`py-1 px-5 text-sm border rounded-full hover:cursor-pointer select-none ${
        props.active
          ? "bg-black text-white dark:bg-slate-800"
          : "text-slate-500"
      }`}
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
}
