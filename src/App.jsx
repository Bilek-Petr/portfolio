import data from "./data.json";
import Nav from "./components/Navigation/Nav";
import LandingPage from "./components/LandingPage/LandingPage";
import "./App.css";
import Sections from "./components/Sections/Sections";

function App() {
  return (
    <>
      <Nav items={data.navigation}></Nav>
      <LandingPage data={data.landingPage.intro}></LandingPage>

      <Sections
        sectionData={data.sectionsData}
        sectionLists={data.sections.lists}
      ></Sections>
    </>
  );
}

export default App;
