import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');

const inputPath = path.join(projectRoot, 'public/images/uncompressed/footer-logo.svg');
const outputDir = path.join(projectRoot, 'public/images/logos');

const sizes = [
  { name: 'mobile', width: 320 },
  { name: 'tablet', width: 480 },
  { name: 'desktop', width: 640 },
];

async function optimizeFooterLogo() {
  console.log('Optimizing footer-logo.svg for responsive sizes...\n');

  for (const { name, width } of sizes) {
    const outputPath = path.join(outputDir, `footer-logo-${name}.webp`);
    
    await sharp(inputPath, { density: 300 })
      .resize(width, null, { withoutEnlargement: false })
      .webp({ quality: 80, effort: 6 })
      .toFile(outputPath);

    const stats = await sharp(outputPath).metadata();
    console.log(`✓ ${name}: ${stats.width}x${stats.height} → ${outputPath.split('/public')[1]}`);
  }

  console.log('\nDone!');
}

optimizeFooterLogo().catch(console.error);
