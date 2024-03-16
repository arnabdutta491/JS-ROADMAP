function fetchData() {
    return new Promise((resolve, reject) => {
      // Simulate fetching data asynchronously
      setTimeout(() => {
        const data = Math.random() < 0.5 ? 'Data received!' : null;
        if (data) {
          resolve(data); // Resolve the promise with the received data
        } else {
          reject(new Error('Failed to fetch data')); // Reject the promise with an error
        }
      }, 2000);
    });
  }
  
  // Usage example:
  fetchData()
    .then(data => {
      console.log('Data:', data);
    })
    .catch(error => {
      console.error('Error:', error.message);
    });
///////////////////////// defination in simple way ///////////////////////////////
```Sure!

Think of a promise like a promise you might make in real life. For example, you promise to bring your friend a book tomorrow. Your friend doesn't have the book yet, but they trust that you'll bring it tomorrow.

In JavaScript, a promise works similarly. It represents something that might happen in the future, like fetching data from a website. When you make a promise to fetch data, you can either fulfill that promise (get the data successfully) or reject it (encounter an error). Just like in real life, when you fulfill your promise to your friend, they get the book. But if something goes wrong and you can't bring the book, you break your promise.

So, a promise in JavaScript is a way to handle actions that take time, like fetching data, in a way that allows you to deal with the result once it's ready, either successfully or if there's an issue.```  