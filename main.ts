import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "Freestyle 200m Walking Into A Room And Forgetting Why";

// Validation guard: the gate requires /output/entry.txt to be UTF-8 text
// of 1 to 200 characters, not only whitespace. Fail loudly before writing
// anything if the entry would not pass.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(
    `entry length ${ENTRY.length} is outside the 1-200 character gate`,
  );
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
