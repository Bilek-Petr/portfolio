import React, { useState } from "react";
import SectionBanner from "../Common/SectionBanner";
import ProjectItem from "../Common/ProjectItem"; // Correct import path

export default function Projects({ sectionProjectsData, sectionList }) {
  const [expandedProject, setExpandedProject] = useState(null);

  const handleToggle = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <section id="projects" aria-labelledby="projects-heading">
      <SectionBanner bannerTitle={sectionList}>
        <div className="m-auto flex w-11/12 flex-col items-center justify-center py-10 sm:w-full sm:py-16 lg:py-32 lg:text-center">
          <header className="sm:w-3/4 sm:pt-10">
            <p
              id="projects-heading"
              className="font-heading text-projectDescription font-bold tracking-tighter"
            >
              {sectionProjectsData.description}
              <span className="link-custom hover:text-primaryTone cursor-pointer underline transition-colors duration-300">
                <a
                  href="https://github.com/Bilek-Petr?tab=repositories"
                  target="_blank"
                >
                  GitHub repositories
                </a>
              </span>
            </p>
          </header>

          <div className="my-10 max-w-[1000px] flex-1 sm:my-20 sm:w-3/4">
            {sectionProjectsData.items.map((item) => (
              <ProjectItem
                key={item.id}
                item={item}
                isExpanded={expandedProject === item.id}
                onToggle={handleToggle}
              />
            ))}
          </div>
        </div>
      </SectionBanner>
    </section>
  );
}
