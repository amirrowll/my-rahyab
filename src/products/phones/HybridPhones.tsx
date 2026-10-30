"use client";
import React from "react";
import { FaStar, FaPhoneAlt, FaHeadset } from "react-icons/fa";

export default function HybridPhones() {
  const products = [
    {
      id: 1,
      image: "/imageLanding/KX-T7735.png",
      model: "KX-T7735",
      title: "تلفن سانترال هایبرید پاناسونیک KX-T7735",
      capacity: "12 کلید قابل برنامه ریزی",
      description: "طراحی زیبا، صفحه نمایش صاف و شفاف، 12 کلید دو رنگ سبز و قرمز، Caller ID، 3 خط با 16 کاراکتر قابل نمایش",
      features: ["بلندگوی دو طرفه", "کلید هدایتگر", "LCD 3 سطری", "Caller ID"],
      suitable: ["دفاتر اداری", "شرکتها", "سازمانها"],
    },
    {
      id: 2,
      image: "/imageLanding/KX-T7730.png",
      model: "KX-T7730",
      title: "تلفن سانترال هایبرید پاناسونیک KX-T7730",
      capacity: "12 دکمه DSS",
      description: "تلفن مدیریتی با دسترسی به برنامه ریزی سانترال، نمایشگر تک سطری، جوابگویی خودکار، سازگار با Headset، کنفرانس 3 نفره",
      features: ["12 دکمه DSS", "Programming", "کنفرانس 3 نفره", "2 کنسول"],
      suitable: ["مدیران", "اپراتورها", "برنامه ریزان"],
    },
    {
      id: 3,
      image: "/imageLanding/KX-T7750.png",
      model: "KX-T7750",
      title: "تلفن سانترال هایبرید پاناسونیک KX-T7750",
      capacity: "LCD 3 سطری 16 حرفی",
      description: "ظاهر ساده و شیک، افزایش مهارت در مدیریت تماس، بلندگوی دو طرفه، 12 کلید قابل برنامه ریزی، چراغ پیام",
      features: ["بلندگوی دو طرفه", "LCD 3 سطری", "12 کلید", "چراغ پیام"],
      suitable: ["ادارات", "مراکز سانترال", "کسب و کارها"],
    },
    {
      id: 4,
      image: "/imageLanding/KX-T7740.png",
      model: "KX-T7740",
      title: "کنسول سانترال هایبرید پاناسونیک KX-T7740",
      capacity: "32 کلید DSS",
      description: "ماژول افزودنی برای محل های شلوغ، 32 کلید انتخاب مستقیم، 32 کلید BLF، مناسب KX-T7730، افزایش بهره وری",
      features: ["32 کلید DSS", "32 کلید BLF", "سازگار 7730", "مدیریت تماس"],
      suitable: ["محل های شلوغ", "اپراتورها", "مراکز تماس"],
    },
    {
      id: 5,
      image: "/imageLanding/KX-T7720.png",
      model: "KX-T7720",
      title: "تلفن سانترال هایبرید پاناسونیک KX-T7720",
      capacity: "12 کلید DSS",
      description: "تلفن معمولی بدون صفحه نمایشگر، بلندگوی دو طرفه، کلید هدایتگر، چراغ پیام، 12 کلید DSS",
      features: ["بلندگوی دو طرفه", "12 کلید DSS", "چراغ پیام", "کلید هدایتگر"],
      suitable: ["دفاتر کوچک", "کسب و کارها", "شرکتهای کوچک"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9ff] via-white to-[#f0f2ff] mt-[80px]">
      <div className="relative overflow-hidden mb-12">
        <div className="relative bg-gradient-to-br from-[#253359] via-[#1e2a4a] to-[#0f1525] text-white py-16 px-6 rounded-3xl shadow-2xl mx-4">
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-xmedium">
              <FaStar /> گوشی های هایبرید
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-xbold mb-6 leading-tight">
              گوشی تلفن سانترال هایبرید
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200 mt-2">
                پاناسونیک
              </span>
            </h1>
            <p className="text-base md:text-lg leading-8 font-xmedium text-white/90 max-w-3xl mx-auto mb-8">
              ترکیب تکنولوژی آنالوگ و دیجیتال برای انعطاف بیشتر
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
          { number: "5", label: "مدل متنوع", color: "from-blue-500 to-blue-600" },
          { number: "32", label: "حداکثر کلید", color: "from-purple-500 to-purple-600" },
          { number: "LCD", label: "نمایشگر", color: "from-pink-500 to-pink-600" },
          { number: "BLF", label: "چراغ وضعیت", color: "from-indigo-500 to-indigo-600" },
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 px-4">
        {products.map((product) => (
          <div key={product.id} className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
            <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-[#253359] to-[#1a2440] text-white px-4 py-2 rounded-full text-sm font-xbold shadow-lg">
              {product.model}
            </div>
            <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
              <img className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-700" src={product.image} alt={product.title} />
            </div>
            <div className="p-6">
              <h3 className="text-base font-xbold text-[#0C0C0C] mb-2 leading-7">{product.title}</h3>
              <div className="flex items-center gap-2 text-sm text-[#606060] mb-3">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="font-xmedium text-xs">{product.capacity}</span>
              </div>
              <p className="text-sm text-[#606060] font-xregular leading-6 mb-4">{product.description}</p>
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature, idx) => (
                    <span key={idx} className="bg-gradient-to-r from-[#f0f2ff] to-[#e8ebff] text-[#253359] px-2 py-1 rounded-lg text-xs font-xmedium">
                      ✓ {feature}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mb-4 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                <div className="text-xs font-xbold text-[#253359] mb-1">مناسب برای:</div>
                <div className="flex flex-wrap gap-2">
                  {product.suitable.map((item, idx) => (
                    <span key={idx} className="text-xs text-[#606060] font-xmedium">
                      {idx > 0 && "•"} {item}
                    </span>
                  ))}
                </div>
              </div>
              <a href="tel:09125354811" className="block w-full bg-gradient-to-r from-[#253359] to-[#1a2440] text-white py-3 rounded-xl font-xbold text-sm hover:shadow-lg hover:scale-105 transition-all duration-300 text-center">
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
