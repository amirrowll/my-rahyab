"use client";
import { FaServer, FaChartLine } from "react-icons/fa";

export default function NCP1000() {
  const specs = [
    { label: "ظرفیت نهایی خطوط شهری", value: "128 خط" },
    { label: "ظرفیت نهایی آنالوگ خط شهری", value: "52 خط" },
    { label: "ظرفیت نهایی داخلیها", value: "172 داخلی" },
    { label: "ظرفیت نهایی داخلی دیجیتال", value: "40 داخلی" },
    { label: "ظرفیت نهایی داخلی آنالوگ", value: "4 داخلی" },
    { label: "ظرفیت نهایی تلفن تحت شبکه", value: "128 عدد" },
    { label: "ظرفیت نهایی تلفن نرمافزاری", value: "128 عدد" },
    { label: "قابلیت دربازکن", value: "دارد" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9ff] via-white to-[#f0f2ff] py-8 px-4 mt-10">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#253359] to-[#1a2440] rounded-3xl p-8 md:p-12 text-white mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-sm font-xmedium mb-4">
                سانترال تحت شبکه
              </div>
              <h1 className="text-3xl md:text-4xl font-xbold mb-4">
                پاناسونیک KX-NCP1000
              </h1>
              <p className="text-white/90 font-xmedium leading-7 mb-6">
                سیستم سانترال پاناسونیک مدل KX-NCP1000 با استفاده از شبکه IP یک محیط ارتباطی کاملاً انعطافپذیر ایجاد میکند که قابل گسترش است. هزینهها به طور مؤثری کاهش مییابد و بهرهوری افزایش مییابد.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="tel:09125354811" className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-xbold shadow-lg hover:scale-105 transition-all text-sm">
                  استعلام قیمت و خرید: ۰۹۱۲۵۳۵۴۸۱۱
                </a>
                <a
                  href={`https://wa.me/989125354811?text=${encodeURIComponent("سلام، درباره استعلام قیمت سانترال پاناسونیک KX-NCP1000 راهنمایی می‌خواستم.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-xbold text-sm border border-white/30 backdrop-blur-md hover:scale-105 transition-all"
                >
                  استعلام در واتساپ
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <img src="/imageLanding/ns1000.png" alt="NCP1000" className="rounded-2xl shadow-2xl max-w-md" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <FaServer className="text-2xl text-[#253359]" />
            <h2 className="text-2xl font-xbold text-[#253359]">مشخصات فنی</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {specs.map((spec, idx) => (
              <div key={idx} className="flex justify-between p-3 bg-[#f8f9ff] rounded-lg">
                <span className="font-xmedium text-[#606060]">{spec.label}:</span>
                <span className="font-xbold text-[#253359]">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center gap-3 mb-6">
            <FaChartLine className="text-2xl text-[#253359]" />
            <h2 className="text-2xl font-xbold text-[#253359]">ویژگیها</h2>
          </div>
          <div className="space-y-3 text-[#404040] font-xmedium leading-7">
            <p>• رویکرد جدید و هوشمندانه پاناسونیک برای کسبوکارهای کوچک و متوسط (تا 288 کاربر)</p>
            <p>• بسیار کاربردی برای استفاده در شعب و مراکز شرکتهای بزرگ</p>
            <p>• هوشمند بودن، چند منظوره بودن و رویکرد IP</p>
            <p>• سازگاری کامل و امکان یکپارچگی با سریهای قبلی پاناسونیک</p>
            <p>• کاهش هزینهها، کاربری و راهاندازی آسان</p>
          </div>
        </div>
      </div>
    </div>
  );
}
