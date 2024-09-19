import React from "react";

export default function NavItem({ title, link, isScrolled, toggleExpanded }) {
  return (
    <li
      className={`relative z-10 flex w-full justify-center whitespace-nowrap border-t-2 border-mainAccent py-11 last-of-type:border-b-2 sm:border-t-0 sm:px-2 sm:py-1 sm:last-of-type:rounded-full sm:last-of-type:border-[1.5px] ${
        isScrolled ? "sm:border-white" : "sm:border-mainAccent"
      } transition-colors duration-300 hover:border-gray-400`}
    >
      <a
        href={link}
        className={`font-heading text-[3rem] font-bold uppercase tracking-[-0.2rem] transition-colors duration-300 hover:text-gray-400 sm:text-xs sm:font-medium sm:tracking-normal 2xl:text-sm ${
          isScrolled ? "sm:text-white" : "text-mainAccent"
        }`}
        onClick={toggleExpanded}
      >
        {title}
      </a>
    </li>
  );
}
