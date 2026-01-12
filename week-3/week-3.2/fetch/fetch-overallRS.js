function fetchData(callback) {
  setTimeout(() => {
    const data = 'Hello, Callback!';
    callback(data);
  }, 1000);
}

function fetchDataPromise() {
  return new Promise(resolve => {
    setTimeout(() => {
      const data = 'Hello, Promise!';
      resolve(data);
    }, 1000);
  });
}

async function fetchDataAsyncAwait() {
  return new Promise(resolve => {
    setTimeout(() => {
      const data = 'Hello, Async/Await!';
      resolve(data);
    }, 1000);
  });
}

fetchData(result => {
  console.log(result);

  fetchDataPromise()
    .then(result => {
      console.log(result);

      fetchDataAsyncAwait()
        .then(result => {
          console.log(result);
        })
        .catch(error => {
          console.error(error);
        });
    })
    .catch(error => {
      console.error(error);
    });
});
