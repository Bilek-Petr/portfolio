import React from "react";
import NavList from "./NavList";

export default function Nav({ items }) {
  return (
    <nav>
      <NavList items={items} />
    </nav>
  );
}
