import data from "./data.json";
import Nav from "./components/Navigation/Nav";
import LandingPage from "./components/LandingPage/LandingPage";
import Sections from "./components/Sections/Sections";
import Techstack from "./components/TechStack/Techstack";
import "./App.css";

function App() {
  return (
    <>
      <Nav items={data.navigation}></Nav>
      <LandingPage data={data.landingPage.intro}></LandingPage>

      <Sections
        sectionData={data.sectionsData}
        sectionLists={data.sections.lists}
      ></Sections>

      <Techstack techData={data.techstack}></Techstack>
    </>
  );
}

export default App;
