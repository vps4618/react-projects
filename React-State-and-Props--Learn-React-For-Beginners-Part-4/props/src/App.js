import React from "react";
import "./App.css";
// Importing components
import Nav from "./components/Nav";
import Tweets from "./components/Tweets";

function App() {
  // Write Javascript here
  return (
    <div className="App">
      <h1>Twitter</h1>
      <div className="home">
        <Nav />
        <Tweets />
      </div>
    </div>
  );
}

export default App;
