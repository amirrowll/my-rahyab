"use client";
import React from "react";
import { FaStar, FaPhoneAlt, FaHeadset } from "react-icons/fa";

export default function ConferencePhones() {
  const products = [
    {
      id: 1,
      image: "/imageLanding/KX-NT700.png",
      model: "KX-NT700",
      title: "تلفن سانترال کنفرانس پاناسونیک KX-NT700",
      capacity: "کنفرانس سه طرفه",
      description: "سیستم پیشرفته کنفرانس با قابلیت اتصال به شبکه های IP و قدیمی، کیفیت بالای صدا (Hi-Definition)، ضبط مکالمه روی SD Card، حذف صدای نویز محیط",
      features: [
        "کنفرانس 3 طرفه",
        "ضبط روی SD Card",
        "Hi-Definition Sound",
        "حذف نویز",
        "کنفرانس تصویری",
        "Full Duplex",
        "G.722 16 KHz",
        "سازگار IP/آنالوگ"
      ],
      suitable: ["جلسات اداری", "کنفرانس ها", "شرکتهای بزرگ"],
      details: [
        "سیستم منشی تلفن تمام دیجیتال",
        "طراحی ضد لغزش گوشی",
        "حالت بهبود صدا",
        "مسدود کردن تماس های ورودی",
        "تنظیم دلخواه صدا",
        "زنگهای مختلف برای شناسایی",
        "زبان فارسی",
        "عمر باطری 18 ساعت",
        "100 حافظه نام و شماره",
        "20 دقیقه ضبط پیغام",
        "برنامه ریزی آسان",
        "وزن سبک",
        "ضبط 67 ساعت با SD 2GB",
        "کنفرانس تصویری ساده",
        "اکو کنسلینگ پیشرفته"
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9ff] via-white to-[#f0f2ff] mt-[80px]">
      <div className="relative overflow-hidden mb-12">
        <div className="relative bg-gradient-to-br from-[#253359] via-[#1e2a4a] to-[#0f1525] text-white py-16 px-6 rounded-3xl shadow-2xl mx-4">
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-xmedium">
              <FaStar /> تلفن کنفرانس
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-xbold mb-6 leading-tight">
              گوشی تلفن کنفرانس
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200 mt-2">
                پاناسونیک
              </span>
            </h1>
            <p className="text-base md:text-lg leading-8 font-xmedium text-white/90 max-w-3xl mx-auto mb-8">
              مناسب جلسات و کنفرانسهای صوتی با کیفیت بالا
            </p>
            <a href="tel:09125354811">
              <button className="px-8 py-3 bg-white text-[#253359] rounded-xl font-xbold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:scale-105">
                مشاوره رایگان
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 px-4">
        {[
          { number: "3", label: "کنفرانس طرفه", color: "from-blue-500 to-blue-600" },
          { number: "HD", label: "کیفیت صدا", color: "from-purple-500 to-purple-600" },
          { number: "67h", label: "ضبط مکالمه", color: "from-pink-500 to-pink-600" },
          { number: "IP", label: "سازگار", color: "from-indigo-500 to-indigo-600" },
        ].map((stat, idx) => (
          <div key={idx} className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            <div className="relative z-10">
              <div className="text-4xl font-xbold text-[#253359] group-hover:text-white transition-colors duration-500 mb-2">{stat.number}</div>
              <div className="text-sm text-[#606060] group-hover:text-white/90 transition-colors duration-500 font-xmedium">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 mb-12">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="relative h-80 bg-gradient-to-br from-gray-50 to-gray-100">
              <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-[#253359] to-[#1a2440] text-white px-6 py-3 rounded-full text-lg font-xbold shadow-lg">
                {product.model}
              </div>
              <img className="w-full h-full object-contain p-8" src={product.image} alt={product.title} />
            </div>

            <div className="p-8">
              <h2 className="text-2xl font-xbold text-[#253359] mb-4">{product.title}</h2>
              
              <div className="flex items-center gap-2 text-base text-[#606060] mb-6">
                <span className="inline-block w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                <span className="font-xmedium">{product.capacity}</span>
              </div>

              <p className="text-base text-[#606060] font-xregular leading-8 mb-6">
                {product.description}
              </p>

              <div className="mb-6">
                <h3 className="text-lg font-xbold text-[#253359] mb-3">ویژگی های کلیدی:</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {product.features.map((feature, idx) => (
                    <span key={idx} className="bg-gradient-to-r from-[#f0f2ff] to-[#e8ebff] text-[#253359] px-3 py-2 rounded-lg text-sm font-xmedium text-center">
                      ✓ {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
                <h3 className="text-lg font-xbold text-[#253359] mb-3">امکانات سیستم:</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {product.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-[#253359] mt-1">•</span>
                      <span className="text-sm text-[#606060] font-xmedium">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6 p-4 bg-white border-2 border-[#253359]/20 rounded-xl">
                <div className="text-sm font-xbold text-[#253359] mb-2">مناسب برای:</div>
                <div className="flex flex-wrap gap-3">
                  {product.suitable.map((item, idx) => (
                    <span key={idx} className="text-sm text-[#606060] font-xmedium">
                      {idx > 0 && "•"} {item}
                    </span>
                  ))}
                </div>
              </div>

              <a href="tel:09125354811" className="block w-full bg-gradient-to-r from-[#253359] to-[#1a2440] text-white py-4 rounded-xl font-xbold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 text-center">
                مشاوره و خرید
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="relative overflow-hidden bg-gradient-to-br from-[#253359] via-[#1e2a4a] to-[#0f1525] rounded-3xl p-12 text-center text-white mx-4 mb-8">
        <div className="relative z-10">
          <div className="inline-block mb-6 p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
            <FaPhoneAlt className="text-5xl" />
          </div>
          <h3 className="text-3xl font-xbold mb-4">آماده مشاوره رایگان هستیم</h3>
          <p className="text-lg font-xmedium mb-8 text-white/90 max-w-2xl mx-auto leading-8">
            کارشناسان ما آماده پاسخگویی به سوالات شما هستند
          </p>
          <a href="tel:02188440345" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#253359] rounded-xl font-xbold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:scale-105">
            <FaHeadset /> 021-88440345
          </a>
        </div>
      </div>
    </div>
  );
}
