import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "petrichor";

const entry = WORD.trim();
if (!/^[A-Za-z]+$/.test(entry) || entry.length < 1 || entry.length > 24) {
  throw new Error("entry must be one word of 1 to 24 letters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
