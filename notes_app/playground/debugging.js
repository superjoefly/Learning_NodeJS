var person = {
  name: 'Joey'
};

person.age = 38;

debugger; // break on this line using debugger

person.name = 'Chris';

console.log(person);

// In Console:
// node inspect debugging.js -> start debugger
// list(10) -> list first 10 lines
// 'n' -> next
// 'c' -> continue
// 'repl' -> re-evaluate print loop
// debugger; (line-break) -> use 'c' to skip to point in code

// Inspect using Chrome Dev Tools:
// run the app using: nodemon --inspect-brk app.js
// in Chrome search bar type: chrome://inspect
// select "Open dedicated DevTools for Node"

// Example:
// console: nodemon --inspect-brk app.js read --title="First Note"
// chrome search bar: chrome://inspect
// select "Open dedicated DevTools for Node"
// click blue arrow (top right) to run program
// dump note variable
