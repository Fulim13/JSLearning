const firstName = "Fu Lim";
const birthYear = 2002;
const year = 2023;

// CONCAT
const lim = "I'm " + firstName + ". I'm " + (year - birthYear) + " years old";
console.log(lim); //I'm Fu Lim. I'm 21 years old

// TEMPLATE LITERAL - declarative simple
const limTemplateLiterals = `I'm ${firstName}. I'm ${
  year - birthYear
} years old`;
console.log(limTemplateLiterals); //I'm Fu Lim. I'm 21 years old

// MUTILINE WITH CONCAT AND TEMPLATE LITERAL

console.log(
  "String \n\
mutiple \n\
line"
);

console.log(`String
multiple
line`);

// String
// multiple
// line
