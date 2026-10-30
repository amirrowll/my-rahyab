"use client";
import React from "react";
import { FaStar, FaPhoneAlt, FaHeadset } from "react-icons/fa";

export default function IPPhones() {
  const products = [
    {
      id: 1,
      image: "/imageLanding/KX-NT400.png",
      model: "KX-NT400",
      brand: "پاناسونیک",
      title: "تلفن سانترال پاناسونیک IP تحت شبکه مدل KX-NT400",
      capacity: "صفحه لمسی LCD - کنترل 20 دوربین",
      description: "صفحه نمایش لمسی LCD، رابط کاربر پسند، نرم افزار CTI، نشانه حضور، کنترل تا 20 دوربین IP، ابعاد 160×28×160 میلیمتر، وزن 1250 گرم",
      features: ["صفحه لمسی LCD", "کنترل 20 دوربین", "نرم افزار CTI", "رومیزی و دیواری"],
      suitable: ["شرکتهای بزرگ", "مراکز امنیتی", "سازمانها"],
    },
    {
      id: 2,
      image: "/imageLanding/KX-UT670B.png",
      model: "KX-UT670B",
      brand: "پاناسونیک",
      title: "تلفن سانترال پاناسونیک IP تحت شبکه مدل KX-UT670B",
      capacity: "6 اکانت SIP - صفحه 7 اینچی",
      description: "6 اکانت SIP، صفحه نمایش لمسی 7 اینچی، کیفیت صدای HD با Codec G.722، تماس کنفرانس 3 نفره، 2 پورت گیگابیت اترنت PoE، سیستم عامل لینوکس",
      features: ["6 اکانت SIP", "7 اینچ لمسی", "HD G.722", "2 پورت گیگابیت"],
      suitable: ["مدیران", "شرکتهای متوسط", "دفاتر مدرن"],
    },
    {
      id: 3,
      image: "/imageLanding/KX-NT366.png",
      model: "KX-NT366",
      brand: "پاناسونیک",
      title: "تلفن سانترال پاناسونیک IP تحت شبکه مدل KX-NT366",
      capacity: "نمایشگر 6 خطی - 12×4 کلید",
      description: "نمایشگر شش خطی با نور پشت سفید، بلندگوی دیجیتال قوی، کلیدهای CO قابل تغییر 12×4، ویژگی VoIP، قابلیت تغییر زاویه، طراحی زیبا",
      features: ["نمایشگر 6 خطی", "12×4 کلید CO", "VoIP", "بلندگوی قوی"],
      suitable: ["شرکتها", "سازمانها", "مدیران"],
    },
    {
      id: 4,
      image: "/imageLanding/KX-NT346.png",
      model: "KX-NT346",
      brand: "پاناسونیک",
      title: "تلفن سانترال پاناسونیک IP تحت شبکه مدل KX-NT346",
      capacity: "نمایشگر 6 خطی - 24 کلید CO",
      description: "نمایشگر شش خطی با نور پشت سفید، ظرفیت 24 کلید CO قابل تغییر، بلندگوی دیجیتال قوی، ویژگی VoIP، قابلیت تغییر زاویه صفحه نمایش",
      features: ["نمایشگر 6 خطی", "24 کلید CO", "VoIP", "تلفن مدیریتی"],
      suitable: ["مدیران ارشد", "شرکتهای بزرگ", "سازمانها"],
    },
    {
      id: 5,
      image: "/imageLanding/KX-NT343.png",
      model: "KX-NT343",
      brand: "پاناسونیک",
      title: "تلفن سانترال پاناسونیک تحت شبکه KX-NT343",
      capacity: "نمایشگر 3 سطری - 24 کلید CO",
      description: "نمایشگر 3 سطری با نور پشت سفید، ظرفیت 24 کلید CO قابل برنامهریزی، بلندگوی دیجیتال قوی، ویژگی VoIP، قابلیت تغییر زاویه",
      features: ["نمایشگر 3 سطری", "24 کلید CO", "VoIP", "طراحی زیبا"],
      suitable: ["شرکتها", "دفاتر", "سازمانها"],
    },
    {
      id: 6,
      image: "/imageLanding/KX-NT321.png",
      model: "KX-NT321",
      brand: "پاناسونیک",
      title: "تلفن سانترال پاناسونیک IP تحت شبکه مدل KX-NT321",
      capacity: "نمایشگر 1 سطری - 8 کلید CO",
      description: "نمایشگر یک سطری سیاه و سفید، ظرفیت 8 کلید CO قابل تغییر، بلندگوی دیجیتال قوی، ویژگی VoIP، سازگار با تمام سانترالها",
      features: ["نمایشگر 1 سطری", "8 کلید CO", "VoIP", "سازگار"],
      suitable: ["دفاتر کوچک", "شرکتها", "کسب و کارها"],
    },
    {
      id: 7,
      image: "/imageLanding/SMT-i3100.png",
      model: "SMT-i3100",
      brand: "سامسونگ",
      title: "تلفن IP سانترال سامسونگ مدل SMT-i3100",
      capacity: "صفحه 2.8 اینچ - 5 کلید برنامه‌ریزی",
      description: "پروتکل امنیتی SRTP، 5 کلید قابل برنامهریزی، صفحه نمایش گرافیک 2.8 اینچی، دفترچه تلفن 100 شماره، 9 کلید عملیاتی ثابت، قابل نصب بر دیوار",
      features: ["SRTP امنیتی", "2.8 اینچ", "100 شماره", "نصب دیواری"],
      suitable: ["میزهای کار", "دفاتر", "شرکتهای کوچک"],
    },
    {
      id: 8,
      image: "/imageLanding/SMT-i5210.png",
      model: "SMT-i5210",
      brand: "سامسونگ",
      title: "تلفن IP سانترال سامسونگ مدل SMT-i5210",
      capacity: "تماس ویدئویی - کدک G.722",
      description: "برنده جایزه بهترین طراحی، پشتیبانی از تماس ویدئویی، قابلیت ذخیره صدا و تصویر، کدک G.722 با پهنای باند وسیع، پروتکل امنیتی SRTP",
      features: ["تماس ویدئویی", "G.722 HD", "SRTP", "طراحی برتر"],
      suitable: ["مدیران", "شرکتهای مدرن", "سازمانها"],
    },
    {
      id: 9,
      image: "/imageLanding/SMT-i5220.png",
      model: "SMT-i5220",
      brand: "سامسونگ",
      title: "تلفن IP سانترال سامسونگ مدل SMT-i5220",
      capacity: "تماس ویدئویی - کدک G.722",
      description: "برنده جایزه بهترین طراحی، پشتیبانی از تماس ویدئویی، قابلیت ذخیره صدا و تصویر، کدک G.722 با پهنای باند وسیع، پروتکل امنیتی SRTP",
      features: ["تماس ویدئویی", "G.722 HD", "SRTP", "XML"],
      suitable: ["مدیران", "شرکتها", "سازمانها"],
    },
    {
      id: 10,
      image: "/imageLanding/SMT-i5243.png",
      model: "SMT-i5243",
      brand: "سامسونگ",
      title: "تلفن IP سانترال سامسونگ مدل SMT-i5243",
      capacity: "تماس ویدئویی - کدک G.722",
      description: "برنده جایزه بهترین طراحی، پشتیبانی از تماس ویدئویی، قابلیت ذخیره صدا و تصویر، کدک G.722 با پهنای باند وسیع، پروتکل امنیتی SRTP",
      features: ["تماس ویدئویی", "G.722 HD", "SRTP", "طراحی برتر"],
      suitable: ["مدیران", "شرکتها", "سازمانها"],
    },
    {
      id: 11,
      image: "/imageLanding/GXV-3275.png",
      model: "GXV-3275",
      brand: "گرند استریم",
      title: "تلفن IP گویان افزار GXV-3275",
      capacity: "اندروید 4.2 - 6 خط SIP",
      description: "سیستم عامل اندروید 4.2، 6 خط تلفن تصویری، صفحه نمایش 7 اینچی لمسی، کنفرانس تصویری 3 طرفه، بلوتوث، WiFi، پورت Gigabit، دفترچه 1000 شماره",
      features: ["Android 4.2", "7 اینچ لمسی", "6 خط SIP", "WiFi/Bluetooth"],
      suitable: ["مدیران", "شرکتهای مدرن", "استارتاپها"],
    },
    {
      id: 12,
      image: "/imageLanding/GXV-3240.png",
      model: "GXV-3240",
      brand: "گرند استریم",
      title: "تلفن IP گویان افزار GXV-3240",
      capacity: "اندروید 4.2 - 6 خط SIP",
      description: "سیستم عامل اندروید 4.2، 6 خط SIP مجزا، صفحه نمایش 4.3 اینچی لمسی، کنفرانس تصویری 3 طرفه، بلوتوث، WiFi، پورت Gigabit، دفترچه 1000 شماره",
      features: ["Android 4.2", "4.3 اینچ لمسی", "6 خط SIP", "کنفرانس 3 طرفه"],
      suitable: ["شرکتها", "دفاتر", "سازمانها"],
    },
    {
      id: 13,
      image: "/imageLanding/VIDEO IP.png",
      model: "VIDEO IP",
      brand: "PGM",
      title: "تلفن IP VIDEO مدل PGM",
      capacity: "صفحه 7 اینچ - ویدئو کنفرانس",
      description: "صفحه نمایش 7 اینچی کاملاً لمسی، محافظ صفحه Screen Saver، خروجی صدای استریو و تصویر، دفترچه تلفن با گروهبندی، قابلیت تنظیم زاویه دوربین",
      features: ["7 اینچ لمسی", "Video & Audio Out", "Screen Saver", "تنظیم دوربین"],
      suitable: ["سالن کنفرانس", "شرکتها", "مراکز آموزشی"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9ff] via-white to-[#f0f2ff] mt-[80px]">
      <div className="relative overflow-hidden mb-12">
        <div className="relative bg-gradient-to-br from-[#1a233b] via-[#253359] to-[#0f172a] text-white py-16 px-6 rounded-3xl shadow-2xl mx-4 border border-white/10">
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-xs md:text-sm font-xbold border border-white/20 text-blue-200">
              <FaStar className="text-amber-400" /> گوشی‌های آی‌پی و تحت شبکه سازمانی
            </div>
            <h1 className="text-3xl md:text-5xl font-xbold mb-6 leading-tight">
              تلفن‌های IP تحت شبکه
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-200 to-emerald-300 mt-2">
                پاناسونیک، گرنداستریم و سامسونگ
              </span>
            </h1>
            <p className="text-base md:text-lg leading-8 font-xmedium text-slate-200 max-w-3xl mx-auto mb-8">
              ارائه مدرن‌ترین گوشی‌های تحت شبکه با کیفیت صدای HD، پشتیبانی از پروتکل SIP، پورت گیگابیت و سازگاری با کلیه مراکز تلفن ویپ.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:09125354811"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-xbold text-sm md:text-base shadow-lg hover:scale-105 transition-all"
              >
                <FaPhoneAlt /> مشاوره و استعلام قیمت: ۰۹۱۲۵۳۵۴۸۱۱
              </a>
              <a
                href={`https://wa.me/989125354811?text=${encodeURIComponent("سلام، برای خرید تلفن‌های IP تحت شبکه راهنمایی می‌خواستم.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white rounded-xl font-xbold text-sm md:text-base border border-white/30 backdrop-blur-md hover:scale-105 transition-all"
              >
                <FaHeadset className="text-emerald-400 text-lg" /> استعلام در واتساپ
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 px-4 max-w-7xl mx-auto">
        {[
          { number: "۱۳+", label: "مدل متنوع اداری و مدیریتی", color: "from-blue-500 to-blue-600" },
          { number: "HD Codec", label: "کیفیت صدای شفاف G.722", color: "from-purple-500 to-purple-600" },
          { number: "PoE", label: "تغذیه از کابل شبکه", color: "from-pink-500 to-pink-600" },
          { number: "۱ سال", label: "گارانتی طلایی شرکت رهیاب", color: "from-indigo-500 to-indigo-600" },
        ].map((stat, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 transition-all duration-300">
            <div className="text-2xl md:text-3xl font-xbold text-[#1e2a4a] mb-1">{stat.number}</div>
            <div className="text-xs text-slate-500 font-xmedium">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 px-4 max-w-7xl mx-auto">
        {products.map((product) => (
          <div key={product.id} className="group bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-slate-100 flex flex-col justify-between hover:-translate-y-1">
            <div>
              <div className="relative h-56 bg-slate-50 p-6 flex items-center justify-center">
                <div className="absolute top-4 left-4 z-10 bg-[#1e2a4a] text-white px-3 py-1 rounded-full text-xs font-xbold shadow">
                  {product.model}
                </div>
                <div className="absolute top-4 right-4 z-10 bg-white text-[#1e2a4a] border border-slate-200 px-3 py-1 rounded-full text-xs font-xmedium">
                  {product.brand}
                </div>
                <img className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" src={product.image} alt={product.title} />
              </div>
              <div className="p-6">
                <h3 className="text-base font-xbold text-[#1e2a4a] mb-2 leading-7">{product.title}</h3>
                <div className="bg-blue-50/70 border border-blue-100 rounded-xl px-3 py-1.5 mb-3 inline-block">
                  <span className="font-xbold text-xs text-blue-900">{product.capacity}</span>
                </div>
                <p className="text-xs text-slate-600 font-xregular leading-6 mb-4">{product.description}</p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1.5">
                    {product.features.map((feature, idx) => (
                      <span key={idx} className="bg-slate-50 text-[#1e2a4a] border border-slate-200 px-2 py-1 rounded-lg text-xs font-xmedium">
                        ✓ {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mb-4 p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-xs font-xbold text-slate-700 mb-1">مناسب برای:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {product.suitable.map((item, idx) => (
                      <span key={idx} className="text-xs text-slate-600 font-xmedium">
                        {idx > 0 && "•"} {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 pt-0">
              <div className="grid grid-cols-2 gap-2">
                <a href="tel:09125354811" className="bg-[#1e2a4a] hover:bg-blue-900 text-white py-2.5 rounded-xl font-xbold text-xs text-center transition-all flex items-center justify-center gap-1">
                  <FaPhoneAlt className="text-xs" /> خرید تلفنی
                </a>
                <a
                  href={`https://wa.me/989125354811?text=${encodeURIComponent(`سلام، استعلام قیمت تلفن تحت شبکه ${product.model} را می‌خواستم.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-600 hover:text-white py-2.5 rounded-xl font-xbold text-xs text-center transition-all flex items-center justify-center"
                >
                  استعلام واتساپ
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 mb-10">
        <div className="relative overflow-hidden bg-gradient-to-br from-[#1a233b] via-[#253359] to-[#0f172a] rounded-3xl p-10 md:p-14 text-center text-white shadow-2xl">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-xbold mb-4">نیاز به مشاوره در خرید تلفن تحت شبکه دارید؟</h3>
            <p className="text-sm md:text-base font-xmedium mb-8 text-slate-300 leading-8">
              مهندس محمدی کارشناس ارشد ارتباطات آماده پاسخگویی به سوالات شما و ارائه بهترین قیمت عمده و سازمانی است.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:09125354811"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-xbold text-sm md:text-base shadow-xl hover:scale-105 transition-all"
              >
                <FaHeadset /> تماس مستقیم: ۰۹۱۲۵۳۵۴۸۱۱
              </a>
              <a
                href={`https://wa.me/989125354811?text=${encodeURIComponent("سلام مهندس محمدی، درباره خرید تلفن IP سازمانی سوال داشتم.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white rounded-xl font-xbold text-sm md:text-base border border-white/30 backdrop-blur-md hover:scale-105 transition-all"
              >
                استعلام قیمت واتساپ
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
