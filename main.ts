// The One-Line Excuse Championship — u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e
// Writes the single funniest line an AI gives its human after something goes wrong
// to /output/entry.txt (UTF-8, no trailing newline). Gate: 1-140 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The deadline moved because the calendar and I had a disagreement. The calendar won.";

// writeEntry: writes the entry exactly as-is, UTF-8, with no trailing newline.
function writeEntry(text: string): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
}

writeEntry(ENTRY);
