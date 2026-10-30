"use client";

import { gateways } from "@/data/gateways";
import Link from "next/link";
import { useState } from "react";
import { FaStar, FaSearch, FaNetworkWired, FaServer, FaShieldAlt, FaRocket, FaPhoneAlt, FaHeadset, FaPhone, FaMusic, FaFax, FaUsers, FaLaptop, FaCog, FaBolt } from "react-icons/fa";

export default function GatewaysPage() {
  const [search, setSearch] = useState("");
  const [brandFilter, setBrandFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [activeTab, setActiveTab] = useState("all");

  const filtered = gateways.filter((g) => {
    const matchSearch = g.name.includes(search) || g.model.includes(search);
    const matchBrand = brandFilter === "all" || g.brand === brandFilter;
    const matchType =
      typeFilter === "all" ||
      (typeFilter === "fxs" && g.fxsPorts) ||
      (typeFilter === "fxo" && g.fxoPorts) ||
      (typeFilter === "e1" && g.e1Ports);
    const matchTab = activeTab === "all" || 
      (activeTab === "fxs" && g.fxsPorts) ||
      (activeTab === "fxo" && g.fxoPorts) ||
      (activeTab === "e1" && g.e1Ports);
    return matchSearch && matchBrand && matchType && matchTab;
  });

  const specs = [
    { icon: <FaNetworkWired />, title: "اتصال شبکه", desc: "پورتهای گیگابیت اترنت" },
    { icon: <FaServer />, title: "پروتکل SIP", desc: "پشتیبانی کامل SIP" },
    { icon: <FaShieldAlt />, title: "امنیت بالا", desc: "رمزنگاری SRTP/TLS" },
    { icon: <FaRocket />, title: "عملکرد سریع", desc: "پردازش بلادرنگ" },
  ];

  const technicalFeatures = [
    {
      title: "پشتیبانی کامل SIP",
      desc: "سازگاری با تمام سرورهای SIP و مراکز تلفن IP - قابلیت اتصال به Asterisk، FreePBX و...",
      icon: <FaPhone />,
    },
    {
      title: "کیفیت صدای HD",
      desc: "پشتیبانی از کدکهای پیشرفته G.722، Opus و G.711 - کیفیت صدای بینظیر",
      icon: <FaMusic />,
    },
    {
      title: "امنیت پیشرفته",
      desc: "رمزنگاری SRTP برای صدا و TLS برای سیگنالینگ - محافظت کامل از اطلاعات",
      icon: <FaShieldAlt />,
    },
    {
      title: "NAT Traversal",
      desc: "عبور آسان از فایروال و NAT - نصب ساده در هر شبکهای",
      icon: <FaNetworkWired />,
    },
    {
      title: "Failover و Redundancy",
      desc: "پشتیبانی از چند سرور SIP - اطمینان از دسترسی دائمی",
      icon: <FaServer />,
    },
    {
      title: "QoS پیشرفته",
      desc: "اولویتبندی ترافیک صوتی - کیفیت تماس بدون وقفه",
      icon: <FaRocket />,
    },
    {
      title: "فکس T.38",
      desc: "ارسال و دریافت فکس با کیفیت بالا روی شبکه IP",
      icon: <FaFax />,
    },
    {
      title: "Caller ID",
      desc: "نمایش شماره تماسگیرنده برای تمام خطوط",
      icon: <FaPhoneAlt />,
    },
    {
      title: "کنفرانس تلفنی",
      desc: "قابلیت کنفرانس 3 طرفه روی هر پورت",
      icon: <FaUsers />,
    },
    {
      title: "مدیریت از راه دور",
      desc: "رابط وب گرافیکی - پیکربندی و مانیتورینگ از هر نقطه",
      icon: <FaLaptop />,
    },
    {
      title: "Provisioning خودکار",
      desc: "نصب و پیکربندی خودکار - صرفهجویی در زمان",
      icon: <FaCog />,
    },
    {
      title: "پورتهای گیگابیت",
      desc: "سرعت انتقال بالا - پشتیبانی از شبکههای پرسرعت",
      icon: <FaBolt />,
    },
  ];

  return (
    <div className="min-h-screen max-w-[1440px] mx-auto bg-gradient-to-br from-[#f8f9ff] via-white to-[#f0f2ff] mt-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden mb-12 md:mb-16">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#253359] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#253359] rounded-full blur-3xl"></div>
        </div>

        <div className="relative bg-gradient-to-br from-[#253359] via-[#1e2a4a] to-[#0f1525] text-white py-16 md:py-24 px-6 md:px-12 rounded-3xl shadow-2xl">
          <div className="absolute top-10 right-10 w-20 h-20 border-2 border-white/20 rounded-full"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 border-2 border-white/10 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white/30 rounded-full"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white/30 rounded-full"></div>

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-xmedium">
              <FaStar /> محصولات گیت وی
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-xbold mb-6 leading-tight">
              گیت وی VoIP
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200 mt-2 pt-1">
                اتصال خطوط آنالوگ به دیجیتال
              </span>
            </h1>

            <p className="text-base md:text-lg leading-8 font-xmedium text-white/90 max-w-3xl mx-auto mb-8">
              گیت ویهای حرفهای گرند استریم و نیوراک برای تبدیل خطوط آنالوگ به دیجیتال با کیفیت صدای HD و امنیت بالا
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
          { number: "10+", label: "مدل متنوع", color: "from-blue-500 to-blue-600" },
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
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#253359] focus:outline-none font-xmedium"
            />
            
            <select
              value={brandFilter}
              onChange={(e) => setBrandFilter(e.target.value)}
              className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#253359] focus:outline-none font-xmedium"
            >
              <option value="all">همه برندها</option>
              <option value="Grandstream">Grandstream</option>
              <option value="Newrock">Newrock</option>
            </select>
            
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#253359] focus:outline-none font-xmedium"
            >
              <option value="all">همه انواع</option>
              <option value="fxs">FXS</option>
              <option value="fxo">FXO</option>
              <option value="e1">E1</option>
            </select>
            
            <button
              onClick={() => {
                setSearch("");
                setBrandFilter("all");
                setTypeFilter("all");
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
            { id: "fxs", label: "FXS" },
            { id: "fxo", label: "FXO" },
            { id: "e1", label: "E1" },
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
        {filtered.length > 0 ? (
          filtered.map((gateway, idx) => (
            <div
              key={gateway.id}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-[#253359] to-[#1a2440] text-white px-4 py-2 rounded-full text-xs md:text-sm font-xbold shadow-lg">
                {gateway.model}
              </div>

              <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm text-[#253359] px-3 py-1 rounded-full text-xs font-xmedium">
                {gateway.brand}
              </div>

              <div className="relative h-64 md:h-72 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-700"
                  src={gateway.image}
                  alt={gateway.name}
                />
              </div>

              <div className="p-6 md:p-8">
                <div className="mb-4">
                  <h3 className="text-lg md:text-xl font-xbold text-[#0C0C0C] mb-2 leading-8">
                    {gateway.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-[#606060]">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="font-xmedium">
                      {gateway.fxsPorts && `FXS: ${gateway.fxsPorts}`}
                      {gateway.fxoPorts && ` FXO: ${gateway.fxoPorts}`}
                      {gateway.e1Ports && ` E1: ${gateway.e1Ports}`}
                    </span>
                  </div>
                </div>

                <p className="text-sm md:text-base text-[#606060] font-xregular leading-7 mb-4">
                  {gateway.description}
                </p>

                <div className="mb-4">
                  <div className="text-xs font-xbold text-[#404040] mb-2">ویژگیهای کلیدی:</div>
                  <div className="flex flex-wrap gap-2">
                    {gateway.features.slice(0, 4).map((feature, idx) => (
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
                    {gateway.useCases?.map((item, idx) => (
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
                  <Link href={`/products/gateways/${gateway.id}`}>
                    <button className="w-full bg-white border-2 border-[#253359] text-[#253359] py-3 md:py-4 rounded-xl font-xbold text-sm hover:bg-[#253359] hover:text-white transition-all duration-300 flex justify-center items-center">
                      جزئیات بیشتر
                    </button>
                  </Link>
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
            کارشناسان مجرب ما آمادهاند تا بهترین گیت وی را متناسب با نیاز و بودجه سازمان شما پیشنهاد دهند
          </p>

          <div className="flex flex-wrap gap-4 justify-center items-center">
            <a
              href="tel:09125354811"
              className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-xbold text-lg transition-all duration-300 shadow-2xl hover:scale-105 flex items-center gap-2"
            >
              <FaHeadset /> تماس مستقیم: ۰۹۱۲۵۳۵۴۸۱۱
            </a>
            <a
              href={`https://wa.me/989125354811?text=${encodeURIComponent("سلام، درباره انتخاب و خرید گیت‌وی VoIP مشاوره می‌خواستم.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-xbold text-lg border border-white/30 backdrop-blur-md hover:scale-105 transition-all flex items-center gap-2"
            >
              استعلام در واتساپ
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
