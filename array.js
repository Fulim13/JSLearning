// Array - order important
// literal syntax
const friends = ["john", "lebron", "steph"];

const years = new Array(1991, 1984, 2008, 2020);

// Acess item
console.log(friends[0]); //john
// items length in array
console.log(years.length); //4

//can mutate individual item of array even const
friends[0] = "kobe";
console.log(friends); //[ 'kobe', 'lebron', 'steph' ]

// but cannot whole array replcae
// friends = ["Wong", "Fu ", "Lim"];

// array can have different type in the array

// ARRAY METHOD

// ADD TO LAST
let newLength = friends.push("jay"); //return new length or new array
console.log(friends); // ["kobe", "lebron", "steph", "jay"];
console.log(newLength); //4

// ADD TO FIRST
newLength = friends.unshift("michael"); //return new length or new array
console.log(friends); //[ 'michael', 'kobe', 'lebron', 'steph', 'jay' ]
console.log(newLength); //5

// REMOVE LAST
let popped = friends.pop(); //return the remove item
console.log(friends); //[ 'michael', 'kobe', 'lebron', 'steph' ]
console.log(popped); //jay

// REMOVE FIRST
popped = friends.shift(); //return the remove item
console.log(friends); //[ 'kobe', 'lebron', 'steph' ]
console.log(popped); //michael

// FIND INDEX - test with strict equality, so if the item in array have 23, you use '23' it will be false
console.log(friends.indexOf("steph")); // 2
console.log(friends.indexOf("Fu Lim")); //-1

// INCLUDES - - test with strict equality, so if the item in array have 23, you use '23' it will be false
console.log(friends.includes("lebron")); //true
console.log(friends.includes("jordan")); //false

// ADD TWO ARRAY
const bills = [100, 101];
const tips = [10, 11];

// WRONG
const allItem = [bills + tips];
console.log(allItem); //[ '100,10110,11' ]

const total = [bills[0] + tips[0], bills[1] + tips[1]]; //can use for loop
console.log(total); //[ 110, 112 ]

// CONCAT TWO ARRAY
const allItemConcat = bills.concat(tips, [1, 2]);
console.log(allItemConcat); //[ 100, 101, 10, 11, 1, 2 ]
