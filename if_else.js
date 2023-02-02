//  && - return True when both True
// ||- return True when one of it is True
// ! Invert True/False Value

const birthYear = 2002;
const havingDriverLisence = true;
const now = new Date().getFullYear();

// more than 18 year old and have driver lisence
if (now - birthYear >= 18 && havingDriverLisence) {
  console.log("You can drive");
  // dont have driver licence
} else if (!havingDriverLisence) {
  //more than 18 years old
  if (now - birthYear >= 18) {
    console.log("Go get a Driver Lisence");
  } else {
    console.log("Wait until 18 years old and get the driver lisence");
  }
}

// use === stict equality operator , !==
// == loose type , !=

let age = 18;
let age1 = "18";

console.log(age == age1); //true
console.log(age === age1); //false

// Truthy and Falsy value
// Falsy - 0 ,"",undefined, null, Nan
// Truthy - all value that is not Falsy

console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean("Lim")); //true
console.log(Boolean({})); //true
console.log(Boolean("")); //false

//Switch statement
const day = "monday";

// switch(expression)
switch (day.toLowerCase()) {
  case "monday":
    console.log("Happy Monday");
    break;
  case "tuesdasy":
    console.log("Happy Tuesday");
    break;
  default:
    console.log("Wrong");
}

// Happy Monday

//TERNARY OPERATOR
const age = 23;
age >- 18 ? console.log("I like to drink wine") : console.log("I like to drink water");

const drink = age > 18 ? 'wine' : 'water';
console.log(drink) // wine
