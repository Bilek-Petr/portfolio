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
        <div className="m-auto flex w-11/12 max-w-screen-2xl flex-col gap-7 sm:flex-row lg:gap-20 lg:py-20">
          <header className="flex-1">
            <p
              id="projects-heading"
              className="font-heading text-projectDescription font-bold tracking-tighter"
            >
              {sectionProjectsData.description}
              <span
                className="link-custom !inline cursor-pointer underline hover:text-white" //temporary !important fix
                style={{ "--tw-shadow-color": "#1E1E1E" }}
              >
                <a href="https://github.com/Bilek-Petr" target="_blank">
                  GitHub repositories
                </a>
              </span>
            </p>
          </header>

          <div className="my-10 flex-1 sm:my-0">
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
