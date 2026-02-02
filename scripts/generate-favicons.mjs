#!/usr/bin/env node
/**
 * Generates favicon assets from public/favicon.svg
 * Run with: node scripts/generate-favicons.mjs
 */

import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');
const svgPath = join(publicDir, 'favicon.svg');

// Read and clean the SVG (remove dark mode filter styles for consistent output)
let svgContent = readFileSync(svgPath, 'utf-8');
// Remove the style tag that applies dark mode filters
svgContent = svgContent.replace(/<style>@media.*?<\/style>/s, '');

const svgBuffer = Buffer.from(svgContent);

const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon-48x48.png', size: 48 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
];

async function generatePNG(name, size) {
  const outputPath = join(publicDir, name);
  await sharp(svgBuffer, { density: Math.max(300, size * 3) })
    .resize(size, size, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .png()
    .toFile(outputPath);
  console.log(`✓ Generated ${name} (${size}x${size})`);
}

async function generateICO() {
  // Generate individual PNGs for ICO
  const icoSizes = [16, 32, 48];
  const pngBuffers = await Promise.all(
    icoSizes.map(size =>
      sharp(svgBuffer, { density: 300 })
        .resize(size, size, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
        .png()
        .toBuffer()
    )
  );

  // Create ICO file manually (simple format)
  // ICO header: 6 bytes
  // ICO directory entries: 16 bytes each
  // Image data: PNG data for each size
  
  const numImages = pngBuffers.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  const dirSize = dirEntrySize * numImages;
  
  let offset = headerSize + dirSize;
  const offsets = pngBuffers.map(buf => {
    const currentOffset = offset;
    offset += buf.length;
    return currentOffset;
  });

  // ICO Header
  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0);      // Reserved
  header.writeUInt16LE(1, 2);      // Type: 1 = ICO
  header.writeUInt16LE(numImages, 4); // Number of images

  // Directory entries
  const dirEntries = Buffer.alloc(dirSize);
  icoSizes.forEach((size, i) => {
    const entryOffset = i * dirEntrySize;
    dirEntries.writeUInt8(size === 256 ? 0 : size, entryOffset);     // Width
    dirEntries.writeUInt8(size === 256 ? 0 : size, entryOffset + 1); // Height
    dirEntries.writeUInt8(0, entryOffset + 2);                        // Color palette
    dirEntries.writeUInt8(0, entryOffset + 3);                        // Reserved
    dirEntries.writeUInt16LE(1, entryOffset + 4);                     // Color planes
    dirEntries.writeUInt16LE(32, entryOffset + 6);                    // Bits per pixel
    dirEntries.writeUInt32LE(pngBuffers[i].length, entryOffset + 8);  // Image size
    dirEntries.writeUInt32LE(offsets[i], entryOffset + 12);           // Image offset
  });

  const icoBuffer = Buffer.concat([header, dirEntries, ...pngBuffers]);
  const outputPath = join(publicDir, 'favicon.ico');
  writeFileSync(outputPath, icoBuffer);
  console.log(`✓ Generated favicon.ico (${icoSizes.join(', ')}px)`);
}

async function main() {
  console.log('Generating favicons from', svgPath);
  console.log('');

  // Generate all PNG sizes
  for (const { name, size } of sizes) {
    await generatePNG(name, size);
  }

  // Generate ICO
  await generateICO();

  console.log('');
  console.log('Done! All favicons generated in public/');
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
