import React from "react";
import { useState } from "react";

const Content = () => {
  const [name, setName] = useState("dave");
  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const names = [
      "Vishwa",
      "Praveen",
      "Sarathchandra",
      "Mandipa",
      "Yasitha",
      "Supun",
      "Navitha",
    ];
    const int = Math.floor(Math.random() * names.length);
    setName(names[int]);
  };

  // count get 0 into this function.So eventhough
  //we change it inside this function it will show 0
  /*
   const showCount = () => {
    setCount(count + 1);

    console.log(count);
  }

  */

  const changeCount = () => {
    setCount(count + 1);
  };

  const showCount = () => {
    alert(count);
  };

  return (
    <main>
      <p>Hello {name}!</p>

      {/* We cannot call printName like printName() in click event
       .beacuse it call only once page loads not button clicked*/}

      <button onClick={handleNameChange}>Show Name</button>
      <button onClick={changeCount}>Change Count</button>
      <button onClick={showCount}>Show Count</button>
    </main>
  );
};

export default Content;
