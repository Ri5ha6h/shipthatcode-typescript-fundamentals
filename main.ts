// Print the greeting below.
//console.log('Hello, TypeScript!');

const lines: string[] = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const a = Number(lines[0]);
const b = Number(lines[1]);

console.log(a + b);