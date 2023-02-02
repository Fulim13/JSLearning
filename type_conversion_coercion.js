// TYPE CONVERSION - MANUALLY CHANGE TYPE

const inputYear = "1991"; //String
console.log(Number(inputYear) + 18); //2009

console.log(Number("Jonas")); //NaN , not a number - invalid num
console.log(typeof NaN); //number

console.log(String(23));
("23");

// TYPE COERCION - AUTO CHANGE TYPE
// + >>> num auto to string
console.log("I'm " + 23 + "years old");

// -,* ,? ,>   >>>string auto to num
console.log("23" - "10" - 3); //10
console.log("23" * 2); //46
console.log("23" / 2); //11.5
console.log("23" > "18"); //True

// Test
console.log("10" - "4" - "3" + "5");
// 10-4-3 = 3
// "3" + 5 = 35
