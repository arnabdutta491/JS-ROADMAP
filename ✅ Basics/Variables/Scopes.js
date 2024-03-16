// Scopes: Scopes define the accessibility of variables in JavaScript.

let globalVar = "I'm global"; // Global scope

function myFunction() {
    let localVar = "I'm local"; // Function scope
    console.log(localVar); // Accessible within the function
}

console.log(globalVar); // Accessible everywhere
