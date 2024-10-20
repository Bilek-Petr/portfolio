import data from "./data.json";
import Nav from "./components/Navigation/Nav";
import LandingPage from "./components/LandingPage/LandingPage";
import Sections from "./components/Sections/Sections";
import Techstack from "./components/TechStack/Techstack";
import Footer from "./components/Common/Footer";

function App() {
  return (
    <>
      <nav>
        <Nav items={data.navigation}></Nav>
      </nav>
      <main>
        <header>
          <LandingPage data={data.landingPage.intro}></LandingPage>
        </header>

        <section>
          <Sections
            sectionData={data.sectionsData}
            sectionLists={data.sections.lists}
          ></Sections>
        </section>

        <Techstack techData={data.techstack}></Techstack>
      </main>

      <Footer></Footer>
    </>
  );
}

export default App;
