"use client";

import React from "react";
import Link from "next/link";
import { FaPhoneAlt, FaCheckCircle, FaShieldAlt, FaArrowLeft, FaAward } from "react-icons/fa";

export default function ProductsRahyab() {
  const products = [
    {
      id: "rx-112",
      model: "RX-112",
      title: "مرکز تلفن کامپیوتری رهیاب RX-112",
      badge: "پرفروش‌ترین مدل سازمانی",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      capacity: "۸ تا ۱۶ خط شهری / ۴۰ تا ۱۰۴ خط داخلی",
      desc: "سیستم کامپیوتری هوشمند دارای ضبط مکالمات رایگان، تلفن گویا چندکاناله، نرم‌افزار مدیریت تمام فارسی و بدون نیاز به خرید کارت‌های جانبی.",
      image: "/imageLanding/rx-112.jpg",
      link: "/products/rahyab/RX-112",
      specs: ["ضبط مکالمات پیش‌فرض", "منوی تمام فارسی", "۱ سال گارانتی تعویض", "۱۰ سال خدمات شرکت"],
    },
    {
      id: "rx-40",
      model: "RX-40",
      title: "مرکز تلفن اداری رهیاب RX-40",
      badge: "اقتصادی‌ترین انتخاب دفاتر",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      capacity: "۲ تا ۶ خط شهری / ۸ تا ۲۴ خط داخلی",
      desc: "جایگزین اقتصادی و پایدار سانترال‌های کم‌ظرفیت خارجی با تلفن گویا، نمایشگر شماره (کالر آیدی) و نصب فوق‌العاده آسان.",
      image: "/imageLanding/rx-40.jpg",
      link: "/products/rahyab/RX-40",
      specs: ["تلفن گویا هوشمند", "کالر آیدی استاندارد", "اتصال به انواع گوشی", "قیمت ریالی اقتصادی"],
    },
    {
      id: "rxd-320",
      model: "RXD-320",
      title: "مرکز تلفن دیجیتال رهیاب RXD-320",
      badge: "دیجیتال و سازگار با VoIP",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
      capacity: "تا ۶۴ خط شهری / ۳۲۰ خط داخلی دیجیتال",
      desc: "مرکز تلفن دیجیتال پیشرفته با قابلیت ترانک دیجیتال E1/PRI، لینک با سرورهای ویپ و کیفیت صدای کریستالی بدون نویز.",
      image: "/imageLanding/rxd-320.jpg",
      link: "/products/rahyab/RXD-320",
      specs: ["پشتیبانی ترانک E1", "لینک با سیستم VoIP", "صف تماس پیشرفته", "گزارش‌گیری دقیق تماس"],
    },
    {
      id: "rxd-1400",
      model: "RXD-1400",
      title: "مرکز تلفن کلان رهیاب RXD-1400",
      badge: "حداکثر ظرفیت سازمانی",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
      capacity: "تا ۱۲۸ خط شهری / تا ۱۴۰۰ داخلی",
      desc: "طراحی شده برای بیمارستان‌های بزرگ، وزارتخانه‌ها، برج‌ها و کارخانجات صنعتی با پایداری شبانه‌روزی و بدون وقفه.",
      image: "/imageLanding/rxd-1400.jpg",
      link: "/products/rahyab/RXD-1400",
      specs: ["ماژولار و گسترش‌پذیر", "پاور پشتیبان Redundant", "امکانات اختصاصی اداری", "پشتیبانی VIP"],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#f4f7fc] via-white to-[#f8faff] font-xmedium text-slate-800">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        {/* عنوان بخش */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#253359] text-xs font-xbold mb-3 border border-blue-100">
              <FaAward className="text-amber-500" />
              <span>تولید ملی با ۳۰ سال سابقه درخشان</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-xbold text-[#141d33] tracking-tight">
              مراکز تلفن هوشمند رهیاب (سری RX و RXD)
            </h2>
            <p className="text-sm md:text-base text-slate-500 font-xregular mt-2 max-w-2xl leading-7">
              طراحی اختصاصی متناسب با شبکه مخابرات ایران؛ دارای منوی کاملاً فارسی، ضبط مکالمات رایگان، ۱ سال گارانتی تعویض کتبی و بدون وابستگی به نوسانات دلار.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start lg:self-end">
            <Link
              href="/blog/moghayese-central-panasonic-va-rahyab"
              className="text-xs font-xbold text-blue-700 hover:underline"
            >
              📖 مقایسه رهیاب با سانترال پاناسونیک
            </Link>
            <a
              href="tel:09125354811"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#253359] text-white text-xs md:text-sm font-xbold hover:bg-[#1a2542] transition-all shadow-md whitespace-nowrap"
            >
              <FaPhoneAlt className="text-emerald-400" />
              <span>مشاوره خرید: ۰۹۱۲۵۳۵۴۸۱۱</span>
            </a>
          </div>
        </div>

        {/* گرید ۴ کارت مراکز تلفن رهیاب */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                <div className="h-48 bg-slate-50 rounded-2xl p-4 flex items-center justify-center mb-5 overflow-hidden border border-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[11px] font-xbold px-2.5 py-1 rounded-full border ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                  <span className="text-xs font-xbold text-blue-900 bg-blue-50 px-2 py-0.5 rounded-lg">
                    {item.model}
                  </span>
                </div>

                <h3 className="text-base font-xbold text-[#1e2a4a] group-hover:text-blue-700 transition-colors mb-2 leading-snug">
                  <Link href={item.link}>{item.title}</Link>
                </h3>

                <div className="text-xs font-xbold text-emerald-700 bg-emerald-50/80 p-2 rounded-xl mb-3">
                  {item.capacity}
                </div>

                <p className="text-xs text-slate-500 font-xregular leading-6 mb-4 line-clamp-3">
                  {item.desc}
                </p>

                <div className="space-y-1.5 mb-4">
                  {item.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-1.5 text-[11px] text-slate-600">
                      <FaCheckCircle className="text-emerald-500 text-xs flex-shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <Link
                  href={item.link}
                  className="flex-1 py-2.5 text-center rounded-xl bg-[#253359] text-white hover:bg-[#1a2542] text-xs font-xbold transition-colors shadow-sm"
                >
                  مشخصات کامل
                </Link>
                <a
                  href="tel:09125354811"
                  className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white transition-colors"
                  title="استعلام قیمت تلفنی"
                >
                  <FaPhoneAlt className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
