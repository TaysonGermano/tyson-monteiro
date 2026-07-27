import React from "react";

type Props = {
  active: boolean;
  name: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Chip(props: Props) {
  return (
    <button
      className={`py-1 px-4 text-sm rounded-full border border-black dark:border-white select-none transition-colors ${
        props.active
          ? "bg-black text-white dark:bg-white dark:text-black"
          : "bg-transparent text-black dark:text-white"
      }`}
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
}
