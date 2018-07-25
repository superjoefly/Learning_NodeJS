// Promise Chaining with Catch:
var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (typeof a === 'number' && typeof b === 'number') {
          resolve(a + b);
        } else {
          reject('Both arguments must be numbers...');
        }
      }, 2000);
  });
};

asyncAdd(1, 2).then((result) => {
  console.log("Result:", result);
  return asyncAdd(result, 5);
}).then((result) => {
  console.log("Result:", result);
}).catch((errorMessage) => {
  console.log(errorMessage);
});



// // Simple promise example:
// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // // Resolve promise:
//     resolve("It worked!");
//
//     // Reject promise:
//     // reject("Unable to fulfill promise!");
//   }, 2500);
// });
//
// somePromise.then((message) => {
//   // If resolved:
//   console.log("Success:", message);
// }, (errorMessage) => {
//   // If rejected:
//   console.log("Error:", errorMessage);
// });
