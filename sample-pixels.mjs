import { chromium } from "playwright";
import path from "node:path";

const SP = process.env.SP;
const browser = await chromium.launch({ args: ["--allow-file-access-from-files"] });
const page = await browser.newPage({ viewport: { width: 1000, height: 500 } });
await page.goto("file:///" + SP.split(path.win32.sep).join("/") + "/sample.html");

const src = "file:///" + SP.split(path.win32.sep).join("/") + "/match-top.png";
const points = [
  [500, 20],  // inside the visible box, empty dark area
  [500, 150], // outside the box, page background
  [340, 50],  // on the icon's lime/white area (sanity check, should be bright)
];
const result = await page.evaluate(({ src, points }) => window.__run(src, points), { src, points });
console.log(JSON.stringify(result, null, 2));
await browser.close();
