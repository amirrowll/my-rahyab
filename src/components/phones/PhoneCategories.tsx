"use client";

import React from "react";
import Link from "next/link";
import {
  FiPhone,
  FiWifi,
  FiRadio,
  FiArrowLeft,
  FiCheckCircle,
} from "react-icons/fi";
import { MdOutlineSettingsInputComponent } from "react-icons/md";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { BiNetworkChart } from "react-icons/bi";
import { FaPhoneAlt, FaWhatsapp, FaHeadset, FaLayerGroup } from "react-icons/fa";

const phoneCategories = [
  {
    id: 1,
    title: "تلفن‌های سانترال دیجیتال",
    icon: <FiPhone className="w-6 h-6 text-blue-600" />,
    description: "سری پرفروش DT543 و T7630 پاناسونیک با صدای شفاف، کلیدهای DSS و پورت DXDP",
    count: "۱۵+ مدل",
    href: "/products/phones/digital",
    tag: "مناسب مدیران و کارشناسان",
    gradient: "from-blue-500/10 via-indigo-500/5 to-transparent",
    iconBg: "bg-blue-50 text-blue-600",
  },
  {
    id: 2,
    title: "تلفن‌های تحت شبکه IP",
    icon: <FiWifi className="w-6 h-6 text-emerald-600" />,
    description: "تلفن‌های پیشرفته مجهز به PoE، کیفیت صدای Full HD و سازگار با انواع سرور ویپ",
    count: "۳۰+ مدل",
    href: "/products/phones/ip",
    tag: "گرنداستریم، یالینک، اسنوم",
    gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
    iconBg: "bg-emerald-50 text-emerald-600",
  },
  {
    id: 3,
    title: "تلفن‌های بیسیم اداری",
    icon: <FiRadio className="w-6 h-6 text-purple-600" />,
    description: "آزادی حرکت پرسنل با برد بالا، آنتن‌دهی قوی و باتری پرظرفیت صنعتی",
    count: "۱۲+ مدل",
    href: "/products/phones/wireless",
    tag: "پاناسونیک و گیگاست DECT",
    gradient: "from-purple-500/10 via-pink-500/5 to-transparent",
    iconBg: "bg-purple-50 text-purple-600",
  },
  {
    id: 4,
    title: "تلفن‌های سانترال هایبرید",
    icon: <MdOutlineSettingsInputComponent className="w-6 h-6 text-amber-600" />,
    description: "تلفن اپراتوری پرچمدار KX-T7730 با نمایشگر، کلیدهای CO و تنظیمات سریع",
    count: "۶+ مدل",
    href: "/products/phones/hybrid",
    tag: "مخصوص اپراتور و سانترال TES824",
    gradient: "from-amber-500/10 via-orange-500/5 to-transparent",
    iconBg: "bg-amber-50 text-amber-600",
  },
  {
    id: 5,
    title: "تلفن‌های تحت پروتکل SIP",
    icon: <BiNetworkChart className="w-6 h-6 text-cyan-600" />,
    description: "پشتیبانی همزمان از چند اکانت SIP، تماس تصویری و یکپارچگی با نرم‌افزارهای CRM",
    count: "۲۰+ مدل",
    href: "/products/phones/sip",
    tag: "سازمانی و تجاری مدرن",
    gradient: "from-cyan-500/10 via-blue-500/5 to-transparent",
    iconBg: "bg-cyan-50 text-cyan-600",
  },
  {
    id: 6,
    title: "تلفن‌های آنالوگ رومیزی",
    icon: <TbDeviceLandlinePhone className="w-6 h-6 text-slate-600" />,
    description: "گوشی‌های رومیزی و دیواری ساده، مقاوم و با دوام بالا برای کاربری پرسنل و اتاق‌ها",
    count: "۱۴+ مدل",
    href: "/products/phones/analog",
    tag: "اقتصادی و بدون نیاز به برق",
    gradient: "from-slate-500/10 via-gray-500/5 to-transparent",
    iconBg: "bg-slate-100 text-slate-700",
  },
  {
    id: 7,
    title: "تلفن‌های کنفرانس صوتی",
    icon: <BiNetworkChart className="w-6 h-6 text-rose-600" />,
    description: "میکروفن‌های ۳۶۰ درجه با تکنولوژی حذف نویز محیطی ویژه اتاق جلسات و سالن کنفرانس",
    count: "۵+ مدل",
    href: "/products/phones/conference",
    tag: "اتاق جلسات و مدیریت",
    gradient: "from-rose-500/10 via-red-500/5 to-transparent",
    iconBg: "bg-rose-50 text-rose-600",
  },
];

export default function PhoneCategories() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#f0f4fa] via-white to-[#f8faff] font-xmedium text-slate-800">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        {/* هدر دسته‌بندی تلفن‌ها */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#253359] text-xs font-xbold mb-3 border border-blue-100">
            <FaLayerGroup className="text-blue-600" />
            <span>دسته‌بندی جامع تجهیزات ارتباطی</span>
          </div>

          <h2 className="text-2xl md:text-4xl font-xbold text-[#141d33] tracking-tight">
            انواع گوشی‌های تلفن سازمانی و اداری
          </h2>

          <p className="text-xs md:text-sm text-slate-600 font-xregular mt-3 leading-7">
            تامین تخصصی انواع تلفن‌های دیجیتال، آنالوگ، هایبرید و تحت شبکه (IP Phone) با ضمانت اصالت کالا و سازگاری کامل با مراکز تلفن سانترال و سرورهای ویپ.
          </p>
        </div>

        {/* شبکه نمایش دسته‌بندی‌ها با طراحی کارت‌های مدرن */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {phoneCategories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group relative bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1.5"
            >
              {/* گرادیان پس‌زمینه کارت در زمان هاور */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              <div className="relative z-10">
                {/* هدر کارت: آیکون و تعداد مدل‌ها */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-2xl ${category.iconBg} flex items-center justify-center text-xl shadow-sm group-hover:scale-110 transition-transform duration-300`}
                  >
                    {category.icon}
                  </div>

                  <span className="text-[11px] font-xbold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 group-hover:bg-[#253359] group-hover:text-white transition-colors">
                    {category.count}
                  </span>
                </div>

                {/* عنوان دسته */}
                <h3 className="text-base font-xbold text-[#141d33] group-hover:text-blue-700 transition-colors mb-2 leading-7">
                  {category.title}
                </h3>

                {/* برچسب برند یا کاربرد */}
                <div className="text-[11px] font-xbold text-blue-600 mb-2">
                  {category.tag}
                </div>

                {/* توضیحات */}
                <p className="text-xs text-slate-500 font-xregular leading-6 mb-4">
                  {category.description}
                </p>
              </div>

              {/* فوتر کارت: فلش ورود */}
              <div className="relative z-10 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-xbold text-slate-600 group-hover:text-[#253359]">
                <span>مشاهده مدل‌ها و قیمت</span>
                <div className="w-7 h-7 rounded-xl bg-slate-50 group-hover:bg-blue-50 text-slate-400 group-hover:text-blue-600 flex items-center justify-center transition-all group-hover:-translate-x-1">
                  <FiArrowLeft className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}

          {/* کارت دعوت به مشاوره در انتهای گرید برای پر کردن گرید ۴ ستونه */}
          <div className="bg-gradient-to-br from-[#1e2a4a] via-[#253359] to-[#141d33] text-white rounded-3xl p-6 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-emerald-400 text-2xl mb-4">
                <FaHeadset />
              </div>
              <h3 className="text-base md:text-lg font-xbold mb-2">
                نیاز به راهنمایی در انتخاب تلفن دارید؟
              </h3>
              <p className="text-xs text-white/80 font-xregular leading-6 mb-4">
                کارشناسان شرکت رهیاب متناسب با مدل سانترال و بودجه سازمان، بهترین تلفن‌ها را به شما پیشنهاد می‌دهند.
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-white/10">
              <a
                href="tel:09125354811"
                className="w-full py-2.5 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-xbold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
              >
                <FaPhoneAlt className="text-[10px]" />
                <span>تماس فوری: ۰۹۱۲۵۳۵۴۸۱۱</span>
              </a>

              <a
                href="tel:02188440345"
                className="w-full py-2 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-[11px] font-xmedium flex items-center justify-center transition-colors"
              >
                دفتر مرکزی: ۰۲۱-۸۸۴۴۰۳۴۵
              </a>
            </div>
          </div>
        </div>

        {/* بنر اقدام نهایی */}
        <div className="mt-12 p-6 md:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-right">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl flex-shrink-0">
              <FiCheckCircle />
            </div>
            <div>
              <h4 className="text-sm md:text-base font-xbold text-[#141d33]">
                تضمین ۱۰۰٪ اصالت کالا و سلامت فیزیکی
              </h4>
              <p className="text-xs text-slate-500 font-xregular mt-0.5">
                تمامی گوشی‌های تلفن پاناسونیک، گرنداستریم و یالینک با ضمانت سلامت و مهلت تست معتبر ارسال می‌شوند.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <a
              href="tel:09125354811"
              className="flex-1 sm:flex-none text-center px-5 py-3 rounded-xl bg-gradient-to-r from-[#253359] to-[#1a2542] text-white text-xs md:text-sm font-xbold shadow-md hover:scale-105 transition-all whitespace-nowrap"
            >
              استعلام تلفنی: ۰۹۱۲۵۳۵۴۸۱۱
            </a>
            <a
              href="https://wa.me/989125354811"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white transition-all shadow-sm"
              title="مشاوره در واتساپ"
            >
              <FaWhatsapp className="text-lg" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
