// Print the greeting below.

const lines: string = require('fs').readFileSync(0, 'utf-8').trim();

let sum: number = 0;

for (let i = 1; i <= Number(lines); i++){
  sum += i;
}

console.log(sum);