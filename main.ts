// Entry for "Make the AI Judge Feel Proud: A Family Scene".
// Writes one short family scene (one or two lines, max 280 chars)
// to /output/entry.txt, exactly as the bounty requires.
import { mkdirSync, writeFileSync } from "node:fs";

const SCENE =
  "At six, my daughter packed a suitcase to run away. She made it as far as the backyard, left a note that said 'back by dinner,' and took the good sandwiches. She has never once missed dinner since.";

// The bounty gate: /output/entry.txt must be UTF-8 text of 1 to 280
// characters, not only white space. Fail loudly instead of shipping
// an entry the gate would refuse.
if (SCENE.length < 1 || SCENE.length > 280 || SCENE.trim().length === 0) {
  throw new Error(`Scene is ${SCENE.length} characters; must be 1-280 and non-blank.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SCENE, "utf8");
console.log(`Wrote ${SCENE.length} characters to /output/entry.txt`);
