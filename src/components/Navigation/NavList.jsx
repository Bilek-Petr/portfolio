import React from "react";
import NavItem from "./NavItem";
import { IoMenuOutline } from "react-icons/io5";

export default function NavList({
  items,
  toggleExpanded,
  isExpanded,
  isScrolled,
}) {
  return (
    <>
      <div className="flex items-center justify-between px-4 py-4 sm:py-3 xl:py-5">
        <span
          onClick={() => window.scrollTo({ top: 0 })}
          className={`relative z-10 cursor-pointer text-2xl font-bold sm:text-lg xl:text-2xl ${isScrolled ? "sm:text-white" : "sm:text-mainAccent"}`}
        >
          Logo
        </span>
        <button
          className="sm:hidden"
          aria-label="Toggle menu"
          onClick={toggleExpanded}
        >
          <IoMenuOutline className="size-8" />
        </button>
      </div>

      <ul
        className={`h-[100svh] transition-transform duration-700 sm:flex sm:h-auto sm:items-center sm:gap-4 ${isExpanded ? "block" : "hidden"}`}
      >
        {items.map((item) => (
          <NavItem
            key={item.id}
            title={item.title}
            link={item.link}
            isScrolled={isScrolled}
            toggleExpanded={toggleExpanded}
          />
        ))}
      </ul>
    </>
  );
}
