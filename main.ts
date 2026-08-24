// Print the greeting below.
const line: string = require('fs').readFileSync(0, 'utf-8').trim();

const nums: number[] = line.length === 0 ? [] : line.split(' ').map(Number);
const max = nums.reduce((m, n) => n > m ? n : m);
console.log(max);