// RANGE LOOP
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// 0
// 1
// 2
// 3
// 4

// LOOP ARRAY
const arr = [1991, 1234, 5698];
total = 0;
for (let i = 0; i < arr.length; i++) {
  total += arr[i];
}
console.log(total); //8923

// COPY ARRAY WITH LOOP
const years = [2002, 1959, 1974, 2007];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(new Date().getFullYear() - years[i]);
}
console.log(ages); //[ 21, 64, 49, 16 ]

// CONTINUE
const limArr = ["Lim", 2002, ["Jordan", "Lebron"], "basketball player"];
for (let i = 0; i < limArr.length; i++) {
  if (typeof limArr[i] !== "string") continue;
  console.log(limArr[i], typeof limArr[i]);
}

//Lim string
//basketball player string

// BREAK
const limArr1 = ["Lim", 2002, ["Jordan", "Lebron"], "basketball player"];
for (let i = 0; i < limArr1.length; i++) {
  if (typeof limArr1[i] === "number") break;
  console.log(limArr1[i], typeof limArr1[i]);
}

//Lim string

// BACKWARD LOOP
for (let i = 5; i >= 0; i--) {
  console.log(i);
}
// 5
// 4
// 3
// 2
// 1
// 0

// NESTING LOOP
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 2; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}
// i: 0, j: 0
// i: 0, j: 1
// i: 1, j: 0
// i: 1, j: 1
// i: 2, j: 0
// i: 2, j: 1
// i: 3, j: 0
// i: 3, j: 1
// i: 4, j: 0
// i: 4, j: 1

// WHILE LOOP - FOR LOOP
let rep = 1;
while (rep <= 10) {
  console.log(`rep ${rep}`);
  rep++;
}
// rep 1
// rep 2
// rep 3
// rep 4
// rep 5
// rep 6
// rep 7
// rep 8
// rep 9
// rep 10
// WHILE LOOP - NOT FOR LOOP
let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`You rolled a ${dice}, Loop end`);
}

// You rolled a 5
// You rolled a 5
// You rolled a 3
// You rolled a 6, Loop end
