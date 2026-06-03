import { chromium } from "playwright";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "../public/projects");

const targets = [
  {
    url: "https://online-school-seven.vercel.app",
    file: "online-school.jpg",
  },
  {
    url: "https://premium-dental-clinic-bay.vercel.app",
    file: "dental.jpg",
  },
  {
    url: "https://remont-kappa.vercel.app",
    file: "remont.jpg",
  },
  {
    url: "https://advokat-coral.vercel.app",
    file: "advokat.jpg",
  },
];

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
});

for (const { url, file } of targets) {
  console.log("Capturing", url);
  try {
    await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
    await page.waitForTimeout(2000);
    await page.screenshot({
      path: join(outDir, file),
      type: "jpeg",
      quality: 88,
      fullPage: false,
    });
    console.log("Saved", file);
  } catch (err) {
    console.error("Failed", file, err.message);
  }
}

await browser.close();
