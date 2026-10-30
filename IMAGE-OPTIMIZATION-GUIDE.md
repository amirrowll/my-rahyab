# 🖼️ راهنمای بهینهسازی تصاویر برای SEO

## چرا تصاویر مهم هستند؟

1. **سرعت سایت**: تصاویر بهینه = سایت سریعتر = رتبه بهتر در گوگل
2. **Google Images**: تصاویر بهینه در نتایج تصویری گوگل نمایش داده میشوند
3. **تجربه کاربری**: بارگذاری سریعتر = کاربران راضیتر

## ❌ مشکلات فعلی

```
مشکل 1: نامگذاری نامناسب
❌ GXP2130.png
❌ KX-T7630.png
❌ rx-112.jpg

مشکل 2: فرمت نامناسب
❌ PNG برای عکسهای محصول (حجم زیاد)
❌ JPG با کیفیت بالا (حجم زیاد)

مشکل 3: عدم استفاده از alt text
❌ <img src="/imageLanding/rx-112.jpg" />

مشکل 4: سایز نامناسب
❌ تصاویر 4000x3000 برای نمایش 400x300
```

## ✅ راهکارها

### 1. نامگذاری صحیح تصاویر

```
✅ خوب:
- markaz-telefon-rahyab-rx-112.jpg
- santeral-rahyab-rx-40.jpg
- telefon-panasonic-kx-t7630.jpg
- telefon-voip-grandstream-gxp2130.jpg
- gateway-grandstream-ht814.jpg

قانون نامگذاری:
[نوع-محصول]-[برند]-[مدل].jpg

مثالها:
- markaz-telefon-rahyab-rx-112.jpg
- santeral-digital-rahyab-rxd-320.jpg
- telefon-ip-panasonic-kx-nt346.jpg
- telefon-bisim-yealink-w60p.jpg
- gateway-voip-grandstream-ht814.jpg
```

### 2. فرمت مناسب

```
✅ WebP: بهترین گزینه (70% کمتر از JPG)
✅ JPG: برای عکسهای محصول
✅ PNG: فقط برای لوگو و آیکونها
❌ GIF: نه!

تبدیل به WebP:
- آنلاین: https://squoosh.app
- نرمافزار: XnConvert
- کد: npm install sharp
```

### 3. Alt Text صحیح

```typescript
❌ بد:
<img src="/imageLanding/rx-112.jpg" alt="rx-112" />
<img src="/imageLanding/rx-112.jpg" alt="عکس" />
<img src="/imageLanding/rx-112.jpg" />

✅ خوب:
<img 
  src="/imageLanding/markaz-telefon-rahyab-rx-112.jpg" 
  alt="مرکز تلفن رهیاب RX-112 - سانترال کامپیوتری 8/40 تا 8/104"
/>

<img 
  src="/imageLanding/telefon-panasonic-kx-t7630.jpg" 
  alt="تلفن دیجیتال پاناسونیک KX-T7630 با نمایشگر 3 سطری"
/>

<img 
  src="/imageLanding/gateway-grandstream-ht814.jpg" 
  alt="گیتوی گرنداستریم HT814 - مبدل آنالوگ به IP با 4 پورت FXS"
/>
```

### 4. استفاده از Next.js Image

```typescript
❌ بد:
<img src="/imageLanding/rx-112.jpg" alt="..." />

✅ خوب:
import Image from 'next/image'

<Image
  src="/imageLanding/markaz-telefon-rahyab-rx-112.jpg"
  alt="مرکز تلفن رهیاب RX-112 - سانترال کامپیوتری"
  width={800}
  height={600}
  loading="lazy"
  quality={85}
/>
```

### 5. سایز مناسب

```
نمایش در سایت → سایز تصویر

کارت محصول (300x300) → 600x600 (2x برای Retina)
صفحه محصول (800x600) → 1600x1200
تصویر شاخص (1200x630) → 1200x630 (Open Graph)
تامبنیل (150x150) → 300x300
```

### 6. فشردهسازی

```
ابزارهای آنلاین:
- TinyPNG: https://tinypng.com
- Squoosh: https://squoosh.app
- ImageOptim: https://imageoptim.com

ابزارهای خط فرمان:
- ImageMagick
- Sharp (Node.js)
- cwebp (WebP)

هدف: کاهش 50-70% حجم بدون کاهش کیفیت
```

## 📋 چکلیست بهینهسازی تصاویر

### برای هر تصویر:
- [ ] نام فایل SEO-friendly (استفاده از - و کلمات کلیدی)
- [ ] فرمت مناسب (WebP یا JPG)
- [ ] سایز مناسب (نه خیلی بزرگ، نه خیلی کوچک)
- [ ] فشردهسازی (حداقل 50% کاهش حجم)
- [ ] Alt text کامل و توصیفی
- [ ] استفاده از Next.js Image
- [ ] Lazy loading فعال
- [ ] Width و Height مشخص

## 🔧 نحوه پیادهسازی

### مرحله 1: تغییر نام فایلها

```bash
# قبل:
/public/imageLanding/
  ├── RX-112.jpg
  ├── GXP2130.png
  └── KX-T7630.png

# بعد:
/public/imageLanding/
  ├── markaz-telefon-rahyab-rx-112.jpg
  ├── telefon-voip-grandstream-gxp2130.jpg
  └── telefon-digital-panasonic-kx-t7630.jpg
```

### مرحله 2: تبدیل به WebP

```bash
# نصب cwebp
brew install webp  # macOS
apt-get install webp  # Linux

# تبدیل یک فایل
cwebp -q 85 input.jpg -o output.webp

# تبدیل همه فایلها
for file in *.jpg; do
  cwebp -q 85 "$file" -o "${file%.jpg}.webp"
done
```

### مرحله 3: بهروزرسانی کد

```typescript
// قبل:
<img src="/imageLanding/RX-112.jpg" />

// بعد:
import Image from 'next/image'

<Image
  src="/imageLanding/markaz-telefon-rahyab-rx-112.webp"
  alt="مرکز تلفن رهیاب RX-112 - سانترال کامپیوتری 8/40 تا 8/104"
  width={800}
  height={600}
  loading="lazy"
  quality={85}
/>
```

### مرحله 4: Fallback برای مرورگرهای قدیمی

```typescript
<picture>
  <source 
    srcSet="/imageLanding/markaz-telefon-rahyab-rx-112.webp" 
    type="image/webp" 
  />
  <img 
    src="/imageLanding/markaz-telefon-rahyab-rx-112.jpg" 
    alt="مرکز تلفن رهیاب RX-112"
  />
</picture>
```

## 📊 نمونه Alt Text برای محصولات

### محصولات رهیاب:
```typescript
"مرکز تلفن رهیاب RX-112 - سانترال کامپیوتری 8/40 تا 8/104"
"مرکز تلفن رهیاب RX-40 - سانترال کامپیوتری 8/8 تا 8/32"
"مرکز تلفن دیجیتال رهیاب RXD-320 با ترانک دیجیتال"
"مرکز تلفن دیجیتال رهیاب RXD-1400 - ظرفیت بالا"
```

### تلفنهای پاناسونیک:
```typescript
"تلفن دیجیتال پاناسونیک KX-T7630 با نمایشگر 3 سطری"
"تلفن IP پاناسونیک KX-NT346 با 24 کلید قابل برنامهریزی"
"تلفن SIP پاناسونیک KX-UT113 با 2 اکانت SIP"
"تلفن بیسیم پاناسونیک KX-TG3822 با 2 گوشی"
```

### تلفنهای VoIP:
```typescript
"تلفن تحت شبکه گرنداستریم GXP2130 با 3 حساب SIP"
"تلفن IP یالینک SIP-T54W با WiFi و بلوتوث"
"تلفن ویپ اسنوم D710 با 4 حساب SIP"
"تلفن بیسیم تحت شبکه یالینک W60P"
```

### گیتویها:
```typescript
"گیتوی گرنداستریم HT814 - مبدل آنالوگ به IP با 4 پورت FXS"
"گیتوی ویپ گرنداستریم GXW4232 با 32 پورت FXS"
"گیتوی FXO گرنداستریم GXW4104 با 4 پورت"
```

## 🎯 اولویتبندی

### فوری (هفته اول):
1. اضافه کردن alt text به تمام تصاویر
2. استفاده از Next.js Image

### مهم (هفته دوم):
3. تغییر نام فایلها
4. فشردهسازی تصاویر

### متوسط (ماه اول):
5. تبدیل به WebP
6. بهینهسازی سایز

## 📈 نتایج مورد انتظار

بعد از بهینهسازی:
- ✅ سرعت سایت 40-60% بهتر
- ✅ رتبه بهتر در گوگل
- ✅ نمایش در Google Images
- ✅ تجربه کاربری بهتر
- ✅ کاهش مصرف bandwidth

## 🔍 تست و بررسی

ابزارهای تست:
- Google PageSpeed Insights: https://pagespeed.web.dev
- GTmetrix: https://gtmetrix.com
- WebPageTest: https://webpagetest.org

هدف:
- PageSpeed Score: 90+
- Largest Contentful Paint (LCP): < 2.5s
- First Input Delay (FID): < 100ms
- Cumulative Layout Shift (CLS): < 0.1

موفق باشید! 🚀
