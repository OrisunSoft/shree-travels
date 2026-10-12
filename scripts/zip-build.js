const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const buildDir = path.join(rootDir, 'build');
const zipPath = path.join(rootDir, 'build.zip');

if (!fs.existsSync(buildDir)) {
  console.error('build/ directory does not exist. Run npm run build first.');
  process.exit(1);
}

if (fs.existsSync(zipPath)) {
  fs.unlinkSync(zipPath);
}

console.log('Compressing build/ directory into build.zip...');

const psCommand = `Add-Type -AssemblyName System.IO.Compression.FileSystem; [System.IO.Compression.ZipFile]::CreateFromDirectory('${buildDir}', '${zipPath}', [System.IO.Compression.CompressionLevel]::Optimal, $false)`;

execSync(`powershell -NoProfile -Command "${psCommand}"`, { stdio: 'inherit' });

if (fs.existsSync(zipPath)) {
  const stats = fs.statSync(zipPath);
  console.log(`Success! Created build.zip (${(stats.size / (1024 * 1024)).toFixed(2)} MB)`);
} else {
  console.error('Failed to create build.zip');
  process.exit(1);
}
