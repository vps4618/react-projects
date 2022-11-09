// ternary operators
// example 01 with inverse

let soup = "chicken noodle soup";
let response = soup ? "yes,we have soup." : "sorry, no soup today.";
console.log(response);

let soup1;
let response1 = soup1 ? "yes,we have soup." : "sorry, no soup today";
console.log(response1);

// example 2
let soup2 = "chicken noodle soup";
let isCustomerBanned = false;
let soupAccess = isCustomerBanned
  ? "No soup for you"
  : soup2
  ? "Yes, we have soup"
  : "Sorry, we dont have soup";
console.log(soupAccess);

// example 3
let testScore = 39;
let myGrade =
  testScore > 89
    ? "A"
    : testScore > 79
    ? "B"
    : testScore > 69
    ? "C"
    : testScore > 59
    ? "D"
    : "F";
console.log(myGrade);

// example 4
let playerOne = "rock";
let computer = "paper";

// method 1
let result =
  playerOne === computer
    ? "Tie Game"
    : playerOne === "scissors" && computer === "rock"
    ? "computer wins"
    : playerOne === "paper" && computer === "scissors"
    ? "computer wins"
    : playerOne === "rock" && computer === "paper"
    ? "computer wins"
    : playerOne !== "rock" && playerOne !== "scissors" && playerOne !== "rock"
    ? "invalid input"
    : "playerOne wins";
console.log(result);

// method 2
let result2 =
  playerOne === computer
    ? "Tie Game"
    : playerOne === "scissors"
    ? computer === "rock"
      ? "computer wins"
      : "playerOne wins"
    : playerOne === "rock"
    ? computer === "paper"
      ? "computer wins"
      : "playerOne wins"
    : playerOne === "paper"
    ? computer === "scissors"
      ? "computer wins"
      : "playerOne wins"
    : "invalid input";
console.log(result2);
