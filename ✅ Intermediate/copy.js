// Shallow copy example
let originalArray = [1, 2, [3, 4]];
let shallowCopy = [...originalArray]; // Creating a shallow copy
shallowCopy[2][0] = 100; // Modifying the nested array

console.log(originalArray); // Output: [1, 2, [100, 4]]
console.log(shallowCopy); // Output: [1, 2, [100, 4]]

// Deep copy example
let deepCopy = JSON.parse(JSON.stringify(originalArray)); // Creating a deep copy
deepCopy[2][0] = 500; // Modifying the nested array

console.log(originalArray); // Output: [1, 2, [100, 4]]
console.log(deepCopy); // Output: [1, 2, [500, 4]]
