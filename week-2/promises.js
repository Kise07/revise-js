
console.log('Hi');
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Operation failed');
    console.log('Promise created');
  }, 1000);
});

console.log('Hi');
