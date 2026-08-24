// Print the greeting below.
type Status = 'idle' | 'loading' | 'ready' | 'error';

function describe(s: Status): string { 
  switch (s) {
    case 'idle': return "waiting";
    case 'loading': return "please wait";
    case 'ready': return "done";
    case 'error': return "try again";
  }
}

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });
rl.on("line", (line: string) => {
    const valid = ['idle', 'loading', 'ready', 'error'] as const;
    if (valid.includes(line as any)) {
        console.log(describe(line as Status));
    } else {
        console.log('unknown');
    }
    rl.close();
});
rl.on("close", () => process.exit(0));