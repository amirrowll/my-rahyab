const fs = require('fs');
const path = require('path');

// نقشه alt text برای تصاویر
const altTextMap = {
  // محصولات رهیاب
  'rx-112.jpg': 'مرکز تلفن رهیاب RX-112 - سانترال کامپیوتری 8/40 تا 8/104',
  'rx-40.jpg': 'مرکز تلفن رهیاب RX-40 - سانترال کامپیوتری 8/8 تا 8/32',
  'rx-608.jpg': 'مرکز تلفن رهیاب RX-608 - سانترال کامپیوتری',
  'rxd-320.jpg': 'مرکز تلفن دیجیتال رهیاب RXD-320 با ترانک دیجیتال',
  'rxd-1400.jpg': 'مرکز تلفن دیجیتال رهیاب RXD-1400 ظرفیت بالا',
  'rahyabALL.jpg': 'محصولات رهیاب - مرکز تلفن و سانترال',
  'rahyab608.jpg': 'مرکز تلفن رهیاب RX-608',
  
  // لوگو
  'myrahyab-removebg-preview.svg': 'لوگو شرکت رهیاب محمدی',
  'rahyab.svg': 'رهیاب - مرکز تلفن و سانترال',
  'logo-makeen.svg': 'لوگو رهیاب',
  
  // مکان
  'place-rahyab.jpg': 'محل شرکت رهیاب محمدی - تهران',
  'place-rahyab2.jpg': 'دفتر شرکت رهیاب',
  
  // پاناسونیک
  'tda600.png': 'سانترال پاناسونیک TDA600',
  'tda620.png': 'سانترال پاناسونیک TDA620',
  'tde600.png': 'سانترال پاناسونیک TDE600',
  'ns500.png': 'سانترال پاناسونیک NS500',
  'ns300.png': 'سانترال پاناسونیک NS300',
  'ncp500.png': 'سانترال پاناسونیک NCP500',
  
  // آیکونها
  'location.svg': 'آیکون موقعیت مکانی',
  'call-calling.svg': 'آیکون تماس تلفنی',
  'instagram.svg': 'اینستاگرام',
  'send-2.svg': 'تلگرام',
  'Linkdin.svg': 'لینکدین',
  'youtube.svg': 'یوتیوب',
  'arrow-left.svg': 'فلش بازگشت',
  
  // دیگر
  'bigDot.svg': 'نقطه تزئینی',
  'Dot.svg': 'نقطه تزئینی',
  'Dot2.svg': 'نقطه تزئینی',
  'Group1.svg': 'تصویر تزئینی',
  'phonegooya.png': 'تلفن گویا',
};

function fixAltText(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  
  // پیدا کردن img با alt="img" یا بدون alt
  const imgRegex = /<img([^>]*?)(?:alt="img"|alt="")?([^>]*?)>/g;
  
  content = content.replace(imgRegex, (match, before, after) => {
    // استخراج src
    const srcMatch = match.match(/src=["']([^"']+)["']/);
    if (!srcMatch) return match;
    
    const src = srcMatch[1];
    const filename = path.basename(src);
    
    // اگر alt text داریم
    if (altTextMap[filename]) {
      changed = true;
      // حذف alt قدیمی
      let newMatch = match.replace(/alt="[^"]*"/, '');
      // اضافه کردن alt جدید
      newMatch = newMatch.replace('<img', `<img alt="${altTextMap[filename]}"`);
      return newMatch;
    }
    
    return match;
  });
  
  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }
  
  return false;
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  let totalFixed = 0;
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      if (!file.includes('node_modules') && !file.includes('.next')) {
        totalFixed += processDirectory(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixAltText(filePath)) {
        console.log(`✅ ${filePath}`);
        totalFixed++;
      }
    }
  });
  
  return totalFixed;
}

console.log('🔍 شروع اصلاح alt text...\n');

const srcDir = path.join(__dirname, 'src');
const totalFixed = processDirectory(srcDir);

console.log(`\n🎉 تمام! ${totalFixed} فایل اصلاح شد`);
