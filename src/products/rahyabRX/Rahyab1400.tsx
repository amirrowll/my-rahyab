"use client";
import React, { useState } from "react";
import { FaTrophy, FaBook, FaChartBar, FaUsers, FaClipboardList, FaCog, FaWrench, FaLaptop, FaLock, FaUser, FaPhone, FaPhoneAlt, FaRocket, FaLink, FaMobileAlt, FaGlobe, FaBuilding, FaHospital, FaHotel, FaIndustry, FaSchool, FaShieldAlt } from "react-icons/fa";

export default function Rahyab1400() {
  const [activeSection, setActiveSection] = useState("overview");

  const features = {
    system: [
      "قابلیت نصب سیستم DID بر روی خطوط شهری (اختیاری)",
      "قابلیت لینک شدن با مراکز تلفن مخابرات (ترانک‌های دیجیتال)",
      "مجهز به سیستم Caller ID (داخلی)",
      "مجهز به سیستم Caller ID خطوط شهری و نمایش خط شهری بر روی گوشی داخلی (اختیاری)",
      "قابلیت ارسال و دریافت شماره گیری به طریق تون (DTMF)",
      "قابلیت ضبط و تعویض آوای انتظار (موزیک هولد) به مدت دو دقیقه",
      "قابلیت ضبط مجدد DID",
      "تست خودکار سیستم (On line test)",
      "امکان ایجاد شبکه از طریق به هم پیوستن هر تعداد دستگاه",
    ],
    hardware: [
      "مجهز به ورودی و خروجی های آنالوگ جهت آوای انتظار دلخواه",
      "فراخوان و ورودی صوتی از رادیو یا ضبط صوت",
      "مجهز به ورودی و خروجی های لاجیک جهت زنگ مرکزی",
      "اعلام حریق، زنگ اخبار و درب بازکن",
      "امکان قرار گرفتن در شبکه‌های کامپیوتری (اختیاری)",
      "امکان انتقال DATA بر روی خطوط شهری و داخلی",
      "اتصال به اینترنت و شبکه‌های بانکی کشور",
      "مجهز به مدار برق اضطراری و شارژ",
      "استفاده از گوشی تلفن های معمولی دو سیمه",
    ],
    software: [
      "دارای یک اپراتور کامپیوتری و به تعداد نامحدود اپراتور کمکی کامپیوتری (اختیاری)",
      "دارای 3 نوع دفتر تلفن مجزا (اپراتور – اضطراری – عمومی)",
      "نرم افزار کامل و قدرتمند صورتحساب",
      "امکان مشاهده، چاپ و کپی بر روی دیسکت",
      "جابجایی شماره تلفن‌های داخلی از طریق نرم افزار",
      "امکان ترتیب شماره‌ها بر اساس اتاق‌ها و طبقات",
      "امکان تعریف شماره‌های داخلی از یک رقم تا 4 رقم",
      "تعریف نام برای هر مشترک داخلی",
      "ویژگی‌های خاص برای مصارف اداری، آموزشی، صنعتی، هتلی و بیمارستانی",
      "ذخیره و بازیابی اطلاعات برنامه ریزی شده از روی دیسکت",
    ],
    restrictions: [
      "قابلیت محدود کردن داخلی‌ها از امکانات برنامه ریزی سیستم",
      "امکان برنامه ریزی داخلی‌ها به صورت روز و شب",
      "گروه بندی خطوط داخلی جهت محدود کردن نوع تماس",
      "مناسب هتل‌ها، بیمارستان‌ها، خوابگاه‌های دانشجویی و مراکز نظامی",
      "امکان تعریف صفربند، دو صفربند و موبایل بند برای تک تک داخلی‌ها",
      "قابلیت تعریف محدودیت مشترکین داخلی از DID",
      "قابلیت تعریف محدودیت برگشت خط شهری از طریق DID",
      "قابلیت تعریف زمان Flash جهت مشترکین داخلی",
      "قابلیت تعریف بوق کنفرانس از 16 ثانیه به 64 ثانیه",
    ],
    operator: [
      "مجهز به صفحه نمایش وضعیت خطوط داخلی و شهری با ظاهری جذاب و به زبان فارسی",
      "برنامه ریزی ساده به همراه راهنمای لحظه‌ای",
      "امکان کار با صفحه کلید و موش به طور همزمان",
      "محافظ صفحه در صورت کار نکردن با کامپیوتر",
      "دفترچه تلفن فارسی و لاتین با قابلیت جستجوی سریع",
      "شماره گیری مستقیم از طریق دفترچه تلفن",
      "راهنمای کلی و راهنمای لحظه‌ای (On line help)",
      "رمز عبور جهت برنامه ریزی و کار با کنسول اپراتور",
      "امکان تغییر رنگ صفحه نمایش",
      "انتقال کلیه مکالمات به داخلی‌ها",
      "شماره گیری اتوماتیک روی خطوط شهری تا حصول موفقیت",
      "برنامه ریزی سریع از طریق کلیدهای میانبر",
      "مشاهده شماره تماس گیرنده Caller ID و انتقال (اختیاری)",
    ],
    lines: [
      "گروه بندی یک طرفه یا دو طرفه",
      "تعیین نوع شماره گیری (پالس یا پالس/تون)",
      "نصب یا حذف صفربند یا دو صفربند مرکزی",
      "تعریف نگهبان شب به تعداد نامحدود (کلی و اختصاصی و گروهی)",
      "پاسخ خودکار به خط شهری در صورت عدم پاسخگویی",
      "تعریف DID اپراتور خودکار (اختیاری)",
      "تعیین خط اختصاصی یا فوری برای یک داخلی",
    ],
    internal: [
      "تماس با داخلی و اپراتور و خط شهری",
      "ارتباط با خطوط شهری",
      "رزرو داخلی مشغول (Call back busy)",
      "رزرو داخلی آزاد (Call back do not answer)",
      "رزرو خط شهری اشغال",
      "مکالمه مشورتی هنگام مکالمه داخلی",
      "انتقال مکالمه داخلی",
      "کنفرانس مکالمه داخلی (سه داخلی)",
      "مکالمه مشورتی هنگام مکالمه با خط شهری",
      "انتقال خط شهری به داخلی یا اپراتور",
      "کنفرانس تلفنی روی خطوط داخلی و شهری (دو داخلی یک شهری)",
      "کنفرانس تلفنی روی خطوط شهری (یک داخلی و دو شهری)",
      "انتقال خودکار خط شهری به داخلی (Camp on busy/ring)",
      "وارد شدن به مکالمه داخلی مشغول (در صورت مجاز بودن)",
      "پاسخ به مکالمه ورودی از هر نقطه (Call pick up)",
      "پاسخ به خط شهری در حال زنگ زدن از هر نقطه",
      "امکان وصل به ورودی و خروجی های آنالوگ",
    ],
    advanced: [
      "مزاحم یاب",
      "برنامه ریزی دنبال کن در سه حالت مختلف (Call forward)",
      "Follow me on busy and do not answer",
      "برنامه ریزی آلارم یک بار و دائمی",
      "برنامه ریزی تعداد زنگ‌ها (Do not disturb)",
      "تکرار آخرین شماره گیری روی خطوط شهری",
      "شماره گیری اتوماتیک روی خطوط شهری تا حصول موفقیت",
      "برنامه ریزی رمز عبور جهت جلوگیری از دسترسی دیگران به تلفن",
      "کلاس محدودیت مکالمه و رتبه الویت",
      "تعیین حداکثر زمان مکالمه روی خطوط شهری",
      "تعریف شماره تلفن بر اساس شماره اتاق (ویژه هتل‌ها و بیمارستان‌ها)",
      "تعریف نام برای هر شماره تلفن داخلی",
      "امکان مشاهده خط شهری (Caller ID)",
      "امکان اتصال به سیستم فراخوان در صورت مجاز بودن (Page)",
    ],
  };

  const specs = [
    {
      title: "مدل",
      value: "RXD-1400",
      icon: <FaTrophy className="text-[#253359] group-hover:text-white" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "دفترچه تلفن",
      value: "3 نوع مجزا",
      icon: <FaBook className="text-[#253359] group-hover:text-white" />,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "ظرفیت",
      value: "بالا",
      icon: <FaChartBar className="text-[#253359] group-hover:text-white" />,
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "اپراتور",
      value: "نامحدود",
      icon: <FaUsers className="text-[#253359] group-hover:text-white" />,
      color: "from-indigo-500 to-indigo-600"
    },
  ];

  const sections = [
    { id: "overview", label: "مشخصات کلی", icon: <FaClipboardList /> },
    { id: "system", label: "امکانات سیستم", icon: <FaCog /> },
    { id: "hardware", label: "سختافزار و شبکه", icon: <FaWrench /> },
    { id: "software", label: "نرمافزار", icon: <FaLaptop /> },
    { id: "restrictions", label: "محدودیتها", icon: <FaLock /> },
    { id: "operator", label: "امکانات اپراتور", icon: <FaUser /> },
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
                <img alt="مرکز تلفن دیجیتال رهیاب RXD-1400 ظرفیت بالا"
                  src="/imageLanding/rxd-1400.jpg"
                  
                  className="relative w-full max-w-md rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500 object-contain bg-white/10 p-4"
                />
              </div>
            </div>

            {/* Left Side - Info */}
            <div className="flex flex-col justify-center text-white">
              <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-xmedium w-fit">
                ظرفیت بالا - سازمان های بزرگ
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-xbold mb-4 leading-tight">
                مرکز تلفن دیجیتال
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200 mt-2">
                  RXD-1400
                </span>
              </h1>

              <p className="text-lg text-white/90 font-xmedium mb-6 leading-8">
                قدرتمندترین مرکز تلفن دیجیتال رهیاب با ظرفیت بالا، مناسب هتلهای بزرگ، بیمارستانها و سازمان های گسترده با ترافیک سنگین ارتباطی
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
                مشخصات کلی RXD-1400
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <h3 className="text-xl font-xbold text-[#253359] mb-4">قدرتمندترین مدل</h3>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                  <div className="text-3xl font-xbold text-[#253359] mb-2">RXD-1400</div>
                  <p className="text-sm text-[#606060] font-xmedium">
                    مرکز تلفن دیجیتال با ظرفیت بالا و امکانات کامل برای سازمان‌های بزرگ
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-xbold text-[#253359] mb-4">ویژگیهای برجسته</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white border-2 border-blue-100 rounded-xl p-4 flex flex-col items-center">
                    <div className="text-2xl mb-2 text-[#253359]"><FaLink /></div>
                    <div className="text-sm font-xbold text-[#253359]">ترانک دیجیتال</div>
                  </div>
                  <div className="bg-white border-2 border-purple-100 rounded-xl p-4 flex flex-col items-center">
                    <div className="text-2xl mb-2 text-[#253359]"><FaMobileAlt /></div>
                    <div className="text-sm font-xbold text-[#253359]">DID System</div>
                  </div>
                  <div className="bg-white border-2 border-pink-100 rounded-xl p-4 flex flex-col items-center">
                    <div className="text-2xl mb-2 text-[#253359]"><FaGlobe /></div>
                    <div className="text-sm font-xbold text-[#253359]">شبکه بانکی</div>
                  </div>
                  <div className="bg-white border-2 border-indigo-100 rounded-xl p-4 flex flex-col items-center">
                    <div className="text-2xl mb-2 text-[#253359]"><FaBook /></div>
                    <div className="text-sm font-xbold text-[#253359]">3 دفترچه تلفن</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#253359] to-[#1a2440] rounded-2xl p-8 text-white">
              <h3 className="text-xl font-xbold mb-4">مناسب برای:</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl"><FaHotel /></span>
                  <span className="font-xmedium">هتلهای بزرگ</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl"><FaHospital /></span>
                  <span className="font-xmedium">بیمارستانها</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl"><FaBuilding /></span>
                  <span className="font-xmedium">سازمانهای بزرگ</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl"><FaIndustry /></span>
                  <span className="font-xmedium">مجتمعهای صنعتی</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl"><FaSchool /></span>
                  <span className="font-xmedium">خوابگاههای دانشجویی</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl"><FaShieldAlt /></span>
                  <span className="font-xmedium">مراکز نظامی و انتظامی</span>
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
