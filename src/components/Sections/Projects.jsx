import React from "react";
import SectionBanner from "../Common/SectionBanner";

export default function Projects({ sectionProjectsData, sectionList }) {
  return (
    <section id="projects">
      <SectionBanner bannerTitle={sectionList}>
        {sectionProjectsData.items.map((item, index) => (
          <div key={index}>
            <p>{item.id}</p>
            <p>{item.title}</p>
          </div>
        ))}
      </SectionBanner>
    </section>
  );
}
