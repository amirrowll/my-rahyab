"use client";
import React, { useState } from "react";
import { FaClipboardList, FaCog, FaWrench, FaLaptop, FaUser, FaPhone, FaPhoneAlt, FaRocket, FaChartBar, FaBook, FaSignal, FaDesktop, FaBatteryFull, FaMobileAlt, FaBuilding, FaHospital, FaFileAlt } from "react-icons/fa";

export default function Rahyab40() {
  const [activeSection, setActiveSection] = useState("overview");

  const features = {
    system: [
      "قابلیت ارسال و دریافت شماره گیری به طریق تون (DTMF)",
      "امکان قرار گرفتن در شبکه (اختیاری)",
      "مجهز به سیستم DID (اختیاری)",
      "مجهز به سیستم Caller ID جهت کلیه خطوط داخلی و شهری (اختیاری)",
      "امکان استفاده همزمان از کامپیوتر مرکز تلفن جهت اجرای نرم افزارهای اداری",
      "سازگار با هر نوع کامپیوتر بدون نیاز به کارت اضافی",
      "تست خودکار سیستم (On line test)",
      "امکان ایجاد شبکه از طریق بهم پیوستن هر تعداد دستگاه",
    ],
    hardware: [
      "مجهز به ورودی و خروجی های آنالوگ جهت آوای انتظار دلخواه",
      "فراخوان و ورودی صوتی از رادیو با ضبط صوت",
      "مجهز به ورودی و خروجی های لاجیک جهت زنگ مرکزی",
      "اعلام حریق، زنگ اخبار و درب بازکن",
      "امکان انتقال (DATA) روی خطوط شهری و داخلی",
      "مجهز به مدار برق اضطراری و شارژر",
      "استفاده از گوشی تلفن های معمولی دو سیمه",
      "امکان فاصله گرفتن اپراتور از مرکز تلفن تا 50 متر",
    ],
    software: [
      "نرم افزار کامل و قدرتمند صورتحساب",
      "امکان مشاهده و چاپ از طریق چاپگر",
      "ذخیره و بازیابی اطلاعات برنامه ریزی شده از روی دیسک",
      "صفحه نمایش گرافیکی حاوی کلیه اطلاعات (با خط فارسی)",
      "نمایش وضعیت خطوط داخلی و شهری",
      "برنامه ریزی ساده همراه با راهنمای لحظه ای (on line help)",
      "امکان کار با صفحه کلید و موش به طور همزمان",
      "محافظ صفحه در صورت کار نکردن با کامپیوتر",
      "دفترچه تلفن و شماره گیری مستقیم تا 7200 شماره",
      "مجهز به راهنمای کلی و راهنمای لحظه ای",
      "رمز عبور جهت برنامه ریزی و کار با کنسول اپراتور",
      "امکان تغییر رنگ صفحه نمایش",
    ],
    operator: [
      "اپراتور کمکی با استفاده از گوشی معمولی تلفن",
      "اپراتور دوم با استفاده از کامپیوتر مجزا تا فاصله یک کیلومتر (اختیاری)",
      "انتقال کلیه مکالمات به داخلی ها",
      "شماره گیری خودکار برای اپراتور با داخلی",
      "امکان فاصله گرفتن اپراتور از مرکز تلفن تا 50 متر",
    ],
    lines: [
      "گروه بندی خطوط",
      "یک طرفه یا دو طرفه",
      "تعیین نوع شماره گیری (پالس یا تون)",
      "نصب یا حذف صفربند یا دو صفربند مرکزی",
      "تعریف نگهبان شب به تعداد نامحدود (کلی و اختصاصی)",
      "پاسخ خودکار به خط شهری در صورت عدم پاسخگویی",
    ],
    internal: [
      "یک طرفه یا دو طرفه",
      "تعیین نوع شماره گیری (پالس یا تون)",
      "نصب یا حذف صفربند یا دو صفربند مرکزی",
      "تعریف نگهبان شب به تعداد نامحدود (کلی و اختصاصی)",
      "پاسخ خودکار به خط شهری در صورت عدم پاسخگویی",
      "قابلیت تعریف محدودیت مشترکین داخلی از DID",
      "قابلیت تعریف محدودیت برگشت خط شهری از طریق DID",
      "قابلیت تعریف زمان Flash جهت مشترکین داخلی",
      "قابلیت تعریف بوق کنفرانس از 16 ثانیه به 64 ثانیه",
    ],
  };

  const specs = [
    {
      title: "ظرفیت سیستم",
      value: "16/8 ~ 32/8",
      icon: <FaChartBar />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "دفترچه تلفن",
      value: "7200 شماره",
      icon: <FaBook />,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "فاصله اپراتور",
      value: "تا 1 کیلومتر",
      icon: <FaSignal />,
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "اپراتور کامپیوتری",
      value: "دو اپراتور",
      icon: <FaDesktop />,
      color: "from-indigo-500 to-indigo-600"
    },
  ];

  const sections = [
    { id: "overview", label: "مشخصات کلی", icon: <FaClipboardList /> },
    { id: "system", label: "امکانات سیستم", icon: <FaCog /> },
    { id: "hardware", label: "سختافزار", icon: <FaWrench /> },
    { id: "software", label: "نرمافزار", icon: <FaLaptop /> },
    { id: "operator", label: "امکانات اپراتور", icon: <FaUser /> },
    { id: "lines", label: "خطوط شهری", icon: <FaPhone /> },
    { id: "internal", label: "خطوط داخلی", icon: <FaPhoneAlt /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9ff] via-white to-[#f0f2ff] py-8 px-4">
      {/* Hero Section */}
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
                <img alt="مرکز تلفن رهیاب RX-40 - سانترال کامپیوتری 8/8 تا 8/32"
                  src="/imageLanding/rx-40.jpg"
                  
                  className="relative w-full max-w-md rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500 object-contain bg-white/10 p-4"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center text-white">
              <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-xmedium w-fit">
                مناسب سازمانهای کوچک
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-xbold mb-4 leading-tight">
                مرکز تلفن رهیاب
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200 mt-2">
                  RX-40
                </span>
              </h1>

              <p className="text-lg text-white/90 font-xmedium mb-6 leading-8">
                راهکار ایدهآل برای شرکتهای کوچک و دفاتر با نیاز به سیستم تلفنی حرفهای. قابل ارتقا از ظرفیت 16/8 تا 32/8 خط
              </p>

              <div className="flex gap-4">
                <a href="tel:09125354811">
                  <button className="px-8 py-3 bg-white text-[#253359] rounded-xl font-xbold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:scale-105">
                    مشاوره رایگان
                  </button>
                </a>
                <button className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white rounded-xl font-xbold border border-white/30 hover:bg-white/20 transition-all duration-300">
                  دانلود کاتالوگ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Specs Cards */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {specs.map((spec, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${spec.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <div className="relative z-10 text-center">
                <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-500 flex justify-center text-[#253359] group-hover:text-white">
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

      {/* Navigation Tabs */}
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

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto">
        {activeSection === "overview" && (
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-[#253359] to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl">
                <FaClipboardList />
              </div>
              <h2 className="text-2xl md:text-3xl font-xbold text-[#253359]">
                مشخصات کلی RX-40
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <h3 className="text-xl font-xbold text-[#253359] mb-4">ظرفیت سیستم</h3>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                  <div className="text-3xl font-xbold text-[#253359] mb-2">16/4 ~ 32/8</div>
                  <p className="text-sm text-[#606060] font-xmedium">
                    از ظرفیت پایه 4 خط شهری و 16 خط داخلی تا حداکثر 8 خط شهری و 32 خط داخلی
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-xbold text-[#253359] mb-4">ویژگیهای برجسته</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white border-2 border-blue-100 rounded-xl p-4 text-center">
                    <div className="text-2xl mb-2 flex justify-center text-[#253359]"><FaDesktop /></div>
                    <div className="text-sm font-xbold text-[#253359]">اپراتور کامپیوتری</div>
                  </div>
                  <div className="bg-white border-2 border-purple-100 rounded-xl p-4 text-center">
                    <div className="text-2xl mb-2 flex justify-center text-[#253359]"><FaChartBar /></div>
                    <div className="text-sm font-xbold text-[#253359]">صورتحساب اتوماتیک</div>
                  </div>
                  <div className="bg-white border-2 border-pink-100 rounded-xl p-4 text-center">
                    <div className="text-2xl mb-2 flex justify-center text-[#253359]"><FaBatteryFull /></div>
                    <div className="text-sm font-xbold text-[#253359]">برق اضطراری</div>
                  </div>
                  <div className="bg-white border-2 border-indigo-100 rounded-xl p-4 text-center">
                    <div className="text-2xl mb-2 flex justify-center text-[#253359]"><FaMobileAlt /></div>
                    <div className="text-sm font-xbold text-[#253359]">Caller ID</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#253359] to-[#1a2440] rounded-2xl p-8 text-white">
              <h3 className="text-xl font-xbold mb-4">مناسب برای:</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <FaBuilding className="text-2xl" />
                  <span className="font-xmedium">شرکتهای کوچک</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaHospital className="text-2xl" />
                  <span className="font-xmedium">کلینیکها</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaFileAlt className="text-2xl" />
                  <span className="font-xmedium">دفاتر اداری</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection !== "overview" && (
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-[#253359] to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl">
                {sections.find(s => s.id === activeSection)?.icon}
              </div>
              <h2 className="text-2xl md:text-3xl font-xbold text-[#253359]">
                {sections.find(s => s.id === activeSection)?.label}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {features[activeSection as keyof typeof features]?.map((feature, idx) => (
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
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto mt-12">
        <div className="relative overflow-hidden bg-gradient-to-br from-[#253359] via-[#1e2a4a] to-[#0f1525] rounded-3xl p-8 md:p-12 text-center text-white">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-48 -translate-x-48"></div>

          <div className="relative z-10">
            <div className="inline-block mb-6 p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
              <FaPhone className="text-5xl" />
            </div>

            <h3 className="text-2xl md:text-3xl font-xbold mb-4">
              نیاز به مشاوره تخصصی دارید؟
            </h3>

            <p className="text-lg font-xmedium mb-8 text-white/90 max-w-2xl mx-auto">
              کارشناسان ما آماده پاسخگویی به سوالات شما و ارائه بهترین راهکار هستند
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:02188440345" className="px-8 py-4 bg-white text-[#253359] rounded-xl font-xbold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:scale-105 flex items-center gap-2">
                <FaPhoneAlt /> 021-88440345
              </a>
              <a href="tel:09125354811" className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-xbold text-lg border border-white/30 hover:bg-white/20 transition-all duration-300 flex items-center gap-2">
                <FaMobileAlt /> 0912-5354811
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
