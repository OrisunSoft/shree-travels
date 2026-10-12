const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const targetDirs = [
  path.join(__dirname, '..', 'public', 'img', 'corporat'),
  path.join(__dirname, '..', 'public', 'img', 'Keyword Based Image'),
  path.join(__dirname, '..', 'public', 'img', 'urbania'),
  path.join(__dirname, '..', 'public', 'img', 'city-fleet'),
  path.join(__dirname, '..', 'public', 'img')
];

async function optimizeFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return null;

  const originalSize = fs.statSync(filePath).size;
  // Skip small images under 25 KB
  if (originalSize < 25000 && !filePath.includes('corporat')) return null;

  try {
    const inputBuffer = fs.readFileSync(filePath);
    const image = sharp(inputBuffer);
    const metadata = await image.metadata();

    let resized = image;
    // For corporate logos, max width 320 is plenty for a 140px card
    if (filePath.includes('corporat')) {
      if (metadata.width > 360) {
        resized = resized.resize({ width: 360, withoutEnlargement: true });
      }
    } else if (metadata.width > 1200) {
      resized = resized.resize({ width: 1200, withoutEnlargement: true });
    }

    let optimizedBuffer;
    if (ext === '.png') {
      optimizedBuffer = await resized.png({ quality: 82, compressionLevel: 9 }).toBuffer();
    } else {
      optimizedBuffer = await resized.jpeg({ quality: 82, mozjpeg: true, progressive: true }).toBuffer();
    }

    // Only overwrite if optimized is smaller
    if (optimizedBuffer.length < originalSize) {
      fs.writeFileSync(filePath, optimizedBuffer);
      const newSize = optimizedBuffer.length;
      const savings = ((1 - newSize / originalSize) * 100).toFixed(1);
      return {
        file: path.relative(path.join(__dirname, '..', 'public'), filePath),
        originalSize,
        newSize,
        savings: `${savings}%`
      };
    }
  } catch (err) {
    console.error(`Error processing ${filePath}:`, err.message);
  }
  return null;
}

async function run() {
  console.log('Starting image compression...');
  let totalOrig = 0;
  let totalNew = 0;
  let count = 0;

  for (const dir of targetDirs) {
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir);
    for (const f of files) {
      const fullPath = path.join(dir, f);
      if (fs.statSync(fullPath).isFile()) {
        const result = await optimizeFile(fullPath);
        if (result) {
          totalOrig += result.originalSize;
          totalNew += result.newSize;
          count++;
          console.log(`✓ ${result.file}: ${(result.originalSize / 1024).toFixed(0)} KB ➔ ${(result.newSize / 1024).toFixed(0)} KB (-${result.savings})`);
        }
      }
    }
  }

  const savedMb = ((totalOrig - totalNew) / (1024 * 1024)).toFixed(2);
  console.log(`\nOptimization Complete!`);
  console.log(`Compressed ${count} images.`);
  console.log(`Total size: ${(totalOrig / (1024 * 1024)).toFixed(2)} MB ➔ ${(totalNew / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Total Saved: ${savedMb} MB!`);
}

run();
