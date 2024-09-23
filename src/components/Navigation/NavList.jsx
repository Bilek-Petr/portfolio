import React, { useState, useEffect } from "react";
import NavItem from "./NavItem";
import Footer from "../Common/Footer";
import MenuIcon from "../Common/MenuIcon";

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
          className={`relative z-10 cursor-pointer text-2xl font-bold text-mainAccent xl:text-3xl ${isScrolled ? "sm:text-mainLight" : "sm:text-primaryTone"}`}
        >
          PB.
        </span>
        <button
          className="sm:hidden"
          aria-label="Toggle menu"
          onClick={toggleExpanded}
        >
          <MenuIcon
            toggleExpanded={toggleExpanded}
            isExpanded={isExpanded}
          ></MenuIcon>
        </button>
      </div>

      <ul
        className={`relative left-0 right-0 top-0 z-50 h-[100svh] transition-transform duration-700 ease-in-out sm:flex sm:h-auto sm:items-center sm:gap-4 ${isExpanded ? "block" : "hidden"}`}
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
        <div className="sm:hidden">
          <Footer></Footer>
        </div>
      </ul>
    </>
  );
}
