import React, { useState } from "react";

export default function SectionBanner({ bannerTitle, children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="section-banner">
      <div
        onClick={toggleExpand}
        className="flex items-center justify-between bg-red-400 px-8"
      >
        <h2 className="font-heading text-[10vw] font-bold uppercase">
          <span>{bannerTitle[0].id} </span>
          {bannerTitle[0].title}
        </h2>

        <button className="relative flex h-10 w-10 items-center justify-center rounded-full border border-black">
          {/* Plus-minus icon */}
          <span
            className={`} absolute block h-[1.3px] w-4 bg-black duration-300 ease-in-out`}
          ></span>
          <span
            className={`absolute block h-[1px] w-4 bg-black transition-transform duration-300 ease-in-out ${
              isExpanded ? "rotate-0" : "rotate-90"
            }`}
          ></span>
        </button>
      </div>

      {isExpanded && <div className="banner-content">{children}</div>}
    </div>
  );
}
