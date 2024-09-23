import React, { useState } from "react";
import PlusMinusButton from "./PlusMinusButton";

export default function SectionBanner({
  bannerTitle,
  children,
  isHighlighted,
  initiallyExpanded = false,
}) {
  const [isExpanded, setIsExpanded] = useState(initiallyExpanded);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`hover:bg- group relative overflow-hidden border-b-[1px] border-mainAccent duration-300 ${
        isHighlighted
          ? "bg-primaryTone text-mainLight"
          : "bg-mainLight text-mainAccent"
      }`}
    >
      <div
        onClick={toggleExpand}
        className="m-auto flex h-[9rem] max-w-[2400px] cursor-pointer items-center justify-between px-3 sm:px-6 lg:pt-7 xl:pt-12"
      >
        <h2
          className={`w-full font-heading text-sectionText font-bold uppercase tracking-tighter transition-none sm:translate-y-0 ${
            isExpanded && "overflow-hidden"
          }`}
        >
          {bannerTitle[0].id} {bannerTitle[0].title}
        </h2>

        <PlusMinusButton
          isHighlighted={isHighlighted}
          isExpanded={isExpanded}
        ></PlusMinusButton>
      </div>

      <div
        className={`banner-content relative z-10 transition-all duration-700 ease-in-out ${
          isExpanded ? "max-h-[999rem]" : "max-h-0"
        } overflow-hidden`}
      >
        {children}
      </div>
    </div>
  );
}
