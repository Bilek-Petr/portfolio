import React from "react";
import NavItem from "./NavItem";

export default function NavList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <NavItem key={item.id} title={item.title} link={item.link} />
      ))}
    </ul>
  );
}
