"use client";
import React, { useState } from "react";
import { FaChartBar, FaBook, FaMusic, FaBroadcastTower, FaClipboardList, FaCog, FaWrench, FaLaptop, FaPhone, FaPhoneAlt, FaRocket, FaMicrophone, FaBatteryFull, FaMobileAlt, FaHospital, FaHotel, FaBuilding } from "react-icons/fa";

export default function Rahyab608() {
  const [activeSection, setActiveSection] = useState("overview");

  const features = {
    system: [
      "قابلیت ارسال و دریافت شماره گیری به طریق تون (DTMF)",
      "قابلیت ضبط صدا جهت آوای انتظار (موزیک هولد) به مدت دو دقیقه",
      "امکان قرار گرفتن در شبکه (اختیاری)",
      "مجهز به سیستم DID (اختیاری)",
      "مجهز به سیستم Caller ID جهت کلیه خطوط داخلی و شهری",
      "سازگار با هر نوع کامپیوتر بدون نیاز به کارت اضافی",
      "تست خودکار سیستم (On line test)",
      "امکان ایجاد شبکه از طریق بهم پیوستن هر تعداد دستگاه",
    ],
    hardware: [
      "مجهز به ورودی و خروجی های آنالوگ جهت آوای انتظار دلخواه",
      "مجهز به ورودی و خروجی های لاجیک جهت زنگ مرکزی و اعلام حریق",
      "امکان انتقال (DATA) روی خطوط شهری و داخلی",
      "مجهز به مدار برق اضطراری و شارژر",
      "استفاده از گوشی تلفن های معمولی دو سیمه",
      "حفاظت کلیه خطوط شهری و داخلی با فیوز و واریستور",
      "امکان فاصله گرفتن اپراتور از مرکز تلفن تا 50 متر",
    ],
    software: [
      "نرم افزار کامل و قدرتمند صورتحساب",
      "صفحه نمایش گرافیکی حاوی کلیه اطلاعات (با خط فارسی)",
      "نمایش وضعیت خطوط داخلی و شهری",
      "برنامه ریزی ساده همراه با راهنمای لحظه ای",
      "امکان کار با صفحه کلید و موش به طور همزمان",
      "دفترچه تلفن و شماره گیری مستقیم تا 7200 شماره",
      "رمز عبور جهت برنامه ریزی و کار با کنسول اپراتور",
      "امکان تغییر رنگ صفحه نمایش",
    ],
    lines: [
      "گروه بندی خطوط",
      "یک طرفه یا دو طرفه",
      "تعیین نوع شماره گیری (پالس یا تون)",
      "نصب یا حذف صفربند یا دو صفربند مرکزی",
      "تعریف نگهبان شب به تعداد نامحدود",
      "پاسخ خودکار به خط شهری در صورت عدم پاسخگویی",
    ],
    internal: [
      "تماس با داخلی و اپراتور",
      "ارتباط با خطوط شهری",
      "رزرو داخلی مشغول (Call back busy)",
      "رزرو داخلی آزاد (Call back do not answer)",
      "مکالمه مشورتی هنگام مکالمه داخلی/شهری",
      "انتقال مکالمه داخلی",
      "کنفرانس مکالمه (سه داخلی)",
      "کنفرانس تلفنی روی خطوط داخلی و شهری",
      "وارد شدن به مکالمه داخلی مشغول",
      "پاسخ به مکالمه ورودی از هر نقطه (Call pick up)",
    ],
    advanced: [
      "مزاحم یاب",
      "برنامه ریزی دنبال کن (Call forward)",
      "برنامه ریزی آلارم یک بار و دائمی",
      "برنامه ریزی تعداد زنگها (Do not disturb)",
      "تکرار آخرین شماره گیری روی خطوط شهری",
      "شماره گیری اتوماتیک تا حصول موفقیت",
      "برنامه ریزی رمز عبور جهت جلوگیری از دسترسی",
      "کلاس محدودیت مکالمه و رتبه الویت",
      "تعیین حداکثر زمان مکالمه",
      "تعریف شماره تلفن بر اساس شماره اتاق",
      "جابجایی دو شماره تلفن بدون نیاز به پلان",
      "برنامه ریزی متفاوت برای دو حالت شب و روز",
    ],
  };

  const specs = [
    {
      title: "ظرفیت سیستم",
      value: "16/64 الی 96/512",
      icon: <FaChartBar className="text-[#253359] group-hover:text-white" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "دفترچه تلفن",
      value: "7200 شماره",
      icon: <FaBook className="text-[#253359] group-hover:text-white" />,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "ضبط تلفن گویا",
      value: "2 دقیقه",
      icon: <FaMusic className="text-[#253359] group-hover:text-white" />,
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "فاصله اپراتور",
      value: "تا 50 متر",
      icon: <FaBroadcastTower className="text-[#253359] group-hover:text-white" />,
      color: "from-indigo-500 to-indigo-600"
    },
  ];

  const sections = [
    { id: "overview", label: "مشخصات کلی", icon: <FaClipboardList /> },
    { id: "system", label: "امکانات سیستم", icon: <FaCog /> },
    { id: "hardware", label: "سختافزار", icon: <FaWrench /> },
    { id: "software", label: "نرمافزار", icon: <FaLaptop /> },
    { id: "lines", label: "خطوط شهری", icon: <FaPhone /> },
    { id: "internal", label: "خطوط داخلی", icon: <FaPhoneAlt /> },
    { id: "advanced", label: "امکانات پیشرفته", icon: <FaRocket /> },
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
            {/* Right Side - Image */}
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-20"></div>
                <img alt="مرکز تلفن رهیاب RX-608 - سانترال کامپیوتری"
                  src="/imageLanding/rx-608.jpg"
                  
                  className="relative w-full max-w-md rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Left Side - Info */}
            <div className="flex flex-col justify-center text-white">
              <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-xmedium w-fit">
                محصول حرفهای
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-xbold mb-4 leading-tight">
                مرکز تلفن رهیاب
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200 mt-2">
                  RX-608
                </span>
              </h1>

              <p className="text-lg text-white/90 font-xmedium mb-6 leading-8">
                سیستم تلفن کامپیوتری حرفهای با معماری مدولار برای سازمانهای بزرگ، هتلها و بیمارستانها. قابلیت ارتقا بدون تجهیزات اضافی تا حداکثر ظرفیت.
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
        {/* Overview Section */}
        {activeSection === "overview" && (
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-[#253359] to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl">
                <FaClipboardList />
              </div>
              <h2 className="text-2xl md:text-3xl font-xbold text-[#253359]">
                مشخصات کلی RX-608
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <h3 className="text-xl font-xbold text-[#253359] mb-4">ظرفیت سیستم</h3>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                  <div className="text-3xl font-xbold text-[#253359] mb-2">8/64 ~ 96/512</div>
                  <p className="text-sm text-[#606060] font-xmedium">
                    قابل گسترش از کمترین ظرفیت تا حداکثر بدون نیاز به تجهیزات اضافی
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-xbold text-[#253359] mb-4">ویژگیهای برجسته</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white border-2 border-blue-100 rounded-xl p-4 flex flex-col items-center">
                    <div className="text-2xl mb-2 text-[#253359]"><FaMicrophone /></div>
                    <div className="text-sm font-xbold text-[#253359]">اپراتور اتوماتیک</div>
                  </div>
                  <div className="bg-white border-2 border-purple-100 rounded-xl p-4 flex flex-col items-center">
                    <div className="text-2xl mb-2 text-[#253359]"><FaChartBar /></div>
                    <div className="text-sm font-xbold text-[#253359]">گزارشگیری کامل</div>
                  </div>
                  <div className="bg-white border-2 border-pink-100 rounded-xl p-4 flex flex-col items-center">
                    <div className="text-2xl mb-2 text-[#253359]"><FaBatteryFull /></div>
                    <div className="text-sm font-xbold text-[#253359]">برق اضطراری</div>
                  </div>
                  <div className="bg-white border-2 border-indigo-100 rounded-xl p-4 flex flex-col items-center">
                    <div className="text-2xl mb-2 text-[#253359]"><FaMobileAlt /></div>
                    <div className="text-sm font-xbold text-[#253359]">Caller ID</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#253359] to-[#1a2440] rounded-2xl p-8 text-white">
              <h3 className="text-xl font-xbold mb-4">مناسب برای:</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl"><FaHospital /></span>
                  <span className="font-xmedium">بیمارستانهای بزرگ</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl"><FaHotel /></span>
                  <span className="font-xmedium">هتلهای 5 ستاره</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl"><FaBuilding /></span>
                  <span className="font-xmedium">سازمانهای دولتی</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Feature Sections */}
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
              <span className="text-5xl"><FaPhone /></span>
            </div>

            <h3 className="text-2xl md:text-3xl font-xbold mb-4">
              نیاز به مشاوره تخصصی دارید؟
            </h3>

            <p className="text-lg font-xmedium mb-8 text-white/90 max-w-2xl mx-auto">
              کارشناسان ما آماده پاسخگویی به سوالات شما و ارائه بهترین راهکار هستند
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:02188440345" className="px-8 py-4 bg-white text-[#253359] rounded-xl font-xbold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:scale-105 flex items-center gap-2">
                <FaPhone /> 021-88440345
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
