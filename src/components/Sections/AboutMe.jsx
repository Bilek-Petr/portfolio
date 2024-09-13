import React from "react";
import SectionBanner from "../Common/SectionBanner";

const AboutMe = ({ sectionAboutMeData, sectionList }) => {
  return (
    <section id="about-me">
      <SectionBanner bannerTitle={sectionList}>
        {sectionAboutMeData.description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </SectionBanner>
    </section>
  );
};

export default AboutMe;
