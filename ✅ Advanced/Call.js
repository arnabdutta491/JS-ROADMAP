// Call: It invokes a function with a specified this value and arguments provided individually.
function greet() {
    console.log(`Hello, ${this.name}`);
  }
  
  const person = {
    name: 'AD'
  };
  
  // Using call to invoke greet with person's context
  greet.call(person); // Output: Hello, AD
  