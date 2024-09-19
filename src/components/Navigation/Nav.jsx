import React, { useState, useEffect } from "react";
import NavList from "./NavList";
import { debounce } from "../../utilities/debounce";

export default function Nav({ items }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    return () => setIsExpanded(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const debounceScroll = debounce(handleScroll, 20);
    window.addEventListener("scroll", debounceScroll);

    // Cleanup event listener when unmounted
    return () => {
      window.removeEventListener("scroll", debounceScroll);
    };
  }, []);

  return (
    <nav className="fixed z-20 w-full overflow-hidden bg-white sm:flex sm:justify-between sm:px-4">
      <div
        className={`absolute left-0 top-0 z-0 hidden h-full w-full bg-mainAccent transition-transform duration-300 sm:block ${
          isScrolled ? "sm:translate-y-0" : "sm:-translate-y-full"
        }`}
      />
      <NavList
        items={items}
        toggleExpanded={toggleExpanded}
        isExpanded={isExpanded}
        isScrolled={isScrolled}
      />
    </nav>
  );
}
