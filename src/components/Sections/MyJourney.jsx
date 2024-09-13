import React from "react";
import SectionBanner from "../Common/SectionBanner";

export default function MyJourney({ sectionMyJourneyData, sectionList }) {
  return (
    <section id="my-journey">
      <SectionBanner bannerTitle={sectionList}>
        {sectionMyJourneyData.cards.map((card, index) => (
          <div key={index}>
            <p>{card.title}</p>
            <p>{card.content}</p>
          </div>
        ))}
      </SectionBanner>
    </section>
  );
}
