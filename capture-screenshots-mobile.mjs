import { chromium } from "playwright";
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import fs from "node:fs/promises";

await fs.mkdir("screenshots", { recursive: true });

const browser = await chromium.launch({
  headless: false,
  args: ["--hide-scrollbars"],
});

const context = await browser.newContext({
  // Desktop layout, but with a 4:5 screenshot ratio
  //
  // 1200 / 1500 = 0.8 = 4 / 5
  viewport: {
    width: 1200,
    height: 1500,
  },

  // Keeps screenshots sharp
  deviceScaleFactor: 1,
});

const page = await context.newPage();

await page.goto("https://codey-lyart.vercel.app/", {
  waitUntil: "networkidle",
});

const rl = readline.createInterface({
  input,
  output,
});

let number = 1;

while (true) {
  const name = await rl.question(
    "\nEnter screenshot name, or type 'done': ",
  );

  if (name.toLowerCase() === "done") {
    break;
  }

  // Make sure fonts have finished loading
  await page.evaluate(() => document.fonts.ready);

  // Small delay for animations/images
  await page.waitForTimeout(500);

  const filename = `${number}-${name}.png`;

  await page.screenshot({
    path: `screenshots/${filename}`,

    // Capture exactly the visible 1200 × 1500 viewport
    fullPage: false,
  });

  console.log(`Saved screenshots/${filename}`);

  number++;
}

rl.close();
await browser.close();