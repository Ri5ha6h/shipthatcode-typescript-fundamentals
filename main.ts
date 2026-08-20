// Print the greeting below.

const lines: string = require('fs').readFileSync(0, 'utf-8').trim().split('\n');

interface User {
  name: string;
  age: number;
}

const user: User = {
  name: lines[0],
  age: Number(lines[1])
}

console.log(`Hi, ${user.name}! You are ${user.age} years old.`);