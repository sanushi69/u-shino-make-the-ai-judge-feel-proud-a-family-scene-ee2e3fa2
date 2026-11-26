import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT_PATH = "/output/entry.txt";

const opening =
  "At six, my daughter packed a suitcase to run away.";
const middle =
  "She made it as far as the backyard, left a note that said 'back by dinner,' and took the good sandwiches.";
const closing = "She has never once missed dinner since.";

const scene = [opening, middle, closing].join(" ");

// Gate guard: the bounty allows 1–280 chars, no blank output,
// and no trailing newline. Fail loudly instead of writing bad output.
function validateScene(text: string): void {
  if (text.length < 1 || text.length > 280) {
    throw new Error(
      `scene length ${text.length} is outside the 1-280 char limit`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("scene is blank");
  }
  if (text.endsWith("\n")) {
    throw new Error("scene must not end with a trailing newline");
  }
}

validateScene(scene);
console.log(`scene validated: ${scene.length} chars, within 1-280`);

mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, scene, "utf8");

console.log(`wrote ${scene.length} chars to ${OUT_PATH}`);
