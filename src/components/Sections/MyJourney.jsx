import React from "react";
import SectionBanner from "../Common/SectionBanner";
import Card from "../Common/Card";

export default function MyJourney({ sectionMyJourneyData, sectionList }) {
  return (
    <section id="my-journey">
      <SectionBanner bannerTitle={sectionList}>
        {/* Storyline, hidden on large, replaced by SVG */}
        <span className="absolute left-1/2 top-1/2 z-0 h-[85%] w-[2px] -translate-x-1/2 -translate-y-1/2 transform bg-mainAccent lg:h-[15px] lg:w-[90%] lg:max-w-[1700px]"></span>

        <div className="relative z-10 m-auto flex flex-col items-center gap-10 pb-10 lg:max-w-[1800px] lg:flex-row lg:gap-3 lg:px-3 lg:py-20">
          {sectionMyJourneyData.cards.map((card) => (
            <Card key={card.id} cardContent={card} />
          ))}
        </div>
      </SectionBanner>
    </section>
  );
}
