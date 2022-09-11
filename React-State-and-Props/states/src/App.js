import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Video from "./components/Video";

function App() {
  // Write Javascript here
  const [counter, setCounter] = useState(0);
  const [toggle, setToggle] = useState(false);

  const incrementor = () => {
    setCounter((prev) => prev + 1);
    console.log(counter);
  };

  const toggler = () => {
    setToggle((prev) => !prev);
  };
  return (
    <div className="App">
      <Nav toggle={toggle}/>
      <Video nr={counter} setToggle={toggler}/>
      {/* <h1 className={toggle ? "active" : ""}>Hello React</h1>
      <h2>Counter {counter}</h2>
      <button onClick={incrementor}>click</button>
      <button onClick={toggler}>Toggle</button> */}
    </div>
  );
}

export default App;
