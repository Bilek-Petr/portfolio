import data from "./data.json";
import Nav from "./components/Navigation/Nav";
import LandingPage from "./components/LandingPage/LandingPage";
import "./App.css";

function App() {
  return (
    <>
      <div className="h-[90svh]">
        <Nav items={data.navigation}></Nav>
        <LandingPage data={data.landingPage.intro}></LandingPage>
      </div>
    </>
  );
}

export default App;
