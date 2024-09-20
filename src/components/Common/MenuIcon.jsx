import React from "react";

export default function MenuIcon({ toggleExpanded, isExpanded }) {
  return (
    <span
      className={`relative block w-8 cursor-pointer space-y-[0.33rem] transition-all duration-300`}
      onClick={toggleExpanded}
    >
      <span
        className={`block h-[0.5px] w-full bg-mainAccent transition-transform duration-300 ${isExpanded ? "translate-y-1.5 rotate-45" : ""}`}
      />
      <span
        className={`block h-[0.5px] w-full bg-mainAccent transition-all duration-300 ${isExpanded ? "-translate-x-2 opacity-0" : "opacity-100"}`}
      />
      <span
        className={`block h-[0.5px] w-full bg-mainAccent transition-transform duration-300 ${isExpanded ? "-translate-y-1.5 -rotate-45" : ""}`}
      />
    </span>
  );
}
