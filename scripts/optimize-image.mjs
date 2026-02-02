import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');

const inputPath = path.join(projectRoot, 'public/images/uncompressed/mobile-background.png');
const outputDir = path.join(projectRoot, 'public/images/backgrounds/hero');

const sizes = [
  { name: 'mobile', width: 640 },
];

async function optimizeImage() {
  console.log('Optimizing mobile-background.png for mobile...\n');

  for (const { name, width } of sizes) {
    const outputPath = path.join(outputDir, `hero-${name}.webp`);
    
    await sharp(inputPath)
      .resize(width, null, { withoutEnlargement: true })
      .webp({ quality: 80, effort: 6 })
      .toFile(outputPath);

    const stats = await sharp(outputPath).metadata();
    console.log(`✓ ${name}: ${stats.width}x${stats.height} → ${outputPath.split('/public')[1]}`);
  }

  console.log('\nDone!');
}

optimizeImage().catch(console.error);
