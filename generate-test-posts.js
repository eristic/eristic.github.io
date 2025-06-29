import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUTPUT_DIR = path.join(
  __dirname,
  "src",
  "pages",
  "post",
  "test-articles"
);

// Ensure the output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Generate 50 test articles
for (let i = 1; i <= 50; i++) {
  // Create a date starting from today and going backward
  const date = new Date();
  date.setDate(date.getDate() - i);

  const formattedDate = date.toISOString().split("T")[0];
  const paddedNumber = i.toString().padStart(2, "0");

  const content = `---
title: "Test Article ${paddedNumber}"
pubDate: "${formattedDate}"
author: "Test Author"
---

# Test Article ${paddedNumber}

This is a test article to verify pagination functionality. This article was automatically generated.
`;

  const fileName = `test-article-${paddedNumber}.md`;
  const filePath = path.join(OUTPUT_DIR, fileName);

  fs.writeFileSync(filePath, content);
  console.log(`Created: ${fileName}`);
}

console.log("All test articles have been generated!");
