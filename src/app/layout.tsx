// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import FloatingContactWidget from "@/components/common/FloatingContactWidget";
// import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://myrahyab.ir"),
  title: {
    default: "شرکت رهیاب | مرکز تلفن، سانترال پاناسونیک و تجهیزات ویپ (VoIP)",
    template: "%s | رهیاب",
  },

  description:
    "شرکت رهیاب با بیش از ۳۰ سال تجربه، تولیدکننده مرکز تلفن و نمایندگی فروش و نصب سانترال پاناسونیک، تجهیزات ویپ (VoIP)، گیت‌وی‌ها و تلفن‌های تحت شبکه با گارانتی معتبر و ۱۰ سال خدمات پس از فروش. تماس: ۰۲۱-۸۸۴۴۰۳۴۵",

  keywords: [
    // برند اصلی
    "رهیاب",
    "شرکت رهیاب",
    "Rahyab",
    "مرکز تلفن رهیاب",
    "سانترال رهیاب",
    "رهیاب محمدی",
    "شرکت رهیاب محمدی",
    "Rahyab Mohammadi",
    "مرکز تلفن رهیاب محمدی",
    "سانترال رهیاب محمدی",
    "محمد رهیاب",
    "محمدی رهیاب",
    
    // محصولات رهیاب - سری RX
    "RX-608",
    "RX-112",
    "RX-40",
    "مرکز تلفن RX-608",
    "مرکز تلفن RX-112",
    "مرکز تلفن RX-40",
    "سانترال RX-608",
    "سانترال RX-112",
    "سانترال RX-40",
    "خرید RX-112",
    "قیمت RX-112",
    "خرید RX-40",
    "قیمت RX-40",
    
    // محصولات رهیاب - سری RXD
    "RXD-320",
    "RXD-1400",
    "مرکز تلفن RXD-320",
    "مرکز تلفن RXD-1400",
    "سانترال RXD-320",
    "سانترال RXD-1400",
    "سانترال دیجیتال RXD",
    "خرید RXD-320",
    "قیمت RXD-320",
    
    // مرکز تلفن و سانترال - عمومی
    "مرکز تلفن",
    "سانترال",
    "خرید سانترال",
    "قیمت سانترال",
    "فروش سانترال",
    "نصب سانترال",
    "راه اندازی سانترال",
    "تعمیر سانترال",
    "سرویس سانترال",
    "پشتیبانی سانترال",
    "گارانتی سانترال",
    "تلفن سازمانی",
    "تجهیزات ارتباطی",
    "سیستم تلفنی",
    
    // انواع سانترال
    "مرکز تلفن دیجیتال",
    "مرکز تلفن آنالوگ",
    "سانترال دیجیتال",
    "سانترال آنالوگ",
    "سانترال هایبرید",
    "سانترال IP",
    "IP PBX",
    "سانترال تحت شبکه",
    
    // تکنولوژی
    "VoIP",
    "Voice over IP",
    "تلفن تحت شبکه",
    "تلفن IP",
    "IP Telephony",
    "SIP",
    "SIP Phone",
    "ترانک دیجیتال",
    "DID",
    "Caller ID",
    "شماره انداز",
    "تلفن گویا",
    "IVR",
    "منشی تلفنی",
    "اپراتور خودکار",
    
    // برند پاناسونیک
    "پاناسونیک",
    "Panasonic",
    "تلفن پاناسونیک",
    "گوشی پاناسونیک",
    "سانترال پاناسونیک",
    "تلفن سانترال پاناسونیک",
    
    // گوشی های پاناسونیک - دیجیتال
    "KX-T7630",
    "KX-T7625",
    "KX-DT543",
    "KX-T7603",
    "KX-T7633",
    "KX-T7640",
    "KX-T7636",
    "KX-DT346",
    "KX-DT343",
    "KX-DT321",
    "KX-DT333",
    "KX-T7667",
    "KX-T7665",
    "تلفن دیجیتال پاناسونیک",
    "گوشی دیجیتال پاناسونیک",
    
    // گوشی های پاناسونیک - IP
    "KX-NT400",
    "KX-UT670B",
    "KX-NT366",
    "KX-NT346",
    "KX-NT343",
    "KX-NT321",
    "تلفن IP پاناسونیک",
    "گوشی IP پاناسونیک",
    "تلفن تحت شبکه پاناسونیک",
    
    // گوشی های پاناسونیک - SIP
    "KX-UT113",
    "KX-UT136B",
    "KX-UT123",
    "KX-HGT100",
    "KX-UT670",
    "KX-TGP550",
    "KX-UT248",
    "تلفن SIP پاناسونیک",
    "گوشی SIP پاناسونیک",
    
    // گوشی های پاناسونیک - بیسیم
    "KX-TG3822",
    "KX-TG6643",
    "KX-TG6632",
    "KX-TG3722",
    "KX-TG6641",
    "KX-TG6451",
    "KX-TG3711",
    "KX-TG3821",
    "KX-TG7622",
    "KX-TG2360",
    "KX-TG9341",
    "KX-TG3661",
    "KX-TG3721",
    "KX-TG2361",
    "KX-TG6532",
    "KX-TG6542",
    "KX-TG6531",
    "KX-TG7642",
    "تلفن بیسیم پاناسونیک",
    "گوشی بیسیم پاناسونیک",
    "تلفن بی سیم پاناسونیک",
    
    // برند سامسونگ
    "سامسونگ",
    "Samsung",
    "تلفن سامسونگ",
    "گوشی سامسونگ",
    "سانترال سامسونگ",
    "SMT-i3100",
    "SMT-i5210",
    "SMT-i5220",
    "SMT-i5243",
    "DS-5000",
    "تلفن IP سامسونگ",
    "تلفن دیجیتال سامسونگ",
    
    // برند گرند استریم
    "گرند استریم",
    "Grandstream",
    "GXV-3275",
    "GXV-3240",
    "تلفن گرند استریم",
    "تلفن اندروید",
    "تلفن ویدئویی",
    
    // برند PGM و گویان افزار
    "PGM",
    "گویان افزار",
    "تلفن گویان افزار",
    "تلفن VIDEO IP",
    "DK Phones",
    
    // انواع تلفن
    "تلفن دیجیتال",
    "تلفن آنالوگ",
    "تلفن IP",
    "تلفن SIP",
    "تلفن بیسیم",
    "تلفن بی سیم",
    "تلفن تحت شبکه",
    "تلفن هایبرید",
    "تلفن کنفرانس",
    "تلفن ویدئویی",
    "تلفن اداری",
    "تلفن رومیزی",
    "تلفن مدیریتی",
    "تلفن کارمندی",
    "گوشی تلفن",
    "گوشی سانترال",
    
    // کنسول و لوازم جانبی
    "کنسول سانترال",
    "کنسول تلفن",
    "صفحه کلید سانترال",
    "DSS",
    "BLF",
    "KX-NT305",
    "KX-NT303",
    
    // ظرفیت
    "سانترال 8 خط",
    "سانترال 16 خط",
    "سانترال 32 خط",
    "سانترال 40 خط",
    "سانترال 64 خط",
    "سانترال 104 خط",
    "سانترال 512 خط",
    "مرکز تلفن کوچک",
    "مرکز تلفن متوسط",
    "مرکز تلفن بزرگ",
    
    // کاربردها
    "سانترال هتل",
    "سانترال بیمارستان",
    "سانترال اداری",
    "سانترال شرکتی",
    "سانترال صنعتی",
    "سانترال کارخانه",
    "سانترال مجتمع",
    "سانترال ساختمان",
    "سانترال آپارتمان",
    "سانترال مدرسه",
    "سانترال دانشگاه",
    "سانترال فروشگاه",
    "سانترال رستوران",
    "سانترال کلینیک",
    "سانترال مطب",
    "مرکز تماس",
    "Call Center",
    
    // جغرافیایی
    "سانترال تهران",
    "مرکز تلفن تهران",
    "خرید سانترال تهران",
    "فروش سانترال تهران",
    "نصب سانترال تهران",
    "تعمیر سانترال تهران",
    "سانترال شمال تهران",
    "سانترال غرب تهران",
    "سانترال شرق تهران",
    "سانترال جنوب تهران",
    
    // خدمات
    "نصب و راه اندازی سانترال",
    "تعمیر و سرویس سانترال",
    "پشتیبانی سانترال",
    "نگهداری سانترال",
    "برنامه ریزی سانترال",
    "آموزش سانترال",
    "مشاوره سانترال",
    "طراحی شبکه تلفن",
    
    // ویژگی ها و قابلیتها
    "منشی تلفنی دیجیتال",
    "ضبط مکالمات",
    "ضبط تماس",
    "ضبط صدا",
    "تلفن گویا",
    "منشی گویا",
    "IVR",
    "اپراتور خودکار",
    "منشی خودکار",
    "گزارش گیری تماس",
    "گزارش مکالمات",
    "شارژینگ",
    "شارژ تماس",
    "دفترچه تلفن",
    "دفترچه مخاطبین",
    "موزیک انتظار",
    "موزیک هولد",
    "زنگ مرکزی",
    "درب بازکن",
    "Paging",
    "فراخوان",
    "اعلام حریق",
    "کنفرانس",
    "کنفرانس کال",
    "انتقال تماس",
    "انتظار تماس",
    "بلندگو",
    "اسپیکر",
    "هدست",
    "بلوتوث",
    "WiFi",
    "PoE",
    "Power over Ethernet",
    "Caller ID",
    "شماره انداز",
    "نمایش شماره",
    
    // قیمت و خرید
    "قیمت مرکز تلفن",
    "قیمت سانترال",
    "خرید مرکز تلفن",
    "خرید سانترال",
    "فروش مرکز تلفن",
    "فروش سانترال",
    "قیمت تلفن پاناسونیک",
    "خرید تلفن پاناسونیک",
    "قیمت تلفن سامسونگ",
    "خرید تلفن سامسونگ",
    "قیمت تلفن بیسیم",
    "خرید تلفن بیسیم",
    
    // مقایسه
    "مقایسه سانترال",
    "بهترین سانترال",
    "بهترین مرکز تلفن",
    "تفاوت سانترال دیجیتال و آنالوگ",
    "مقایسه پاناسونیک و سامسونگ",
    
    // سوالات متداول
    "چگونه سانترال بخریم",
    "راهنمای خرید سانترال",
    "نحوه انتخاب سانترال",
    "سانترال چیست",
    "مرکز تلفن چیست",
    "VoIP چیست",
    "IP PBX چیست",
  ],

  // اطلاعات نویسنده
  authors: [{ name: "شرکت رهیاب", url: "https://myrahyab.ir" }],
  creator: "شرکت رهیاب",
  publisher: "شرکت رهیاب",

  // تنظیمات زبان و منطقه
  alternates: {
    canonical: "https://myrahyab.ir",
  },

  // Open Graph - برای شبکه‌های اجتماعی (واتساپ، تلگرام، اینستا)
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: "https://myrahyab.ir",
    siteName: "رهیاب - مرکز تلفن و سانترال",
    title: "رهیاب | مرکز تلفن، سانترال و تجهیزات ارتباطی",
    description:
      "شرکت رهیاب با 30+ سال تجربه، تولیدکننده مرکز تلفن، سانترال RX و RXD با گارانتی و پشتیبانی 10 ساله. تماس: 021-88440345",
    images: [
      {
        url: "https://myrahyab.ir/logo.png",
        width: 512,
        height: 512,
        alt: "لوگوی شرکت رهیاب",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary",
    title: "رهیاب | مرکز تلفن و سانترال",
    description: "30+ سال تجربه در تولید و فروش مرکز تلفن و سانترال",
    images: ["https://myrahyab.ir/logo.png"],
  },

  // تنظیمات ربات‌های گوگل
  robots: {
    index: true, // اجازه ایندکس شدن در گوگل
    follow: true, // اجازه فالو کردن لینک‌ها
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // کدهای تایید - بعداً از Google Search Console میگیرید
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE", // بعداً جایگزین کنید
    // yandex: "YOUR_YANDEX_CODE",
    // bing: "YOUR_BING_CODE",
  },

  // تنظیم آیکون‌های رسمی رهیاب برای گوگل و تب‌های مرورگر
  icons: {
    icon: [
      { url: "/logo.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/logo.png",
  },

  // اطلاعات تماس
  other: {
    "contact:phone_number": "+98-21-88440345",
    "contact:mobile_number": "+98-912-5354811",
    "contact:email": "rahyabmhmd@gmail.com",
    "contact:address": "تهران، سبلان شمالی، خیابان شهید شجاعی، پلاک 38",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        {/* Favicon & App Icons */}
        <link rel="icon" type="image/png" sizes="512x512" href="/logo.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="48x48"
          href="/favicon-48x48.png"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        {/* Schema.org JSON-LD برای گوگل */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://myrahyab.ir",
              name: "شرکت رهیاب محمدی",
              alternateName: ["Rahyab", "Rahyab Mohammadi", "رهیاب", "مرکز تلفن رهیاب"],
              image: "https://myrahyab.ir/logo.png",
              logo: "https://myrahyab.ir/logo.png",
              description: "تولید و فروش مرکز تلفن، سانترال و تجهیزات ارتباطی",
              url: "https://myrahyab.ir",
              telephone: "+98-21-88440345",
              email: "rahyabmhmd@gmail.com",

              // آدرس
              address: {
                "@type": "PostalAddress",
                streetAddress: "سبلان شمالی، خیابان شهید شجاعی، پلاک 38",
                addressLocality: "تهران",
                addressRegion: "تهران",
                addressCountry: "IR",
              },

              // موقعیت جغرافیایی (گوگل مپ)
              geo: {
                "@type": "GeoCoordinates",
                latitude: "35.7597", // مختصات دقیق شرکتتون
                longitude: "51.4100",
              },

              // ساعت کاری
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
                  opens: "08:00",
                  closes: "17:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "08:00",
                  closes: "14:00",
                },
              ],

              // شبکه‌های اجتماعی
              sameAs: [
                "https://instagram.com/rahyab_official", // اگه دارید
                "https://t.me/rahyab_official",
                "https://linkedin.com/company/rahyab",
              ],

              // محصولات و خدمات
              // قسمت hasOfferCatalog رو پیدا کن و کامل جایگزین کن:

              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "محصولات رهیاب",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "مرکز تلفن رهیاب RX-112",
                      description: "مرکز تلفن کامپیوتری 8/40 تا 8/104",
                      image: "https://myrahyab.ir/imageLanding/rx-112.jpg",
                      sku: "RX-112",
                      brand: {
                        "@type": "Brand",
                        name: "رهیاب",
                      },
                      offers: {
                        "@type": "Offer",
                        url: "https://myrahyab.ir/products/rahyab/RX-112",
                        priceCurrency: "IRR",
                        price: "0",
                        availability: "https://schema.org/InStock",
                        seller: {
                          "@type": "Organization",
                          name: "شرکت رهیاب",
                        },
                      },
                      aggregateRating: {
                        "@type": "AggregateRating",
                        ratingValue: "4.7",
                        reviewCount: "28",
                      },
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "مرکز تلفن رهیاب RX-40",
                      description: "مرکز تلفن کامپیوتری 8/8 تا 8/32",
                      image: "https://myrahyab.ir/imageLanding/rx-40.jpg",
                      sku: "RX-40",
                      brand: {
                        "@type": "Brand",
                        name: "رهیاب",
                      },
                      offers: {
                        "@type": "Offer",
                        url: "https://myrahyab.ir/products/rahyab/RX-40",
                        priceCurrency: "IRR",
                        price: "0",
                        availability: "https://schema.org/InStock",
                        seller: {
                          "@type": "Organization",
                          name: "شرکت رهیاب",
                        },
                      },
                      aggregateRating: {
                        "@type": "AggregateRating",
                        ratingValue: "4.6",
                        reviewCount: "18",
                      },
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "مرکز تلفن دیجیتال RXD-320",
                      description: "مرکز تلفن دیجیتال با ترانک دیجیتال و VoIP",
                      image: "https://myrahyab.ir/imageLanding/rxd-320.jpg",
                      sku: "RXD-320",
                      brand: {
                        "@type": "Brand",
                        name: "رهیاب",
                      },
                      offers: {
                        "@type": "Offer",
                        url: "https://myrahyab.ir/products/rahyab/RXD-320",
                        priceCurrency: "IRR",
                        price: "0",
                        availability: "https://schema.org/InStock",
                        seller: {
                          "@type": "Organization",
                          name: "شرکت رهیاب",
                        },
                      },
                      aggregateRating: {
                        "@type": "AggregateRating",
                        ratingValue: "4.8",
                        reviewCount: "22",
                      },
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "مرکز تلفن دیجیتال RXD-1400",
                      description:
                        "مرکز تلفن دیجیتال ظرفیت بالا برای سازمان‌های بزرگ",
                      image: "https://myrahyab.ir/imageLanding/rxd-1400.jpg",
                      sku: "RXD-1400",
                      brand: {
                        "@type": "Brand",
                        name: "رهیاب",
                      },
                      offers: {
                        "@type": "Offer",
                        url: "https://myrahyab.ir/products/rahyab/RXD-1400",
                        priceCurrency: "IRR",
                        price: "0",
                        availability: "https://schema.org/InStock",
                        seller: {
                          "@type": "Organization",
                          name: "شرکت رهیاب",
                        },
                      },
                      aggregateRating: {
                        "@type": "AggregateRating",
                        ratingValue: "4.9",
                        reviewCount: "15",
                      },
                    },
                  },
                ],
              },

              // رتبه و نظرات (اختیاری)
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "150",
              },
            }),
          }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "شرکت رهیاب محمدی",
              alternateName: ["Rahyab", "Rahyab Mohammadi", "رهیاب"],
              url: "https://myrahyab.ir",
              logo: "https://myrahyab.ir/logo.png",
              foundingDate: "1994",
              description: "بیش از 30 سال تجربه در تولید مرکز تلفن و سانترال",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+98-21-88440345",
                contactType: "Customer Service",
                areaServed: "IR",
                availableLanguage: "Persian",
              },
            }),
          }}
        />
      </head>

      <body className="antialiased">
        <Navbar />
        <main className="pt-[60px] sm:pt-[94px]">{children}</main>
        <Footer />
        <FloatingContactWidget />

        {/* Google Analytics - بعداً کد خودتون رو اینجا بذارید */}
        {/* <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script> */}
      </body>
    </html>
  );
}
