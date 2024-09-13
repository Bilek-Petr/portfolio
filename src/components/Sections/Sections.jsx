import React from "react";
import AboutMe from "./AboutMe";
import MyJourney from "./MyJourney";
import Projects from "./Projects";

export default function Sections({ sectionData, sectionLists }) {
  return (
    <>
      <div>
        <AboutMe
          sectionAboutMeData={sectionData.aboutMe}
          sectionList={sectionLists.filter((list) => list.title === "About Me")}
        ></AboutMe>

        <MyJourney
          sectionMyJourneyData={sectionData.myJourney}
          sectionList={sectionLists.filter(
            (list) => list.title === "My Journey",
          )}
        ></MyJourney>

        <Projects
          sectionProjectsData={sectionData.projects}
          sectionList={sectionLists.filter((list) => list.title === "Projects")}
        ></Projects>
      </div>
    </>
  );
}
