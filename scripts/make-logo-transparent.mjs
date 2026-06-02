import sharp from "sharp";
import { renameSync, unlinkSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const input =
  process.argv[2] ??
  join(__dirname, "../public/logo-ne-sablon-source.png");
const output = join(__dirname, "../public/logo-ne-sablon-transparent.png");
const finalPath = join(__dirname, "../public/logo-ne-sablon.png");

const { data, info } = await sharp(input)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

// Убираем чёрный фон и сглаживаем края (антиалиас после растрового экспорта)
for (let i = 0; i < data.length; i += 4) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

  if (luminance <= 24) {
    data[i + 3] = 0;
  } else if (luminance <= 72) {
    data[i + 3] = Math.round(((luminance - 24) / 48) * 255);
  }
}

await sharp(data, {
  raw: {
    width: info.width,
    height: info.height,
    channels: 4,
  },
})
  .trim()
  .png()
  .toFile(output);

try {
  unlinkSync(finalPath);
} catch {
  /* ignore */
}
renameSync(output, finalPath);
console.log("Saved:", finalPath);
