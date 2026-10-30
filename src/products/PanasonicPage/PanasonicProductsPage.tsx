"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaNetworkWired,
  FaPhone,
  FaMicrophone,
  FaUsers,
  FaLaptop,
  FaExchangeAlt,
  FaSatelliteDish,
  FaCubes,
  FaStar,
  FaPhoneAlt,
  FaCheckCircle,
  FaHeadset,
  FaTools,
  FaShieldAlt,
  FaArrowLeft,
} from "react-icons/fa";
import { MdCall } from "react-icons/md";

export default function PanasonicProductsPage() {
  const [activeTab, setActiveTab] = useState("all");

  const products = [
    {
      id: "tes824",
      image: "/imageLanding/tes824.png",
      model: "KX-TES824",
      title: "تلفن سانترال پاناسونیک مدل KX-TES824",
      capacity: "۳ خط شهری / ۸ خط داخلی (قابل ارتقا تا ۸ به ۲۴)",
      category: "low",
      price: "استعلام قیمت روز",
      description:
        "پرفروش‌ترین و محبوب‌ترین سانترال کم‌ظرفیت اداری در ایران. دارای تلفن گویا (DISA) پیش‌فرض ۳ مرحله‌ای، امکان اتصال تلفن اپراتوری KX-T7730 و نصب فوق‌العاده پایدار.",
      features: [
        "تلفن گویا ۳ مرحله‌ای پیش‌فرض",
        "پشتیبانی از کالر آیدی (Caller ID)",
        "امکان ارتقا با کارت‌های 82483 و 82480",
        "سازگاری با انواع تلفن‌های آنالوگ و هایبرید",
      ],
      suitable: ["دفاتر اداری ۱ تا ۲۴ نفر", "مطب‌ها و کلینیک‌ها", "شرکت‌های بازرگانی"],
    },
    {
      id: "tem824",
      image: "/imageLanding/tem824.png",
      model: "KX-TEM824",
      title: "تلفن سانترال پاناسونیک مدل KX-TEM824",
      capacity: "۶ خط شهری / ۱۶ خط داخلی (قابل ارتقا تا ۸ به ۲۴)",
      category: "low",
      price: "استعلام قیمت روز",
      description:
        "سانترال کم‌ظرفیت با ظرفیت اولیه ۶ خط شهری و ۱۶ داخلی. دارای واحد پذیرش خودکار، پیام‌گیر صوتی، و امکان اتصال درب‌بازکن و باتری بکاپ.",
      features: [
        "۶ خط شهری و ۱۶ داخلی پیش‌فرض",
        "واحد پاسخگویی خودکار ۳ مرحله‌ای",
        "پشتیبانی از کارت مزاحم‌یاب",
        "تقسیم بار کاری اپراتورها",
      ],
      suitable: ["مجموعه‌های متوسط", "آژانس‌ها", "مراکز خدماتی"],
    },
    {
      id: "ns500",
      image: "/imageLanding/ns500.png",
      model: "KX-NS500",
      title: "سانترال هوشمند تحت شبکه پاناسونیک مدل KX-NS500",
      capacity: "IP-PBX تا ۶۴ خط شهری و ۲۸۸ خط داخلی",
      category: "ip",
      price: "استعلام قیمت روز",
      description:
        "پرچمدار سانترال‌های هیبرید و IP پاناسونیک. پشتیبانی ذاتی از خطوط سیپ ترانک مخابرات، تلفن‌های تحت شبکه، دورکاری پرسنل و صندوق صوتی پیشرفته دو کاناله.",
      features: [
        "پشتیبانی بومی از پروتکل SIP و VoIP",
        "صندوق صوتی و ضبط مکالمات هوشمند",
        "پشتیبانی از ترانک دیجیتال E1 / PRI",
        "امکان تبدیل گوشی‌های موبایل به داخلی",
      ],
      suitable: ["شرکت‌های مدرن", "سازمان‌های با چند شعبه", "کال‌سنترهای متوسط و بزرگ"],
    },
    {
      id: "tda100d",
      image: "/imageLanding/tda100d.png",
      model: "KX-TDA100D",
      title: "سانترال پرظرفیت دیجیتال پاناسونیک مدل KX-TDA100D",
      capacity: "تا ۱۱۲ خط شهری / ۱۷۶ خط داخلی",
      category: "tda",
      price: "استعلام قیمت روز",
      description:
        "محبوب‌ترین دستگاه دیجیتال پاناسونیک با ۷ اسلات آزاد و ۴ داخلی دیجیتال Onboard. پشتیبانی پیش‌فرض از کارت کالر آیدی و کارت‌های داخلی ۲۴ پورتی با صرفه‌جویی اقتصادی.",
      features: [
        "۷ اسلات توسعه ماژولار",
        "کارت کالر آیدی پیش‌فرض",
        "پشتیبانی از کارت‌های ۲۴ داخلی (CSLC)",
        "پایداری صنعتی ۲۴ ساعته",
      ],
      suitable: ["بیمارستان‌ها", "شرکت‌های صنعتی", "ادارات دولتی"],
    },
    {
      id: "tda200",
      image: "/imageLanding/tda200.png",
      model: "KX-TDA200",
      title: "تلفن سانترال پرظرفیت دیجیتال مدل KX-TDA200",
      capacity: "۱۲۸ خط شهری / ۲۵۶ خط داخلی",
      category: "tda",
      price: "استعلام قیمت روز",
      description:
        "سیستم سانترال دیجیتال با ۱۰ اسلات توسعه. سازگار با انواع تلفن‌های دیجیتال سری DT543، هایبرید سری ۷۷۳۰ و آنالوگ معمولی با امکان اتصال گیت‌وی ویپ.",
      features: [
        "۱۰ اسلات کارت توسعه",
        "پشتیبانی از پروتکل DXDP",
        "ترانک دیجیتال E1",
        "سیستم شارژینگ و گزارش‌گیری پیشرفته",
      ],
      suitable: ["هتل‌ها", "کارخانجات", "برج‌های مسکونی و اداری"],
    },
    {
      id: "tda600",
      image: "/imageLanding/tda600.png",
      model: "KX-TDA600",
      title: "مرکز سانترال سازمانی پاناسونیک مدل KX-TDA600",
      capacity: "۶۴۰ خط شهری / ۹۶۰ خط داخلی",
      category: "tda",
      price: "استعلام قیمت روز",
      description:
        "ستون فقرات مخابراتی سازمان‌های بزرگ با ۱۰ اسلات پایه و امکان لینک به ۳ کابینت توسعه TDA620 با ۴۳ اسلات کارت. بالاترین پایداری در بار ترافیکی سنگین.",
      features: [
        "معماری مدولار چند کابینته",
        "پشتیبانی از خطوط E1 و PRI متعدد",
        "پاور ماژولار صنعتی",
        "پشتیبانی از شبکه بیسیم DECT سراسری",
      ],
      suitable: ["سازمان‌های مادر", "بیمارستان‌های مرکزی", "مراکز تماس سنگین"],
    },
    {
      id: "tde100",
      image: "/imageLanding/tde100.png",
      model: "KX-TDE100",
      title: "سانترال IP پاناسونیک مدل KX-TDE100",
      capacity: "۶۴ خط شهری / ۱۲۸ خط داخلی",
      category: "ip",
      price: "استعلام قیمت روز",
      description:
        "سانترال خالص IP-PBX با ۵ اسلات کارت، پشتیبانی مستقیم از اکانت‌های SIP و ترانک‌های شبکه جهت کاهش هزینه مکالمات بین شعب سازمانی.",
      features: [
        "تکنولوژی Pure IP",
        "پشتیبانی از خطوط SIP و Softphone",
        "۵ اسلات کارت توسعه",
        "برنامه‌ریزی تحت شبکه LAN",
      ],
      suitable: ["شرکت‌های چند شعبه‌ای", "استارتاپ‌ها", "دفاتر مهندسی"],
    },
    {
      id: "tde200",
      image: "/imageLanding/tde200.png",
      model: "KX-TDE200",
      title: "سانترال IP پاناسونیک مدل KX-TDE200",
      capacity: "۱۲۸ خط شهری / ۲۵۶ خط داخلی",
      category: "ip",
      price: "استعلام قیمت روز",
      description:
        "سیستم مخابراتی تحت شبکه با ۱۰ اسلات کارت، تلفن گویا چندکاناله، داخلی‌های نرم‌افزاری و ادغام آسان با سرورهای VoIP مانند ایزابل و استریسک.",
      features: [
        "پروتکل باز SIP",
        "۱۰ اسلات کارت",
        "داخلی‌های متحرک Hot Desking",
        "پست صوتی و منشی دیجیتال",
      ],
      suitable: ["هلدینگ‌ها", "مراکز اداری", "شرکت‌های فناوری"],
    },
    {
      id: "tde600",
      image: "/imageLanding/tde600.png",
      model: "KX-TDE600",
      title: "سانترال پرظرفیت تحت شبکه مدل KX-TDE600",
      capacity: "۶۴۰ خط شهری / ۱۱۵۲ خط داخلی",
      category: "ip",
      price: "استعلام قیمت روز",
      description:
        "غول مخابراتی پاناسونیک با ۱۱ اسلات کارت در هر شاسی و پشتیبانی توأمان از بستر شبکه، خطوط فیبر نوری، سیپ ترانک و خطوط سنتی آنالوگ و دیجیتال.",
      features: [
        "ظرفیت فوق‌العاده تا ۱۱۵۲ خط",
        "۱۱ اسلات کارت توسعه",
        "مدیریت چندسایتی متمرکز",
        "اتصال به انواع ترانک‌های مخابراتی",
      ],
      suitable: ["وزارتخانه‌ها", "سازمان‌های دولتی", "بیمارستان‌های بزرگ"],
    },
    {
      id: "ta616",
      image: "/imageLanding/ta616.png",
      model: "KX-TA616",
      title: "تلفن سانترال آنالوگ پاناسونیک مدل KX-TA616",
      capacity: "۶ خط شهری / ۱۶ خط داخلی",
      category: "low",
      price: "استعلام قیمت روز",
      description:
        "یکی از پایدارترین سانترال‌های نسل کلاسیک پاناسونیک برای دفاتری که نیاز به یک مرکز تلفن آنالوگ مقاوم با کاربری ساده و بدون نیاز به نگهداری مداوم دارند.",
      features: ["۶ خط شهری", "۱۶ داخلی هایبرید", "پشتیبانی از گوشی اپراتوری ۷۷۳۰", "عمر طولانی قطعات"],
      suitable: ["دفاتر سنتی", "انبارها", "شعب توزیع"],
    },
  ];

  const filteredProducts =
    activeTab === "all"
      ? products
      : products.filter((p) => p.category === activeTab);

  const tabs = [
    { id: "all", label: "همه مدل‌ها", count: products.length },
    { id: "low", label: "کم‌ظرفیت (TES824 / TEM824)", count: products.filter((p) => p.category === "low").length },
    { id: "tda", label: "پرظرفیت دیجیتال (سری TDA)", count: products.filter((p) => p.category === "tda").length },
    { id: "ip", label: "تحت شبکه IP-PBX (NS500 و TDE)", count: products.filter((p) => p.category === "ip").length },
  ];

  const specs = [
    { icon: <FaNetworkWired />, title: "فناوری IP و SIP", desc: "سیپ ترانک و ویپ" },
    { icon: <FaPhone />, title: "تلفن‌های اپراتوری", desc: "سری ۷۷۳۰ و DT543" },
    { icon: <FaMicrophone />, title: "تلفن گویا DISA", desc: "چندمرحله‌ای و منشی هوشمند" },
    { icon: <FaUsers />, title: "کنفرانس تلفنی", desc: "چندطرفه و اتاق صوتی" },
    { icon: <FaLaptop />, title: "برنامه‌ریزی PC", desc: "نرم‌افزار جامع مدیریتی" },
    { icon: <FaExchangeAlt />, title: "Hot Desking", desc: "داخلی‌های متحرک پرسنل" },
    { icon: <FaSatelliteDish />, title: "ارتباط بین شعب", desc: "لینک چند دستگاه در شبکه" },
    { icon: <FaCubes />, title: "معماری مدولار", desc: "ارتقا با کارت‌های توسعه" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9ff] via-white to-[#f0f2ff] font-xmedium text-slate-800">
      {/* هدر بخش محصولات پاناسونیک */}
      <div className="relative overflow-hidden mb-10">
        <div className="relative bg-gradient-to-br from-[#141d33] via-[#1e2a4a] to-[#253359] text-white py-12 md:py-16 px-6 md:px-12 rounded-3xl shadow-2xl mx-4">
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-xs font-xbold text-emerald-300">
              <FaStar /> مرجع تخصصی فروش، نصب و تعمیرات سانترال پاناسونیک
            </div>

            <h1 className="text-2xl md:text-4xl lg:text-5xl font-xbold mb-4 leading-tight">
              مرکز سانترال پاناسونیک
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-emerald-200 mt-2">
                کم‌ظرفیت، پرظرفیت دیجیتال و تحت شبکه IP-PBX
              </span>
            </h1>

            <p className="text-sm md:text-base leading-8 font-xregular text-white/90 max-w-3xl mx-auto mb-8">
              بررسی و مقایسه جامع مدل‌های پرفروش پاناسونیک در ایران؛ از سانترال محبوب <strong>KX-TES824</strong> برای دفاتر کوچک گرفته تا پرچمدار دیجیتال <strong>TDA100D</strong> و سیستم هوشمند تحت شبکه <strong>KX-NS500</strong> با گارانتی اصالت شرکت رهیاب.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="tel:09125354811"
                className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-xbold text-xs md:text-sm shadow-lg hover:scale-105 transition-all flex items-center gap-2"
              >
                <FaPhoneAlt />
                <span>مشاوره و استعلام قیمت روز: ۰۹۱۲۵۳۵۴۸۱۱</span>
              </a>
              <Link
                href="/blog/rahnamaye-kharid-central-panasonic"
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white rounded-xl font-xbold text-xs md:text-sm border border-white/20 transition-all flex items-center gap-2"
              >
                <span>راهنمای جامع خرید سانترال</span>
                <FaArrowLeft className="text-xs" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* تب‌های دسته‌بندی هوشمند */}
      <div className="flex justify-center mb-8 px-4 max-w-[1440px] mx-auto overflow-x-auto pb-2 scrollbar-none">
        <div className="inline-flex bg-white rounded-2xl p-1.5 shadow-md border border-slate-200/80 gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-xbold transition-all whitespace-nowrap flex items-center gap-2 ${
                activeTab === tab.id
                  ? "bg-[#253359] text-white shadow-sm"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-md ${
                  activeTab === tab.id ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* شبکه کارت‌های محصولات پاناسونیک */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 px-4 max-w-[1440px] mx-auto">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="group relative bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col justify-between overflow-hidden"
          >
            <div>
              {/* بج مدل */}
              <div className="absolute top-4 left-4 z-10 bg-[#253359] text-white px-3 py-1 rounded-full text-xs font-xbold shadow-md dir-ltr">
                {product.model}
              </div>

              {/* تصویر با کیفیت */}
              <div className="relative h-56 bg-slate-50 flex items-center justify-center p-6 border-b border-slate-100">
                <img
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  src={product.image}
                  alt={product.title}
                />
              </div>

              {/* مشخصات متنی */}
              <div className="p-6">
                <h3 className="text-base font-xbold text-[#141d33] mb-2 leading-7">
                  {product.title}
                </h3>

                <div className="flex items-center gap-2 text-xs text-slate-600 mb-3">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                  <span className="font-xbold text-slate-800">ظرفیت: {product.capacity}</span>
                </div>

                <p className="text-xs text-slate-600 font-xregular leading-6 mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* ویژگی‌های کلیدی */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {product.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-50 text-blue-800 px-2.5 py-1 rounded-lg text-[11px] font-xmedium border border-blue-100 flex items-center gap-1"
                    >
                      <FaCheckCircle className="text-[10px] text-blue-600" />
                      <span>{feature}</span>
                    </span>
                  ))}
                </div>

                {/* مناسب برای */}
                <div className="p-2.5 bg-slate-50 rounded-xl mb-4 text-xs text-slate-500">
                  <strong className="text-slate-700 block mb-1">پیشنهاد شده برای:</strong>
                  <div className="flex flex-wrap gap-1.5">
                    {product.suitable.map((item, idx) => (
                      <span key={idx} className="bg-white px-2 py-0.5 rounded border border-slate-200 text-[11px]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* دکمه‌های اقدام: تماس + صفحه جزییات بیشتر */}
            <div className="p-6 pt-0 grid grid-cols-2 gap-3">
              <a
                href="tel:09125354811"
                className="bg-gradient-to-r from-[#253359] to-[#1a2440] hover:from-blue-900 hover:to-indigo-900 text-white py-2.5 rounded-xl font-xbold text-xs flex items-center justify-center gap-1.5 shadow-md transition-all"
              >
                <FaPhoneAlt className="text-[10px]" />
                <span>مشاوره و خرید</span>
              </a>

              <Link
                href={`/products/panasonic/${product.model.toLowerCase()}`}
                className="bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 hover:text-[#253359] py-2.5 rounded-xl font-xbold text-xs flex items-center justify-center gap-1.5 transition-all text-center"
              >
                <span>مشاهده مشخصات</span>
                <FaArrowLeft className="text-[10px]" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* مشخصات کلی و قابلیت‌ها */}
      <div className="mb-16 px-4 max-w-[1440px] mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-xbold text-[#253359] mb-3">
            امکانات و قابلیت‌های فنی سانترال پاناسونیک
          </h2>
          <p className="text-xs md:text-sm text-slate-500 max-w-xl mx-auto">
            قابلیت‌هایی که سانترال‌های پاناسونیک را به استاندارد ارتباطات تجاری در سراسر جهان تبدیل کرده است
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {specs.map((spec, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 text-center hover:shadow-md transition-all group"
            >
              <div className="text-3xl mb-2 text-blue-600 flex justify-center group-hover:scale-110 transition-transform">
                {spec.icon}
              </div>
              <div className="text-sm font-xbold text-[#253359] mb-1">{spec.title}</div>
              <div className="text-xs text-slate-500 font-xregular">{spec.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* بنر اقدام نهایی */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#253359] via-[#1e2a4a] to-[#0f1525] rounded-3xl p-8 md:p-12 text-center text-white mx-4 max-w-[1440px] md:mx-auto mb-10">
        <div className="relative z-10">
          <div className="inline-block mb-4 p-3 bg-white/10 backdrop-blur-sm rounded-2xl">
            <FaHeadset className="text-4xl text-emerald-400" />
          </div>
          <h3 className="text-xl md:text-3xl font-xbold mb-3">
            نیاز به انتخاب یا راه‌اندازی سانترال پاناسونیک دارید؟
          </h3>
          <p className="text-xs md:text-sm font-xregular mb-6 text-white/80 max-w-xl mx-auto leading-7">
            تیم مهندسی شرکت رهیاب آماده مشاوره رایگان تلفنی جهت برآورد تعداد خطوط، کارت‌های مورد نیاز و پیشنهاد اقتصادی‌ترین مدل برای سازمان شما است.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="tel:09125354811"
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-xbold text-xs md:text-sm shadow-lg transition-all"
            >
              پاسخگویی مستقیم مهندس محمدی: ۰۹۱۲۵۳۵۴۸۱۱
            </a>
            <a
              href="tel:02188440345"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-xbold text-xs md:text-sm border border-white/20 transition-all"
            >
              دفتر مرکزی: ۰۲۱-۸۸۴۴۰۳۴۵
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
