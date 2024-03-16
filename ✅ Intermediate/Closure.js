function outer() {
    let x = 10;
    function inner() {
      console.log(x); // Closure remembers the value of x even though it's executed outside the outer function
    }
    return inner;
  }
  
let closureFunction = outer();
closureFunction(); // Output: 10
  