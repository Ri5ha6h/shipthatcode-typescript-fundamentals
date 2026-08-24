// Print the greeting below.
const words: string[] = require('fs').readFileSync(0, 'utf-8').trim().split(' ');

const seen: Set<string> = new Set();

for (let word of words) {
  seen.add(word);
}

console.log(seen.size);