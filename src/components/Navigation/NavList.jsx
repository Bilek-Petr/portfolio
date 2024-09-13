import React from "react";
import NavItem from "./NavItem";
import { IoMenuOutline } from "react-icons/io5";

export default function NavList({ items }) {
  return (
    <>
      <div className="flex items-center justify-between px-4 py-4 sm:py-3">
        <p className="cursor-pointer text-2xl font-bold sm:text-lg">Logo</p>
        <button className="sm:hidden" aria-label="Toggle menu">
          <IoMenuOutline className="size-8" />
        </button>
      </div>

      <ul className="sm:flex sm:items-center sm:gap-4">
        {items.map((item) => (
          <NavItem key={item.id} title={item.title} link={item.link} />
        ))}
      </ul>
    </>
  );
}
