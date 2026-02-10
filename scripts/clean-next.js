/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");

function rmSafe(p) {
  try {
    fs.rmSync(p, { recursive: true, force: true });
    console.log(`Removed: ${p}`);
  } catch (err) {
    console.warn(`Failed to remove: ${p}`);
    console.warn(err?.message ?? String(err));
  }
}

const root = process.cwd();
const nextDir = path.join(root, ".next");

if (fs.existsSync(nextDir)) rmSafe(nextDir);

// Clean any accidental backups like ".next.bak.20260210174612"
for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  if (!entry.name.startsWith(".next.bak.")) continue;
  rmSafe(path.join(root, entry.name));
}

