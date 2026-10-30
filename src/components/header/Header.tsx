"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaShieldAlt,
  FaHeadset,
  FaCheckCircle,
  FaNetworkWired,
  FaArrowLeft,
  FaWhatsapp,
  FaBuilding,
  FaUsers,
  FaAward,
} from "react-icons/fa";

export default function Header() {
  // ویجت هوشمند انتخاب سانترال متناسب با پرسنل
  const [selectedStaffSize, setSelectedStaffSize] = useState<string>("small");

  const recommendations = {
    small: {
      title: "سانترال کم‌ظرفیت پاناسونیک KX-TES824 یا رهیاب RX-40",
      desc: "ایده‌آل برای دفاتر ۱ تا ۸ نفر (قابل افزایش تا ۲۴ داخلی). دارای تلفن گویا، نمایشگر شماره و نصب بسیار آسان.",
      link: "/products/panasonic/low-capacity",
      linkText: "مشاهده مدل‌های کم‌ظرفیت",
      badge: "اقتصادی و محبوب دفاتر",
    },
    medium: {
      title: "مرکز تلفن هوشمند رهیاب RX-112 یا پاناسونیک TDA100D",
      desc: "مناسب شرکت‌های ۸ تا ۴۰ نفر پرسنل. دارای ضبط مکالمات رایگان، نرم‌افزار فارسی، صف انتظار و بدون نیاز به خرید کارت‌های دلاری گران.",
      link: "/products/rahyab/RX-112",
      linkText: "مشاهده مشخصات RX-112",
      badge: "پیشنهاد طلایی شرکت‌ها",
    },
    enterprise: {
      title: "سیستم نوین VoIP (سرور ایزابل + تلفن‌های گرنداستریم) یا TDA600",
      desc: "مناسب سازمان‌های ۴۰ تا ۵۰۰+ نفر، شعبات متعدد و نیازمند دورکاری پرسنل، خطوط سیپ ترانک و تماس رایگان بین شعب.",
      link: "/products/voip",
      linkText: "مشاهده راهکارهای سازمانی VoIP",
      badge: "پیشرفته و نامحدود",
    },
  };

  const currentRec = recommendations[selectedStaffSize as keyof typeof recommendations];

  return (
    <header className="relative pt-6 sm:pt-10 pb-16 lg:pt-12 lg:pb-20 overflow-hidden font-xmedium text-slate-800">
      {/* بک‌گراند گرادیانی نرم و پترن‌های تکنولوژی */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f5f8ff] via-white to-[#edf2fc] -z-10" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* ستون متن و دعوت به اقدام (Hero Left) */}
          <div className="lg:col-span-7 space-y-6 text-right">
            {/* بج افتخار ۳۰ ساله */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200/80 text-[#253359] text-xs font-xbold shadow-sm">
              <FaAward className="text-amber-500 text-sm" />
              <span>۳۰ سال تجربه درخشان در تولید مرکز تلفن و تجهیزات مخابراتی</span>
            </div>

            {/* عنوان اصلی */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-xbold text-[#141d33] leading-[1.3] tracking-tight">
              مرکز تخصصی سانترال پاناسونیک،{" "}
              <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-[#253359] bg-clip-text text-transparent">
                سیستم‌های نوین VoIP
              </span>{" "}
              و مراکز تلفن رهیاب
            </h1>

            {/* توضیحات جامع سئو */}
            <p className="text-sm md:text-base lg:text-lg text-slate-600 font-xregular leading-8 max-w-2xl text-justify">
              تامین، نصب، ارتقا و پشتیبانی انواع مراکز تلفن اداری و بیمارستانی در ایران؛ از مدل‌های کم‌ظرفیت و پرظرفیت <strong>پاناسونیک (KX-TES824, TDA, NS500)</strong> گرفته تا تلفن‌های تحت شبکه <strong>ویپ گرنداستریم و یالینک</strong> و مراکز تلفن بومی <strong>رهیاب (سری RX و RXD)</strong> با ۱ سال گارانتی تعویض و ۱۰ سال خدمات پس از فروش.
            </p>

            {/* دکمه‌های اقدام با تاکید روی شماره ۰۹۱۲۵۳۵۴۸۱۱ */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="tel:09125354811"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl bg-gradient-to-r from-[#253359] via-[#1a2542] to-[#253359] text-white font-xbold text-sm md:text-base shadow-xl hover:shadow-blue-900/30 hover:scale-105 transition-all group"
              >
                <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center text-white animate-pulse">
                  <FaPhoneAlt className="w-3.5 h-3.5" />
                </div>
                <div className="text-right">
                  <span className="block text-[11px] text-emerald-300 -mb-0.5">مشاوره مستقیم و رایگان:</span>
                  <span className="font-xbold tracking-wider text-base dir-ltr">۰۹۱۲-۵۳۵۴۸۱۱</span>
                </div>
              </a>

              <a
                href="https://wa.me/989125354811?text=%D8%B3%D9%84%D8%A7%D9%85%D8%8C%20%D8%AC%D9%87%D8%AA%20%D8%A7%D8%B3%D8%AA%D8%B9%D9%84%D8%A7%D9%85%20%D9%82%DB%8C%D9%85%D8%AA%20%D8%B3%D8%A7%D9%86%D8%AA%D8%B1%D8%A7%D9%84%20%D9%88%20%D9%88%DB%8C%D9%BE%20%D9%BE%DB%8C%D8%A7%D9%85%20%D9%85%DB%8C%E2%80%8C%D8%AF%D9%87%D9%85."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-800 hover:bg-emerald-100 font-xbold text-sm transition-all shadow-sm"
              >
                <FaWhatsapp className="text-emerald-600 text-xl" />
                <span>استعلام آنلاین در واتساپ / ایتا</span>
              </a>
            </div>

            {/* نشان‌های اعتماد و اصالت */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-200/80 text-xs">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-emerald-500 text-base flex-shrink-0" />
                <span>۱ سال گارانتی تعویض</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-emerald-500 text-base flex-shrink-0" />
                <span>۱۰ سال تضمین قطعات</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-emerald-500 text-base flex-shrink-0" />
                <span>پشتیبانی تلفنی دائم</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-emerald-500 text-base flex-shrink-0" />
                <span>نصب در سراسر کشور</span>
              </div>
            </div>
          </div>

          {/* ستون ویجت هوشمند انتخاب سانترال (Hero Right Interactive Wizard) */}
          <div className="lg:col-span-5">
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-slate-200 shadow-2xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-[#253359]" />

              <div className="text-right">
                <span className="text-[11px] font-xbold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                  🎯 راهنمای هوشمند آنلاین
                </span>
                <h3 className="text-lg md:text-xl font-xbold text-[#141d33] mt-2">
                  به چه سیستم سانترالی نیاز دارید؟
                </h3>
                <p className="text-xs text-slate-500 mt-1 font-xregular">
                  بر اساس تعداد پرسنل شرکت، بهترین سیستم پیشنهادی را مشاهده کنید:
                </p>
              </div>

              {/* دکمه‌های انتخاب پرسنل */}
              <div className="grid grid-cols-3 gap-2 p-1.5 bg-slate-100 rounded-2xl">
                <button
                  onClick={() => setSelectedStaffSize("small")}
                  className={`py-2 px-2 text-xs font-xbold rounded-xl transition-all ${
                    selectedStaffSize === "small"
                      ? "bg-white text-[#253359] shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  ۱ تا ۸ پرسنل
                </button>
                <button
                  onClick={() => setSelectedStaffSize("medium")}
                  className={`py-2 px-2 text-xs font-xbold rounded-xl transition-all ${
                    selectedStaffSize === "medium"
                      ? "bg-white text-[#253359] shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  ۸ تا ۴۰ پرسنل
                </button>
                <button
                  onClick={() => setSelectedStaffSize("enterprise")}
                  className={`py-2 px-2 text-xs font-xbold rounded-xl transition-all ${
                    selectedStaffSize === "enterprise"
                      ? "bg-white text-[#253359] shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  ۴۰ تا ۵۰۰+ نفر
                </button>
              </div>

              {/* کارت پیشنهاد اختصاصی */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50/70 to-indigo-50/40 border border-blue-100 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-xbold text-blue-700 bg-white px-2 py-0.5 rounded-full shadow-xs">
                    {currentRec.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-xbold">سیستم پیشنهادی</span>
                </div>

                <h4 className="text-sm md:text-base font-xbold text-[#1e2a4a] leading-snug">
                  {currentRec.title}
                </h4>

                <p className="text-xs text-slate-600 font-xregular leading-6">
                  {currentRec.desc}
                </p>

                <div className="pt-2 flex items-center justify-between">
                  <Link
                    href={currentRec.link}
                    className="inline-flex items-center gap-1.5 text-xs font-xbold text-[#253359] hover:text-blue-700 transition-colors"
                  >
                    <span>{currentRec.linkText}</span>
                    <FaArrowLeft className="w-3 h-3" />
                  </Link>

                  <a
                    href="tel:09125354811"
                    className="text-[11px] font-xbold px-3 py-1.5 rounded-xl bg-[#253359] text-white hover:bg-[#1a2542] transition-colors"
                  >
                    استعلام قیمت: ۰۹۱۲۵۳۵۴۸۱۱
                  </a>
                </div>
              </div>

              {/* آمار سریع و اعتماد */}
              <div className="grid grid-cols-3 gap-2 text-center pt-2 border-t border-slate-100 text-xs">
                <div>
                  <div className="font-xbold text-[#253359] text-base md:text-lg">۳۰+ سال</div>
                  <div className="text-[10px] text-slate-400">سابقه تولید</div>
                </div>
                <div>
                  <div className="font-xbold text-[#253359] text-base md:text-lg">۱۲۰۰+</div>
                  <div className="text-[10px] text-slate-400">پروژه موفق</div>
                </div>
                <div>
                  <div className="font-xbold text-[#253359] text-base md:text-lg">۱۰۰٪</div>
                  <div className="text-[10px] text-slate-400">گارانتی تعویض</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}