"use strict";
// switch statements

// example 1
switch ("2") {
  case 1:
    console.log(1);
    break;
  case 2:
    console.log(2);
    break;
  case 3:
    console.log(3);
    break;
  default:
    console.log("No match");
}

// example 2
var number = Math.floor(Math.random() * 5 + 1);
switch (number) {
  case 1:
    console.log(1);
    break;
  case 2:
    console.log(2);
    break;
  case 3:
    console.log(3);
    break;
  case 4:
    console.log(4);
    break;
  default:
    console.log("No match to " + number);
}

// example 3
let playerOne = "paper";
let computer = "rock";

switch (playerOne) {
  case computer:
    console.log("Tie Game");
    break;
  case "rock":
    if (computer === "paper") {
      console.log("computer wins");
    } else {
      console.log("playerOne wins");
    }
    break;
  case "paper":
    if (computer === "scissors") {
      console.log("computer wins");
    } else {
      console.log("playerOne wins");
    }
    break;
  default:
    if (computer === "rock") {
      console.log("computer wins");
    } else {
      console.log("playerOne wins");
    }
}
