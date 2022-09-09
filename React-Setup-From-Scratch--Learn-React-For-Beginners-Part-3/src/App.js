import React from "react";
import "App.css";
import logo from "./logo.png";
import Nav from "./Nav";

/* 
no need to use () => { return(); };
when we use () => ();
*/
const App = () => (
  <div>
    <Nav />
    <h1 className="wow">Hello React!!!</h1>
    <img src={logo} alt="image" />
  </div>
);

export default App;
