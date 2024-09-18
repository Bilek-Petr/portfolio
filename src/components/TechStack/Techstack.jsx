import React, { useState } from "react";
import {
  FaSass,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaJs,
} from "react-icons/fa6";
import { SiPostman, SiTailwindcss, SiMongodb, SiFigma } from "react-icons/si";
import { generateRandomGradient } from "../../utilities/getRandomGradient";

export default function Techstack({ techData }) {
  const [hoveredGradient, setHoveredGradient] = useState({});
  const toolIcons = {
    html: FaHtml5,
    css: FaCss3Alt,
    sass: FaSass,
    tailwind: SiTailwindcss,
    javascript: FaJs,
    react: FaReact,
    mongodb: SiMongodb,
    git: FaGitAlt,
    postman: SiPostman,
    figma: SiFigma,
  };

  return (
    <section>
      <h2 className="px-3 text-sectionText font-bold uppercase tracking-[-0.075em] sm:px-6">
        Tech Stack
      </h2>
      <div className="m-auto mb-8 flex max-w-screen-2xl flex-col overflow-hidden">
        {/* Container for Icons */}
        <div className="flex flex-wrap items-center justify-center gap-y-12 py-8 sm:gap-y-6">
          {techData.tools.map((tool, index) => {
            const IconComponent = toolIcons[tool];

            const handleMouseEnter = (index) => {
              setHoveredGradient((prev) => ({
                ...prev,
                [index]: generateRandomGradient(),
              }));
            };

            const handleMouseLeave = (index) => {
              setHoveredGradient((prev) => ({
                ...prev,
                [index]: "",
              }));
            };

            return (
              <div
                key={index}
                className="group relative flex flex-col items-center justify-center p-2"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                {/* Icon */}
                <div
                  className="relative flex items-center justify-center overflow-hidden rounded-full border-[1px] border-mainAccent p-5 transition-transform duration-300 group-hover:scale-125"
                  style={{ background: hoveredGradient[index] }}
                >
                  {IconComponent && (
                    <IconComponent className="text-[3rem] transition-transform duration-300 sm:text-[4rem] lg:text-[6rem]" />
                  )}
                </div>

                {/* Tool Name */}
                <span className="absolute top-[-2.25rem] text-center font-heading text-sm font-bold uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:text-lg lg:text-xl">
                  {tool}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
