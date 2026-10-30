"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaStar,
  FaPhoneAlt,
  FaHeadset,
  FaTimes,
  FaCheckCircle,
  FaWhatsapp,
  FaShieldAlt,
  FaInfoCircle,
} from "react-icons/fa";

interface DigitalProduct {
  id: number;
  image: string;
  model: string;
  title: string;
  capacity: string;
  description: string;
  features: string[];
  suitable: string[];
}

export default function DigitalPhones() {
  const [selectedProduct, setSelectedProduct] = useState<DigitalProduct | null>(null);

  const products: DigitalProduct[] = [
    {
      id: 1,
      image: "/imageLanding/DK Phones.png",
      model: "DK Phones",
      title: "گوشی‌های دیجیتال PGM سری DK Phones",
      capacity: "30 کلید DSS + 256 کلید اضافی",
      description:
        "صفحه LCD بزرگ، ۳۰ کلید دسترسی آسان قابل تنظیم، اسپیکر و میکروفن دوطرفه کریستالی، قابلیت اضافه شدن ۴ باکس حافظه ۶۴ کلیدی مناسب سانترال‌های پیشرفته.",
      features: ["۳۰ کلید DSS", "LCD بزرگ با نور زمینه", "دفترچه ۵۰۰ شماره", "۲۱ زنگ پلی‌فونیک"],
      suitable: ["شرکت‌های بزرگ", "مراکز تماس", "اپراتورها"],
    },
    {
      id: 2,
      image: "/imageLanding/KX-T7630.png",
      model: "KX-T7630",
      title: "تلفن سانترال دیجیتال پاناسونیک KX-T7630",
      capacity: "24 کلید قابل برنامه‌ریزی",
      description:
        "نمایشگر سه سطری پرنور، بلندگوی تمام دیجیتال با وضوح بالا، ۲۴ کلید CO قابل برنامه‌ریزی، پورت USB، سازگاری کامل با تکنولوژی DXDP پاناسونیک.",
      features: ["نمایشگر ۳ سطری نورانی", "۲۴ کلید CO دو رنگ", "پورت دیجیتال XDP", "اسپیکرفون دوطرفه"],
      suitable: ["دفاتر اداری", "شرکت‌های متوسط", "مدیران"],
    },
    {
      id: 3,
      image: "/imageLanding/DS-5000.png",
      model: "DS-5000",
      title: "تلفن‌های دیجیتال سامسونگ سری DS-5000",
      capacity: "صفحه LCD دو خطی",
      description:
        "تلفن ایده‌آل برای منشی و اپراتور، صفحه LCD با نمایش همزمان دو خط، کلیدهای نرم‌افزاری هوشمند، هشت نوع زنگ قابل انتخاب و بدنه مقاوم اداری.",
      features: ["LCD دو خطی", "کلید نرم‌افزاری ناوبری", "۸ نوع ملودی زنگ", "کلید مدور دسترسی"],
      suitable: ["منشی‌ها", "اپراتورها", "دفاتر و شرکت‌ها"],
    },
    {
      id: 4,
      image: "/imageLanding/KX-T7625.png",
      model: "KX-T7625",
      title: "تلفن سانترال دیجیتال پاناسونیک KX-T7625",
      capacity: "کاملاً دیجیتال",
      description:
        "قابلیت نصب دیواری و رومیزی، مجهز به بلندگوی دیجیتال، کنفرانس چندطرفه، ۲۰ ملودی زنگ، شماره‌گیری سریع و پورت جانبی دیجیتال.",
      features: ["کنفرانس تلفنی", "۲۰ ملودی زنگ", "نصب آسان دیواری", "پورت DXDP"],
      suitable: ["دفاتر اداری", "شرکت‌ها", "کلینیک‌ها"],
    },
    {
      id: 5,
      image: "/imageLanding/KX-DT543.png",
      model: "KX-DT543",
      title: "تلفن سانترال دیجیتال پاناسونیک KX-DT543",
      capacity: "24 کلید CO دو رنگ",
      description:
        "طراحی فوق‌العاده مدرن، نمایشگر سه خطی با نور پشت زمینه سفید یخی، ۲۴ کلید CO دورنگ با چراغ وضعیت، بلندگوی دیجیتال فول دوپلکس و سوئیچ EHS برای هدست بی‌سیم.",
      features: ["نمایشگر ۳ خطی بک‌لایت", "۲۴ کلید CO دو رنگ", "سوئیچ EHS", "اتصال کنسول ۴۸ کلید"],
      suitable: ["محیط‌های مدیریتی", "سازمان‌ها", "شرکت‌های تجاری"],
    },
    {
      id: 6,
      image: "/imageLanding/KX-T7603.png",
      model: "KX-T7603",
      title: "کنسول اختصاصی تلفن دیجیتال پاناسونیک KX-T7603",
      capacity: "12 کلید قابل برنامه‌ریزی",
      description:
        "ماژول توسعه اختصاصی با ۱۲ کلید قابل برنامه‌ریزی اضافی، سازگار با گوشی‌های سری T7636 و T7633، بدون نیاز به اشغال پورت مجزا در سانترال.",
      features: ["۱۲ کلید CO", "طراحی ارگونومیک", "سازگاری با سری TDA و TDE", "نصب ماژولار"],
      suitable: ["دفاتر اداری", "کلینیک‌ها", "وکلا"],
    },
    {
      id: 7,
      image: "/imageLanding/KX-T7633.png",
      model: "KX-T7633",
      title: "تلفن سانترال دیجیتال پاناسونیک KX-T7633",
      capacity: "24 کلید + 12 اختیاری",
      description:
        "نمایشگر ۳ سطری نورانی با زاویه دید متغیر، بلندگوی دیجیتال قدرتمند، ۲۴ کلید CO قابل برنامه‌ریزی، امکان اتصال ماژول ۱۲ کلیدی USB.",
      features: ["نمایشگر ۳ سطری", "۲۴ کلید CO", "پشتیبانی ماژول USB", "اسپیکر دیجیتال"],
      suitable: ["شرکت‌ها", "کسب‌وکارها", "سازمان‌ها"],
    },
    {
      id: 8,
      image: "/imageLanding/KX-T7640.png",
      model: "KX-T7640",
      title: "کنسول اپراتوری اختصاصی پاناسونیک KX-T7640",
      capacity: "60 کلید DSS با چراغ وضعیت",
      description:
        "کنسول اپراتوری با ۶۰ کلید DSS قابل برنامه‌ریزی و چراغ وضعیت دو رنگ (BLF) برای نظارت بر آزاد یا اشغال بودن خطوط داخلی و شهری سازمان.",
      features: ["۶۰ کلید DSS", "نمایشگر وضعیت BLF", "سازگار با سری T76", "بدنه مستحکم اداری"],
      suitable: ["اپراتورهای مرکزی", "منشی مدیرعامل", "مراکز پاسخگویی"],
    },
    {
      id: 9,
      image: "/imageLanding/KX-T7636.png",
      model: "KX-T7636",
      title: "تلفن سانترال دیجیتال مدیریتی پاناسونیک KX-T7636",
      capacity: "نمایشگر ۶ سطری با نور پس‌زمینه",
      description:
        "نمایشگر ۶ سطری بزرگ و خوانا، بلندگوی دیجیتال دوطرفه، ۲۴ کلید قابل برنامه‌ریزی، امکان اتصال پورت USB و ماژول بلوتوث اختیاری.",
      features: ["نمایشگر بزرگ ۶ سطری", "۲۴ کلید CO", "امکان اتصال ماژول USB", "صدای دیجیتال HD"],
      suitable: ["مدیران ارشد", "سازمان‌ها", "دفاتر هلدینگ"],
    },
    {
      id: 10,
      image: "/imageLanding/KX-DT346.png",
      model: "KX-DT346",
      title: "تلفن سانترال دیجیتال پاناسونیک KX-DT346",
      capacity: "نمایشگر ۶ خطی ۲۴ کاراکتری",
      description:
        "تلفن مدیریتی پیشرفته با نمایشگر ۶ سطری با نور سفید، ۲۴ کلید CO دورنگ، پشتیبانی از ماژول بلوتوث و اتصال کنسول ۶۰ کلیدی DSS.",
      features: ["نمایشگر ۶ خطی پرنور", "ماژول بلوتوث اختیاری", "پشتیبانی کنسول DSS", "طراحی ارگونومیک"],
      suitable: ["محیط‌های فوق‌حرفه‌ای", "مدیران", "سازمان‌ها"],
    },
    {
      id: 11,
      image: "/imageLanding/KX-DT343.png",
      model: "KX-DT343",
      title: "تلفن سانترال دیجیتال پاناسونیک KX-DT343",
      capacity: "نمایشگر ۳ سطری نورانی",
      description:
        "نمایشگر ۳ سطری نورانی، ۲۴ کلید CO با چراغ LED دورنگ، بلندگوی دیجیتال دوطرفه، قابلیت تنظیم در ۷ زاویه شیب مختلف متناسب با میز کاربری.",
      features: ["نمایشگر ۳ سطری", "۲۴ کلید DSS دورنگ", "تنظیم در ۷ زاویه شیب", "کیفیت صدای عالی"],
      suitable: ["مدیران میانی", "دفاتر تجاری", "شرکت‌ها"],
    },
    {
      id: 12,
      image: "/imageLanding/KX-DT321.png",
      model: "KX-DT321",
      title: "تلفن سانترال دیجیتال پاناسونیک KX-DT321",
      capacity: "LCD یک سطری با ۸ کلید CO",
      description:
        "تلفن دیجیتال کارمندی اقتصادی، دارای نمایشگر یک سطری خوانا، ۸ کلید CO قابل برنامه‌ریزی، بلندگوی دیجیتال و قیمت بسیار مناسب سازمانی.",
      features: ["LCD یک سطری", "۸ کلید CO برنامه‌ریزی", "بلندگوی دیجیتال", "قیمت اقتصادی سازمانی"],
      suitable: ["کارمندان", "دفاتر کوچک", "شعبات شرکت‌ها"],
    },
    {
      id: 13,
      image: "/imageLanding/KX-DT333.png",
      model: "KX-DT333",
      title: "تلفن سانترال دیجیتال پاناسونیک KX-DT333",
      capacity: "24 کلید CO با صفحه ۳ سطری",
      description:
        "نمایشگر ۳ سطری نورانی، ۲۴ کلید CO قابل برنامه‌ریزی، بلندگوی تمام دیجیتال با کیفیت صدای طبیعی، پورت اضافه دیجیتال DXDP.",
      features: ["نمایشگر ۳ سطری نورانی", "۲۴ کلید CO", "اتصال به کنسول ۶۰ کلید", "DXDP"],
      suitable: ["مدیران", "اپراتورها", "شرکت‌ها"],
    },
    {
      id: 14,
      image: "/imageLanding/KX-T7667.png",
      model: "KX-T7667",
      title: "تلفن سانترال دیجیتال پاناسونیک KX-T7667",
      capacity: "12 کلید قابل برنامه‌ریزی",
      description:
        "نمایشگر یک سطری پرنور، ۱۲ کلید CO با چراغ وضعیت، کیفیت صوتی عالی، طراحی هوشمند و بادوام برای استفاده مداوم اداری.",
      features: ["نمایشگر ۱ سطری", "۱۲ کلید CO", "چراغ وضعیت پیام و تماس", "کنفرانس تلفنی"],
      suitable: ["دفاتر کارشناسی", "شرکت‌ها", "سازمان‌ها"],
    },
    {
      id: 15,
      image: "/imageLanding/KX-T7665.png",
      model: "KX-T7665",
      title: "تلفن سانترال دیجیتال پاناسونیک KX-T7665",
      capacity: "8 کلید CO با پورت DXDP",
      description:
        "تلفن دیجیتال اداری با نمایشگر یک سطری، بلندگوی دیجیتال با صدای شفاف، ۸ کلید CO و پورت DXDP جهت اتصال یک گوشی دیجیتال دیگر بدون کابل‌کشی اضافی.",
      features: ["نمایشگر ۱ سطری", "۸ کلید CO", "پورت DXDP", "کیفیت ساخت صنعتی"],
      suitable: ["کارمندان", "اتاق‌های اداری", "شرکت‌ها"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9ff] via-white to-[#f0f2ff] py-4 md:py-8 font-xmedium text-slate-800">
      {/* هدر صفحه */}
      <div className="relative overflow-hidden mb-12">
        <div className="relative bg-gradient-to-br from-[#253359] via-[#1e2a4a] to-[#0f1525] text-white py-12 md:py-16 px-6 md:px-12 rounded-3xl shadow-2xl mx-4">
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-xs font-xbold text-emerald-300">
              <FaStar /> تلفن‌های دیجیتال و اپراتوری سازمانی
            </div>

            <h1 className="text-2xl md:text-4xl lg:text-5xl font-xbold mb-4 leading-tight">
              گوشی‌های تلفن سانترال دیجیتال
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-emerald-200 mt-2">
                پاناسونیک، سامسونگ و کنسول‌های اختصاصی
              </span>
            </h1>

            <p className="text-sm md:text-base leading-8 font-xregular text-white/90 max-w-3xl mx-auto mb-8">
              مجموعه‌ای کامل از انواع تلفن‌های مدیریتی، کارمندی و کنسول‌های اپراتوری DSS برای سانترال‌های پرظرفیت پاناسونیک (سری TDA, TDE, NS500) با صدای دیجیتال شفاف و گارانتی اصالت شرکت رهیاب.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="tel:09125354811"
                className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-xbold text-xs md:text-sm transition-all shadow-lg hover:scale-105 flex items-center gap-2"
              >
                <FaPhoneAlt />
                <span>استعلام موجودی و قیمت: ۰۹۱۲۵۳۵۴۸۱۱</span>
              </a>
              <a
                href="tel:02188440345"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-xbold text-xs md:text-sm border border-white/20 transition-all"
              >
                دفتر مرکزی: ۰۲۱-۸۸۴۴۰۳۴۵
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* آمار خلاصه */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 px-4 max-w-[1440px] mx-auto">
        {[
          { number: "۱۵+", label: "مدل تلفن دیجیتال", color: "from-blue-500 to-blue-600" },
          { number: "۶۰", label: "حداکثر کلید DSS", color: "from-purple-500 to-purple-600" },
          { number: "DXDP", label: "پورت توسعه دوگانه", color: "from-emerald-500 to-teal-600" },
          { number: "۱ سال", label: "گارانتی معتبر شرکت", color: "from-indigo-500 to-indigo-600" },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 text-center hover:shadow-md transition-all"
          >
            <div className="text-3xl font-xbold text-[#253359] mb-1">{stat.number}</div>
            <div className="text-xs text-slate-500 font-xmedium">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* لیست کارت‌های محصولات */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 px-4 max-w-[1440px] mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col justify-between overflow-hidden"
          >
            <div>
              {/* بج مدل بالای تصویر */}
              <div className="absolute top-4 left-4 z-10 bg-[#253359] text-white px-3 py-1 rounded-full text-xs font-xbold shadow-md dir-ltr">
                {product.model}
              </div>

              {/* تصویر محصول */}
              <div className="relative h-52 bg-slate-50 flex items-center justify-center p-6 border-b border-slate-100">
                <img
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  src={product.image}
                  alt={product.title}
                />
              </div>

              {/* محتوای متنی کارت */}
              <div className="p-6">
                <h3 className="text-base font-xbold text-[#141d33] mb-2 leading-7">
                  {product.title}
                </h3>

                <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                  <span className="font-xbold text-slate-700">ظرفیت: {product.capacity}</span>
                </div>

                <p className="text-xs text-slate-600 font-xregular leading-6 mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* ویژگی‌ها */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {product.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-50 text-blue-800 px-2.5 py-1 rounded-lg text-[11px] font-xmedium border border-blue-100"
                    >
                      ✓ {feature}
                    </span>
                  ))}
                </div>

                {/* مناسب برای */}
                <div className="p-2.5 bg-slate-50 rounded-xl mb-4 text-xs text-slate-500">
                  <strong className="text-slate-700 block mb-1">مناسب برای:</strong>
                  <div className="flex flex-wrap gap-1.5">
                    {product.suitable.map((item, idx) => (
                      <span key={idx} className="bg-white px-2 py-0.5 rounded border border-slate-200 text-[11px]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* دکمه‌های اقدام: مشاوره + جزئیات بیشتر */}
            <div className="p-6 pt-0 grid grid-cols-2 gap-3">
              <a
                href="tel:09125354811"
                className="bg-gradient-to-r from-[#253359] to-[#1a2440] hover:from-blue-900 hover:to-indigo-900 text-white py-2.5 rounded-xl font-xbold text-xs flex items-center justify-center gap-1.5 shadow-md transition-all"
              >
                <FaPhoneAlt className="text-[10px]" />
                <span>مشاوره و خرید</span>
              </a>

              <button
                onClick={() => setSelectedProduct(product)}
                className="bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 hover:text-[#253359] py-2.5 rounded-xl font-xbold text-xs flex items-center justify-center gap-1.5 transition-all"
              >
                <FaInfoCircle className="text-xs text-blue-600" />
                <span>جزئیات بیشتر</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* مدال تعاملی جزییات بیشتر محصول */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 md:p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* دکمه بستن */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 left-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
              aria-label="بستن پنجره"
            >
              <FaTimes />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-6">
              <div className="h-56 bg-slate-50 rounded-2xl flex items-center justify-center p-4 border border-slate-100">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-xbold mb-2">
                  مدل: {selectedProduct.model}
                </span>
                <h3 className="text-lg md:text-xl font-xbold text-[#253359] mb-2 leading-7">
                  {selectedProduct.title}
                </h3>
                <div className="text-xs text-slate-600 mb-3">
                  <strong>ظرفیت: </strong> {selectedProduct.capacity}
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-lg text-xs font-xbold border border-emerald-200">
                  <FaShieldAlt /> ۱ سال گارانتی معتبر شرکت رهیاب
                </div>
              </div>
            </div>

            {/* توضیحات کامل */}
            <div className="mb-6">
              <h4 className="text-sm font-xbold text-[#253359] mb-2">شرح کامل مشخصات:</h4>
              <p className="text-xs md:text-sm text-slate-600 font-xregular leading-7 text-justify bg-slate-50 p-4 rounded-2xl border border-slate-100">
                {selectedProduct.description}
              </p>
            </div>

            {/* لیست ویژگی‌های کلیدی */}
            <div className="mb-6">
              <h4 className="text-sm font-xbold text-[#253359] mb-2">قابلیت‌های برجسته:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedProduct.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-blue-50/50 border border-blue-100 text-xs font-xmedium text-slate-700"
                  >
                    <FaCheckCircle className="text-emerald-500 text-xs flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* دکمه‌های اقدام فوری در مدال */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
              <a
                href="tel:09125354811"
                className="flex-1 py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-xbold text-xs md:text-sm text-center flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <FaPhoneAlt />
                <span>تماس مستقیم: ۰۹۱۲۵۳۵۴۸۱۱ (مهندس محمدی)</span>
              </a>

              <a
                href={`https://wa.me/989125354811?text=${encodeURIComponent(`سلام، در خصوص استعلام قیمت و مشخصات تلفن ${selectedProduct.title} سوال داشتم.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-xbold text-xs flex items-center justify-center gap-1.5 transition-all"
              >
                <FaWhatsapp className="text-base" />
                <span>استعلام در واتساپ</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* بنر تماس پایانی */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#253359] via-[#1e2a4a] to-[#0f1525] rounded-3xl p-8 md:p-12 text-center text-white mx-4 max-w-[1440px] md:mx-auto">
        <div className="relative z-10">
          <div className="inline-block mb-4 p-3 bg-white/10 backdrop-blur-sm rounded-2xl">
            <FaHeadset className="text-4xl text-emerald-400" />
          </div>
          <h3 className="text-xl md:text-3xl font-xbold mb-3">
            نیاز به راهنمایی در انتخاب تلفن سانترال مناسب دارید؟
          </h3>
          <p className="text-xs md:text-sm font-xregular mb-6 text-white/80 max-w-xl mx-auto leading-7">
            تلفن‌های دیجیتال نیازمند کارت‌های مربوطه (DLC یا DHLC) روی سانترال پاناسونیک هستند. برای اطمینان از سازگاری تلفن با دستگاه سانترال خود با ما مشورت کنید.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="tel:09125354811"
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-xbold text-xs md:text-sm shadow-lg transition-all"
            >
              مشاوره مستقیم مهندس محمدی: ۰۹۱۲۵۳۵۴۸۱۱
            </a>
            <a
              href="tel:02188440345"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-xbold text-xs md:text-sm border border-white/20 transition-all"
            >
              تلفن دفتر مرکزی: ۰۲۱-۸۸۴۴۰۳۴۵
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
