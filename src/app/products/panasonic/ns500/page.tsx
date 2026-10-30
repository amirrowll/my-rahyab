"use client";
import { useState } from "react";
import { FaClipboardList, FaCog, FaRocket, FaPhone, FaPhoneAlt, FaChartBar, FaSignal, FaMobileAlt } from "react-icons/fa";

export default function NS500() {
  const [activeSection, setActiveSection] = useState("overview");

  const specs = [
    { title: "ظرفیت نهایی خط شهری", value: "24 خط", icon: <FaPhone className="text-[#253359] group-hover:text-white" />, color: "from-blue-500 to-blue-600" },
    { title: "ظرفیت نهایی داخلی", value: "208 داخلی", icon: <FaChartBar className="text-[#253359] group-hover:text-white" />, color: "from-purple-500 to-purple-600" },
    { title: "منشی دیجیتال", value: "64 کانال", icon: <FaSignal className="text-[#253359] group-hover:text-white" />, color: "from-pink-500 to-pink-600" },
    { title: "ظرفیت E1", value: "2 لینک", icon: <FaPhoneAlt className="text-[#253359] group-hover:text-white" />, color: "from-indigo-500 to-indigo-600" }
  ];

  const sections = [
    { id: "overview", label: "مشخصات کلی", icon: <FaClipboardList /> },
    { id: "specs", label: "مشخصات فنی", icon: <FaCog /> },
    { id: "features", label: "ویژگیها", icon: <FaRocket /> }
  ];

  const technicalSpecs = [
    { label: "ظرفیت اولیه خط شهری", value: "6 خط" },
    { label: "ظرفیت نهایی خط شهری", value: "24 خط" },
    { label: "ظرفیت نهایی E1", value: "2 لینک (60 کانال)" },
    { label: "پورت شبکه", value: "2 پورت 10/100 مگابیت" },
    { label: "ظرفیت اولیه داخلی آنالوگ", value: "16 داخلی" },
    { label: "ظرفیت اولیه داخلی دیجیتال", value: "2 داخلی" },
    { label: "ظرفیت نهایی داخلی", value: "208 داخلی" },
    { label: "منشی دیجیتال اولیه", value: "2 تماس همزمان" },
    { label: "منشی دیجیتال نهایی", value: "64 تماس همزمان" },
    { label: "ابعاد", value: "430×88×367 میلیمتر" },
    { label: "وزن", value: "4.5 کیلوگرم" },
    { label: "توان مصرفی", value: "110 وات" }
  ];

  const features = [
    "شلف افزایش ظرفیت برای دستگاه مرکزی KX-NS500",
    "امکان اضافه کردن تا 3 باکس NS520",
    "با اضافه نمودن هر باکس ظرفیت مرکز افزایش مییابد",
    "دارای 6 خط شهری آنالوگ به عنوان ظرفیت اولیه",
    "4 داخلی دیجیتال و 16 داخلی آنالوگ اولیه",
    "قابل بهرهبرداری و استفاده با خرید دستگاه",
    "سازگار با تمام تلفنهای سری N و UT"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9ff] via-white to-[#f0f2ff] py-8 px-4 mt-10">
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
                <img alt="سانترال پاناسونیک NS500" src="/imageLanding/ns500.png"  className="relative w-full max-w-md rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500" />
              </div>
            </div>

            <div className="flex flex-col justify-center text-white">
              <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-xmedium w-fit">
                سانترال تحت شبکه
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-xbold mb-4 leading-tight">
                پاناسونیک
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200 mt-2">
                  KX-NS500
                </span>
              </h1>

              <p className="text-lg text-white/90 font-xmedium mb-6 leading-8">
                شلف سانترال پاناسونیک مدل KX-NS500 برای افزایش ظرفیت دستگاه مرکزی طراحی شده است. روی مرکز اصلی تا 3 باکس NS520 قابل اضافه کردن است.
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

      <div className="max-w-7xl mx-auto mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {specs.map((spec, idx) => (
            <div key={idx} className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${spec.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <div className="relative z-10 text-center">
                <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-500 flex justify-center">
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
              <button key={section.id} onClick={() => setActiveSection(section.id)} className={`flex items-center gap-2 px-6 py-3 rounded-xl font-xbold text-sm transition-all duration-300 whitespace-nowrap ${activeSection === section.id ? "bg-gradient-to-r from-[#253359] to-[#1a2440] text-white shadow-md" : "text-[#606060] hover:bg-gray-50"}`}>
                <span className="text-lg">{section.icon}</span>
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {activeSection === "specs" && (
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-[#253359] to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl">
                <FaCog />
              </div>
              <h2 className="text-2xl md:text-3xl font-xbold text-[#253359]">مشخصات فنی</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {technicalSpecs.map((spec, idx) => (
                <div key={idx} className="flex justify-between p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300">
                  <span className="font-xmedium text-[#606060]">{spec.label}:</span>
                  <span className="font-xbold text-[#253359]">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === "features" && (
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-[#253359] to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl">
                <FaRocket />
              </div>
              <h2 className="text-2xl md:text-3xl font-xbold text-[#253359]">ویژگیها</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <div key={idx} className="group flex items-start gap-3 p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-[#253359] to-purple-600 rounded-lg flex items-center justify-center text-white text-sm font-xbold mt-0.5">✓</div>
                  <p className="text-[#404040] font-xmedium leading-7 text-sm md:text-base">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === "overview" && (
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-[#253359] to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl">
                <FaClipboardList />
              </div>
              <h2 className="text-2xl md:text-3xl font-xbold text-[#253359]">مشخصات کلی KX-NS500</h2>
            </div>
            <p className="text-[#404040] font-xmedium leading-7">
              این دستگاه مانند مرکز خود دارای 6 خط شهری آنالوگ، 4 داخلی دیجیتال و 16 داخلی آنالوگ به عنوان ظرفیت اولیه میباشد که با خرید دستگاه قابل بهرهبرداری و استفاده است.
            </p>
          </div>
        )}
      </div>

      <div className="max-w-7xl mx-auto mt-12">
        <div className="relative overflow-hidden bg-gradient-to-br from-[#253359] via-[#1e2a4a] to-[#0f1525] rounded-3xl p-8 md:p-12 text-center text-white">
          <div className="relative z-10">
            <div className="inline-block mb-6 p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
              <FaPhone className="text-5xl" />
            </div>
            <h3 className="text-2xl md:text-3xl font-xbold mb-4">نیاز به مشاوره تخصصی دارید؟</h3>
            <div className="flex flex-wrap gap-4 justify-center items-center">
              <a href="tel:09125354811" className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-xbold text-lg transition-all duration-300 shadow-2xl hover:scale-105 flex items-center gap-2">
                <FaPhone className="text-sm" /> تماس مستقیم: ۰۹۱۲۵۳۵۴۸۱۱
              </a>
              <a
                href={`https://wa.me/989125354811?text=${encodeURIComponent("سلام، درباره خرید و استعلام سانترال پاناسونیک KX-NS500 راهنمایی می‌خواستم.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-xbold text-lg border border-white/30 backdrop-blur-md hover:scale-105 transition-all flex items-center gap-2"
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
