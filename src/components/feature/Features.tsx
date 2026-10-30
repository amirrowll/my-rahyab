"use client";

import React from "react";
import {
  FaShieldAlt,
  FaHeadset,
  FaTools,
  FaCheckDouble,
  FaTruck,
  FaAward,
  FaFileInvoiceDollar,
  FaClock,
} from "react-icons/fa";

export default function Features() {
  const features = [
    {
      icon: <FaShieldAlt className="w-7 h-7 text-blue-600" />,
      title: "۱ سال گارانتی تعویض کتبی",
      desc: "کلیه مراکز تلفن رهیاب و سانترال‌های تحویلی با ضمانت‌نامه رسمی و معتبر شرکتی عرضه می‌شوند.",
    },
    {
      icon: <FaAward className="w-7 h-7 text-amber-500" />,
      title: "۱۰ سال تضمین تامین قطعات",
      desc: "خیال شما از بابت تعمیرات، کارت‌های افزایشی و بردهای اصلی تا یک دهه آینده کاملاً آسوده است.",
    },
    {
      icon: <FaHeadset className="w-7 h-7 text-emerald-500" />,
      title: "پشتیبانی دائم با کارشناس ارشد",
      desc: "پاسخگویی مستقیم تلفنی مهندس محمدی (۰۹۱۲۵۳۵۴۸۱۱) برای رفع ابهامات و پشتیبانی فنی.",
    },
    {
      icon: <FaTools className="w-7 h-7 text-indigo-500" />,
      title: "نصب و کابل‌کشی استاندارد در محل",
      desc: "تیم فنی مجرب رهیاب صفر تا صد نصب، سوکت‌زنی، برنامه‌ریزی و راه‌اندازی را تحویل می‌دهند.",
    },
    {
      icon: <FaCheckDouble className="w-7 h-7 text-teal-500" />,
      title: "سازگاری ۱۰۰٪ با مخابرات ایران",
      desc: "تشخیص دقیق شماره تماس‌گیرنده (Caller ID)، خطوط E1 و سیپ ترانک بدون نویز یا افت فرکانس.",
    },
    {
      icon: <FaFileInvoiceDollar className="w-7 h-7 text-purple-500" />,
      title: "صرفه‌جویی اقتصادی تا ۵۰٪",
      desc: "تلفن گویا، ضبط مکالمات و شارژینگ پیش‌فرض بدون نیاز به خرید کارت‌های دلاری و لایسنس‌های جانبی.",
    },
    {
      icon: <FaClock className="w-7 h-7 text-rose-500" />,
      title: "ارسال و اعزام سریع در کشور",
      desc: "ارسال فوری تجهیزات و اعزام نصاب در تهران کمتر از چند ساعت و شهرستان‌ها در اسرع وقت.",
    },
    {
      icon: <FaTruck className="w-7 h-7 text-cyan-600" />,
      title: "تنوع جامع پاناسونیک و ویپ",
      desc: "تامین کلیه مدل‌های پاناسونیک (کم‌ظرفیت تا پرظرفیت)، تلفن‌های ویپ گرنداستریم و یالینک.",
    },
  ];

  return (
    <section className="py-16 bg-white font-xmedium text-slate-800">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-[#253359] text-xs font-xbold mb-3 border border-blue-100">
            <span>🛡️ چرا رهیاب انتخاب مطمئن سازمان‌هاست؟</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-xbold text-[#141d33] tracking-tight">
            تعهد به اصالت، گارانتی واقعی و پشتیبانی ۳۰ ساله
          </h2>
          <p className="text-sm md:text-base text-slate-500 font-xregular mt-3 leading-7">
            شرکت رهیاب با تکیه بر دانش فنی بومی و نمایندگی‌های فعال در سراسر ایران، بالاترین استانداردهای خدمات مخابراتی را تضمین می‌نماید.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="bg-[#f8faff] rounded-3xl p-6 border border-slate-100/80 hover:border-blue-200 hover:bg-white hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 text-right flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {feat.icon}
                </div>
                <h3 className="text-base font-xbold text-[#1e2a4a] mb-2 group-hover:text-blue-700 transition-colors">
                  {feat.title}
                </h3>
                <p className="text-xs text-slate-500 font-xregular leading-6">
                  {feat.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/50 flex items-center gap-1.5 text-[11px] text-blue-600 font-xbold opacity-0 group-hover:opacity-100 transition-opacity">
                <span>تضمین اصالت رهیاب</span>
                <span>✓</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
