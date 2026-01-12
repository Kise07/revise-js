// Async/Await fn
async function fetchData() {
  return new Promise(resolve => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      const data = 'Hello, Async/Await!';
      resolve(data);
    }, 1000);
  });
}

// Using async/await
async function fetchDataAndPrint() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

// Invoking the async function
fetchDataAndPrint();
