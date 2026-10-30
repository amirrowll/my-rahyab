# 🚀 راهنمای کامل بهینهسازی SEO سایت رهیاب

## ✅ کارهای انجام شده

### 1. **Metadata اصلی (layout.tsx)**
- ✅ Title و Description بهینه شده
- ✅ 300+ کلمه کلیدی هدفمند اضافه شده
- ✅ Open Graph برای شبکه‌های اجتماعی
- ✅ Schema.org JSON-LD برای گوگل
- ✅ Robots.txt و Sitemap.xml

### 2. **کلمات کلیدی اضافه شده**
#### برندها:
- رهیاب، رهیاب محمدی، Rahyab
- پاناسونیک، سامسونگ، گرند استریم
- Grandstream، Yealink، Snom، Gigaset

#### محصولات رهیاب:
- RX-608، RX-112، RX-40
- RXD-320، RXD-1400

#### محصولات پاناسونیک:
- KX-T7630، KX-DT543، KX-NT346
- KX-UT113، KX-TG3822، KX-TG6643

#### کلمات عمومی:
- مرکز تلفن، سانترال، VoIP
- تلفن IP، تلفن SIP، تلفن بیسیم
- سانترال دیجیتال، سانترال آنالوگ

## 🎯 کارهای باقیمانده برای SEO کامل

### 1. **اضافه کردن Metadata به صفحات محصولات**

هر صفحه محصول باید metadata داشته باشد:

```typescript
// مثال برای صفحه RX-112
export const metadata: Metadata = {
  title: "مرکز تلفن رهیاب RX-112 | سانترال 8/40 تا 8/104 | قیمت و خرید",
  description: "مرکز تلفن کامپیوتری رهیاب RX-112 با ظرفیت 8/40 تا 8/104، دارای تلفن گویا، ضبط مکالمات و گارانتی یک ساله. تماس: 021-88440345",
  keywords: ["RX-112", "مرکز تلفن RX-112", "سانترال RX-112", "خرید RX-112", "قیمت RX-112", "رهیاب RX-112"],
  openGraph: {
    title: "مرکز تلفن رهیاب RX-112",
    description: "سانترال کامپیوتری با ظرفیت 8/40 تا 8/104",
    images: ["https://myrahyab.ir/imageLanding/rx-112.jpg"],
  }
};
```

### 2. **بهینه‌سازی تصاویر**

#### الف) نام فایل‌ها:
```
❌ بد: GXP2130.png
✅ خوب: grandstream-gxp2130-voip-phone.png
```

#### ب) Alt Text:
```typescript
<img 
  src="/imageLanding/rx-112.jpg" 
  alt="مرکز تلفن رهیاب RX-112 - سانترال کامپیوتری 8/40 تا 8/104"
/>
```

### 3. **ساختار URL بهینه**

```
✅ خوب:
/products/rahyab/rx-112
/products/panasonic/kx-t7630
/products/voip/grandstream-gxp2130

❌ بد:
/products/1
/p/phone-123
```

### 4. **Internal Linking**

در هر صفحه محصول، لینک به:
- محصولات مشابه
- دسته‌بندی مرتبط
- صفحه اصلی
- صفحه تماس

### 5. **Schema Markup برای محصولات**

```typescript
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "مرکز تلفن رهیاب RX-112",
  "image": "https://myrahyab.ir/imageLanding/rx-112.jpg",
  "description": "مرکز تلفن کامپیوتری با ظرفیت 8/40 تا 8/104",
  "brand": {
    "@type": "Brand",
    "name": "رهیاب"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://myrahyab.ir/products/rahyab/RX-112",
    "priceCurrency": "IRR",
    "availability": "https://schema.org/InStock"
  }
}
```

### 6. **محتوای متنی بیشتر**

هر صفحه محصول باید حداقل 300 کلمه محتوا داشته باشد:
- توضیحات کامل محصول
- مزایا و معایب
- موارد استفاده
- مقایسه با محصولات مشابه
- سوالات متداول

### 7. **Breadcrumbs**

```typescript
<nav aria-label="breadcrumb">
  <ol>
    <li><Link href="/">خانه</Link></li>
    <li><Link href="/products">محصولات</Link></li>
    <li><Link href="/products/rahyab">رهیاب</Link></li>
    <li>RX-112</li>
  </ol>
</nav>
```

### 8. **Canonical URLs**

```typescript
export const metadata: Metadata = {
  alternates: {
    canonical: "https://myrahyab.ir/products/rahyab/RX-112"
  }
};
```

### 9. **Sitemap دینامیک**

باید تمام محصولات در sitemap باشند:

```typescript
// sitemap.ts
const rahyabProducts = ['RX-112', 'RX-40', 'RX-608', 'RXD-320', 'RXD-1400'];
const voipPhones = voipPhones.map(p => p.id);
const gateways = gateways.map(g => g.id);

// اضافه کردن به sitemap
```

### 10. **Google Search Console**

1. ثبت سایت در Google Search Console
2. ارسال Sitemap
3. بررسی خطاها
4. مانیتور کردن کلمات کلیدی

### 11. **Google Analytics**

```typescript
// در layout.tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
```

### 12. **سرعت سایت**

- ✅ استفاده از Next.js Image
- ✅ Lazy Loading
- ⚠️ فشرده‌سازی تصاویر (WebP)
- ⚠️ Minify CSS/JS
- ⚠️ CDN برای تصاویر

### 13. **Mobile-Friendly**

- ✅ Responsive Design
- ✅ Touch-Friendly Buttons
- ⚠️ تست در Google Mobile-Friendly Test

### 14. **محتوای بلاگ (اختیاری)**

ایجاد بلاگ با مقالات مفید:
- "راهنمای خرید سانترال"
- "تفاوت سانترال دیجیتال و آنالوگ"
- "نحوه نصب و راه‌اندازی مرکز تلفن"
- "مقایسه برندهای مختلف سانترال"

## 📊 چک‌لیست نهایی

### صفحه اصلی:
- [x] Title بهینه
- [x] Description بهینه
- [x] Keywords
- [x] Schema.org
- [x] Open Graph
- [ ] محتوای متنی کافی (500+ کلمه)

### صفحات محصولات:
- [ ] Metadata برای هر محصول
- [ ] Alt text برای تصاویر
- [ ] Schema markup
- [ ] Breadcrumbs
- [ ] Internal links
- [ ] محتوای متنی (300+ کلمه)

### تکنیکال:
- [x] Sitemap.xml
- [x] Robots.txt
- [ ] Canonical URLs
- [ ] 404 Page
- [ ] SSL Certificate
- [ ] Page Speed

### خارجی:
- [ ] Google Search Console
- [ ] Google Analytics
- [ ] Google My Business
- [ ] Backlinks
- [ ] Social Media

## 🎯 اولویت‌بندی کارها

### فوری (هفته اول):
1. اضافه کردن metadata به صفحات محصولات
2. بهینه‌سازی alt text تصاویر
3. ثبت در Google Search Console
4. ارسال Sitemap

### مهم (هفته دوم):
5. اضافه کردن Schema markup به محصولات
6. بهینه‌سازی سرعت سایت
7. اضافه کردن Breadcrumbs
8. تست Mobile-Friendly

### متوسط (ماه اول):
9. ایجاد محتوای بیشتر
10. Internal linking
11. Google Analytics
12. بهینه‌سازی تصاویر (WebP)

### بلندمدت:
13. ایجاد بلاگ
14. Link building
15. Social media marketing
16. Google Ads (اختیاری)

## 📞 اطلاعات تماس برای SEO

```
نام کسب‌وکار: شرکت رهیاب محمدی
آدرس: تهران، سبلان شمالی، خیابان شهید شجاعی، پلاک 38
تلفن: 021-88440345
موبایل: 0912-535-4811
ایمیل: rahyabmhmd@gmail.com
وبسایت: https://myrahyab.ir
```

## 🔍 کلمات کلیدی هدف (Top 20)

1. مرکز تلفن
2. سانترال
3. رهیاب
4. RX-112
5. سانترال دیجیتال
6. تلفن پاناسونیک
7. VoIP
8. تلفن IP
9. سانترال تهران
10. خرید سانترال
11. قیمت سانترال
12. تلفن بیسیم
13. گیتوی VoIP
14. مرکز تلفن دیجیتال
15. سانترال پاناسونیک
16. تلفن سازمانی
17. RXD-320
18. تلفن تحت شبکه
19. سانترال IP
20. تجهیزات ارتباطی

## 💡 نکات مهم

1. **محتوا پادشاه است**: هرچه محتوای بیشتر و باکیفیت‌تری داشته باشید، رتبه بهتری خواهید گرفت
2. **صبر کنید**: SEO زمان می‌برد (3-6 ماه)
3. **مانیتور کنید**: هر هفته Google Search Console را چک کنید
4. **به‌روز باشید**: محتوا را به‌روز نگه دارید
5. **کاربر محور**: برای کاربر بنویسید، نه برای گوگل

## 🚀 شروع کنید!

اولین قدم: اضافه کردن metadata به صفحات محصولات
دومین قدم: ثبت در Google Search Console
سومین قدم: بهینه‌سازی تصاویر

موفق باشید! 🎉
