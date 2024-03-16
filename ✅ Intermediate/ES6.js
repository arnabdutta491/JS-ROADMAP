// ES6 Features

// Arrow function
let add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5

// Template literals
let name = 'AD';
console.log(`Hello, my name is ${name}`); // Output: Hello, my name is AD

// Let and const declarations
let x = 10;
const y = 20;

// Rest parameters
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3)); // Output: 6
