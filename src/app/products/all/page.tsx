"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaPhone, FaNetworkWired, FaHeadset, FaTools, FaChevronLeft } from "react-icons/fa";
import { MdRouter } from "react-icons/md";

export default function AllProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "همه محصولات", icon: <FaTools />, count: 25 },
    { id: "pbx", label: "سانترال", icon: <FaPhone />, count: 15 },
    { id: "phones", label: "تلفن ها", icon: <FaHeadset />, count: 8 },
    { id: "voip", label: "تجهیزات VoIP", icon: <MdRouter />, count: 5 },
    { id: "accessories", label: "تجهیزات جانبی", icon: <FaNetworkWired />, count: 7 },
  ];

  const productGroups = [
    {
      id: "rahyab-pbx",
      category: "pbx",
      brand: "رهیاب",
      title: "سانترال های رهیاب",
      description: "سیستم های تلفنی پیشرفته ساخت ایران",
      image: "/imageLanding/rahyabALL.jpg",
      productCount: 5,
      link: "/products/rahyab",
      badge: "محصول ایرانی",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: "panasonic-pbx",
      category: "pbx",
      brand: "پاناسونیک",
      title: "سانترال های پاناسونیک",
      description: "سری TDE و TDA با ظرفیت بالا",
      image: "/imageLanding/tde600.png",
      productCount: 10,
      link: "/products/panasonic",
      badge: "برند جهانی",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: "voip-devices",
      category: "voip",
      brand: "متنوع",
      title: "تجهیزات VoIP",
      description: "گیت وی، آداپتور و سرورهای VoIP",
      image: "/imageLanding/phonegooya.png",
      productCount: 5,
      link: "/products/voip",
      badge: "جدید",
      color: "from-green-500 to-green-600"
    },
    {
      id: "accessories",
      category: "accessories",
      brand: "متنوع",
      title: "تجهیزات جانبی",
      description: "هدست، کنسول و لوازم جانبی",
      image: "/imageLanding/zabtMokalemat.jpg",
      productCount: 7,
      link: "/products/accessories",
      badge: "پرفروش",
      color: "from-orange-500 to-orange-600"
    },
  ];

  const filteredGroups = activeCategory === "all" 
    ? productGroups 
    : productGroups.filter(g => g.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9ff] via-white to-[#f0f2ff]">
      {/* Hero Section */}
      <div className="relative overflow-hidden mb-12">
        <div className="bg-gradient-to-br from-[#253359] via-[#1e2a4a] to-[#0f1525] text-white py-16 md:py-20 px-6 rounded-3xl">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-xbold mb-4">
              همه محصولات
            </h1>
            <p className="text-lg text-white/90 font-xmedium max-w-2xl mx-auto">
              مجموعه کامل تجهیزات ارتباطی و شبکه
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto mb-12 px-4">
        <div className="bg-white rounded-2xl shadow-lg p-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex flex-col items-center gap-2 p-4 rounded-xl font-xbold text-sm transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-[#253359] to-[#1a2440] text-white shadow-md"
                    : "text-[#606060] hover:bg-gray-50"
                }`}
              >
                <span className="text-2xl">{cat.icon}</span>
                <span>{cat.label}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  activeCategory === cat.id ? "bg-white/20" : "bg-gray-100"
                }`}>
                  {cat.count} محصول
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Groups Grid */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredGroups.map((group, idx) => (
            <Link
              key={group.id}
              href={group.link}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Badge */}
              <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-xbold text-[#253359]">
                {group.badge}
              </div>

              {/* Image Section */}
              <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src={group.image}
                  alt={group.title}
                  className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`w-3 h-3 rounded-full bg-gradient-to-r ${group.color}`}></span>
                  <span className="text-sm font-xbold text-[#606060]">{group.brand}</span>
                </div>

                <h3 className="text-xl font-xbold text-[#253359] mb-2">
                  {group.title}
                </h3>

                <p className="text-sm text-[#606060] font-xmedium mb-4">
                  {group.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-xbold text-[#253359]">
                    {group.productCount} محصول
                  </span>
                  <div className="flex items-center gap-2 text-[#253359] font-xbold text-sm group-hover:gap-3 transition-all">
                    مشاهده محصولات
                    <FaChevronLeft className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="bg-gradient-to-br from-[#253359] to-[#1a2440] rounded-3xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-xbold mb-2">25+</div>
              <div className="text-sm text-white/80 font-xmedium">محصول متنوع</div>
            </div>
            <div>
              <div className="text-4xl font-xbold mb-2">3</div>
              <div className="text-sm text-white/80 font-xmedium">برند معتبر</div>
            </div>
            <div>
              <div className="text-4xl font-xbold mb-2">24/7</div>
              <div className="text-sm text-white/80 font-xmedium">پشتیبانی</div>
            </div>
            <div>
              <div className="text-4xl font-xbold mb-2">100%</div>
              <div className="text-sm text-white/80 font-xmedium">اصالت کالا</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
