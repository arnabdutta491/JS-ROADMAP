```Description:
The new keyword in JavaScript is used to create instances of user-defined object types or built-in object types. When used with a constructor function, it creates a new object and binds this to the new object.```

function Person(name) {
    this.name = name;
  }
  
  const AD = new Person('AD');
  console.log(AD.name); // Output: AD
  