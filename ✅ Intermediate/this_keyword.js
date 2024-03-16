let person = {
    name: 'AD',
    introduce: function() {
      console.log('Hello, my name is ' + this.name);
    }
  };
  
  person.introduce(); // Output: Hello, my name is AD
  