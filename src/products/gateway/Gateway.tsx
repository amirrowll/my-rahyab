"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaStar, FaSearch, FaNetworkWired, FaServer, FaShieldAlt, FaRocket, FaCog, FaPhoneAlt, FaHeadset } from "react-icons/fa";

export default function Gateway() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [selectedCapacity, setSelectedCapacity] = useState("all");

  const products = [
    {
      id: 1,
      image: "/imageLanding/phonegooya.png",
      model: "Gateway-8",
      brand: "پاناسونیک",
      title: "گیت وی پاناسونیک 8 پورت",
      capacity: "8 پورت",
      category: "analog",
      price: "تماس بگیرید",
      description: "گیت وی 8 پورت آنالوگ برای اتصال خطوط شهری به سانترال IP. قابلیت تبدیل خطوط آنالوگ به دیجیتال با کیفیت صدای عالی",
      features: ["8 پورت FXO", "SIP Protocol", "کیفیت HD", "نصب آسان"],
      suitable: ["شرکتهای کوچک", "دفاتر", "کلینیکها"],
    },
    {
      id: 2,
      image: "/imageLanding/phonegooya.png",
      model: "Gateway-16",
      brand: "پاناسونیک",
      title: "گیت وی پاناسونیک 16 پورت",
      capacity: "16 پورت",
      category: "analog",
      price: "تماس بگیرید",
      description: "گیت وی 16 پورت حرفه‌ای برای سازمان‌های متوسط. پشتیبانی کامل از VoIP و SIP با امنیت بالا",
      features: ["16 پورت FXO", "VoIP", "Failover", "QoS"],
      suitable: ["شرکتهای متوسط", "هتل‌ها", "بیمارستان‌ها"],
    },
    {
      id: 3,
      image: "/imageLanding/phonegooya.png",
      model: "Gateway-24",
      brand: "پاناسونیک",
      title: "گیت وی پاناسونیک 24 پورت",
      capacity: "24 پورت",
      category: "digital",
      price: "تماس بگیرید",
      description: "گیت وی 24 پورت دیجیتال با قابلیت‌های پیشرفته. مناسب برای سازمان‌های بزرگ با ترافیک بالا",
      features: ["24 پورت", "E1/T1", "Redundancy", "Management"],
      suitable: ["سازمان‌های بزرگ", "مراکز تماس", "شرکت‌های بزرگ"],
    },
    {
      id: 4,
      image: "/imageLanding/phonegooya.png",
      model: "Gateway-32",
      brand: "سامسونگ",
      title: "گیت وی سامسونگ 32 پورت",
      capacity: "32 پورت",
      category: "digital",
      price: "تماس بگیرید",
      description: "گیت وی 32 پورت سامسونگ با فناوری پیشرفته. پشتیبانی از پروتکل‌های متعدد و امنیت بالا",
      features: ["32 پورت", "Multi-Protocol", "Security", "Monitoring"],
      suitable: ["هتل‌های بزرگ", "بیمارستان‌ها", "مراکز تماس"],
    },
    {
      id: 5,
      image: "/imageLanding/phonegooya.png",
      model: "Gateway-48",
      brand: "سامسونگ",
      title: "گیت وی سامسونگ 48 پورت",
      capacity: "48 پورت",
      category: "digital",
      price: "تماس بگیرید",
      description: "قدرتمندترین گیت وی سامسونگ برای سازمان‌های بزرگ. قابلیت مدیریت متمرکز و گزارش‌گیری جامع",
      features: ["48 پورت", "Centralized", "Reporting", "High Availability"],
      suitable: ["سازمان‌های دولتی", "شرکت‌های بزرگ", "مراکز داده"],
    },
  ];

  const filteredProducts = products.filter((p) => {
    const matchTab = activeTab === "all" || p.category === activeTab;
    const matchSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                       p.model.toLowerCase().includes(searchTerm.toLowerCase());
    const matchBrand = selectedBrand === "all" || p.brand === selectedBrand;
    const matchCapacity = selectedCapacity === "all" || p.capacity === selectedCapacity;
    
    return matchTab && matchSearch && matchBrand && matchCapacity;
  });

  const specs = [
    { icon: <FaNetworkWired />, title: "اتصال شبکه", desc: "پورت‌های گیگابیت اترنت" },
    { icon: <FaServer />, title: "پروتکل SIP", desc: "پشتیبانی کامل SIP" },
    { icon: <FaShieldAlt />, title: "امنیت بالا", desc: "رمزنگاری و فایروال" },
    { icon: <FaRocket />, title: "عملکرد سریع", desc: "پردازش بلادرنگ" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9ff] via-white to-[#f0f2ff]">
      {/* Hero Section */}
      <div className="relative overflow-hidden mb-12 md:mb-16">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#253359] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#253359] rounded-full blur-3xl"></div>
        </div>

        <div className="relative bg-gradient-to-br from-[#253359] via-[#1e2a4a] to-[#0f1525] text-white py-16 md:py-24 px-6 md:px-12 rounded-3xl shadow-2xl">
          <div className="absolute top-10 right-10 w-20 h-20 border-2 border-white/20 rounded-full"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 border-2 border-white/10 rounded-full"></div>

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-xmedium">
              <FaStar /> محصولات گیت وی
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-xbold mb-6 leading-tight">
              گیت وی تلفنی
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200 mt-2">
                اتصال خطوط آنالوگ به دیجیتال
              </span>
            </h1>

            <p className="text-base md:text-lg leading-8 font-xmedium text-white/90 max-w-3xl mx-auto mb-8">
              گیت وی‌های حرفه‌ای برای تبدیل خطوط آنالوگ به دیجیتال با کیفیت صدای عالی و امنیت بالا
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:09125354811">
                <button className="px-8 py-3 bg-white text-[#253359] rounded-xl font-xbold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                  مشاوره رایگان
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16 px-4 md:px-6">
        {[
          { number: "5", label: "مدل متنوع", color: "from-blue-500 to-blue-600" },
          { number: "48", label: "حداکثر پورت", color: "from-purple-500 to-purple-600" },
          { number: "HD", label: "کیفیت صدا", color: "from-pink-500 to-pink-600" },
          { number: "SIP", label: "پروتکل", color: "from-indigo-500 to-indigo-600" },
        ].map((stat, idx) => (
          <div key={idx} className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
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

      {/* Advanced Search */}
      <div className="mb-8 md:mb-12 px-4 md:px-6">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <FaSearch className="text-[#253359] text-xl" />
            <h3 className="text-lg font-xbold text-[#253359]">جستجوی پیشرفته</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="جستجو بر اساس نام یا مدل..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#253359] focus:outline-none font-xmedium"
            />
            
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#253359] focus:outline-none font-xmedium"
            >
              <option value="all">همه برندها</option>
              <option value="پاناسونیک">پاناسونیک</option>
              <option value="سامسونگ">سامسونگ</option>
            </select>
            
            <select
              value={selectedCapacity}
              onChange={(e) => setSelectedCapacity(e.target.value)}
              className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#253359] focus:outline-none font-xmedium"
            >
              <option value="all">همه ظرفیت‌ها</option>
              <option value="8 پورت">8 پورت</option>
              <option value="16 پورت">16 پورت</option>
              <option value="24 پورت">24 پورت</option>
              <option value="32 پورت">32 پورت</option>
              <option value="48 پورت">48 پورت</option>
            </select>
            
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedBrand("all");
                setSelectedCapacity("all");
                setActiveTab("all");
              }}
              className="px-4 py-3 bg-[#253359] text-white rounded-xl font-xbold hover:bg-[#1a2440] transition-all duration-300"
            >
              پاک کردن فیلترها
            </button>
          </div>
        </div>
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

      {/* Products Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16 px-4 md:px-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, idx) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-[#253359] to-[#1a2440] text-white px-4 py-2 rounded-full text-xs md:text-sm font-xbold shadow-lg">
                {product.model}
              </div>

              <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm text-[#253359] px-3 py-1 rounded-full text-xs font-xmedium">
                {product.category === "digital" ? "دیجیتال" : "آنالوگ"}
              </div>

              <div className="relative h-64 md:h-72 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-700"
                  src={product.image}
                  alt={product.title}
                />
              </div>

              <div className="p-6 md:p-8">
                <div className="mb-4">
                  <h3 className="text-lg md:text-xl font-xbold text-[#0C0C0C] mb-2 leading-8">
                    {product.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-[#606060]">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="font-xmedium">ظرفیت: {product.capacity}</span>
                  </div>
                </div>

                <p className="text-sm md:text-base text-[#606060] font-xregular leading-7 mb-4">
                  {product.description}
                </p>

                <div className="mb-4">
                  <div className="text-xs font-xbold text-[#404040] mb-2">ویژگیهای کلیدی:</div>
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

                <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                  <div className="text-xs font-xbold text-[#253359] mb-2">مناسب برای:</div>
                  <div className="flex flex-wrap gap-2">
                    {product.suitable.map((item, idx) => (
                      <span key={idx} className="text-xs text-[#606060] font-xmedium">
                        {idx > 0 && "•"} {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-gradient-to-r from-[#253359] to-[#1a2440] text-white py-3 md:py-4 rounded-xl font-xbold text-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
                    <a href="tel:09125354811">مشاوره و خرید</a>
                  </button>
                  <button className="w-full bg-white border-2 border-[#253359] text-[#253359] py-3 md:py-4 rounded-xl font-xbold text-sm hover:bg-[#253359] hover:text-white transition-all duration-300">
                    جزئیات بیشتر
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-2 text-center py-12">
            <p className="text-[#606060] font-xmedium text-lg">محصولی با این مشخصات یافت نشد</p>
          </div>
        )}
      </div>

      {/* Specifications Grid */}
      <div className="mb-12 md:mb-16 px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-xbold text-[#253359] mb-4">
            امکانات و قابلیتها
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#253359] to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
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

      {/* CTA Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#253359] via-[#1e2a4a] to-[#0f1525] rounded-3xl p-8 md:p-12 lg:p-16 text-center text-white mx-4 md:mx-6 mb-8">
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
            کارشناسان مجرب ما آمادهاند تا بهترین گیت وی را متناسب با نیاز سازمان شما پیشنهاد دهند
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
