```Description:
In JavaScript, a class is a template for creating objects with predefined properties and methods. It provides a more convenient and structured way to create objects compared to traditional constructor functions.```


class Animal {
    constructor(name) {
      this.name = name;
    }
    
    sound() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  const cat = new Animal('Cat');
  cat.sound(); // Output: Cat makes a sound.
  