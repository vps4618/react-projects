// alert
// alert("Hello World");

// confirm 
// let myBoolean = confirm("Ok === true\nCancel === false");
// console.log(myBoolean);

// prompt
// checking null values
// let myName = prompt("Please Enter your name ? ");
// console.log(myName ?? "You didn't enter your name");

// checking user clicked ok button without entering name
// let myName = prompt("Please enter your name ? ");
// if(myName.length){
//   console.log(myName ?? "You pressed cancel button without entering your name");
// } else {
//   console.log("You didn't enter your name");
// }

// solution
let myName = prompt("Please enter your name.");
if(myName){
  console.log(myName);
}else{
  console.log("You didn't enter your name");
}