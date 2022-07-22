import { useState } from "react";
import reactLogo from "./assets/react.svg";
import ItemsListContainer from "./components/ItemsListContainer";
import NavBar from "./components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <NavBar />
        <ItemsListContainer />
      </div>
    </>
  );
}

export default App;
