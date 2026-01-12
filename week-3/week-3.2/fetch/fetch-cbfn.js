// Callback fn
function fetchData(callback) {
  // Simulating an asynchronous opeeration
  setTimeout(() => {
    const data = 'Hello, callback!';
    callback(data);
  }, 1000);
}

// Using the callback function
fetchData(result => {
  console.log(result);
});
