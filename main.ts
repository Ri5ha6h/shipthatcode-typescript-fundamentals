// Print the greeting below.

function last<T>(arr: T[]): T | undefined{
  if (arr.length === 0) return undefined;

  return arr[arr.length - 1];
}

const line: string = require('fs').readFileSync(0, 'utf-8').trim();

const nums: number[] = line.length === 0 ? [] : line.split(' ').map(Number);
const v = last(nums);
if (v !== undefined) console.log(v);