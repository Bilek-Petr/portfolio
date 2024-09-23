import React from "react";

export default function NavItem({ title, link, isScrolled, toggleExpanded }) {
  const baseClasses =
    "relative z-10 flex w-full justify-center whitespace-nowrap py-5 transition duration-200 hover:scale-105 mx-2";
  const smClasses =
    "sm:px-2 sm:py-1 sm:last-of-type:rounded-full sm:border-t-0 sm:last-of-type:border-[1.5px]";
  const borderClasses = `border-t-2 border-mainAccent last-of-type:border-b-2  ${
    isScrolled ? "sm:border-mainLight" : "sm:border-primaryTone"
  }`;
  const textClasses = `text-mainAccent font-heading font-bold uppercase tracking-[-0.2rem] sm:text-xs sm:font-medium sm:tracking-normal 2xl:text-sm ${
    isScrolled ? "sm:text-mainLight" : "sm:text-primaryTone"
  }`;

  return (
    <li className={`${baseClasses} ${borderClasses} ${smClasses}`}>
      <a
        href={link}
        className={`text-[13vw] ${textClasses}`}
        onClick={toggleExpanded}
      >
        {title}
      </a>
    </li>
  );
}
