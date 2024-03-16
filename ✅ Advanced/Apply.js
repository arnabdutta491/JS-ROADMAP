function greet(greeting) {
    console.log(`${greeting}, ${this.name}`);
}

const person = {
name: 'AD'
};

// Using apply to invoke greet with person's context and passing arguments as an array
greet.apply(person, ['Hi']); // Output: Hi, AD

  