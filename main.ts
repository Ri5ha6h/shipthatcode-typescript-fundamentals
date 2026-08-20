// Print the greeting below.
//console.log('Hello, TypeScript!');

const lines: string = require('fs').readFileSync(0, 'utf-8').trim();
const a = lines.split('').reverse().join('');

console.log(a);