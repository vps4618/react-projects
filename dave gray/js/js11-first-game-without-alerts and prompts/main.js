let roundsDialog = document.getElementById("noOfRoundsDialog");
let box = document.getElementById("box");
let userInputBox = document.getElementById("userInputBox");
let resultBox = document.getElementById("resultBox");
let result = document.getElementById("result");

function start() {
  box.style.display = "none";
  roundsDialog.style.display = "block";
}

function gameStart() {
  roundsDialog.style.display = "none";
  userInputBox.style.display = "block";
}

function showResult() {
  let input = document.getElementById("userInput").value;
  let userInput = input;
  document.getElementById("userInput").value = "";
  let computerChoices = ["rock", "paper", "scissors"];
  let randomInt = Math.floor(Math.random() * 3);
  let computer = computerChoices[randomInt];
  result.textContent = `computer:${computer}\nuser:${userInput}\n`;
  if (computer === userInput) {
    result.textContent += "tie game";
  } else if (userInput === "rock") {
    if (computer === "paper") {
      result.textContent += "computer wins";
    } else {
      result.textContent += "user wins";
    }
  } else if (userInput === "paper") {
    if (computer === "scissors") {
      result.textContent += "computer wins";
    } else {
      result.textContent += "user wins";
    }
  } else {
    if (computer === "rock") {
      result.textContent += "computer wins";
    } else {
      result.textContent += "user wins";
    }
  }
  userInputBox.style.display = "none";
  resultBox.style.display = "block";
}

function end(){
    resultBox.style.display = "none";
    userInputBox.style.display = "block";
}