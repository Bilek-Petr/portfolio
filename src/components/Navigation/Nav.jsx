import React, { useState, useEffect } from "react";
import NavList from "./NavList";

export default function Nav({ items }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    return () => setIsExpanded(false);
  }, []);

  return (
    <nav className="sm:flex sm:justify-between sm:px-4">
      <NavList
        items={items}
        toggleExpanded={toggleExpanded}
        isExpanded={isExpanded}
      />
    </nav>
  );
}
