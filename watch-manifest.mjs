import fs from "node:fs";
import path from "node:path";

// Default manifest path (used only if no argument provided)
const DEFAULT_MANIFEST =
  "C:\\Users\\nadir\\programming\\playground\\yt-comment-finder\\build\\firefox-mv3-dev\\manifest.json";

// Use CLI argument or fallback
const manifestPath = path.resolve(process.argv[2] || DEFAULT_MANIFEST);

if (!fs.existsSync(manifestPath)) {
  console.error("Manifest file not found:", manifestPath);
  process.exit(1);
}

let isProcessing = false;
let debounceTimer = null;

function stripLocalhost(obj) {
  if (typeof obj === "string") {
    return obj.replace(/http:\/\/localhost:?[\d]*/g, "");
  }

  if (Array.isArray(obj)) return obj.map(stripLocalhost);

  if (typeof obj === "object" && obj !== null) {
    const result = {};
    for (const key of Object.keys(obj)) {
      result[key] = stripLocalhost(obj[key]);
    }
    return result;
  }

  return obj;
}

function processManifest() {
  if (isProcessing) return;
  isProcessing = true;

  try {
    const raw = fs.readFileSync(manifestPath, "utf8");
    const json = JSON.parse(raw);

    const cleaned = stripLocalhost(json);
    const output = JSON.stringify(cleaned, null, 2);

    fs.writeFileSync(manifestPath, output, "utf8");
    console.log("[manifest.json] Cleaned + overwritten");
  } catch (err) {
    console.error("Error:", err);
  } finally {
    setTimeout(() => (isProcessing = false), 200);
  }
}

console.log("Watching:", manifestPath);

fs.watch(manifestPath, { persistent: true }, () => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(processManifest, 120);
});

