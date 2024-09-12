import data from "./data.json";
import Nav from "./components/Navigation/Nav";
import "./App.css";

function App() {
  return (
    <>
      <Nav items={data.navigation}></Nav>
    </>
  );
}

export default App;
