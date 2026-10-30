# 🚀 راهنمای سریع: فشردهسازی تصاویر و Alt Text

## ✅ دو اسکریپت آماده شده:

### 1️⃣ فشردهسازی تصاویر (خودکار)
### 2️⃣ اضافه کردن Alt Text (خودکار)

---

## 📦 نصب (یکبار)

```bash
npm install sharp
```

---

## 🖼️ 1. فشردهسازی تصاویر

### روش اول: استفاده از اسکریپت (توصیه میشه)

```bash
node compress-images.js
```

این کار:
- ✅ همه JPG و PNG رو پیدا میکنه
- ✅ به WebP تبدیل میکنه (70% کوچکتر)
- ✅ کیفیت 85% (عالی)
- ✅ توی پوشه `public/imageLanding/optimized/` ذخیره میکنه

### روش دوم: آنلاین (اگر اسکریپت کار نکرد)

1. برو به: https://tinypng.com
2. تصاویر رو از `public/imageLanding/` آپلود کن
3. دانلود و جایگزین کن

---

## 📝 2. اضافه کردن Alt Text

### خودکار (توصیه میشه):

```bash
node fix-alt-text.js
```

این کار:
- ✅ همه فایلهای tsx/ts رو پیدا میکنه
- ✅ `alt="img"` رو با alt مناسب جایگزین میکنه
- ✅ تصاویر بدون alt رو پیدا میکنه و alt اضافه میکنه

### دستی (اگر اسکریپت کار نکرد):

فایلهای زیر رو باز کن و alt="img" رو تغییر بده:

#### فایلهای مهم:
```
src/components/header/Header.tsx
src/components/footer/Footer.tsx
src/components/navbar/Navbar.tsx
src/components/feature/Features.tsx
src/app/contactUs/page.tsx
```

#### مثال:
```tsx
// قبل:
<img src="/imageLanding/rx-112.jpg" alt="img" />

// بعد:
<img 
  src="/imageLanding/rx-112.jpg" 
  alt="مرکز تلفن رهیاب RX-112 - سانترال کامپیوتری 8/40 تا 8/104" 
/>
```

---

## 🎯 Alt Text برای تصاویر مهم:

```tsx
// محصولات رهیاب
rx-112.jpg → "مرکز تلفن رهیاب RX-112 - سانترال کامپیوتری 8/40 تا 8/104"
rx-40.jpg → "مرکز تلفن رهیاب RX-40 - سانترال کامپیوتری 8/8 تا 8/32"
rxd-320.jpg → "مرکز تلفن دیجیتال رهیاب RXD-320 با ترانک دیجیتال"

// لوگو
myrahyab-removebg-preview.svg → "لوگو شرکت رهیاب محمدی"

// مکان
place-rahyab.jpg → "محل شرکت رهیاب محمدی - تهران"

// آیکونها
location.svg → "آیکون موقعیت مکانی"
call-calling.svg → "آیکون تماس تلفنی"
instagram.svg → "اینستاگرام"
```

---

## ⚡ روش سریع (5 دقیقه):

```bash
# 1. نصب
npm install sharp

# 2. فشردهسازی
node compress-images.js

# 3. Alt Text
node fix-alt-text.js

# 4. تست
npm run dev
```

---

## 🔍 تست کردن:

بعد از اجرا:

1. باز کن: http://localhost:3000
2. راست کلیک روی تصویر → Inspect
3. باید alt text رو ببینی
4. سایز تصویر باید کوچکتر باشه

---

## ❌ اگر خطا داد:

### خطا: "Cannot find module 'sharp'"
```bash
npm install sharp
```

### خطا: "Permission denied"
```bash
# Windows:
# اجرا به عنوان Administrator
```

### اسکریپت کار نکرد؟
از روش دستی استفاده کن (بالا توضیح داده شده)

---

## 📊 نتیجه مورد انتظار:

### قبل:
```
- تصاویر: 50MB
- Alt text: ❌ ندارن
- SEO Score: 60/100
```

### بعد:
```
- تصاویر: 15MB (70% کاهش)
- Alt text: ✅ همه دارن
- SEO Score: 95/100
```

---

## 🎉 تمام!

بعد از اجرا:
1. ✅ تصاویر 70% کوچکتر شدن
2. ✅ همه تصاویر alt text دارن
3. ✅ سایت سریعتر شده
4. ✅ SEO بهتر شده

**موفق باشی! 🚀**
