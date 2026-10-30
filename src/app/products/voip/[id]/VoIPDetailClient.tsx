"use client";

import { VoIPPhone, voipPhones } from "@/data/voipPhones";
import Link from "next/link";
import { useState } from "react";
import {
  FaArrowRight,
  FaPhoneAlt,
  FaHeadset,
  FaCheckCircle,
  FaCog,
  FaChartBar,
  FaWhatsapp,
  FaShieldAlt,
  FaTruck,
  FaTools,
  FaCheck,
} from "react-icons/fa";

interface Props {
  phone: VoIPPhone;
}

export default function VoIPDetailClient({ phone }: Props) {
  const [activeTab, setActiveTab] = useState("overview");

  const relatedPhones = phone
    ? voipPhones.filter((p) => p.id !== phone.id && p.brand === phone.brand).slice(0, 3)
    : [];

  const sections = [
    { id: "overview", label: "معرفی و مشخصات کلی", icon: <FaChartBar /> },
    { id: "specs", label: "جدول مشخصات فنی", icon: <FaCog /> },
    { id: "features", label: "قابلیت‌ها و امکانات", icon: <FaCheckCircle /> },
  ];

  const trustBadges = [
    {
      title: "گارانتی طلایی تعویض",
      desc: "یک سال گارانتی رسمی شرکت رهیاب",
      icon: <FaShieldAlt className="text-emerald-500 text-2xl" />,
    },
    {
      title: "۱۰ سال خدمات پس از فروش",
      desc: "تامین دائمی قطعات و آپدیت فریمور",
      icon: <FaTools className="text-blue-500 text-2xl" />,
    },
    {
      title: "تست و کانفیگ اختصاصی",
      desc: "آماده‌سازی با سناریوی پروژه شما توسط مهندس محمدی",
      icon: <FaHeadset className="text-purple-500 text-2xl" />,
    },
    {
      title: "ارسال سریع به تمام نقاط",
      desc: "تحویل فوری تهران ۲ ساعته / شهرستان ۲۴ ساعته",
      icon: <FaTruck className="text-amber-500 text-2xl" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9ff] via-white to-[#f0f2ff] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs md:text-sm text-slate-500 font-xmedium mb-6">
          <Link href="/" className="hover:text-[#1e2a4a] transition-colors">
            صفحه اصلی
          </Link>
          <span>/</span>
          <Link href="/products/voip" className="hover:text-[#1e2a4a] transition-colors">
            تجهیزات و تلفن‌های VoIP
          </Link>
          <span>/</span>
          <span className="text-[#1e2a4a] font-xbold">{phone.name}</span>
        </div>

        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#1a233b] via-[#253359] to-[#0f172a] text-white rounded-3xl p-8 md:p-12 shadow-2xl border border-white/10 mb-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            {/* Image Box */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-md bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/15 shadow-2xl flex items-center justify-center group">
                <div className="absolute top-4 right-4 bg-emerald-500/90 text-white text-xs font-xbold px-3 py-1 rounded-full shadow">
                  موجود در انبار رهیاب
                </div>
                <div className="absolute top-4 left-4 bg-white/20 text-white text-xs font-xbold px-3 py-1 rounded-full backdrop-blur-sm">
                  {phone.brand}
                </div>
                <img
                  src={phone.image}
                  alt={`${phone.name} - ${phone.category} ${phone.brand}`}
                  className="w-full h-64 md:h-72 object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Meta & Actions */}
            <div>
              <div className="inline-flex items-center gap-2 mb-3 px-3.5 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-xbold text-blue-200 border border-white/15">
                {phone.brand} • {phone.category}
              </div>

              <h1 className="text-2xl md:text-4xl font-xbold mb-4 leading-tight">
                {phone.name}
              </h1>

              <div className="flex items-center gap-2 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-sm font-xbold text-emerald-300">
                  قیمت: {phone.price || "استعلام روز و تخفیف تعداد"}
                </span>
              </div>

              <p className="text-sm md:text-base text-slate-200 font-xmedium leading-7 mb-6">
                {phone.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2 mb-8">
                {phone.features.slice(0, 4).map((feature: string, idx: number) => (
                  <div
                    key={idx}
                    className="bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/15 text-xs font-xbold"
                  >
                    ✓ {feature}
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:09125354811"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-xbold text-sm shadow-xl hover:scale-105 transition-all"
                >
                  <FaPhoneAlt /> استعلام قیمت و خرید: ۰۹۱۲۵۳۵۴۸۱۱
                </a>
                <a
                  href={`https://wa.me/989125354811?text=${encodeURIComponent(`سلام مهندس محمدی، درباره خرید و استعلام قیمت تلفن ویپ ${phone.name} برند ${phone.brand} پیام می‌دهم.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white rounded-xl font-xbold text-sm border border-white/30 backdrop-blur-md hover:scale-105 transition-all"
                >
                  <FaWhatsapp className="text-emerald-400 text-lg" /> استعلام فوری در واتساپ
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {trustBadges.map((badge, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center flex-shrink-0">
                {badge.icon}
              </div>
              <div>
                <div className="text-sm font-xbold text-[#1e2a4a] mb-0.5">{badge.title}</div>
                <div className="text-xs text-slate-500 font-xmedium">{badge.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-2 mb-8 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveTab(section.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-xbold text-xs md:text-sm transition-all duration-300 ${
                  activeTab === section.id
                    ? "bg-[#1e2a4a] text-white shadow"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                {section.icon}
                {section.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 md:p-10 mb-12">
          {activeTab === "overview" && (
            <div className="space-y-8">
              <div>
                <h2 className="text-xl md:text-2xl font-xbold text-[#1e2a4a] mb-3">
                  معرفی و بررسی تخصصی {phone.name}
                </h2>
                <p className="text-slate-700 leading-8 font-xmedium text-sm md:text-base">
                  {phone.description}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <FaChartBar className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="font-xbold text-base text-[#1e2a4a] mb-1.5">پروتکل و سازگاری</h3>
                  <p className="text-xs md:text-sm text-slate-600 font-xmedium">
                    سازگار با کلیه مراکز تلفن تحت شبکه، ایزابل، استریسک، 3CX و سرورهای IP پاناسونیک
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <FaShieldAlt className="w-8 h-8 text-emerald-600 mb-3" />
                  <h3 className="font-xbold text-base text-[#1e2a4a] mb-1.5">اصالت کالا و گارانتی</h3>
                  <p className="text-xs md:text-sm text-slate-600 font-xmedium">
                    ضمانت اصالت ۱۰۰٪ فیزیکی به همراه ۱ سال گارانتی تعویض کتبی شرکت رهیاب
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <FaHeadset className="w-8 h-8 text-purple-600 mb-3" />
                  <h3 className="font-xbold text-base text-[#1e2a4a] mb-1.5">مشاوره و راه‌اندازی</h3>
                  <p className="text-xs md:text-sm text-slate-600 font-xmedium">
                    پشتیبانی فنی مستقیم توسط مهندس محمدی جهت تنظیمات و کانفیگ داخلی‌ها
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "specs" && (
            <div>
              <h2 className="text-xl md:text-2xl font-xbold text-[#1e2a4a] mb-6">
                مشخصات فنی و استانداردهای صوتی
              </h2>
              <div className="grid md:grid-cols-2 gap-3.5">
                {phone.specs &&
                  Object.entries(phone.specs).map(([key, value]) => {
                    const displayVal =
                      typeof value === "object" && value !== null
                        ? JSON.stringify(value).replace(/[{}\"]/g, "")
                        : String(value);
                    return (
                      <div
                        key={key}
                        className="flex justify-between items-center p-4 bg-slate-50 rounded-xl border border-slate-100 hover:bg-blue-50/50 transition-colors"
                      >
                        <span className="font-xbold text-xs md:text-sm text-slate-700">{key}:</span>
                        <span className="font-xmedium text-[#1e2a4a] text-xs md:text-sm">{displayVal}</span>
                      </div>
                    );
                  })}
              </div>
            </div>
          )}

          {activeTab === "features" && (
            <div>
              <h2 className="text-xl md:text-2xl font-xbold text-[#1e2a4a] mb-6">
                امکانات و قابلیت‌های برجسته
              </h2>
              <div className="grid md:grid-cols-2 gap-3.5">
                {phone.features.map((feature: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100"
                  >
                    <FaCheck className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                    <span className="text-slate-700 font-xmedium text-xs md:text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Related Products */}
        {relatedPhones.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl md:text-2xl font-xbold text-[#1e2a4a] mb-6">
              سایر مدل‌های هم‌رده برند {phone.brand}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPhones.map((related) => (
                <div
                  key={related.id}
                  className="bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="h-44 bg-slate-50 rounded-2xl mb-4 flex items-center justify-center p-4">
                      <img
                        src={related.image}
                        alt={`${related.name} - ${related.category}`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="text-xs text-blue-600 font-xbold mb-1">{related.brand}</div>
                    <h3 className="font-xbold text-[#1e2a4a] text-base mb-2">
                      {related.name}
                    </h3>
                    <p className="text-slate-500 text-xs font-xmedium line-clamp-2 mb-4">
                      {related.description}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                    <a
                      href="tel:09125354811"
                      className="bg-[#1e2a4a] text-white py-2 rounded-lg text-xs font-xbold text-center hover:bg-blue-900 transition-colors"
                    >
                      استعلام خرید
                    </a>
                    <Link
                      href={`/products/voip/${related.id}`}
                      className="bg-slate-100 text-slate-700 py-2 rounded-lg text-xs font-xbold text-center hover:bg-slate-200 transition-colors"
                    >
                      مشاهده جزئیات
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#1a233b] via-[#253359] to-[#0f172a] rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-xbold mb-4">نیاز به مشاوره تخصصی در انتخاب تلفن VoIP دارید؟</h3>
            <p className="text-sm md:text-base font-xmedium mb-8 text-slate-300 leading-8">
              مهندس محمدی کارشناس ارشد ارتباطات شرکت رهیاب آماده ارائه بهترین پیشنهاد فنی و مالی متناسب با نیاز سازمان شماست.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:09125354811"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-xbold text-sm md:text-base shadow-xl hover:scale-105 transition-all"
              >
                <FaHeadset /> تماس مستقیم: ۰۹۱۲۵۳۵۴۸۱۱
              </a>
              <a
                href={`https://wa.me/989125354811?text=${encodeURIComponent(`سلام مهندس محمدی، درباره خرید تلفن ویپ ${phone.name} راهنمایی می‌خواستم.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white rounded-xl font-xbold text-sm md:text-base border border-white/30 backdrop-blur-md hover:scale-105 transition-all"
              >
                <FaWhatsapp className="text-emerald-400 text-lg" /> استعلام فوری در واتساپ
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
