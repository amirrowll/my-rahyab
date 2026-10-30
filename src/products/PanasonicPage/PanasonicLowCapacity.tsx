"use client";
import Link from "next/link";
import React from "react";
import { FaStar, FaPhoneAlt, FaHeadset, FaWhatsapp, FaShieldAlt, FaTruck, FaTools, FaCheck } from "react-icons/fa";

export default function PanasonicLowCapacity() {
  const products = [
    {
      id: 1,
      image: "/imageLanding/tes824.png",
      model: "KX-TES824",
      title: "سانترال کم ظرفیت پاناسونیک KX-TES824",
      capacity: "۳ خط شهری / ۸ داخلی (قابل ارتقا به ۸ خط و ۲۴ داخلی)",
      price: "استعلام قیمت روز",
      description:
        "پرفروش‌ترین سانترال پاناسونیک مناسب شرکت‌ها و مجموعه‌های کوچک و متوسط با قابلیت اپراتور خودکار گویا، کالرآیدی و نصب صندوق صوتی اختصاصی.",
      features: [
        "اپراتور خودکار ۳ مرحله‌ای (DISA)",
        "پشتیبانی کامل از Caller ID",
        "قابلیت اتصال به صندوق صوتی",
        "امکان نصب کارت درب بازکن و زنگ درب",
        "پشتیبانی از گوشی‌های هایبرید و آنالوگ",
      ],
      suitable: ["دفاتر و شرکت‌های اداری", "کلینیک‌ها و مطب‌ها", "کسب‌وکارهای نوپا"],
    },
    {
      id: 2,
      image: "/imageLanding/tem824.png",
      model: "KX-TEM824",
      title: "سانترال کم ظرفیت پاناسونیک KX-TEM824",
      capacity: "۶ خط شهری / ۱۶ داخلی (قابل ارتقا به ۸ خط و ۲۴ داخلی)",
      price: "استعلام قیمت روز",
      description:
        "دستگاه سانترال پرقدرت پاناسونیک برای دفاتری که از ابتدا نیاز به ظرفیت پایه بالاتری دارند، به همراه تلفن گویا و سیستم ضبط پیغام صوتی پیش‌فرض.",
      features: [
        "ظرفیت پایه ۶ خط شهری و ۱۶ خط داخلی",
        "اپراتور گویا و پاسخگوی ۳ مرحله‌ای",
        "قابلیت اتصال گوشی بیسیم و آنالوگ",
        "پیام‌گیر BV و مدیریت پیشرفته تماس‌ها",
        "تعریف فکس به عنوان داخلی اختصاصی",
      ],
      suitable: ["شرکت‌های در حال توسعه", "آموزشگاه‌ها و دفاتر مرکزی", "مجموعه‌های با خطوط فعال متعدد"],
    },
    {
      id: 3,
      image: "/imageLanding/ta616.png",
      model: "KX-TA616",
      title: "تلفن سانترال پاناسونیک KX-TA616",
      capacity: "۶ خط شهری / ۱۶ داخلی (قابل ارتقا)",
      price: "استعلام قیمت روز",
      description:
        "سانترال کلاسیک و بادوام پاناسونیک با امکان ارتقا از طریق کارت‌های جانبی و پشتیبانی کامل از انواع گوشی‌های آنالوگ و هایبرید.",
      features: [
        "پشتیبانی از انواع گوشی‌های رومیزی و بیسیم",
        "قابلیت ترانسفر و انتقال سریع تماس",
        "امکان نصب کارت‌های توسعه ظرفیت",
        "تعریف فکس و منشی تلفنی",
      ],
      suitable: ["دفاتر اداری و تجاری", "واحدهای صنعتی و کارگاه‌ها", "شعب توزیع و پخش"],
    },
  ];

  const specs = [
    { title: "واحد پذیرش خودکار (DISA)", desc: "۳ مرحله‌ای با راهنمای صوتی گویا" },
    { title: "سیستم Caller ID", desc: "نمایش شماره تماس‌گیرنده روی تمامی داخلی‌ها" },
    { title: "صندوق صوتی اختصاصی", desc: "قابلیت ذخیره‌سازی پیام‌ها و آرشیو" },
    { title: "پشتیبانی هایبرید", desc: "اتصال انواع تلفن‌های آنالوگ، دیجیتال و بیسیم" },
    { title: "مدیریت درب‌بازکن", desc: "اتصال به آیفون، درب‌بازکن و رله برقی" },
    { title: "گزارش‌گیری دقیق", desc: "نرم‌افزار کنترل مکالمات ورودی و خروجی" },
    { title: "حالت شب / روز / استراحت", desc: "برنامه‌ریزی خودکار سناریوهای زمانی" },
    { title: "دوام و استاندارد ژاپن", desc: "کیفیت ساخت فوق‌العاده با حداقل استهلاک" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9ff] via-white to-[#f0f2ff] pt-24 pb-16">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="relative overflow-hidden bg-gradient-to-br from-[#1a233b] via-[#253359] to-[#0f172a] text-white rounded-3xl p-8 md:p-14 shadow-2xl border border-white/10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-xs md:text-sm font-xbold border border-white/20 text-blue-200">
              <FaStar className="text-amber-400" /> اصالت و کیفیت برتر پاناسونیک ژاپن
            </div>

            <h1 className="text-3xl md:text-5xl font-xbold mb-6 leading-tight">
              سانترال‌های کم‌ظرفیت
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-200 to-emerald-300 mt-2">
                پاناسونیک (Panasonic)
              </span>
            </h1>

            <p className="text-base md:text-lg leading-8 font-xmedium text-slate-200 max-w-3xl mx-auto mb-8">
              راهکار ایده‌آل ارتباطی برای دفاتر، شرکت‌های نوپا و متوسط با هزینه اقتصادی، پایداری استثنایی و پشتیبانی ۱ ساله شرکت رهیاب.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:09125354811"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-xbold shadow-lg hover:shadow-emerald-500/30 hover:scale-105 transition-all text-sm md:text-base"
              >
                <FaPhoneAlt /> مشاوره و استعلام قیمت: ۰۹۱۲۵۳۵۴۸۱۱
              </a>
              <a
                href={`https://wa.me/989125354811?text=${encodeURIComponent("سلام، برای خرید و راهنمایی در مورد سانترال کم‌ظرفیت پاناسونیک پیام می‌دهم.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white rounded-xl font-xbold border border-white/30 backdrop-blur-md hover:scale-105 transition-all text-sm md:text-base"
              >
                <FaWhatsapp className="text-emerald-400 text-lg" /> استعلام فوری در واتساپ
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Stats */}
      <div className="max-w-7xl mx-auto px-4 mb-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { number: "۳ تا ۸", label: "خطوط شهری قابل ارتقا", icon: <FaTools className="text-blue-500" /> },
            { number: "۸ تا ۲۴", label: "داخلی سازمانی", icon: <FaHeadset className="text-purple-500" /> },
            { number: "۱ سال", label: "گارانتی طلایی شرکت رهیاب", icon: <FaShieldAlt className="text-emerald-500" /> },
            { number: "۱۰ سال", label: "پشتیبانی و تامین قطعات", icon: <FaTruck className="text-amber-500" /> },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 flex items-center gap-4"
            >
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
          <h2 className="text-2xl md:text-3xl font-xbold text-[#1e2a4a] mb-3">مدل‌های موجود سانترال کم‌ظرفیت</h2>
          <p className="text-sm md:text-base text-slate-500 font-xmedium">دستگاه‌های آماده تحویل به همراه تست اولیه و گارانتی معتبر</p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto rounded-full mt-3"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <div className="relative h-64 bg-gradient-to-br from-slate-50 to-blue-50/40 p-6 flex items-center justify-center overflow-hidden">
                  <div className="absolute top-4 right-4 z-10 bg-[#1e2a4a] text-white px-3.5 py-1.5 rounded-full text-xs font-xbold shadow">
                    {product.model}
                  </div>
                  <div className="absolute top-4 left-4 z-10 bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full text-xs font-xbold">
                    موجود در انبار رهیاب
                  </div>
                  <img
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    src={product.image}
                    alt={product.title}
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-xbold text-[#1e2a4a] mb-2 leading-7">
                    {product.title}
                  </h3>
                  
                  <div className="bg-blue-50/70 border border-blue-100 rounded-xl px-3 py-2 mb-4">
                    <span className="text-xs text-blue-900 font-xbold">ظرفیت: </span>
                    <span className="text-xs text-blue-700 font-xmedium">{product.capacity}</span>
                  </div>

                  <p className="text-xs md:text-sm text-slate-600 font-xregular leading-6 mb-4">
                    {product.description}
                  </p>

                  <div className="mb-4">
                    <div className="text-xs font-xbold text-slate-700 mb-2">امکانات کلیدی دستگاه:</div>
                    <div className="space-y-1.5">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-600 font-xmedium">
                          <FaCheck className="text-emerald-500 text-xs flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6 p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="text-xs font-xbold text-slate-700 mb-1.5">مناسب برای:</div>
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

              <div className="p-6 pt-0">
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="tel:09125354811"
                    className="bg-[#1e2a4a] hover:bg-blue-900 text-white py-3 rounded-xl font-xbold text-xs md:text-sm text-center shadow hover:shadow-lg transition-all flex items-center justify-center gap-1.5"
                  >
                    <FaPhoneAlt className="text-xs" /> خرید و استعلام
                  </a>
                  <Link
                    href={`/products/panasonic/${product.model.toLowerCase()}`}
                    className="bg-white border border-[#1e2a4a] text-[#1e2a4a] hover:bg-[#1e2a4a] hover:text-white py-3 rounded-xl font-xbold text-xs md:text-sm text-center transition-all"
                  >
                    کاتالوگ و جزئیات
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Specifications */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-xbold text-[#1e2a4a] mb-3">
              قابلیت‌های مشترک سانترال‌های کم‌ظرفیت پاناسونیک
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {specs.map((spec, idx) => (
              <div
                key={idx}
                className="bg-slate-50 hover:bg-blue-50/60 rounded-2xl p-5 border border-slate-100 transition-all duration-300"
              >
                <div className="text-sm font-xbold text-[#1e2a4a] mb-1.5">
                  {spec.title}
                </div>
                <div className="text-xs text-slate-600 font-xmedium leading-5">
                  {spec.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Direct Contact Banner */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative overflow-hidden bg-gradient-to-br from-[#1a233b] via-[#253359] to-[#0f172a] rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-xbold mb-4">
              نیاز به راهنمایی در انتخاب مدل سانترال دارید؟
            </h3>
            <p className="text-sm md:text-base font-xmedium mb-8 text-slate-300 leading-7">
              مهندس محمدی و کارشناسان فنی شرکت رهیاب آماده‌اند تا دقیق‌ترین مشاوره خرید، نصب و راه‌اندازی را در اختیارتان قرار دهند.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:09125354811"
                className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-xbold text-base shadow-xl hover:scale-105 transition-all"
              >
                <FaHeadset className="text-lg" /> تماس مستقیم: ۰۹۱۲۵۳۵۴۸۱۱ (مهندس محمدی)
              </a>
              <a
                href={`https://wa.me/989125354811?text=${encodeURIComponent("سلام مهندس محمدی، درباره خرید سانترال پاناسونیک مشاوره می‌خواستم.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-xbold text-base border border-white/30 backdrop-blur-md hover:scale-105 transition-all"
              >
                <FaWhatsapp className="text-emerald-400 text-xl" /> مشاوره سریع واتساپ
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
