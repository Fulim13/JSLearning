// JS is dynamic lang - not need to define data type
// can assign another type to same variable
// store the variable value with type
// value have two type - object and primitive

// OBJECT
let me = { name: "Lim" };

// PRIMITIVE - not object is primitive
let lastName = "Wong";

// 7 prmitive type
// NUM - int and decimal(double)
let age = 23;
let rating = 4.5;

// STRING - sequence of characters, both '' and "" works
let firstName = "Fu Lim";

// BOOLEAN - true , false
let havingDriverLicence = true;

// UNDEFINED - empty value - without assign value
let children;
console.log(children); // undefined

// NULL - empty value

// SYMBOL - value that is unique and cannot be changed

// BIG INT(ES2020) - large integers than the NUMBER type can hold

// SINGLE LINE COMMENT
// -> Ctrl /

// MULTI LINE COMMENT
// /* */  -> ALT SHIFT A

// LET VS CONST VS VAR
// by default use const
// use let when you sure it is changing
// var should avoid - function scope

// LET
let luckyNumber = 30;
luckyNumber = 31; //can reassign
let luckyNumber1; // can assign empty value

// COSNT
const birthYear = 2002;
birthYear = 2003;
// console.log(birthYear); // cannot reassing
// const year; // cannot assign empty value
