"use strict";
// while loop

let myNumber = 1;

while (myNumber <= 50) {
  console.log(myNumber);
  myNumber++;
}

let myNumber2 = 2;
while (myNumber2 <= 50) {
  console.log(myNumber2);
  myNumber2 += 2;
}

console.log("\n");

// do while loop
let myNumber3 = 50;
do {
  console.log(myNumber3);
  myNumber3++;
} while (myNumber3 < 50);

console.log("\n");

//for loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log("\n");

let x = 0;
for (; x < 10; ) {
  console.log(x);
  x++;
}

console.log("\n");

let myName = "Dave";
for (let i = 0; i < myName.length; i++) {
  console.log(myName.charAt(i));
}

console.log("\n");

// while loop instance
let counter = 0;
let myLetter;

while (counter <= 3) {
  myLetter = myName[counter];
  console.log(myLetter);
  if (counter === 1) {
    counter += 2;
    continue;
  }
  if (myLetter === "v") break;
  counter++;
}
console.log(counter);
