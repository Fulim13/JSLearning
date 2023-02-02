// OBJECT - order not important , using key properties

const lim = {
  firstName: "Fu Lim",
  lastName: "Wong",
  age: new Date().getFullYear() - 2002,
  friends: ["michael", "peter"],
};

//ACCESS ITEM
//dot notation
console.log(lim.firstName); //Fu Lim
//bracket notation
console.log(lim["lastName"]); //Wong

console.log(lim["first" + "Name"]); //Fu Lim

const input = "firstName";
// console.log(lim.input); not work

console.log(lim[input]); //Fu Lim

// ADD PROPERTIES
lim.location = "Malaysia";
console.log(lim);
// {
//     firstName: 'Fu Lim',
//     lastName: 'Wong',
//     age: 21,
//     friends: [ 'michael', 'peter' ],
//     location: 'Malaysia'
//   }

// OBJECT METHOD

const lim1 = {
  firstName: "Fu Lim",
  lastName: "Wong",
  birthYear: 2002,
  friends: ["michael", "peter"],

  calcAge: function (birthYear) {
    return new Date().getFullYear() - birthYear;
  },
};

console.log(lim1.calcAge(2002)); //21

const lim2 = {
  firstName: "Fu Lim",
  lastName: "Wong",
  birthYear: 2002,
  friends: ["michael", "peter"],

  calcAge: function () {
    return new Date().getFullYear() - this.birthYear;
  },
};

console.log(lim2.calcAge()); //21

const lim3 = {
  firstName: "Fu Lim",
  lastName: "Wong",
  birthYear: 2002,
  friends: ["michael", "peter"],

  calcAge: function () {
    this.age = new Date().getFullYear() - this.birthYear;
    return this.age;
  },
};
console.log(lim3.calcAge()); //21
console.log(lim3.age); //21
