// Arrow functions:
const square = x => x * x;

let result = square(3);
console.log(result);

console.log("----------")

// Refactored:
let user = {
  name: 'Joey',
  age: 38,
  sayHiAlt () {
    console.log(`Hi! I'm ${this.name}!`);
    console.log(arguments);
  }
}

user.sayHiAlt(1, 2, 3);
