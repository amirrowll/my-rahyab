"use client";

import Link from "next/link";
import {
  FaChartLine,
  FaChartBar,
  FaNetworkWired,
  FaArrowLeft,
  FaPhoneAlt,
  FaShieldAlt,
  FaCheckCircle,
} from "react-icons/fa";

export default function ProductsShowcase() {
  const panasonicCategories = [
    {
      id: "low-capacity",
      title: "سانترال کم‌ظرفیت پاناسونیک",
      subtitle: "محبوب‌ترین انتخاب دفاتر، مطب‌ها و فروشگاه‌ها",
      icon: <FaChartBar className="text-xl" />,
      badge: "پرفروش‌ترین در ایران",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      description: "ظرفیت پایه ۳ به ۸، قابل ارتقا تا ۸ خط شهری و ۲۴ داخلی. راه‌اندازی سریع و دوام فوق‌العاده قطعات.",
      products: [
        {
          name: "Panasonic KX-TES824",
          capacity: "۳/۸ تا ۸/۲۴ داخلی",
          desc: "دارای تلفن گویا (DISA) تک‌کانال پیش‌فرض",
          image: "/imageLanding/tda600.png",
          link: "/products/panasonic/kx-tes824",
        },
        {
          name: "Panasonic KX-TEM824",
          capacity: "۶/۱۶ تا ۸/۲۴ داخلی",
          desc: "شروع با ۶ خط شهری اولیه و کارت کالر آیدی",
          image: "/imageLanding/tda600.png",
          link: "/products/panasonic/kx-tem824",
        },
        {
          name: "Panasonic KX-TA616",
          capacity: "۶ خط شهری / ۱۶ داخلی",
          desc: "سیستم آنالوگ کلاسیک و بسیار مقاوم",
          image: "/imageLanding/tda600.png",
          link: "/products/panasonic/kx-ta616",
        },
      ],
      catalogLink: "/products/panasonic/low-capacity",
      guideLink: "/blog/central-panasonic-kx-tes824-rahnamaye-kamel",
    },
    {
      id: "high-capacity",
      title: "سانترال‌های پرظرفیت دیجیتال",
      subtitle: "ستون فقرات ارتباطات بیمارستان‌ها، کارخانه‌ها و برج‌ها",
      icon: <FaChartLine className="text-xl" />,
      badge: "پایدار و ماژولار",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      description: "کابین‌های ماژولار سری TDA با پایداری افسانه‌ای، پشتیبانی از ترانک E1/PRI و صدها داخلی دیجیتال.",
      products: [
        {
          name: "Panasonic KX-TDA100D",
          capacity: "تا ۱۱۲ خط شهری / ۱۲۸ داخلی",
          desc: "دارای پاور داخلی و اسلات کارت‌های دیجیتال",
          image: "/imageLanding/tde100.png",
          link: "/products/panasonic/kx-tda100d",
        },
        {
          name: "Panasonic KX-TDA200",
          capacity: "تا ۱۲۸ خط شهری / ۲۵۶ داخلی",
          desc: "۸ اسلات آزاد برای انواع کارت‌های افزایشی",
          image: "/imageLanding/tda200.png",
          link: "/products/panasonic/kx-tda200",
        },
        {
          name: "Panasonic KX-TDA600",
          capacity: "تا ۶۴۰ خط شهری / ۱۰۰۰ داخلی",
          desc: "غول مخابراتی ماژولار برای سازمان‌های بزرگ",
          image: "/imageLanding/tda600.png",
          link: "/products/panasonic/kx-tda600",
        },
      ],
      catalogLink: "/products/panasonic",
      guideLink: "/blog/rahnamaye-kharid-central-panasonic",
    },
    {
      id: "ip-pbx",
      title: "سانترال‌های تحت شبکه (IP-PBX)",
      subtitle: "فناوری روز مخابرات، سیپ ترانک و دورکاری هوشمند",
      icon: <FaNetworkWired className="text-xl" />,
      badge: "فناوری نوین VoIP",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
      description: "پشتیبانی بومی از خطوط اینترنتی SIP Trunk، تلفن‌های IP، اپلیکیشن موبایل برای پرسنل دورکار و اتصال شعب.",
      products: [
        {
          name: "Panasonic KX-NS500",
          capacity: "IP / Hybrid نسل جدید",
          desc: "پشتیبانی از سیپ ترانک، فکس سرور و صندوق صوتی",
          image: "/imageLanding/ns500.png",
          link: "/products/panasonic/ns500",
        },
        {
          name: "Panasonic KX-NS300",
          capacity: "Smart Hybrid PBX",
          desc: "مدل کامپکت هوشمند برای دفاتر رو به رشد",
          image: "/imageLanding/ns300.png",
          link: "/products/panasonic/ns300",
        },
        {
          name: "Panasonic KX-TDE100 / 200",
          capacity: "Pure IP PBX",
          desc: "ترکیب خطوط سنتی با تلفن‌های تحت شبکه",
          image: "/imageLanding/tde100.png",
          link: "/products/panasonic/kx-tde100",
        },
      ],
      catalogLink: "/products/panasonic/ip-pbx",
      guideLink: "/blog/voip-chist-rahnamaye-jame",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#f8faff] via-white to-[#f4f7fc] font-xmedium text-slate-800">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        {/* عنوان بخش */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#253359] text-xs font-xbold mb-3 border border-blue-100">
              <span>🇯🇵 مرجع تخصصی پاناسونیک در ایران</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-xbold text-[#141d33] tracking-tight">
              انواع مراکز تلفن و سانترال‌های پاناسونیک با گارانتی معتبر
            </h2>
            <p className="text-sm md:text-base text-slate-500 font-xregular mt-2 max-w-2xl leading-7">
              فروش، ارتقا، برنامه‌ریزی تلفن گویا و تعمیرات تخصصی کلیه بردهای سانترال پاناسونیک با تامین قطعات اورجینال ژاپن و مالزی.
            </p>
          </div>

          <a
            href="tel:09125354811"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#253359] text-white font-xbold text-xs md:text-sm hover:bg-[#1a2542] transition-all shadow-md self-start md:self-end whitespace-nowrap"
          >
            <FaPhoneAlt className="text-emerald-400" />
            <span>استعلام قیمت فوری: ۰۹۱۲۵۳۵۴۸۱۱</span>
          </a>
        </div>

        {/* سه ستون اصلی دسته‌ها */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {panasonicCategories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1.5"
            >
              {/* هدر کارت */}
              <div className="p-6 md:p-7 border-b border-slate-100 bg-gradient-to-br from-slate-50/70 to-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#253359] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    {cat.icon}
                  </div>
                  <span className={`text-[11px] font-xbold px-3 py-1 rounded-full border ${cat.badgeColor}`}>
                    {cat.badge}
                  </span>
                </div>

                <h3 className="text-lg md:text-xl font-xbold text-[#1e2a4a] mb-1 group-hover:text-blue-700 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-xs text-slate-500 font-xmedium mb-3">
                  {cat.subtitle}
                </p>
                <p className="text-xs text-slate-600 font-xregular leading-6">
                  {cat.description}
                </p>
              </div>

              {/* لیست مدل‌های برگزیده */}
              <div className="p-5 md:p-6 space-y-3">
                <span className="text-[11px] font-xbold text-slate-400 block mb-1">
                  مدل‌های شاخص و موجود:
                </span>
                {cat.products.map((prod, pIdx) => (
                  <Link
                    key={pIdx}
                    href={prod.link}
                    className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 hover:bg-blue-50/60 border border-slate-100 hover:border-blue-200 transition-all group/item"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white p-1 border border-slate-200/60 flex items-center justify-center flex-shrink-0">
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0 text-right">
                      <div className="text-xs font-xbold text-slate-800 group-hover/item:text-[#253359] truncate">
                        {prod.name}
                      </div>
                      <div className="text-[11px] text-blue-700 font-xmedium truncate">
                        {prod.capacity}
                      </div>
                      <div className="text-[10px] text-slate-500 font-xregular truncate">
                        {prod.desc}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* فوتر کارت و لینک‌های خرید و راهنما */}
              <div className="p-5 md:p-6 pt-0 space-y-2">
                <Link
                  href={cat.catalogLink}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-[#253359] text-white text-xs md:text-sm font-xbold hover:bg-[#1a2542] transition-colors shadow-sm"
                >
                  <span>مشاهده همه مدل‌های {cat.title}</span>
                  <FaArrowLeft className="w-3 h-3" />
                </Link>

                <Link
                  href={cat.guideLink}
                  className="w-full block text-center py-2 text-xs text-slate-500 hover:text-blue-700 font-xmedium transition-colors"
                >
                  📖 راهنمای تخصصی و مقایسه این دسته
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
