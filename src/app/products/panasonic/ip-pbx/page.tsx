"use client";
import React from "react";
import Link from "next/link";
import { FaNetworkWired, FaStar, FaCheckCircle, FaHeadset, FaServer, FaGlobe, FaShieldAlt, FaPhoneAlt, FaWhatsapp, FaTools, FaBuilding } from "react-icons/fa";

export default function IPPBXPage() {
  const products = [
    {
      id: 1,
      image: "/imageLanding/ns300.png",
      model: "KX-NS300",
      title: "سانترال هوشمند تحت شبکه پاناسونیک KX-NS300",
      capacity: "ظرفیت پایه ۶ شهری و ۱۶ داخلی (قابل ارتقا تا ۱۲۸ خط و ۱۶۲ کاربر)",
      description: "محبوب‌ترین و مقرون‌به‌صرفه‌ترین مرکز تلفن تحت شبکه (Hybrid IP-PBX) پاناسونیک. ایده‌آل برای ارتقا از سیستم‌های سنتی آنالوگ به بستر مدرن VoIP و SIP.",
      features: [
        "پشتیبانی همزمان از خطوط آنالوگ، دیجیتال، SIP Trunk و PRI",
        "امکان ارتقا با ۳ شلف جانبی مدل KX-NS320",
        "اپراتور خودکار گویا و سیستم صندوق صوتی پیشرفته پیش‌فرض",
        "پشتیبانی کامل از تلفن‌های تصویری و موبایل اکستنشن",
        "امکان ضبط مکالمات و اتصال به شبکه‌های چندشعبه‌ای",
      ],
      suitable: ["شرکت‌های در حال توسعه", "کلینیک‌ها و بیمارستان‌ها", "دفاتر مرکزی و شعب"]
    },
    {
      id: 2,
      image: "/imageLanding/ns500.png",
      model: "KX-NS500",
      title: "سانترال تحت شبکه پاناسونیک KX-NS500",
      capacity: "ظرفیت پایه ۱۶ شهری و ۳۲ داخلی (قابل ارتقا تا ۲۵۶ کاربر)",
      description: "مرکز تلفن قدرتمند و مقیاس‌پذیر پاناسونیک با امکان افزودن ۳ باکس افزایشی NS520، منشی دیجیتال چندکاناله، صف انتظار و ارتباطات ابری.",
      features: [
        "پشتیبانی تا ۲۵۶ داخلی آنالوگ/دیجیتال و IP",
        "پشتیبانی از پروتکل‌های SIP و H.323",
        "سیستم یکپارچه‌سازی تلفن گویا و صف تماس Call Center",
        "پایداری صنعتی بدون نیاز به راه‌اندازی مکرر",
        "قابلیت پشتیبان‌گیری خودکار و مدیریت آسان تحت وب",
      ],
      suitable: ["هتل‌ها و مجتمع‌های تجاری", "شرکت‌های متوسط و بزرگ", "مراکز تماس (Call Center)"]
    },
    {
      id: 3,
      image: "/imageLanding/ncp500.png",
      model: "KX-NCP500",
      title: "سانترال تحت شبکه پاناسونیک KX-NCP500",
      capacity: "۱۲۸ خط شهری / تا ۲۸۸ داخلی سازمانی",
      description: "سرور ارتباطی تحت شبکه پاناسونیک سری OneNet با معماری ماژولار و رک‌مونت استاندارد ۱۹ اینچ، متناسب با اتاق سرور سازمان‌ها.",
      features: [
        "طراحی رک‌مونت ۱۹ اینچ جهت نصب آسان در رک سرور",
        "پشتیبانی تا ۱۲۸ تلفن اختصاصی IP و نرم‌افزار سافت‌فون",
        "اتصال به انواع گیت‌وی‌های ویپ و خطوط دیجیتال E1",
        "سیستم Hot Desking و جابجایی آسان پرسنل",
        "امنیت بالا در رمزنگاری بسته‌های صوتی",
      ],
      suitable: ["سازمان‌های اداری مدرن", "دفاتر با اتاق سرور اختصاصی", "شعب متمرکز"]
    },
    {
      id: 4,
      image: "/imageLanding/ns1000.png",
      model: "KX-NCP1000",
      title: "سانترال انترپرایز پاناسونیک KX-NCP1000",
      capacity: "ظرفیت تا ۲۵۶ خط شهری / تا ۳۰۰ داخلی IP",
      description: "پرچمدار سری NCP پاناسونیک برای هلدینگ‌ها و کسب‌وکارهایی با ترافیک تماس بسیار سنگین و نیازمند دسترسی بدون وقفه و Multi-site.",
      features: [
        "ارتباط چندسایتی هوشمند (Multi-Site IP Network)",
        "یکپارچگی کامل با سیستم‌های CRM و اتوماسیون اداری CTI",
        "پشتیبانی از داخلی‌های راه دور برای دورکاری پرسنل",
        "گزارش‌گیری تحلیلی فوق‌پیشرفته از ترافیک تماس‌ها",
        "پایداری دائم ۲۴ ساعته ۷ روز هفته",
      ],
      suitable: ["هلدینگ‌ها و سازمان‌های بزرگ", "شرکت‌های چندشعبه‌ای سراسری", "مراکز صنعتی و مالی"]
    }
  ];

  const specs = [
    { icon: <FaNetworkWired className="text-blue-500" />, title: "معماری Pure IP و هیبرید", desc: "سازگاری کامل با سیپ ترانک و خطوط سنتی مخابرات" },
    { icon: <FaGlobe className="text-indigo-500" />, title: "ارتباط شعب و دورکاری", desc: "یکپارچه‌سازی شعب مختلف شرکت از طریق بستر امن اینترنت" },
    { icon: <FaServer className="text-purple-500" />, title: "ماژولار و قابل توسعه", desc: "امکان افزایش پورت‌ها متناسب با رشد پرسنل سازمان" },
    { icon: <FaShieldAlt className="text-emerald-500" />, title: "پایداری سخت‌افزاری ژاپن", desc: "عملکرد مطمئن و بدون وقفه با گارانتی ۱ ساله رهیاب" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9ff] via-white to-[#f0f2ff] pt-24 pb-16">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="relative overflow-hidden bg-gradient-to-br from-[#1a233b] via-[#253359] to-[#0f172a] text-white rounded-3xl p-8 md:p-14 shadow-2xl border border-white/10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-xs md:text-sm font-xbold border border-white/20 text-blue-200">
              <FaStar className="text-amber-400" /> سانترال‌های نسل جدید تحت شبکه پاناسونیک
            </div>

            <h1 className="text-3xl md:text-5xl font-xbold mb-6 leading-tight">
              سیستم‌های IP-PBX و ویپ
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-200 to-emerald-300 mt-2">
                سری هوشمند KX-NS و KX-NCP
              </span>
            </h1>

            <p className="text-base md:text-lg leading-8 font-xmedium text-slate-200 max-w-3xl mx-auto mb-8">
              پیاده‌سازی حرفه‌ای بستر VoIP، راه‌اندازی سیپ‌ترانک‌های مخابراتی (مخابرات، شاتل، آسیاتک) و یکپارچه‌سازی شعب اداری با ضمانت شرکت رهیاب.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:09125354811"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-xbold shadow-lg hover:shadow-emerald-500/30 hover:scale-105 transition-all text-sm md:text-base"
              >
                <FaPhoneAlt /> مشاوره و طراحی پروژه: ۰۹۱۲۵۳۵۴۸۱۱
              </a>
              <a
                href={`https://wa.me/989125354811?text=${encodeURIComponent("سلام، برای راه‌اندازی سانترال تحت شبکه پاناسونیک و ویپ سوال داشتم.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white rounded-xl font-xbold border border-white/30 backdrop-blur-md hover:scale-105 transition-all text-sm md:text-base"
              >
                <FaWhatsapp className="text-emerald-400 text-lg" /> استعلام در واتساپ
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="max-w-7xl mx-auto px-4 mb-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { number: "تا ۲۸۸", label: "کاربر و داخلی همزمان", icon: <FaBuilding className="text-blue-500" /> },
            { number: "SIP / PRI", label: "پشتیبانی خطوط دیجیتال", icon: <FaNetworkWired className="text-indigo-500" /> },
            { number: "۱ سال", label: "گارانتی طلایی تعویض", icon: <FaShieldAlt className="text-emerald-500" /> },
            { number: "تخصصی", label: "نصب و برنامه‌ریزی مهندسی", icon: <FaTools className="text-amber-500" /> }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-xl flex-shrink-0">
                {stat.icon}
              </div>
              <div>
                <div className="text-2xl font-xbold text-[#1e2a4a]">{stat.number}</div>
                <div className="text-xs text-slate-500 font-xmedium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-xbold text-[#1e2a4a] mb-3">مدل‌های سانترال تحت شبکه پاناسونیک</h2>
          <p className="text-sm md:text-base text-slate-500 font-xmedium">ارائه به همراه کلیه کارت‌های اختیاری، لایسنس‌ها و تجهیزات جانبی</p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mt-3"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <div className="relative h-64 md:h-72 bg-gradient-to-br from-slate-50 to-blue-50/40 p-6 flex items-center justify-center overflow-hidden">
                  <div className="absolute top-4 right-4 z-10 bg-[#1e2a4a] text-white px-3.5 py-1.5 rounded-full text-xs font-xbold shadow">
                    {product.model}
                  </div>
                  <div className="absolute top-4 left-4 z-10 bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full text-xs font-xbold">
                    گارانتی رسمی رهیاب
                  </div>
                  <img
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    src={product.image}
                    alt={product.title}
                  />
                </div>

                <div className="p-6 md:p-8">
                  <h3 className="text-lg md:text-xl font-xbold text-[#1e2a4a] mb-2 leading-8">
                    {product.title}
                  </h3>

                  <div className="bg-blue-50/70 border border-blue-100 rounded-xl px-3 py-2 mb-4">
                    <span className="text-xs text-blue-900 font-xbold">ظرفیت ارتباطی: </span>
                    <span className="text-xs text-blue-700 font-xmedium">{product.capacity}</span>
                  </div>

                  <p className="text-xs md:text-sm text-slate-600 font-xregular leading-7 mb-4">
                    {product.description}
                  </p>

                  <div className="mb-4">
                    <div className="text-xs font-xbold text-slate-700 mb-2">امکانات و قابلیت‌های فنی:</div>
                    <div className="space-y-1.5">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 font-xmedium">
                          <FaCheckCircle className="text-emerald-500 text-xs mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6 p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="text-xs font-xbold text-slate-700 mb-1.5">کاربرد و جامعه هدف:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {product.suitable.map((item, idx) => (
                        <span key={idx} className="text-xs bg-white text-slate-600 px-2.5 py-1 rounded-lg border border-slate-200 font-xmedium">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8 pt-0">
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="tel:09125354811"
                    className="bg-[#1e2a4a] hover:bg-blue-900 text-white py-3 md:py-3.5 rounded-xl font-xbold text-xs md:text-sm text-center shadow hover:shadow-lg transition-all flex items-center justify-center gap-1.5"
                  >
                    <FaPhoneAlt className="text-xs" /> مشاوره خرید
                  </a>
                  <Link
                    href={`/products/panasonic/${product.model.toLowerCase().replace('kx-', '')}`}
                    className="bg-white border border-[#1e2a4a] text-[#1e2a4a] hover:bg-[#1e2a4a] hover:text-white py-3 md:py-3.5 rounded-xl font-xbold text-xs md:text-sm text-center transition-all flex items-center justify-center"
                  >
                    مشاهده جزئیات فنی
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Specifications Grid */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-xbold text-[#1e2a4a] mb-3">
              مزایای مهاجرت به مراکز تلفن IP پاناسونیک
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {specs.map((spec, idx) => (
              <div key={idx} className="bg-slate-50 hover:bg-blue-50/60 rounded-2xl p-6 border border-slate-100 transition-all duration-300 text-center">
                <div className="text-3xl mb-3 flex justify-center">
                  {spec.icon}
                </div>
                <div className="text-sm font-xbold text-[#1e2a4a] mb-1.5">{spec.title}</div>
                <div className="text-xs text-slate-600 font-xmedium leading-6">{spec.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative overflow-hidden bg-gradient-to-br from-[#1a233b] via-[#253359] to-[#0f172a] rounded-3xl p-8 md:p-14 text-center text-white shadow-2xl">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-xbold mb-4">
              برنامه‌ریزی و راه‌اندازی سانترال تحت شبکه در محل شما
            </h3>
            <p className="text-sm md:text-base font-xmedium mb-8 text-slate-300 leading-8">
              برای دریافت پیش‌فاکتور رسمی، برآورد هزینه خرید و خدمات نصب با مهندس محمدی تماس بگیرید.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:09125354811"
                className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-xbold text-base shadow-xl hover:scale-105 transition-all"
              >
                <FaHeadset className="text-lg" /> تماس با مهندس محمدی: ۰۹۱۲۵۳۵۴۸۱۱
              </a>
              <a
                href={`https://wa.me/989125354811?text=${encodeURIComponent("سلام مهندس محمدی، درباره خرید و نصب سانترال IP پاناسونیک مشاوره و پیش‌فاکتور می‌خواستم.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-xbold text-base border border-white/30 backdrop-blur-md hover:scale-105 transition-all"
              >
                <FaWhatsapp className="text-emerald-400 text-xl" /> دریافت پیش‌فاکتور در واتساپ
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
