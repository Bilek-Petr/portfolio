import React from "react";

const ToolName = ({ name }) => (
  <span className="absolute top-[-2.25rem] text-center font-heading text-sm font-bold uppercase transition-opacity duration-300 group-hover:opacity-100 sm:text-lg sm:opacity-0 lg:text-xl">
    {name}
  </span>
);

export default ToolName;
