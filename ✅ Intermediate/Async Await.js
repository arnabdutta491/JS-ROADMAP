async function getUsers() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  
  (async () => {
    const users = await getUsers();
    console.log('Users:', users);
  })();


//   Explanation:
//   - `async function getUsers()` defines an asynchronous function that fetches users.
//   - Inside the function, `await fetch(...)` sends a request to the API and waits for the response.
//   - If the response is not successful (`!response.ok`), it throws an error.
//   - `await response.json()` parses the JSON response.
//   - Finally, it returns the data retrieved from the API.
//   - The `(async () => {...})();` is an immediately invoked function expression (IIFE) that calls `getUsers` function asynchronously and logs the result.