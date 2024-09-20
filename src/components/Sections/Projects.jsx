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
        <div className="m-auto flex w-11/12 max-w-[1800px] flex-col gap-7 pb-10 sm:flex-row lg:mb-20 lg:w-full lg:gap-20 lg:px-5 lg:py-20">
          <header className="flex-1">
            <p
              id="projects-heading"
              className="font-heading text-projectDescription font-bold tracking-tighter"
            >
              {sectionProjectsData.description}
              <br></br>
              <span
                className="link-custom cursor-pointer underline hover:text-white"
                style={{ "--tw-shadow-color": "#1E1E1E" }}
              >
                <a
                  href="https://github.com/Bilek-Petr?tab=repositories"
                  target="_blank"
                >
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
