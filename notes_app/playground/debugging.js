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
