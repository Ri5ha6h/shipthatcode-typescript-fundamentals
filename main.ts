// Print the greeting below.

const lines: string = require('fs').readFileSync(0, 'utf-8').trim();

const num = Number(lines);
if (num % 15 === 0) {
  console.log("FizzBuzz");
}
else if (num % 3 === 0) {
  console.log("Fizz");
}
else if (num % 5 === 0) {
  console.log("Buzz");
}
else {
  console.log(num);
}
