"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaStar, FaBolt, FaMobileAlt, FaMusic, FaBook, FaMicrophone, FaBell, FaFire, FaLaptop, FaChartLine, FaPuzzlePiece, FaCog, FaBatteryFull, FaPhone, FaCreditCard, FaChartBar, FaPhoneAlt, FaHeadset } from "react-icons/fa";

export default function Rahyab() {
  const [activeTab, setActiveTab] = useState("all");

  const products = [
    {
      id: 1,
      image: "/imageLanding/rx-608.jpg",
      model: "RX-608",
      title: "دستگاه مرکز تلفن رهیاب RX-608",
      capacity: "16/64 (قابل گسترش تا 96/512)",
      category: "analog",
      price: "تماس بگیرید",
      description:
        "سیستم تلفن کامپیوتری حرفهای با معماری مدولار برای سازمانهای بزرگ، هتلها و بیمارستانها. قابلیت ارتقا بدون تجهیزات اضافی تا حداکثر ظرفیت",
      features: [
        "Caller ID پیشرفته",
        "برق اضطراری UPS",
        "تلفن گویا 4 لایه",
        "شارژینگ حرفهای",
      ],
      suitable: ["بیمارستانها", "هتلهای بزرگ", "سازمانهای دولتی"],
    },
    {
      id: 2,
      image: "/imageLanding/rx-112.jpg",
      model: "RX-112",
      title: "دستگاه مرکز تلفن رهیاب RX-112",
      capacity: "8/40 (قابل گسترش تا 8/104)",
      category: "analog",
      price: "تماس بگیرید",
      description:
        "راهکار مقرون به صرفه برای سازمانهای متوسط با نیاز به توسعه آتی. سیستم یکپارچه با امکان ارتقا بدون سرمایهگذاری مجدد",
      features: [
        "نرمافزار فارسی",
        "دفترچه 7200 شماره",
        "موزیک انتظار",
        "MDF داخلی",
      ],
      suitable: ["شرکتهای متوسط", "کارخانجات", "مراکز آموزشی"],
    },
    {
      id: 3,
      image: "/imageLanding/rx-40.jpg",
      model: "RX-40",
      title: "دستگاه مرکز تلفن رهیاب RX-40",
      capacity: "8/16 (قابل گسترش تا 8/32)",
      category: "analog",
      price: "تماس بگیرید",
      description:
        "مناسب برای کسبوکارهای کوچک با قابلیت توسعه یکپارچه. طراحی ساده و کارآمد با برنامهریزی آسان به زبان فارسی",
      features: ["Caller ID", "زنگ مرکزی", "درب بازکن", "Paging"],
      suitable: ["کلینیکها", "دفاتر کوچک", "مراکز خدماتی"],
    },
    {
      id: 4,
      image: "/imageLanding/rxd-320.jpg",
      model: "RXD-320",
      title: "دستگاه مرکز تلفن رهیاب RXD-320",
      capacity: "دیجیتال پیشرفته",
      category: "digital",
      price: "تماس بگیرید",
      description:
        "سیستم دیجیتال نسل جدید با پشتیبانی کامل VoIP و IP Telephony. معماری ترکیبی برای ادغام فناوریهای قدیم و جدید",
      features: ["VoIP", "IP Telephony", "Hybrid System", "Cloud Ready"],
      suitable: ["سازمانهای مدرن", "شرکتهای IT", "استارتاپها"],
    },
    {
      id: 5,
      image: "/imageLanding/rxd-1400.jpg",
      model: "RXD-1400",
      title: "دستگاه مرکز تلفن رهیاب RXD-1400",
      capacity: "حداکثر ظرفیت",
      category: "digital",
      price: "تماس بگیرید",
      description:
        "قدرتمندترین سیستم تلفنی دیجیتال رهیاب برای سازمانهای بزرگ با ترافیک بالا. ترکیب فناوری دیجیتال و آنالوگ در یک پلتفرم",
      features: [
        "ظرفیت بالا",
        "گزارشگیری پیشرفته",
        "مانیتورینگ لحظهای",
        "Multi-Site",
      ],
      suitable: ["هتلهای 5 ستاره", "بیمارستانهای بزرگ", "مراکز تماس"],
    },
  ];

  const filteredProducts =
    activeTab === "all"
      ? products
      : products.filter((p) => p.category === activeTab);

  const specs = [
    { icon: <FaBolt />, title: "برق اضطراری", desc: "UPS داخلی - کار 24 ساعته" },
    { icon: <FaMobileAlt />, title: "Caller ID", desc: "شناسایی هوشمند تماسها" },
    { icon: <FaMusic />, title: "موزیک انتظار", desc: "ورودی آنالوگ حرفهای" },
    { icon: <FaBook />, title: "دفترچه تلفن", desc: "7200 شماره دو زبانه" },
    { icon: <FaMicrophone />, title: "تلفن گویا", desc: "اپراتور خودکار 4 لایه" },
    { icon: <FaBell />, title: "زنگ مرکزی", desc: "Paging و فراخوان" },
    { icon: <FaFire />, title: "اعلام حریق", desc: "اتصال به سیستم ایمنی" },
    { icon: <FaLaptop />, title: "نرمافزار فارسی", desc: "برنامهریزی آسان" },
  ];

  const technicalFeatures = [
    {
      title: "قابلیت ارتقا یکپارچه",
      desc: "افزایش ظرفیت تا حداکثر بدون نیاز به تجهیزات اضافی - فقط با افزودن کارتهای خطوط",
      icon: <FaChartLine />,
    },
    {
      title: "معماری مدولار",
      desc: "هر بخش بر روی کارت جداگانه - سرعت بالا در عیبیابی و تعمیرات",
      icon: <FaPuzzlePiece />,
    },
    {
      title: "سیستم PC-Based",
      desc: "کنترل کامل با کامپیوتر سازگار با IBM - نرمافزار قدرتمند به زبان C",
      icon: <FaLaptop />,
    },
    {
      title: "برنامهریزی آسان",
      desc: "رابط کاربری فارسی با راهنمای گامبهگام - بدون نیاز به تخصص فنی بالا",
      icon: <FaCog />,
    },
    {
      title: "برق اضطراری هوشمند",
      desc: "مدار UPS داخلی با شارژ اتوماتیک - ادامه کار در قطع برق شهری",
      icon: <FaBatteryFull />,
    },
    {
      title: "Caller ID پیشرفته",
      desc: "نمایش شماره تماسگیرنده با قابلیت ذخیره در دفترچه تلفن",
      icon: <FaPhone />,
    },
    {
      title: "ورودی/خروجی آنالوگ",
      desc: "اتصال به موزیک انتظار، فراخوان (Paging) و ورودی صوتی از رادیو",
      icon: <FaMusic />,
    },
    {
      title: "ورودی/خروجی لاجیک",
      desc: "زنگ مرکزی، اعلام حریق، زنگ اخبار و کنترل درب بازکن",
      icon: <FaBell />,
    },
    {
      title: "نرمافزار شارژینگ",
      desc: "صورتحساب اتوماتیک با امکان مشاهده و چاپ گزارشات تفصیلی",
      icon: <FaCreditCard />,
    },
    {
      title: "دفترچه تلفن پیشرفته",
      desc: "ظرفیت 7200 شماره به دو زبان فارسی و انگلیسی با جستجوی سریع",
      icon: <FaBook />,
    },
    {
      title: "اپراتور اتوماتیک (IVR)",
      desc: "تلفن گویای حرفهای با زیرشاخه تا 4 لایه - هدایت خودکار تماسها",
      icon: <FaMicrophone />,
    },
    {
      title: "مانیتورینگ پیشرفته",
      desc: "نظارت لحظهای بر وضعیت خطوط و تماسها با گزارشدهی جامع",
      icon: <FaChartBar />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9ff] via-white to-[#f0f2ff]">
      {/* Animated Hero Section */}
      <div className="relative overflow-hidden mb-12 md:mb-16">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#253359] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#253359] rounded-full blur-3xl"></div>
        </div>

        <div className="relative bg-gradient-to-br from-[#253359] via-[#1e2a4a] to-[#0f1525] text-white py-16 md:py-24 px-6 md:px-12 rounded-3xl shadow-2xl">
          {/* Decorative Elements */}
          <div className="absolute top-10 right-10 w-20 h-20 border-2 border-white/20 rounded-full"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 border-2 border-white/10 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white/30 rounded-full"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white/30 rounded-full"></div>

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-xmedium">
              <FaStar /> بیش از 30 سال تجربه
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-xbold mb-6 leading-tight">
              مراکز تلفن هوشمند
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200 mt-2">
                سری RX و RXD
              </span>
            </h1>

            <p className="text-base md:text-lg leading-8 font-xmedium text-white/90 max-w-3xl mx-auto mb-8">
              مراکز تلفن کامپیوتری رهیاب، راهکار ایدهآل برای سازمانهای خصوصی و
              دولتی، هتلها و بیمارستانها. قابلیت ارتقا یکپارچه تا حداکثر ظرفیت
              بدون سرمایهگذاری مجدد - معماری مدولار با برنامهریزی آسان به زبان
              فارسی
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:09125354811">
                <button className="px-8 py-3 bg-white text-[#253359] rounded-xl font-xbold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                  مشاوره رایگان
                </button>
              </a>
              <button className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white rounded-xl font-xbold border border-white/30 hover:bg-white/20 transition-all duration-300">
                کاتالوگ محصولات
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16 px-4 md:px-6">
        {[
          {
            number: "30+",
            label: "سال تجربه",
            color: "from-blue-500 to-blue-600",
          },
          {
            number: "10",
            label: "سال پشتیبانی",
            color: "from-purple-500 to-purple-600",
          },
          {
            number: "512",
            label: "حداکثر ظرفیت",
            color: "from-pink-500 to-pink-600",
          },
          {
            number: "7200",
            label: "دفترچه تلفن",
            color: "from-indigo-500 to-indigo-600",
          },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            ></div>
            <div className="relative z-10">
              <div className="text-4xl md:text-5xl font-xbold text-[#253359] group-hover:text-white transition-colors duration-500 mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-[#606060] group-hover:text-white/90 transition-colors duration-500 font-xmedium">
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center mb-8 md:mb-12 px-4">
        <div className="inline-flex bg-white rounded-2xl p-2 shadow-lg">
          {[
            { id: "all", label: "همه محصولات" },
            { id: "analog", label: "آنالوگ" },
            { id: "digital", label: "دیجیتال" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 md:px-8 py-3 rounded-xl font-xbold text-sm md:text-base transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-[#253359] to-[#1a2440] text-white shadow-md"
                  : "text-[#606060] hover:bg-gray-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid - Enhanced */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16 px-4 md:px-6">
        {filteredProducts.map((product, idx) => (
          <div
            key={product.id}
            className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            {/* Product Badge */}
            <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-[#253359] to-[#1a2440] text-white px-4 py-2 rounded-full text-xs md:text-sm font-xbold shadow-lg">
              {product.model}
            </div>

            {/* Category Badge */}
            <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm text-[#253359] px-3 py-1 rounded-full text-xs font-xmedium">
              {product.category === "digital" ? "دیجیتال" : "آنالوگ"}
            </div>

            {/* Image Container with Gradient Overlay */}
            <div className="relative h-64 md:h-72 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img
                className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-700"
                src={product.image}
                alt={product.title}
              />
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              {/* Title & Capacity */}
              <div className="mb-4">
                <h3 className="text-lg md:text-xl font-xbold text-[#0C0C0C] mb-2 leading-8">
                  {product.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-[#606060]">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="font-xmedium">
                    ظرفیت: {product.capacity}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm md:text-base text-[#606060] font-xregular leading-7 mb-4">
                {product.description}
              </p>

              {/* Features */}
              <div className="mb-4">
                <div className="text-xs font-xbold text-[#404040] mb-2">
                  ویژگیهای کلیدی:
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="bg-gradient-to-r from-[#f0f2ff] to-[#e8ebff] text-[#253359] px-3 py-1.5 rounded-lg text-xs font-xmedium border border-[#253359]/10"
                    >
                      ✓ {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Suitable For */}
              <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                <div className="text-xs font-xbold text-[#253359] mb-2">
                  مناسب برای:
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.suitable.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-xs text-[#606060] font-xmedium"
                    >
                      {idx > 0 && "•"} {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button className="bg-gradient-to-r from-[#253359] to-[#1a2440] text-white py-3 md:py-4 rounded-xl font-xbold text-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <a href="tel:09125354811">مشاوره و خرید</a>
                </button>
                <Link href={`/products/rahyab/${product.model}`}>
                  <button className="w-full bg-white border-2 border-[#253359] text-[#253359] py-3 md:py-4 rounded-xl font-xbold text-sm hover:bg-[#253359] hover:text-white transition-all duration-300 flex justify-center items-center">
                    جزئیات بیشتر
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Specifications Grid */}
      <div className="mb-12 md:mb-16 px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-xbold text-[#253359] mb-4">
            امکانات و قابلیتها
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#253359] to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {specs.map((spec, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 text-center hover:-translate-y-2"
            >
              <div className="text-4xl md:text-5xl mb-3 group-hover:scale-125 transition-transform duration-500 flex justify-center text-[#253359]">
                {spec.icon}
              </div>
              <div className="text-sm md:text-base font-xbold text-[#253359] mb-1">
                {spec.title}
              </div>
              <div className="text-xs md:text-sm text-[#606060] font-xmedium">
                {spec.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Details */}
      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12 md:mb-16 mx-4 md:mx-6">
        <div className="flex items-center gap-3 mb-6 md:mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-[#253359] to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl">
            <FaCog />
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-xbold text-[#253359]">
            ویژگیهای فنی سیستم
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300"
            >
              <div className="text-3xl flex-shrink-0 mt-0.5 text-[#253359]">
                {feature.icon}
              </div>
              <div>
                <h4 className="text-sm md:text-base text-[#253359] font-xbold mb-2">
                  {feature.title}
                </h4>
                <p className="text-xs md:text-sm text-[#606060] font-xregular leading-6">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section - Enhanced */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#253359] via-[#1e2a4a] to-[#0f1525] rounded-3xl p-8 md:p-12 lg:p-16 text-center text-white mx-4 md:mx-6 mb-8">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-48 -translate-x-48"></div>

        <div className="relative z-10">
          <div className="inline-block mb-6 p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
            <FaPhoneAlt className="text-5xl" />
          </div>

          <h3 className="text-2xl md:text-3xl lg:text-4xl font-xbold mb-4">
            آماده مشاوره رایگان هستیم
          </h3>

          <p className="text-base md:text-lg font-xmedium mb-8 text-white/90 max-w-2xl mx-auto leading-8">
            کارشناسان مجرب ما آمادهاند تا بهترین سیستم تلفنی را متناسب با نیاز
            و بودجه سازمان شما پیشنهاد دهند
          </p>

          <div className="flex sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:02188440345"
              className="px-8 py-4 bg-white text-[#253359] rounded-xl font-xbold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 flex items-center gap-2"
            >
              <FaHeadset /> 021-88440345
            </a>
          </div>

          <div className="mt-8 flex justify-center gap-8 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="font-xmedium">پاسخگویی 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="font-xmedium">مشاوره رایگان</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
