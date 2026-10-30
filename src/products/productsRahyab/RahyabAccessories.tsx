"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaBullseye,
  FaMicrophone,
  FaWrench,
  FaShieldAlt,
  FaPhoneAlt,
  FaCheckCircle,
  FaHeadset,
  FaWhatsapp,
  FaBatteryFull,
  FaArrowLeft,
  FaBroadcastTower,
} from "react-icons/fa";

export default function RahyabAccessories() {
  const accessories = [
    {
      id: "operator-rahyab",
      image: "/imageLanding/phonegooya.png",
      model: "اپراتور هوشمند رهیاب",
      badge: "تولید اختصاصی شرکت رهیاب",
      title: "سیستم اپراتور اتوماتیک و تلفن گویای رهیاب",
      subtitle: "منشی هوشمند و سامانه هدایت خودکار تماس‌ها",
      desc: "سیستم تلفن گویای حرفه‌ای با پیام‌های صوتی فارسی و شفاف جهت پاسخگویی به تماس‌های ورودی، پخش پیشواز اختصاصی، صف انتظار و ارتباط مستقیم با داخلی‌ها بدون نیاز به اپراتور انسانی.",
      features: [
        "پاسخگویی خودکار ۲۴ ساعته بدون اشغالی خط",
        "منوی صوتی ۶ لایه چندزبانه با تقویم شمسی",
        "صندوق صوتی اختصاصی برای هر خط داخلی",
        "شیفت کاری اتوماتیک روز، شب و ایام تعطیل",
      ],
      compatible: "سازگار با تمامی سانترال‌های رهیاب، پاناسونیک و سایر مراکز تلفن",
    },
    {
      id: "voice-recorder",
      image: "/imageLanding/zabtMokalemat.jpg",
      model: "دستگاه ضبط مکالمات رهیاب",
      badge: "امنیت و مانیتورینگ ارتباطات",
      title: "سیستم ضبط مکالمات هوشمند خطوط رهیاب",
      subtitle: "سامانه مدیریت، بایگانی و نظارت بر مکالمات سازمانی",
      desc: "ثبت و آرشیو خودکار مکالمات صوتی کلیه خطوط شهری و داخلی با کیفیت تمام دیجیتال بدون افت صدا یا نویز، با نرم‌افزار مدیریت کاملاً فارسی و امکان جستجوی سریع شماره و تاریخ.",
      features: [
        "ضبط دوطرفه شفاف بدون ایجاد بوق یا افت ولتاژ",
        "ثبت دقیق کالر آیدی، تاریخ، ساعت و مدت تماس",
        "نرم‌افزار مدیریت تحت شبکه با امکان شنود زنده",
        "پشتیبان‌گیری خودکار از اطلاعات بر روی هارد و دیسک",
      ],
      compatible: "مدل‌های ۲، ۴، ۸ تا ۶۴ خط آنالوگ و دیجیتال E1",
    },
    {
      id: "power-backup",
      image: "/imageLanding/rx-40.jpg",
      model: "سیستم برق اضطراری رهیاب",
      badge: "پایداری دائم ارتباطات",
      title: "پاور پشتیبان و شارژر اتوماتیک سانترال رهیاب",
      subtitle: "تضمین عملکرد بدون وقفه در هنگام قطعی برق شبکه",
      desc: "مدار منبع تغذیه اضطراری استاندارد سازگار با باتری‌های خشک مخابراتی جهت روشن نگه‌داشتن مرکز تلفن و خطوط شهری بدون ریست شدن یا قطع تماس‌های در حال جریان.",
      features: [
        "سوییچ خودکار روی باتری بدون میلی‌ثانیه‌ای قطعی",
        "شارژر هوشمند داخلی جهت افزایش طول عمر باتری",
        "مدار محافظت در برابر نوسانات شدید ولتاژ شهری",
        "عملکرد مداوم مرکز تلفن تا ۸ ساعت در خاموشی",
      ],
      compatible: "سازگار با مراکز تلفن RX-40، RX-112، RX-608 و سانترال‌های اداری",
    },
  ];

  return (
    <section className="py-14 bg-gradient-to-b from-[#f8faff] via-white to-[#f0f4fa] font-xmedium text-slate-800">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        {/* هدر بخش تجهیزات جانبی */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#253359] text-xs font-xbold mb-3 border border-blue-100">
              <FaBullseye className="text-blue-600" />
              <span>تجهیزات جانبی و تکمیلی سانترال</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-xbold text-[#141d33] tracking-tight">
              تجهیزات تکمیلی شرکت رهیاب
            </h2>
            <p className="text-xs md:text-sm text-slate-600 font-xregular mt-2 max-w-2xl leading-7">
              تکمیل زیرساخت تلفنی سازمان با سامانه‌های هوشمند <strong>اپراتور اتوماتیک رهیاب</strong>، <strong>دستگاه ضبط مکالمات</strong> و سیستم‌های برق اضطراری با ضمانت رسمی شرکت.
            </p>
          </div>

          <a
            href="tel:09125354811"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-[#253359] via-[#1a2542] to-[#253359] text-white text-xs md:text-sm font-xbold shadow-md hover:shadow-lg hover:scale-105 transition-all self-start md:self-auto whitespace-nowrap"
          >
            <FaPhoneAlt className="text-emerald-400 text-xs" />
            <span>مشاوره و استعلام قیمت تجهیزات</span>
          </a>
        </div>

        {/* شبکه نمایش کارت‌های تجهیزات جانبی */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {accessories.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1.5"
            >
              <div>
                {/* بخش تصویر محصول با کیفیت */}
                <div className="relative h-56 bg-slate-50 flex items-center justify-center p-6 border-b border-slate-100 overflow-hidden">
                  <div className="absolute top-4 right-4 z-10">
                    <span className="text-[11px] font-xbold px-3 py-1 rounded-full bg-[#253359] text-white shadow-sm">
                      {item.badge}
                    </span>
                  </div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* محتوای متنی کارت */}
                <div className="p-6">
                  <div className="text-xs text-blue-600 font-xbold mb-1">
                    {item.model}
                  </div>
                  <h3 className="text-base md:text-lg font-xbold text-[#141d33] mb-2 leading-7">
                    {item.title}
                  </h3>
                  <div className="text-xs text-emerald-600 font-xbold mb-3 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{item.subtitle}</span>
                  </div>

                  <p className="text-xs text-slate-600 font-xregular leading-6 mb-4 text-justify">
                    {item.desc}
                  </p>

                  {/* ویژگی‌های کلیدی */}
                  <div className="space-y-2 mb-4 bg-slate-50/70 p-3.5 rounded-2xl border border-slate-100">
                    {item.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-xmedium">
                        <FaCheckCircle className="text-emerald-500 text-xs flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-[11px] text-slate-500 font-xregular mb-2">
                    <strong className="text-slate-700">سازگاری: </strong>
                    {item.compatible}
                  </div>
                </div>
              </div>

              {/* دکمه‌های اقدام زیر کارت */}
              <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between gap-3">
                <a
                  href="tel:09125354811"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#253359] to-[#1a2542] hover:from-blue-900 hover:to-indigo-900 text-white font-xbold text-xs text-center flex items-center justify-center gap-1.5 shadow-sm transition-all"
                >
                  <FaPhoneAlt className="text-[10px]" />
                  <span>تماس: ۰۹۱۲۵۳۵۴۸۱۱</span>
                </a>

                <a
                  href={`https://wa.me/989125354811?text=${encodeURIComponent(`سلام، در رابطه با خرید و استعلام ${item.title} سوال داشتم.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 font-xbold text-xs flex items-center gap-1 transition-all"
                  title="استعلام در واتساپ"
                >
                  <FaWhatsapp className="text-sm text-emerald-600" />
                  <span>واتساپ</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ۳ کارت مزیت و اعتماد */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl flex-shrink-0">
              <FaMicrophone />
            </div>
            <div>
              <h4 className="text-sm font-xbold text-[#253359]">کیفیت صدای عالی و کریستالی</h4>
              <p className="text-xs text-slate-500 font-xregular mt-0.5 leading-5">
                ضبط و پخش فرمت استاندارد WAV با بالاترین وضوح بدون پارازیت
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl flex-shrink-0">
              <FaWrench />
            </div>
            <div>
              <h4 className="text-sm font-xbold text-[#253359]">نصب سریع و کابل‌کشی آسان</h4>
              <p className="text-xs text-slate-500 font-xregular mt-0.5 leading-5">
                اتصال مستقیم به سانترال بدون نیاز به دستکاری در مدار خطوط شهری
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center text-xl flex-shrink-0">
              <FaShieldAlt />
            </div>
            <div>
              <h4 className="text-sm font-xbold text-[#253359]">۱ سال گارانتی تعویض شرکت</h4>
              <p className="text-xs text-slate-500 font-xregular mt-0.5 leading-5">
                ضمانت معتبر شرکت رهیاب به همراه ۱۰ سال تضمین خدمات و قطعات
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
