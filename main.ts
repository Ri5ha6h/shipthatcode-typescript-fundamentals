// Print the greeting below.
type Shape =
    | { kind: 'circle'; radius: number }
    | { kind: 'square'; side: number };

function area(s: Shape): number {
  switch (s.kind) {
    case 'circle': return Math.PI * s.radius ** 2;
    case 'square': return s.side ** 2;
  }
}

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });
const lines: string[] = [];
let expected = -1;

rl.on("line", (line: string) => {
    if (expected === -1) {
        expected = parseInt(line);
        if (expected === 0) rl.close();
        return;
    }
    lines.push(line);
    if (lines.length === expected) {
        for (const l of lines) {
            const [k, v] = l.split(' ');
            const n = parseFloat(v);
            const s: Shape = k === 'c' ? { kind: 'circle', radius: n } : { kind: 'square', side: n };
            console.log(area(s).toFixed(2));
        }
        rl.close();
    }
});
rl.on("close", () => process.exit(0));