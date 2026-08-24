// Print the greeting below.
const nums: number[] = require('fs').readFileSync(0, 'utf-8').trim().split(' ').map(Number);

const result: number = nums.filter((n) => n % 2 === 0).map((n) => n * n).reduce((t, n) => t + n, 0);

console.log(result);