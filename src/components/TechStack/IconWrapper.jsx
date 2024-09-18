import React from "react";

const IconWrapper = ({ IconComponent, gradient }) => (
  <div
    className="relative flex items-center justify-center overflow-hidden rounded-full border-[1px] border-mainAccent p-5 transition-transform duration-300 group-hover:scale-125"
    style={{ background: gradient }}
  >
    <IconComponent className="text-[3rem] transition-transform duration-300 sm:text-[4rem] lg:text-[6rem]" />
  </div>
);

export default IconWrapper;
