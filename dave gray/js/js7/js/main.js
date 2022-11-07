"use strict";
// if statements

// example 1
let customerIsBanned = false;
let soup = "Chicken noodle soup";
let crackers = false;
let reply;

if (customerIsBanned) {
  reply = "No soup for you !";
} else if (soup && crackers) {
  reply = `Here's your order of ${soup} & crackers`;
} else if (soup) {
  reply = `Here's your order of ${soup}`;
} else {
  reply = "Sorry, we're out of the soup";
}

console.log(reply);

// example 2
let testScore = 89;
let collegeStudent = true;
let grade;

if (testScore >= 90) {
  grade = "A";
} else if (testScore >= 80) {
  grade = "B";
} else if (testScore >= 70) {
  grade = "C";
} else if (testScore >= 60) {
  grade = "D";
} else {
  if (collegeStudent) {
    grade = "U";
  } else {
    grade = "F";
  }
}

console.log(grade);

// example 3
var i = 1;
var playerOnePoints = 0;
var computerPoints = 0;

console.log("\nRock Paper Scissor Game");
console.log("--------------------------");

while (i < 6) {
  let choices = prompt("Enter game objects here !\nRound : " + i+"\nOptions : paper,rock,scissors \nFormat : playerOneChoice,computerChoice");
  let choicesList = choices.split(",");
  let playerOne = choicesList[0];
  let computer = choicesList[1];

  if (
    playerOne !== "rock" &&
    playerOne !== "scissors" &&
    playerOne !== "paper"
  ) {
    console.log("Invalid choice in playerOne. Back round " + i);
    continue;
  } else if (
    computer !== "rock" &&
    computer !== "paper" &&
    computer !== "scissors"
  ) {
    console.log("Invalid choice in computer. Back to round " + i);
    continue;
  }

  console.log(`Round ${i} : playerOne-${playerOne}, computer-${computer}`);
  // decision tree !
  if (playerOne === computer) {
    console.log("tie. Back Round " + i);
    i--;
  } else if (playerOne === "rock") {
    if (computer === "paper") {
      computerPoints++;
    } else {
      playerOnePoints++;
    }
  } else if (playerOne === "paper") {
    if (computer === "scissors") {
      computerPoints++;
    } else {
      playerOnePoints++;
    }
  } else {
    if (computer === "rock") {
      computerPoints++;
    } else {
      playerOnePoints++;
    }
  }
  i++;
}

if (playerOnePoints > computerPoints) {
  console.log("PlayerOne wins");
} else {
  console.log("Computer wins");
}
