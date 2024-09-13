import React from "react";

export default function NavItem({ title, link }) {
  return (
    <li className="border-mainAccent flex w-full justify-center whitespace-nowrap border-t-2 py-11 last-of-type:border-b-2 sm:border-t-0 sm:px-2 sm:py-1 sm:last-of-type:rounded-full sm:last-of-type:border-[1.5px]">
      <a
        href={link}
        className="font-heading text-navText font-bold uppercase tracking-[-0.3rem] sm:text-xs sm:font-medium sm:tracking-normal"
      >
        {title}
      </a>
    </li>
  );
}
