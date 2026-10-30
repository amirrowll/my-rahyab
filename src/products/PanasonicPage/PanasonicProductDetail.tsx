"use client";
import React, { useState } from "react";
import { PanasonicProduct } from "./panasonicData";
import { FaChartBar, FaBook, FaMusic, FaSatelliteDish, FaClipboardList, FaCogs, FaTools, FaHeadset, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdCall } from "react-icons/md";

interface Props {
  product: PanasonicProduct;
}

export default function PanasonicProductDetail({ product }: Props) {
  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    { id: "overview", label: "مشخصات کلی", icon: <FaClipboardList /> },
    { id: "features", label: "ویژگی ها", icon: <FaCogs /> },
    { id: "specs", label: "مشخصات فنی", icon: <FaTools /> },
  ];

  const specCards = [
    {
      title: "اسلات کارت",
      value: product.specs.slots,
      icon: <FaChartBar />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "خطوط شهری",
      value: product.specs.maxLines,
      icon: <MdCall />,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "خطوط داخلی",
      value: product.specs.maxExtensions,
      icon: <MdCall />,
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "دسته بندی",
      value: product.category.toUpperCase(),
      icon: <FaChartBar />,
      color: "from-indigo-500 to-indigo-600"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9ff] via-white to-[#f0f2ff] py-8 px-4">
      <div className="max-w-7xl mx-auto mb-8">
        <div className="relative bg-gradient-to-br from-[#253359] via-[#1e2a4a] to-[#0f1525] rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 grid md:grid-cols-2 gap-8 p-8 md:p-12">
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-20"></div>
                <img
                  src={product.image}
                  alt={product.model}
                  className="relative w-full max-w-md rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center text-white">
              <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-xmedium w-fit">
                محصول حرفهای پاناسونیک
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-xbold mb-4 leading-tight">
                {product.title.replace("تلفن سانترال پاناسونیک مدل ", "")}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200 mt-2">
                  {product.model}
                </span>
              </h1>

              <p className="text-lg text-white/90 font-xmedium mb-6 leading-8">
                {product.shortDesc}
              </p>

              <div className="flex flex-wrap gap-3">
                <a href="tel:09125354811" className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-xbold text-sm shadow-lg hover:scale-105 transition-all flex items-center gap-2">
                  <FaPhoneAlt /> استعلام قیمت و خرید: ۰۹۱۲-۵۳۵۴۸۱۱
                </a>
                <a href={`https://wa.me/989125354811?text=${encodeURIComponent(`سلام، برای خرید یا استعلام دستگاه سانترال پاناسونیک مدل ${product.model} سوال داشتم.`)}`} target="_blank" rel="noopener noreferrer" className="px-6 py-3.5 bg-white/10 backdrop-blur-sm text-white rounded-xl font-xbold text-sm border border-white/30 hover:bg-white/20 transition-all flex items-center gap-2">
                  <FaWhatsapp /> استعلام در واتساپ
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {specCards.map((spec, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${spec.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <div className="relative z-10 text-center">
                <div className="text-4xl flex justify-center mb-3 group-hover:scale-125 transition-transform duration-500">
                  {spec.icon}
                </div>
                <div className="text-2xl font-xbold text-[#253359] group-hover:text-white transition-colors duration-500 mb-1">
                  {spec.value}
                </div>
                <div className="text-sm text-[#606060] group-hover:text-white/90 transition-colors duration-500 font-xmedium">
                  {spec.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mb-8">
        <div className="bg-white rounded-2xl shadow-lg p-2 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-xbold text-sm transition-all duration-300 whitespace-nowrap ${
                  activeSection === section.id
                    ? "bg-gradient-to-r from-[#253359] to-[#1a2440] text-white shadow-md"
                    : "text-[#606060] hover:bg-gray-50"
                }`}
              >
                <span className="text-lg">{section.icon}</span>
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Overview Section */}
        {activeSection === "overview" && (
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-[#253359] to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl">
                <FaClipboardList />
              </div>
              <h2 className="text-2xl md:text-3xl font-xbold text-[#253359]">
                مشخصات کلی {product.model}
              </h2>
            </div>

            <div className="mb-8">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                <p className="text-[#404040] font-xmedium leading-8 text-base">
                  {product.fullDesc}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <h3 className="text-xl font-xbold text-[#253359] mb-4">ظرفیت سیستم</h3>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                  <div className="text-3xl font-xbold text-[#253359] mb-2">{product.capacity}</div>
                  <p className="text-sm text-[#606060] font-xmedium">
                    ظرفیت قابل گسترش متناسب با نیاز سازمان شما
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-xbold text-[#253359] mb-4">مشخصات سخت افزاری</h3>
                <div className="space-y-3">
                  {Object.entries(product.specs).map(([key, value], idx) => (
                    <div key={idx} className="bg-white border-2 border-blue-100 rounded-xl p-4">
                      <div className="text-sm font-xbold text-[#253359]">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#253359] to-[#1a2440] rounded-2xl p-8 text-white">
              <h3 className="text-xl font-xbold mb-4">مناسب برای:</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {product.suitable.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="text-2xl">✓</span>
                    <span className="font-xmedium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Features Section */}
        {activeSection === "features" && (
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-[#253359] to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl">
                <FaCogs />
              </div>
              <h2 className="text-2xl md:text-3xl font-xbold text-[#253359]">
                ویژگی های {product.model}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {product.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="group flex items-start gap-3 p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 border border-transparent hover:border-[#253359]/10"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-[#253359] to-purple-600 rounded-lg flex items-center justify-center text-white text-sm font-xbold mt-0.5">
                    ✓
                  </div>
                  <p className="text-[#404040] font-xmedium leading-7 text-sm md:text-base">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Specs Section */}
        {activeSection === "specs" && (
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-[#253359] to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl">
                <FaTools />
              </div>
              <h2 className="text-2xl md:text-3xl font-xbold text-[#253359]">
                مشخصات فنی {product.model}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(product.specs).map(([key, value], idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border-r-4 border-[#253359]"
                >
                  <div className="text-lg font-xbold text-[#253359] mb-2">
                    {key === "slots" && "تعداد اسلات"}
                    {key === "maxLines" && "حداکثر خطوط شهری"}
                    {key === "maxExtensions" && "حداکثر خطوط داخلی"}
                    {key === "expansion" && "قابلیت گسترش"}
                    {key === "connection" && "اتصال"}
                    {key === "onboard" && "کارت های Onboard"}
                    {key === "default" && "پیش فرض"}
                    {key === "pri" && "PRI"}
                  </div>
                  <div className="text-2xl font-xbold text-[#253359]">{value}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-r from-[#253359] to-[#1a2440] rounded-2xl p-8 text-white">
              <h3 className="text-xl font-xbold mb-4">سری {product.category.toUpperCase()} پاناسونیک</h3>
              <p className="font-xmedium leading-8">
                سری {product.category.toUpperCase()} پاناسونیک با امکانات قدرتمند و ارتقاء یافته سیستمهای مخابراتی پیشرفته کاملا IP هستند که امکانات و سرویسهای IP تلفنی را روی شبکه محلی (LAN) و هم شبکه های گسترده (Broad Band) فراهم می آورند. از جمله قابلیت های بسیار فنی و پیشرفته و به روز در دنیا در سیستم های سانترال پرظرفیت پاناسونیک، می توان به ماژولار بودن باکس های PBX اشاره کرد.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto mt-12">
        <div className="relative overflow-hidden bg-gradient-to-br from-[#1a233b] via-[#253359] to-[#0f172a] rounded-3xl p-8 md:p-14 text-center text-white shadow-2xl">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-xbold mb-4">
              نیاز به راهنمایی در انتخاب و کانفیگ سانترال {product.model} دارید؟
            </h3>

            <p className="text-sm md:text-base font-xmedium mb-8 text-slate-300 leading-8">
              مهندس محمدی کارشناس ارشد ارتباطات شرکت رهیاب آماده پاسخگویی به سوالات فنی، اعزام نصاب و صدور پیش‌فاکتور رسمی است.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:09125354811"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-xbold text-sm md:text-base shadow-xl hover:scale-105 transition-all"
              >
                <FaHeadset /> تماس مستقیم: ۰۹۱۲۵۳۵۴۸۱۱
              </a>
              <a
                href={`https://wa.me/989125354811?text=${encodeURIComponent(`سلام مهندس محمدی، برای خرید و راه‌اندازی سانترال پاناسونیک مدل ${product.model} راهنمایی می‌خواستم.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white rounded-xl font-xbold text-sm md:text-base border border-white/30 backdrop-blur-md hover:scale-105 transition-all"
              >
                <FaWhatsapp className="text-emerald-400 text-lg" /> استعلام فوری در واتساپ
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
