import React from "react";
import NavList from "./NavList";

export default function Nav({ items }) {
  return (
    <nav className="sm:flex sm:justify-between sm:px-4">
      <NavList items={items} />
    </nav>
  );
}
