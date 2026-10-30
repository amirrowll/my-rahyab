"use client";
import React from "react";
import { FaStar, FaPhoneAlt, FaHeadset } from "react-icons/fa";

export default function WirelessPhones() {
  const products = [
    {
      id: 1,
      image: "/imageLanding/KX-TG3822.png",
      model: "KX-TG3822",
      brand: "پاناسونیک",
      title: "گوشی تلفن بیسیم پاناسونیک مدل KX-TG3822",
      capacity: "2 گوشی - منشی 18 دقیقه",
      description: "2 گوشی بیسیم، منشی دیجیتال 18 دقیقه، 100 حافظه، کنفرانس 4 نفره، برد 50 متر داخلی و 300 متر خارجی، فرکانس 1.9 گیگاهرتز، DECT 6.0، سازگار با سانترال",
      features: ["2 گوشی", "منشی 18 دقیقه", "100 حافظه", "کنفرانس 4 نفره"],
      suitable: ["فروشگاهها", "خانگی", "دفاتر کوچک"],
    },
    {
      id: 2,
      image: "/imageLanding/KX-TG6643.png",
      model: "KX-TG6643",
      brand: "پاناسونیک",
      title: "گوشی تلفن بیسیم پاناسونیک مدل KX-TG6643",
      capacity: "3 گوشی - اکولایز",
      description: "3 گوشی، قابلیت اکولایز (حذف صدای مزاحم)، منشی 18 دقیقه، برد 50 متر داخلی و 300 متر خارجی، 10 ساعت مکالمه، 6 روز آماده به کار، DECT 6.0 Plus، 50 حافظه",
      features: ["3 گوشی", "اکولایز", "10 ساعت مکالمه", "DECT 6.0 Plus"],
      suitable: ["خانگی", "دفاتر", "شرکتها"],
    },
    {
      id: 3,
      image: "/imageLanding/KX-TG6632.png",
      model: "KX-TG6632",
      brand: "پاناسونیک",
      title: "گوشی تلفن بیسیم پاناسونیک مدل KX-TG6632",
      capacity: "2 گوشی - DECT 6.0 Plus",
      description: "2 گوشی، منشی 18 دقیقه، افزایش برد 20 درصدی، مزاحم یاب گویا، 50 حافظه، کنفرانس 3 نفره، 10 ساعت مکالمه، 6 روز آماده، قابل افزایش تا 6 گوشی",
      features: ["2 گوشی", "برد 20% بیشتر", "مزاحم یاب گویا", "50 حافظه"],
      suitable: ["خانگی", "فروشگاهها", "دفاتر"],
    },
    {
      id: 4,
      image: "/imageLanding/KX-TG3722.png",
      model: "KX-TG3722",
      brand: "پاناسونیک",
      title: "گوشی تلفن بیسیم پاناسونیک مدل KX-TG3722",
      capacity: "2 گوشی - منشی دیجیتال",
      description: "2 گوشی، منشی تلفنی دیجیتال، مزاحم یاب، بلندگوی دیجیتال، فناوری بهبود کیفیت صدا، قابلیت افزایش تا 4 گوشی، 50 حافظه، ساخت مالزی",
      features: ["2 گوشی", "منشی دیجیتال", "مزاحم یاب", "50 حافظه"],
      suitable: ["منزل", "دفتر کار", "کسب و کارها"],
    },
    {
      id: 5,
      image: "/imageLanding/KX-TG6641.png",
      model: "KX-TG6641",
      brand: "پاناسونیک",
      title: "گوشی تلفن بیسیم پاناسونیک مدل KX-TG6641",
      capacity: "1 گوشی + پایه شماره گیر",
      description: "1 گوشی + پایه شماره گیر، 100 حافظه، کنفرانس 3 نفره، بلندگوی 2 طرفه، 10 ساعت مکالمه، 6 روز آماده، نمایشگر LCD نورانی، امکان نصب روی دیوار",
      features: ["پایه شماره گیر", "100 حافظه", "کنفرانس 3 نفره", "نصب دیواری"],
      suitable: ["خانه", "فروشگاه", "دفاتر"],
    },
    {
      id: 6,
      image: "/imageLanding/KX-TG6451.png",
      model: "KX-TG6451",
      brand: "پاناسونیک",
      title: "گوشی تلفن بیسیم پاناسونیک مدل KX-TG6451",
      capacity: "صفحه نمایش بزرگ",
      description: "صفحه نمایش بزرگ، 100 حافظه، کنفرانس 3 نفره، بلندگوی 2 طرفه، امکان نصب روی دیوار، 5 شماره گیر سریع، نمایشگر LCD نورانی، باتری Ni-MH",
      features: ["صفحه بزرگ", "100 حافظه", "نصب دیواری", "5 شماره سریع"],
      suitable: ["خانگی", "دفاتر", "کسب و کارها"],
    },
    {
      id: 7,
      image: "/imageLanding/KX-TG3711.png",
      model: "KX-TG3711",
      brand: "پاناسونیک",
      title: "گوشی تلفن بیسیم پاناسونیک مدل KX-TG3711",
      capacity: "منشی 18 دقیقه - 100 حافظه",
      description: "منشی 18 دقیقه، 100 حافظه، صفحه 1.8 اینچ LCD، 10 ساعت مکالمه، DECT 0.6، Caller ID، بلندگو، قابلیت افزایش کیفیت صدا، حالت شب",
      features: ["منشی 18 دقیقه", "100 حافظه", "10 ساعت مکالمه", "DECT 0.6"],
      suitable: ["خانگی", "دفاتر", "کسب و کارها"],
    },
    {
      id: 8,
      image: "/imageLanding/KX-TG3821.png",
      model: "KX-TG3821",
      brand: "پاناسونیک",
      title: "گوشی تلفن بیسیم پاناسونیک مدل KX-TG3821",
      capacity: "ضبط مکالمات - منشی 18 دقیقه",
      description: "امکان ضبط مکالمات، منشی 18 دقیقه، 100 حافظه، کنفرانس 3 نفره، صفحه 1.8 اینچ، قابلیت افزایش تا 6 گوشی، DECT 0.6، بلندگوی 2 طرفه",
      features: ["ضبط مکالمات", "منشی 18 دقیقه", "کنفرانس 3 نفره", "100 حافظه"],
      suitable: ["خانگی", "دفاتر", "شرکتها"],
    },
    {
      id: 9,
      image: "/imageLanding/KX-TG7622.png",
      model: "KX-TG7622",
      brand: "پاناسونیک",
      title: "گوشی تلفن بیسیم پاناسونیک مدل KX-TG7622",
      capacity: "بلوتوث - 600 حافظه",
      description: "بلوتوث، کپی دفترچه تا 600 شماره، منشی 18 دقیقه، 11 روز آماده، فناوری ECO، DECT 6.0 Plus، افزایش برد 20%، مزاحم یاب گویا، کنفرانس 3 نفره",
      features: ["بلوتوث", "600 حافظه", "11 روز آماده", "ECO"],
      suitable: ["خانگی", "دفاتر", "شرکتها"],
    },
    {
      id: 10,
      image: "/imageLanding/KX-TG2360.png",
      model: "KX-TG2360",
      brand: "پاناسونیک",
      title: "گوشی تلفن بیسیم پاناسونیک مدل KX-TG2360",
      capacity: "Caller ID گویا",
      description: "Caller ID گویا، بلندگوی 2 طرفه روی پایه و گوشی، کنفرانس 3 نفر، 50 حافظه، 7 نوع زنگ، گیره اتصال به کمر، ورودی هدست، قفل شماره گیر، ساخت ژاپن",
      features: ["Caller ID گویا", "کنفرانس 3 نفره", "7 نوع زنگ", "ساخت ژاپن"],
      suitable: ["شرکتها", "کارخانجات", "منازل"],
    },
    {
      id: 11,
      image: "/imageLanding/KX-TG9341.png",
      model: "KX-TG9341",
      brand: "پاناسونیک",
      title: "گوشی تلفن بیسیم پاناسونیک مدل KX-TG9341",
      capacity: "منشی 16 دقیقه",
      description: "منشی 16 دقیقه، مزاحم یاب گویا، امکان مسدود کردن تماس، قابل افزایش تا 6 گوشی، بلندگوی 2 طرفه، 50 حافظه، حالت شب، متناسب با سانترال پاناسونیک",
      features: ["منشی 16 دقیقه", "مزاحم یاب گویا", "50 حافظه", "حالت شب"],
      suitable: ["خانگی", "دفاتر", "سازمانها"],
    },
    {
      id: 12,
      image: "/imageLanding/KX-TG3661.png",
      model: "KX-TG3661",
      brand: "پاناسونیک",
      title: "گوشی تلفن بیسیم پاناسونیک مدل KX-TG3661",
      capacity: "180 ساعت آماده - 18 ساعت مکالمه",
      description: "180 ساعت آماده، 18 ساعت مکالمه، منشی دیجیتال، 100 حافظه، کنفرانس 3 نفره، قابل افزایش تا 6 گوشی، بلندگوی 2 طرفه، 5 شماره سریع، ساخت ژاپن",
      features: ["180 ساعت آماده", "18 ساعت مکالمه", "100 حافظه", "ساخت ژاپن"],
      suitable: ["خانه های بزرگ", "دفاتر", "شرکتها"],
    },
    {
      id: 13,
      image: "/imageLanding/KX-TG3721.png",
      model: "KX-TG3721",
      brand: "پاناسونیک",
      title: "گوشی تلفن بیسیم پاناسونیک مدل KX-TG3721",
      capacity: "صفحه 1.8 اینچ - منو فارسی",
      description: "صفحه 1.8 اینچ، منو فارسی، ضبط مکالمات، منشی 18 دقیقه، 100 حافظه، کنفرانس 3 نفره، قابل افزایش تا 6 گوشی، DECT 0.6، بلندگوی 2 طرفه",
      features: ["منو فارسی", "ضبط مکالمات", "صفحه 1.8 اینچ", "100 حافظه"],
      suitable: ["خانگی", "دفاتر", "کسب و کارها"],
    },
    {
      id: 14,
      image: "/imageLanding/KX-TG2361.png",
      model: "KX-TG2361",
      brand: "پاناسونیک",
      title: "گوشی تلفن بیسیم پاناسونیک مدل KX-TG2361",
      capacity: "2 گوشی - منشی 16 دقیقه",
      description: "2 گوشی، منشی 16 دقیقه، اعلام نام تماس گیرنده، کنفرانس 4 نفره، 50 حافظه، قفل کودک، بلندگوی 2 طرفه، صفحه 1.5 اینچ LCD، DECT 0.6",
      features: ["2 گوشی", "منشی 16 دقیقه", "کنفرانس 4 نفره", "قفل کودک"],
      suitable: ["خانگی", "دفاتر", "کسب و کارها"],
    },
    {
      id: 15,
      image: "/imageLanding/KX-TG6532.png",
      model: "KX-TG6532",
      brand: "پاناسونیک",
      title: "گوشی تلفن بیسیم پاناسونیک مدل KX-TG6532",
      capacity: "قابل افزایش تا 6 گوشی",
      description: "قابل افزایش تا 6 گوشی، DECT 6.0، کنفرانس 4 نفر، 100 حافظه، سازگار با محیط زیست، کاهش مصرف شارژ، مواد بسته بندی قابل بازیافت، Caller ID",
      features: ["تا 6 گوشی", "DECT 6.0", "100 حافظه", "سازگار با محیط"],
      suitable: ["خانگی", "دفاتر", "شرکتها"],
    },
    {
      id: 16,
      image: "/imageLanding/KX-TG6542.png",
      model: "KX-TG6542",
      brand: "پاناسونیک",
      title: "گوشی تلفن بیسیم پاناسونیک مدل KX-TG6542",
      capacity: "منشی تلفنی - 50 حافظه",
      description: "منشی تلفنی، 50 حافظه، قابل افزایش تا 4 گوشی، DECT، Caller ID، کیفیت صدای دیجیتال، حالت شب، قفل شماره گیر، زنگهای مختلف",
      features: ["منشی تلفنی", "50 حافظه", "تا 4 گوشی", "حالت شب"],
      suitable: ["خانگی", "دفاتر", "کسب و کارها"],
    },
    {
      id: 17,
      image: "/imageLanding/KX-TG6531.png",
      model: "KX-TG6531",
      brand: "پاناسونیک",
      title: "گوشی تلفن بیسیم پاناسونیک مدل KX-TG6531",
      capacity: "طراحی شیک - 50 حافظه",
      description: "طراحی شیک و ظریف، منشی تلفنی، 50 حافظه، قابل افزایش تا 6 گوشی، کنفرانس 3 نفر، DECT، Caller ID، حالت شب، قفل شماره گیر، چراغ اعلام تماس",
      features: ["طراحی شیک", "50 حافظه", "تا 6 گوشی", "کنفرانس 3 نفره"],
      suitable: ["خانگی", "دفاتر", "شرکتها"],
    },
    {
      id: 18,
      image: "/imageLanding/KX-TG7642.png",
      model: "KX-TG7642",
      brand: "پاناسونیک",
      title: "گوشی تلفن بیسیم پاناسونیک مدل KX-TG7642",
      capacity: "بلوتوث - 13 ساعت مکالمه",
      description: "بلوتوث، کپی دفترچه تا 600 شماره، منشی 18 دقیقه، 13 ساعت مکالمه، DECT 6.0 Plus، افزایش برد 20%، مزاحم یاب گویا، کنفرانس 3 نفره، انتقال تماس",
      features: ["بلوتوث", "13 ساعت مکالمه", "600 حافظه", "برد 20% بیشتر"],
      suitable: ["خانگی", "دفاتر", "شرکتها"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9ff] via-white to-[#f0f2ff] mt-[80px]">
      <div className="relative overflow-hidden mb-12">
        <div className="relative bg-gradient-to-br from-[#1a233b] via-[#253359] to-[#0f172a] text-white py-16 px-6 rounded-3xl shadow-2xl mx-4 border border-white/10">
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-xs md:text-sm font-xbold border border-white/20 text-blue-200">
              <FaStar className="text-amber-400" /> تلفن‌های بیسیم دیجیتال و DECT پاناسونیک
            </div>
            <h1 className="text-3xl md:text-5xl font-xbold mb-6 leading-tight">
              انواع تلفن‌های بیسیم اداری و خانگی
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-200 to-emerald-300 mt-2">
                کیفیت برتر، برد بالا و باتری پرقدرت
              </span>
            </h1>
            <p className="text-base md:text-lg leading-8 font-xmedium text-slate-200 max-w-3xl mx-auto mb-8">
              مجموعه کامل تلفن‌های بیسیم تک‌گوشی، چندگوشی و دارای منشی دیجیتال با گارانتی ۱ ساله شرکت رهیاب.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:09125354811"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-xbold text-sm md:text-base shadow-lg hover:scale-105 transition-all"
              >
                <FaPhoneAlt /> مشاوره و خرید: ۰۹۱۲۵۳۵۴۸۱۱
              </a>
              <a
                href={`https://wa.me/989125354811?text=${encodeURIComponent("سلام، درباره خرید تلفن بیسیم پاناسونیک سوال داشتم.")}`}
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
          { number: "۱۸+", label: "مدل متنوع تک و چندگوشی", color: "from-blue-500 to-blue-600" },
          { number: "تا ۳۰۰ متر", label: "برد در فضای باز", color: "from-purple-500 to-purple-600" },
          { number: "DECT 6.0", label: "عدم تداخل با وای‌فای", color: "from-pink-500 to-pink-600" },
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
                <div className="absolute top-4 right-4 z-10 bg-white text-[#1e2a4a] border border-slate-200 px-3 py-1 rounded-full text-xs font-xmedium">
                  {product.brand}
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
                <div className="mb-4 p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-xs font-xbold text-slate-700 mb-1">مناسب برای:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {product.suitable.map((item, idx) => (
                      <span key={idx} className="text-xs text-slate-600 font-xmedium">
                        {idx > 0 && "•"} {item}
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
                  href={`https://wa.me/989125354811?text=${encodeURIComponent(`سلام، برای خرید تلفن بیسیم مدل ${product.model} پیام می‌دهم.`)}`}
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
            <h3 className="text-2xl md:text-3xl font-xbold mb-4">نیاز به راهنمایی در انتخاب تلفن بیسیم دارید؟</h3>
            <p className="text-sm md:text-base font-xmedium mb-8 text-slate-300 leading-8">
              برای مشاوره فنی، استعلام قیمت روز و ارسال فوری در تهران و شهرستان‌ها با مهندس محمدی تماس بگیرید.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:09125354811"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-xbold text-sm md:text-base shadow-xl hover:scale-105 transition-all"
              >
                <FaHeadset /> تماس مستقیم: ۰۹۱۲۵۳۵۴۸۱۱
              </a>
              <a
                href={`https://wa.me/989125354811?text=${encodeURIComponent("سلام مهندس محمدی، درباره خرید تلفن بیسیم راهنمایی می‌خواستم.")}`}
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
