"use strict";
// beginning of code
// write secure code
// forbids us to do cetain things
// crete visible error , witout it , it may no crate visible error
// when you use the variable with wrong name , may be less with one s , then it will create visible error to you
// also when you use reserved keyword, it also say error to you

// variable - hold value
// FUNCTION - hold num of codes

// Only doing task function
function logger() {
  console.log("My name is Fu Lim");
}

logger();
logger();
logger();

// return function
function fruit(apples, oranges) {
  return `Juice with ${apples} apples and ${oranges} oranges`;
}

const appleOrangeJuice = fruit(5, 3);
console.log(appleOrangeJuice); //Juice with 5 apples and 3 oranges

// FUNCTION DECLARATION
console.log(calcAge1(2002)); //can call before the declare function

function calcAge1(birthYear) {
  return new Date().getFullYear() - birthYear;
}

// FUNCTION EXPRESSION
const calcAge2 = function (birthYear) {
  return new Date().getFullYear() - birthYear;
};

console.log(calcAge2(2002)); //can not call before the declare function

// ARROW FUNCITON
const calcAge3 = (birthYear) => new Date().getFullYear() - birthYear;
console.log(calcAge3(2002));

// mutiple code
const calcAge4 = (birthYear) => {
  console.log("Hi");
  return new Date().getFullYear() - birthYear;
};

// FUNCTION CALLING ANOTHER FUNCTION
function cutPiece(fruits) {
  return fruits * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutPiece(apples);
  const orangesPieces = cutPiece(oranges);
  return `Juice with ${applePieces} apples and ${orangesPieces} oranges`;
}

console.log(fruitProcessor(3, 2));

// NOTE: After return , the code will nto run
