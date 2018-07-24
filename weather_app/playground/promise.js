var somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // // Resolve promise:
    resolve("It worked!");

    // Reject promise:
    // reject("Unable to fulfill promise!");
  }, 2500);
});

somePromise.then((message) => {
  // If resolved:
  console.log("Success:", message);
}, (errorMessage) => {
  // If rejected:
  console.log("Error:", errorMessage);
});
