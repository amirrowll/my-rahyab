"use client";
import React from "react";
import { FaStar, FaPhoneAlt, FaHeadset } from "react-icons/fa";

export default function SIPPhones() {
  const products = [
    {
      id: 1,
      image: "/imageLanding/KX-UT113.png",
      model: "KX-UT113",
      brand: "پاناسونیک",
      title: "تلفن سانترال تحت شبکه SIP مدل KX-UT113",
      capacity: "2 اکانت SIP - 2 پورت اترنت",
      description: "2 اکانت سیپ، صفحه نمایش 16 کاراکتری 2 خطی، 2 پورت اترنت 100BASE-T، انتظار تماس، انتقال تماس، بی صدا کردن، بلندگو، نمایش ID تماس گیرنده",
      features: ["2 اکانت SIP", "صفحه 2 خطی", "2 پورت اترنت", "Caller ID"],
      suitable: ["مراکز کاری کوچک", "دفاتر", "کسب و کارها"],
    },
    {
      id: 2,
      image: "/imageLanding/KX-UT136B.png",
      model: "KX-UT136B",
      brand: "پاناسونیک",
      title: "تلفن سانترال پاناسونیک SIP مدل KX-UT136B",
      capacity: "صفحه 3 خطی - 4 کلید نرم افزاری",
      description: "صفحه نمایش سه خطی، 4 کلید نرم افزاری، قابل استفاده روی استریسک، تلفن کارمندی تحت شبکه، 2 پورت اترنت، انتظار و انتقال تماس، نمایش ID",
      features: ["صفحه 3 خطی", "4 کلید نرم افزاری", "استریسک", "VoIP"],
      suitable: ["کارمندان", "سازمانها", "ادارات"],
    },
    {
      id: 3,
      image: "/imageLanding/KX-UT123.png",
      model: "KX-UT123",
      brand: "پاناسونیک",
      title: "تلفن سانترال پاناسونیک SIP مدل KX-UT123",
      capacity: "صفحه 2 خطی - پروتکل SIP",
      description: "کاملا دیجیتال، پشتیبانی از پروتکل سیپ، صفحه نمایش 16 کاراکتری 2 خطی، 2 پورت اترنت، انتظار تماس، انتقال تماس، بلندگو، نمایش اطلاعات تماس گیرنده",
      features: ["کاملا دیجیتال", "پروتکل SIP", "2 پورت اترنت", "کیفیت بالا"],
      suitable: ["شرکتها", "دفاتر", "سازمانها"],
    },
    {
      id: 4,
      image: "/imageLanding/KX-HGT100.png",
      model: "KX-HGT100",
      brand: "پاناسونیک",
      title: "تلفن سانترال پاناسونیک SIP مدل KX-HGT100",
      capacity: "سازگار با TDA/TDE/NS",
      description: "سازگار با مراکز TDA، TDE و NS، سیستم پردازش صوتی پاناسونیک، صفحه 16 کاراکتری 2 خطی، 2 پورت اترنت، انتقال تماس، بلندگو، نمایش ID، نشانگر پست صوتی",
      features: ["TDA/TDE/NS", "پردازش صوتی", "2 پورت اترنت", "پست صوتی"],
      suitable: ["مراکز پر ظرفیت", "شرکتهای بزرگ", "سازمانها"],
    },
    {
      id: 5,
      image: "/imageLanding/KX-UT670.png",
      model: "KX-UT670",
      brand: "پاناسونیک",
      title: "تلفن سانترال پاناسونیک SIP مدل KX-UT670",
      capacity: "24 کلید برنامه ریزی - PoE",
      description: "24 کلید قابل برنامه ریزی در 4 ردیف 6 تایی، ذخیره تماس های ورودی و خروجی، قابلیت PoE، 2 پورت اترنت، یکپارچه سازی با TDE و NCP، سیستم پردازش صوت پاناسونیک",
      features: ["24 کلید", "PoE", "ذخیره تماس", "TDE/NCP"],
      suitable: ["محیط های کاری", "مدیران", "شرکتها"],
    },
    {
      id: 6,
      image: "/imageLanding/KX-TGP550.png",
      model: "KX-TGP550",
      brand: "پاناسونیک",
      title: "تلفن سانترال پاناسونیک SIP مدل KX-TGP550",
      capacity: "8 اکانت SIP - LCD 2.3 اینچ",
      description: "8 اکانت جداگانه، نمایشگر LCD 2.3 اینچ رومیزی و 1.8 بی سیم، صفحه 3 سطر 16 کاراکتری، 5 ساعت دوام باتری، مکالمه گروهی، پشتیبانی از هدفون، 2 پورت اترنت",
      features: ["8 اکانت SIP", "LCD 2.3 اینچ", "5 ساعت باتری", "مکالمه گروهی"],
      suitable: ["دفاتر", "شرکتها", "سازمانها"],
    },
    {
      id: 7,
      image: "/imageLanding/KX-UT248.png",
      model: "KX-UT248",
      brand: "پاناسونیک",
      title: "تلفن سانترال پاناسونیک SIP مدل KX-UT248",
      capacity: "صفحه 4.4 اینچ - بلوتوث",
      description: "تلفن مدیریتی، صفحه نمایش 4.4 اینچ، سیستم بلوتوث، همگام سازی با هدست، ذخیره تماس های ورودی و خروجی، 2 پورت اترنت، انتظار و انتقال تماس، نمایش ID",
      features: ["صفحه 4.4 اینچ", "بلوتوث", "ذخیره تماس", "تلفن مدیریتی"],
      suitable: ["مدیران", "شرکتهای بزرگ", "سازمانها"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9ff] via-white to-[#f0f2ff] mt-[80px]">
      <div className="relative overflow-hidden mb-12">
        <div className="relative bg-gradient-to-br from-[#253359] via-[#1e2a4a] to-[#0f1525] text-white py-16 px-6 rounded-3xl shadow-2xl mx-4">
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-xmedium">
              <FaStar /> گوشی های SIP
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-xbold mb-6 leading-tight">
              گوشی تلفن SIP
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200 mt-2">
                پروتکل SIP برای ارتباطات اینترنتی
              </span>
            </h1>
            <p className="text-base md:text-lg leading-8 font-xmedium text-white/90 max-w-3xl mx-auto mb-8">
              تلفنهای SIP پاناسونیک با کیفیت صدای عالی و امکانات پیشرفته
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
          { number: "7", label: "مدل متنوع", color: "from-blue-500 to-blue-600" },
          { number: "SIP", label: "پروتکل", color: "from-purple-500 to-purple-600" },
          { number: "8", label: "حداکثر اکانت", color: "from-pink-500 to-pink-600" },
          { number: "PoE", label: "پشتیبانی", color: "from-indigo-500 to-indigo-600" },
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
            <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm text-[#253359] px-3 py-1 rounded-full text-xs font-xmedium">
              {product.brand}
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
            کارشناسان ما آماده راهنمایی شما برای انتخاب بهترین تلفن SIP هستند
          </p>
          <a href="tel:02188440345" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#253359] rounded-xl font-xbold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:scale-105">
            <FaHeadset /> 021-88440345
          </a>
        </div>
      </div>
    </div>
  );
}
