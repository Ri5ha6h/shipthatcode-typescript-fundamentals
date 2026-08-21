// Print the greeting below.

const lines: string = require('fs').readFileSync(0, 'utf-8').trim();

function square(num: number): number {
  return num * num;
}

console.log(square(Number(lines)));