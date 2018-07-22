console.log("Starging App...")

// Non-blocking IO:
setTimeout(() => {
  console.log("Two Second Delay!");
}, 2000);

// Zero Delay:
setTimeout(() => {
  console.log("Zero Second Delay!");
}, 0);

console.log("Finishing Up!")
