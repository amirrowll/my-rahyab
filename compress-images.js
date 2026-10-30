const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'public', 'imageLanding');
const outputDir = path.join(__dirname, 'public', 'imageLanding', 'optimized');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(inputDir).filter(file => 
  /\.(jpg|jpeg|png)$/i.test(file)
);

console.log(`🖼️  پیدا شد ${files.length} تصویر برای فشردهسازی...\n`);

let processed = 0;
let totalSaved = 0;

files.forEach(async (file) => {
  const inputPath = path.join(inputDir, file);
  const outputPath = path.join(outputDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
  
  const inputStats = fs.statSync(inputPath);
  const inputSize = inputStats.size;

  try {
    await sharp(inputPath)
      .webp({ quality: 85 })
      .toFile(outputPath);

    const outputStats = fs.statSync(outputPath);
    const outputSize = outputStats.size;
    const saved = inputSize - outputSize;
    const percent = ((saved / inputSize) * 100).toFixed(1);

    totalSaved += saved;
    processed++;

    console.log(`✅ ${file}`);
    console.log(`   ${(inputSize / 1024).toFixed(1)}KB → ${(outputSize / 1024).toFixed(1)}KB (کاهش ${percent}%)\n`);

    if (processed === files.length) {
      console.log(`\n🎉 تمام! ${processed} تصویر فشرده شد`);
      console.log(`💾 کاهش کل: ${(totalSaved / 1024 / 1024).toFixed(2)}MB`);
    }
  } catch (err) {
    console.error(`❌ خطا در ${file}:`, err.message);
  }
});
