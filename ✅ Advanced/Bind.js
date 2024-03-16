// Bind: It creates a new function that, when called, has its this value set to a specific value.
function greet() {
    console.log(`Hello, ${this.name}`);
  }
  
  const person = {
    name: 'AD'
  };
  
  // Creating a new function with the context of person
  const greetPerson = greet.bind(person);
  
  // Calling the new function
  greetPerson(); // Output: Hello, AD
  