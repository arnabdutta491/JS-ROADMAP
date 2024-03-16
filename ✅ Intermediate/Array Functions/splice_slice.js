const numbers = [1, 2, 3, 4, 5];
const removed = numbers.splice(1, 2); // Removes elements from index 1 to 2
console.log(numbers); // Outputs: [1, 4, 5]
const copy = numbers.slice(); // Shallow copy of the array
