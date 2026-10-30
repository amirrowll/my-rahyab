"use client";

import React, { useState } from "react";
import Link from "next/link";
import { voipPhones } from "@/data/voipPhones";
import { FiPhone, FiWifi, FiServer } from "react-icons/fi";
import { FaStar, FaCheckCircle, FaHeadset } from "react-icons/fa";
import { MdCall } from "react-icons/md";

export default function VoIPPhonesPage() {
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    { id: "all", label: "همه محصولات" },
    { id: "بیسیم تحت شبکه", label: "بیسیم" },
    { id: "تلفن تحت شبکه", label: "تلفن IP" },
    { id: "سانترال تحت شبکه", label: "سانترال" },
    { id: "تلفن SIP", label: "SIP" },
  ];

  const filteredPhones = activeTab === "all" ? voipPhones : voipPhones.filter(p => p.category === activeTab);

  const specs = [
    { icon: <FiServer />, title: "کیفیت HD", desc: "صدای تمام HD" },
    { icon: <FiPhone />, title: "PoE", desc: "تغذیه از شبکه" },
    { icon: <FiWifi />, title: "WiFi", desc: "اتصال بیسیم" },
    { icon: <FaCheckCircle />, title: "کنفرانس", desc: "تا 5 طرفه" },
  ];

  return (
    <div className="min-h-screen max-w-[1440px] mx-auto bg-gradient-to-br from-[#f8f9ff] via-white to-[#f0f2ff] py-4 md:py-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden mb-12 md:mb-16">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#253359] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
        </div>

        <div className="relative bg-gradient-to-br from-[#253359] via-[#1e2a4a] to-[#0f1525] text-white py-16 md:py-24 px-6 md:px-12 rounded-3xl shadow-2xl mx-4 md:mx-6">
          <div className="absolute top-10 right-10 w-20 h-20 border-2 border-white/20 rounded-full"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 border-2 border-white/10 rounded-full"></div>

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-xmedium">
              <FaStar /> تجهیزات VoIP حرفه‌ای
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-xbold mb-6 leading-tight">
              تلفن‌های تحت شبکه
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200 mt-2">
                پاناسونیک، گرنداستریم، یالینک و اسنوم
              </span>
            </h1>

            <p className="text-base md:text-lg leading-8 font-xmedium text-white/90 max-w-3xl mx-auto mb-8">
              {voipPhones.length} محصول با کیفیت صدای HD، پشتیبانی از PoE و قابلیت‌های پیشرفته برای سازمان‌ها و شرکت‌ها
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
        {specs.map((stat, idx) => (
          <div key={idx} className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 text-center">
              <div className="text-4xl mb-2 text-[#253359] group-hover:text-white transition-colors duration-500 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-base font-xbold text-[#253359] group-hover:text-white transition-colors duration-500 mb-1">
                {stat.title}
              </div>
              <div className="text-sm text-[#606060] group-hover:text-white/90 transition-colors duration-500 font-xmedium">
                {stat.desc}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center mb-8 md:mb-12 px-4 overflow-x-auto">
        <div className="inline-flex bg-white rounded-2xl p-2 shadow-lg">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 md:px-8 py-3 rounded-xl font-xbold text-sm md:text-base transition-all duration-300 whitespace-nowrap ${
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
        {filteredPhones.map((phone, idx) => (
          <div key={phone.id} className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
            <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-[#253359] to-[#1a2440] text-white px-4 py-2 rounded-full text-xs md:text-sm font-xbold shadow-lg">
              {phone.brand}
            </div>

            <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm text-[#253359] px-3 py-1 rounded-full text-xs font-xmedium">
              {phone.category}
            </div>

            <div className="relative h-64 md:h-72 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-700" src={phone.image} alt={phone.name} />
            </div>

            <div className="p-6 md:p-8">
              <div className="mb-4">
                <h3 className="text-lg md:text-xl font-xbold text-[#0C0C0C] mb-2 leading-8">{phone.name}</h3>
                <div className="flex items-center gap-2 text-sm text-[#606060]">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="font-xmedium">{phone.price}</span>
                </div>
              </div>

              <p className="text-sm md:text-base text-[#606060] font-xregular leading-7 mb-4">{phone.description}</p>

              <div className="mb-4">
                <div className="text-xs font-xbold text-[#404040] mb-2">ویژگی‌های کلیدی:</div>
                <div className="flex flex-wrap gap-2">
                  {phone.features.slice(0, 3).map((feature, idx) => (
                    <span key={idx} className="bg-gradient-to-r from-[#f0f2ff] to-[#e8ebff] text-[#253359] px-3 py-1.5 rounded-lg text-xs font-xmedium border border-[#253359]/10 flex items-center gap-1">
                      <FaCheckCircle className="text-xs" /> {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <a href="tel:09125354811" className="bg-gradient-to-r from-[#253359] to-[#1a2440] text-white py-3 md:py-4 rounded-xl font-xbold text-sm hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center">
                  مشاوره و خرید
                </a>
                <Link href={`/products/voip/${phone.id}`} className="w-full bg-white border-2 border-[#253359] text-[#253359] py-3 md:py-4 rounded-xl font-xbold text-sm hover:bg-[#253359] hover:text-white transition-all duration-300 flex items-center justify-center">
                  جزئیات بیشتر
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#253359] via-[#1e2a4a] to-[#0f1525] rounded-3xl p-8 md:p-12 lg:p-16 text-center text-white mx-4 md:mx-6 mb-8">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-48 -translate-x-48"></div>

        <div className="relative z-10">
          <div className="inline-block mb-6 p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
            <FaHeadset className="text-5xl" />
          </div>

          <h3 className="text-2xl md:text-3xl lg:text-4xl font-xbold mb-4">آماده مشاوره رایگان هستیم</h3>

          <p className="text-base md:text-lg font-xmedium mb-8 text-white/90 max-w-2xl mx-auto leading-8">
            کارشناسان مجرب ما آماده‌اند تا بهترین تلفن تحت شبکه را متناسب با نیاز سازمان شما پیشنهاد دهند
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:09125354811" className="px-8 py-4 bg-white text-[#253359] rounded-xl font-xbold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:scale-105 flex items-center gap-2">
              <MdCall /> 0912-535-4811
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
