import sharp from "sharp";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const logo = join(__dirname, "../public/logo-ne-sablon.png");
const publicDir = join(__dirname, "../public");

const meta = await sharp(logo).metadata();
const size = meta.height ?? 150;
const cropSize = Math.min(size, meta.width ?? size);

const icon = sharp(logo).extract({
  left: 0,
  top: 0,
  width: cropSize,
  height: cropSize,
});

await icon.clone().resize(32, 32).png().toFile(join(publicDir, "favicon.png"));
await icon.clone().resize(180, 180).png().toFile(join(publicDir, "apple-icon.png"));
await icon.clone().resize(192, 192).png().toFile(join(publicDir, "favicon-192.png"));

console.log("Favicon (НШ в круге):", cropSize, "px → public/favicon.png");
