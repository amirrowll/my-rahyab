"use client";
import React from "react";
import { FaStar, FaPhoneAlt, FaHeadset } from "react-icons/fa";

export default function AnalogPhones() {
  const products = [
    {
      id: 1,
      image:"/imageLanding/KX-T2375.png",
      model: "KX-T2375",
      title: "تلفن رومیزی آنالوگ پاناسونیک KX-T2375",
      capacity: "12 حافظه سریع",
      description: "صفحه نمایش ساعت دار، مکالمه بدون برداشتن گوشی، 12 حافظه شماره گیری سریع، Redial خودکار، موزیک پشت خط",
      features: ["LCD ساعت دار", "12 حافظه", "Redial", "موزیک پشت خط"],
    },
    {
      id: 2,
      image:"/imageLanding/KX-TS560.png",
      model: "KX-TS560",
      title: "تلفن رومیزی آنالوگ پاناسونیک KX-TS560",
      capacity: "50 حافظه",
      description: "صفحه دو خطی، دفترچه 50 شماره، 20 حافظه Redial، 50 حافظه Caller ID، قفل صفحه کلید",
      features: ["LCD دو خطی", "50 حافظه", "20 Redial", "قفل کلید"],
    },
    {
      id: 3,
      image:"/imageLanding/KX-TS580.png",
      model: "KX-TS580",
      title: "تلفن رومیزی آنالوگ پاناسونیک KX-TS580",
      capacity: "50 حافظه",
      description: "طراحی زیبا و شیک، 50 حافظه Caller ID، دفترچه 50 شماره، 20 حافظه Redial، قابلیت نصب دیواری",
      features: ["50 Caller ID", "50 حافظه", "20 Redial", "نصب دیواری"],
    },
    {
      id: 4,
      image:"/imageLanding/KX-TS880.png",
      model: "KX-TS880",
      title: "تلفن رومیزی آنالوگ پاناسونیک KX-TS880/881",
      capacity: "50 حافظه",
      description: "نمایشگر 3 سطری، 50 حافظه، 20 Redial، نمایشگر نورانی، تنظیم 2 زاویه، صدای زنگ 3 حالت",
      features: ["LCD 3 سطری", "50 حافظه", "نورانی", "2 زاویه"],
    },
    {
      id: 5,
      image:"/imageLanding/KX-TS620.png",
      model: "KX-TS620",
      title: "تلفن رومیزی آنالوگ پاناسونیک KX-TS620",
      capacity: "50 حافظه + 18 دقیقه ضبط",
      description: "منشی تلفنی دیجیتال، صفحه 3 سطری با ساعت، 50 حافظه Caller ID، 50 دفترچه، 20 Redial، 3 شماره گیری سریع",
      features: ["منشی 18 دقیقه", "LCD 3 سطری", "50 حافظه", "نورانی"],
    },
    {
      id: 6,
      image:"/imageLanding/KX-TS3282.png",
      model: "KX-TS3282",
      title: "تلفن رومیزی آنالوگ پاناسونیک KX-TS3282",
      capacity: "دو خط - کنفرانس 3 نفره",
      description: "گوشی دو خط، کنفرانس 3 نفره، 50 حافظه Caller ID، ارتباط داخلی، نصب دیواری",
      features: ["دو خط", "کنفرانس 3", "50 Caller ID", "نصب دیواری"],
    },
    {
      id: 7,
      image:"/imageLanding/KX-TSC11.png",
      model: "KX-TSC11",
      title: "تلفن رومیزی آنالوگ پاناسونیک KX-TSC11",
      capacity: "50 حافظه",
      description: "صفحه دو سطری با ساعت، 50 حافظه Caller ID، 50 دفترچه، 20 Redial، تنظیم صدای گوشی، قفل کلید",
      features: ["LCD دو سطری", "50 حافظه", "20 Redial", "قفل کلید"],
    },
    {
      id: 8,
      image:"/imageLanding/KX-T2373.png",
      model: "KX-T2373",
      title: "تلفن رومیزی آنالوگ پاناسونیک KX-T2373",
      capacity: "12 حافظه سریع",
      description: "بلندگوی دیجیتال، 12 حافظه سریع، Redial خودکار، موزیک پشت خط، فیش Data، اتصال فکس",
      features: ["12 حافظه", "بلندگو", "موزیک", "اتصال فکس"],
    },
    {
      id: 9,
      image:"/imageLanding/KX-T7705.png",
      model: "KX-T7705",
      title: "تلفن رومیزی آنالوگ پاناسونیک KX-T7705",
      capacity: "30 حافظه",
      description: "صفحه دو سطری با ساعت، 30 حافظه Caller ID، 30 دفترچه، 5 Redial، تنظیم صدا 4 سطح، بدون باطری",
      features: ["LCD دو سطری", "30 حافظه", "5 Redial", "بدون باطری"],
    },
    {
      id: 10,
      image:"/imageLanding/KX-T2371.png",
      model: "KX-T2371",
      title: "تلفن رومیزی آنالوگ پاناسونیک KX-T2371",
      capacity: "3 حافظه سریع",
      description: "ساده و کاربردی، 3 حافظه سریع، Redial، نشانگر نورانی، کلید Flash، فیش Data",
      features: ["3 حافظه", "Redial", "نورانی", "Flash"],
    },
    {
      id: 11,
      image:"/imageLanding/KX-S500.png",
      model: "KX-S500",
      title: "تلفن رومیزی آنالوگ پاناسونیک KX-S500",
      capacity: "ساده و پرکاربرد",
      description: "Redial، تنظیم 6 مرحله ای صدا، صدای زنگ 3 حالت، کلید Flash، رنگهای متنوع",
      features: ["Redial", "تنظیم صدا 6", "زنگ 3 حالت", "رنگ متنوع"],
    },
    {
      id: 12,
      image:"/imageLanding/KX-T2378.png",
      model: "KX-T2378",
      title: "تلفن رومیزی آنالوگ پاناسونیک KX-T2378",
      capacity: "دو خط - کنفرانس 3 نفره",
      description: "گوشی دو خط، کنفرانس 3 نفره، LCD دو سطری ساعت دار، 12 حافظه سریع، موزیک پشت خط",
      features: ["دو خط", "کنفرانس 3", "LCD ساعت", "12 حافظه"],
    },
    {
      id: 13,
      image:"/imageLanding/KX-T7703.png",
      model: "KX-T7703",
      title: "تلفن رومیزی آنالوگ پاناسونیک KX-T7703",
      capacity: "30 حافظه",
      description: "ارزان ترین مدل، LCD دو سطری با ساعت، 30 حافظه Caller ID، 5 Redial، تنظیم نور 4 مرحله",
      features: ["LCD دو سطری", "30 Caller ID", "5 Redial", "نور 4 مرحله"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9ff] via-white to-[#f0f2ff] mt-[80px]">
      <div className="relative overflow-hidden mb-12">
        <div className="relative bg-gradient-to-br from-[#1a233b] via-[#253359] to-[#0f172a] text-white py-16 px-6 rounded-3xl shadow-2xl mx-4 border border-white/10">
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-xs md:text-sm font-xbold border border-white/20 text-blue-200">
              <FaStar className="text-amber-400" /> تلفن‌های رومیزی و آنالوگ اورجینال پاناسونیک
            </div>
            <h1 className="text-3xl md:text-5xl font-xbold mb-6 leading-tight">
              تلفن‌های رومیزی و آنالوگ
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-200 to-emerald-300 mt-2">
                ساده، اداری، منشی‌دار و با قابلیت اتصال به سانترال
              </span>
            </h1>
            <p className="text-base md:text-lg leading-8 font-xmedium text-slate-200 max-w-3xl mx-auto mb-8">
              انواع تلفن‌های بادوام و کلاسیک پاناسونیک با کیفیت صدای شفاف، صفحه نمایش نورانی، کلیدهای دسترسی سریع و گارانتی شرکت رهیاب.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:09125354811"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-xbold text-sm md:text-base shadow-lg hover:scale-105 transition-all"
              >
                <FaPhoneAlt /> مشاوره و خرید: ۰۹۱۲۵۳۵۴۸۱۱
              </a>
              <a
                href={`https://wa.me/989125354811?text=${encodeURIComponent("سلام، درباره خرید تلفن‌های رومیزی پاناسونیک سوال داشتم.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white rounded-xl font-xbold text-sm md:text-base border border-white/30 backdrop-blur-md hover:scale-105 transition-all"
              >
                <FaHeadset className="text-emerald-400 text-lg" /> استعلام در واتساپ
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 px-4 max-w-7xl mx-auto">
        {[
          { number: "۱۳+", label: "مدل متنوع رومیزی", color: "from-blue-500 to-blue-600" },
          { number: "Caller ID", label: "نمایشگر شماره تماس‌گیرنده", color: "from-purple-500 to-purple-600" },
          { number: "منشی تلفنی", label: "سیستم پیام‌گیر دیجیتال", color: "from-pink-500 to-pink-600" },
          { number: "۱ سال", label: "گارانتی تعویض شرکت رهیاب", color: "from-indigo-500 to-indigo-600" },
        ].map((stat, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 transition-all duration-300">
            <div className="text-2xl md:text-3xl font-xbold text-[#1e2a4a] mb-1">{stat.number}</div>
            <div className="text-xs text-slate-500 font-xmedium">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 px-4 max-w-7xl mx-auto">
        {products.map((product) => (
          <div key={product.id} className="group bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-slate-100 flex flex-col justify-between hover:-translate-y-1">
            <div>
              <div className="relative h-56 bg-slate-50 p-6 flex items-center justify-center">
                <div className="absolute top-4 left-4 z-10 bg-[#1e2a4a] text-white px-3 py-1 rounded-full text-xs font-xbold shadow">
                  {product.model}
                </div>
                <img className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" src={product.image} alt={product.title} />
              </div>
              <div className="p-6">
                <h3 className="text-base font-xbold text-[#1e2a4a] mb-2 leading-7">{product.title}</h3>
                <div className="bg-blue-50/70 border border-blue-100 rounded-xl px-3 py-1.5 mb-3 inline-block">
                  <span className="font-xbold text-xs text-blue-900">{product.capacity}</span>
                </div>
                <p className="text-xs text-slate-600 font-xregular leading-6 mb-4">{product.description}</p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1.5">
                    {product.features.map((feature, idx) => (
                      <span key={idx} className="bg-slate-50 text-[#1e2a4a] border border-slate-200 px-2 py-1 rounded-lg text-xs font-xmedium">
                        ✓ {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 pt-0">
              <div className="grid grid-cols-2 gap-2">
                <a href="tel:09125354811" className="bg-[#1e2a4a] hover:bg-blue-900 text-white py-2.5 rounded-xl font-xbold text-xs text-center transition-all flex items-center justify-center gap-1">
                  <FaPhoneAlt className="text-xs" /> خرید تلفنی
                </a>
                <a
                  href={`https://wa.me/989125354811?text=${encodeURIComponent(`سلام، برای خرید تلفن رومیزی پاناسونیک مدل ${product.model} پیام می‌دهم.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-600 hover:text-white py-2.5 rounded-xl font-xbold text-xs text-center transition-all flex items-center justify-center"
                >
                  استعلام واتساپ
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 mb-10">
        <div className="relative overflow-hidden bg-gradient-to-br from-[#1a233b] via-[#253359] to-[#0f172a] rounded-3xl p-10 md:p-14 text-center text-white shadow-2xl">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-xbold mb-4">نیاز به مشاوره در خرید تلفن‌های رومیزی دارید؟</h3>
            <p className="text-sm md:text-base font-xmedium mb-8 text-slate-300 leading-8">
              برای مشاوره فنی و خرید تلفن‌های اداری و سازمانی با مهندس محمدی در ارتباط باشید.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:09125354811"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-xbold text-sm md:text-base shadow-xl hover:scale-105 transition-all"
              >
                <FaHeadset /> تماس مستقیم: ۰۹۱۲۵۳۵۴۸۱۱
              </a>
              <a
                href={`https://wa.me/989125354811?text=${encodeURIComponent("سلام مهندس محمدی، درباره خرید تلفن‌های رومیزی پاناسونیک سوال داشتم.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white rounded-xl font-xbold text-sm md:text-base border border-white/30 backdrop-blur-md hover:scale-105 transition-all"
              >
                استعلام قیمت واتساپ
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
