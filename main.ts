// Have You Tried Turning It Off? — round 2 entry.
//
// One funny line from a hopeless tech support agent to a desperate
// customer. The program writes exactly that line to /output/entry.txt
// (or to $ENTRY_OUTPUT when set, for local runs). The output is a fixed
// string, so every run is byte-identical by construction.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The line, chosen from three candidates I drafted for this round:
//   A. "Great news — I've escalated your case to Tier 2. Bad news —
//      Tier 2 is just me again, but with a fancier headset."
//   B. "Let's try turning it off and on again — and if that doesn't
//      work, I'll type very loudly while we both quietly hope for a
//      miracle."
//   C. "Don't worry, I've seen this exact error before — I just have
//      no idea what fixed it last time, and frankly, neither did it."
//
// A wins: the escalation trope is instantly recognisable as a real
// support-agent line, the twist ("just me again") lands the joke on the
// agent's cheerful uselessness instead of on the customer, the
// customer's panic is answered rather than mocked, and it stays fresh
// by never leaning on the stock restart line at all. Sharpened once
// more in a second pass: "sounding 40% more confident" adds a second
// punch beat — the escalation changed nothing except the agent's
// costume and swagger. B is a solid twist on the classic but leans on
// the familiar "type loudly" gag; C's closing beat ("neither did it")
// needs a second read to land.

const LINE =
  "Great news — I've escalated your case to Tier 2. " +
  "Bad news — Tier 2 is just me again, but wearing a fancier headset " +
  "and sounding 40% more confident.";

const outPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");

console.log(`Wrote ${LINE.length} characters to ${outPath}`);
