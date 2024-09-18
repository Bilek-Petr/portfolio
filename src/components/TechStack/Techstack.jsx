import React, { useState } from "react";
import IconWrapper from "./IconWrapper";
import ToolName from "./ToolName";
import { generateRandomGradient } from "../../utilities/getRandomGradient";
import {
  FaSass,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaJs,
} from "react-icons/fa6";
import { SiPostman, SiTailwindcss, SiMongodb, SiFigma } from "react-icons/si";

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

export default function Techstack({ techData }) {
  const [hoveredGradients, setHoveredGradients] = useState({});

  const handleMouseEnter = (index) => {
    setHoveredGradients((prev) => ({
      ...prev,
      [index]: generateRandomGradient(),
    }));
  };

  const handleMouseLeave = (index) => {
    setHoveredGradients((prev) => ({
      ...prev,
      [index]: "",
    }));
  };

  return (
    <section>
      <h2 className="px-3 text-sectionText font-bold uppercase tracking-[-0.075em] sm:px-6">
        Tech Stack
      </h2>
      <div className="m-auto mb-8 flex max-w-screen-2xl flex-col overflow-hidden">
        <div className="flex flex-wrap items-center justify-center gap-y-12 py-8 sm:gap-y-6">
          {techData.tools.map((tool, index) => {
            const IconComponent = toolIcons[tool];

            return (
              <div
                key={index}
                className="group relative flex flex-col items-center justify-center p-2"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <IconWrapper
                  IconComponent={IconComponent}
                  gradient={hoveredGradients[index]}
                />
                <ToolName name={tool} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
