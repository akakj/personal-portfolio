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
  viewport: {
    width: 1440,
    height: 900,
  },
  deviceScaleFactor: 1,
});

const page = await context.newPage();

await page.goto("https://codey-lyart.vercel.app/");

const rl = readline.createInterface({
  input,
  output,
});

let number = 1;

while (true) {
  const name = await rl.question(
    "\nEnter screenshot name, or type 'done': "
  );

  if (name.toLowerCase() === "done") {
    break;
  }

  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(500);

  const filename = `${number}-${name}.png`;

  await page.screenshot({
    path: `screenshots/${filename}`,
    fullPage: false,
  });

  console.log(`Saved screenshots/${filename}`);

  number++;
}

rl.close();
await browser.close();