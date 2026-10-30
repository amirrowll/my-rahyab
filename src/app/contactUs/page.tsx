"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaWhatsapp,
  FaTelegram,
  FaClock,
  FaCheckCircle,
  FaHeadset,
  FaPaperPlane,
  FaShieldAlt,
  FaAward,
} from "react-icons/fa";

// لود داینامیک نقشه برای سازگاری کامل با SSR
const ContactMap = dynamic(
  () => import("@/components/locationContact/ContactMap"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-80 md:h-[420px] rounded-3xl bg-slate-100 flex items-center justify-center text-slate-400">
        در حال بارگذاری نقشه دفتر شرکت رهیاب...
      </div>
    ),
  }
);

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    service: "خرید سانترال پاناسونیک",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      alert("لطفاً نام و شماره تماس خود را وارد نمایید.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8faff] via-white to-[#f0f4f9] font-xmedium text-slate-800 pb-20">
      {/* هدر صفحه تماس - بدون عکس کشیده، مدرن و باکلاس */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#141d33] via-[#1a2542] to-[#253359] text-white pt-10 pb-16 md:pt-14 md:pb-24 px-4 md:px-8">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1440px] mx-auto relative z-10">
          {/* بردکرامب */}
          <div className="flex items-center gap-2 text-xs text-white/60 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              صفحه اصلی
            </Link>
            <span>/</span>
            <span className="text-emerald-400">تماس با شرکت رهیاب</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-xs text-emerald-300 font-xbold mb-4">
              <FaHeadset />
              <span>پاسخگویی سریع و مشاوره رایگان تلفنی</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-xbold text-white tracking-tight leading-tight mb-4">
              تماس با شرکت ارتباطات رهیاب محمدی
            </h1>

            <p className="text-sm md:text-base text-white/80 font-xregular leading-8">
              مرجع تخصصی مشاوره، استعلام قیمت فوری، فروش، نصب و پشتیبانی انواع <strong>سانترال پاناسونیک</strong>، تجهیزات نوین <strong>ویپ (VoIP)</strong> و مراکز تلفن بومی <strong>رهیاب</strong> با ۳۰ سال سابقه درخشان در صنعت مخابرات کشور.
            </p>
          </div>
        </div>
      </section>

      {/* بخش کارت‌های تماس مستقیم */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 -mt-8 md:-mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* کارت ۱: تماس مستقیم با مهندس محمدی (VIP) */}
          <div className="bg-gradient-to-br from-[#1e2a4a] via-[#253359] to-[#172138] text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-blue-900/40 flex flex-col justify-between transform md:-translate-y-2 hover:scale-[1.02] transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-transform">
                  <FaPhoneAlt />
                </div>
                <span className="text-[11px] font-xbold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  پاسخگویی مستقیم
                </span>
              </div>

              <h2 className="text-lg md:text-xl font-xbold text-white mb-1">
                مشاوره و فروش تخصصی
              </h2>
              <p className="text-xs text-white/70 mb-4 font-xregular">
                پاسخگویی مستقیم مهندس محمدی جهت استعلام قیمت و تعیین سیستم مناسب:
              </p>

              <a
                href="tel:09125354811"
                className="text-2xl md:text-3xl font-xbold text-emerald-400 hover:text-emerald-300 transition-colors dir-ltr block tracking-wider mb-2"
              >
                ۰۹۱۲-۵۳۵۴۸۱۱
              </a>

              <a
                href="tel:02188440345"
                className="text-xs text-white/80 hover:text-white transition-colors dir-ltr block mb-5"
              >
                تلفن دفتر مرکزی: ۰۲۱-۸۸۴۴۰۳۴۵
              </a>
            </div>

            <div>
              <div className="text-[11px] text-white/60 mb-2">ارتباط مستقیم در پیام‌رسان‌ها:</div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <a
                  href="https://wa.me/989125354811"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-xbold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                >
                  <FaWhatsapp />
                  <span>واتساپ</span>
                </a>
                <a
                  href="https://eitaa.com/09125354811"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-xbold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                >
                  <span>پیام‌رسان ایتا</span>
                </a>
                <a
                  href="https://ble.ir/09125354811"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-xbold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                >
                  <span>پیام‌رسان بله</span>
                </a>
                <a
                  href="https://t.me/javadmhmd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-xbold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                >
                  <FaTelegram />
                  <span>تلگرام</span>
                </a>
              </div>
            </div>
          </div>

          {/* کارت ۲: آدرس و ساعت کاری شرکت رهیاب */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-slate-100 flex flex-col justify-between hover:shadow-2xl transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl mb-4">
                <FaMapMarkerAlt />
              </div>
              <h2 className="text-lg md:text-xl font-xbold text-[#253359] mb-2">
                دفتر مرکزی شرکت رهیاب
              </h2>
              <p className="text-xs md:text-sm text-slate-600 font-xregular leading-7 mb-4">
                تهران، خیابان سبلان شمالی، خیابان شهید شجاعی، پلاک ۳۸
              </p>
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-slate-500 space-y-1">
                <div>کد پستی: ۱۶۳۴۹۵۳۱۱۴</div>
                <div>دسترسی آسان از طریق بزرگراه شهید صیاد شیرازی و مترو سبلان</div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 mt-6">
              <div className="flex items-center gap-2 text-xs font-xbold text-[#253359] mb-2">
                <FaClock className="text-blue-600" />
                <span>ساعات کاری دفتر:</span>
              </div>
              <p className="text-xs text-slate-600 font-xregular leading-6">
                شنبه تا چهارشنبه: ۸:۳۰ الی ۱۸:۰۰
                <br />
                پنج‌شنبه‌ها: ۸:۳۰ الی ۱۳:۳۰
                <br />
                <span className="text-emerald-600 font-xbold">
                  تماس مستقیم با کارشناس در تمام ایام فعال است.
                </span>
              </p>
            </div>
          </div>

          {/* کارت ۳: استعلام رسمی، ایمیل و خدمات سازمانی */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-slate-100 flex flex-col justify-between hover:shadow-2xl transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center text-xl mb-4">
                <FaEnvelope />
              </div>
              <h2 className="text-lg md:text-xl font-xbold text-[#253359] mb-2">
                مکاتبات و پیش‌فاکتور رسمی
              </h2>
              <p className="text-xs md:text-sm text-slate-600 font-xregular leading-7 mb-4">
                جهت ارسال درخواست مناقصه، استعلام قیمت رسمی و صدور پیش‌فاکتور سازمانی با شماره اقتصادی:
              </p>

              <div className="p-3.5 rounded-2xl bg-purple-50/60 border border-purple-100 mb-4">
                <span className="text-[11px] text-purple-700 block mb-1">پست الکترونیکی شرکت:</span>
                <a
                  href="mailto:rahyabmhmd@gmail.com"
                  className="text-xs font-xbold text-purple-900 hover:underline dir-ltr block"
                >
                  rahyabmhmd@gmail.com
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 space-y-2 text-xs text-slate-600 font-xregular">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-emerald-500 flex-shrink-0" />
                <span>ارائه فاکتور رسمی با گواهی ارزش افزوده</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-emerald-500 flex-shrink-0" />
                <span>اعزام کارشناس جهت بازدید و کارشناسی در محل</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-emerald-500 flex-shrink-0" />
                <span>۱ سال گارانتی تعویض + ۱۰ سال خدمات قطعات</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* فرم مشاوره سریع + نقشه تعاملی شرکت */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 mt-14">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* ستون فرم درخواست مشاوره (5 ستون) */}
            <div className="lg:col-span-5 p-6 md:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-l border-slate-100">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-xbold mb-3">
                  <FaPaperPlane />
                  <span>درخواست تماس فوری</span>
                </div>

                <h3 className="text-xl md:text-2xl font-xbold text-[#253359] mb-2">
                  نیاز به مشاوره سانترال یا ویپ دارید؟
                </h3>
                <p className="text-xs md:text-sm text-slate-600 font-xregular leading-6 mb-6">
                  فرم زیر را تکمیل کنید؛ مهندس محمدی ظرف کمتر از ۱۵ دقیقه با شما تماس خواهند گرفت.
                </p>

                {submitted ? (
                  <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-in fade-in">
                    <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto text-xl">
                      <FaCheckCircle />
                    </div>
                    <h4 className="text-base font-xbold text-emerald-900">
                      درخواست شما با موفقیت ثبت شد
                    </h4>
                    <p className="text-xs text-emerald-700 leading-6 font-xregular">
                      کارشناسان شرکت رهیاب به زودی با شماره تلفن ثبت‌شده تماس خواهند گرفت.
                    </p>
                    <a
                      href="tel:09125354811"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-xbold mt-2"
                    >
                      <FaPhoneAlt />
                      <span>تماس مستقیم هم‌اکنون: ۰۹۱۲۵۳۵۴۸۱۱</span>
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-xs font-xbold text-slate-700 block mb-1.5">
                        نام و نام خانوادگی / نام سازمان:
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="مثال: مهندس حسینی - شرکت سامان"
                        className="w-full px-4 py-2.5 text-xs md:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-xbold text-slate-700 block mb-1.5">
                        شماره تماس همراه:
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="مثال: ۰۹۱۲XXXXXXX"
                        className="w-full px-4 py-2.5 text-xs md:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 transition-colors dir-ltr text-right"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-xbold text-slate-700 block mb-1.5">
                        موضوع مشاوره یا خرید:
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full px-4 py-2.5 text-xs md:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 transition-colors bg-white"
                      >
                        <option value="خرید سانترال کم‌ظرفیت پاناسونیک (KX-TES824)">
                          خرید سانترال کم‌ظرفیت پاناسونیک (KX-TES824)
                        </option>
                        <option value="خرید سانترال پرظرفیت پاناسونیک (TDA / TDE / NS500)">
                          خرید سانترال پرظرفیت پاناسونیک (TDA / TDE / NS500)
                        </option>
                        <option value="راه‌اندازی سیستم ویپ (VoIP) و تلفن‌های تحت شبکه">
                          راه‌اندازی سیستم ویپ (VoIP) و تلفن‌های تحت شبکه
                        </option>
                        <option value="خرید یا ارتقای مرکز تلفن رهیاب (RX-112 / RX-40)">
                          خرید یا ارتقای مرکز تلفن رهیاب (RX-112 / RX-40)
                        </option>
                        <option value="تعمیر، برنامه‌ریزی یا اعزام کارشناس سانترال">
                          تعمیر، برنامه‌ریزی یا اعزام کارشناس سانترال
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-xbold text-slate-700 block mb-1.5">
                        توضیحات (تعداد خطوط شهری و داخلی):
                      </label>
                      <textarea
                        rows={3}
                        value={formData.description}
                        onChange={(e) =>
                          setFormData({ ...formData, description: e.target.value })
                        }
                        placeholder="تعداد نفرات یا خطوط مورد نیاز را شرح دهید..."
                        className="w-full px-4 py-2.5 text-xs md:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#253359] via-[#1a2542] to-[#253359] hover:from-blue-900 hover:to-indigo-900 text-white font-xbold text-xs md:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      <FaPaperPlane />
                      <span>ثبت درخواست مشاوره رایگان</span>
                    </button>
                  </form>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>تضمین عدم انتشار اطلاعات تماس</span>
                <span className="text-emerald-600 font-xbold">پاسخگویی حداکثر ۱۵ دقیقه</span>
              </div>
            </div>

            {/* ستون نقشه شرکت (7 ستون) */}
            <div className="lg:col-span-7 p-6 md:p-10 flex flex-col justify-between bg-slate-50/50">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-lg md:text-xl font-xbold text-[#253359]">
                      موقعیت مکانی دفتر مرکزی شرکت رهیاب
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 font-xregular">
                      تهران، سبلان شمالی، خیابان شهید شجاعی، پلاک ۳۸
                    </p>
                  </div>

                  {/* دکمه‌های مسیریابی سریع */}
                  <div className="flex items-center gap-2">
                    <a
                      href="https://nshn.ir"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs hover:bg-slate-100 transition-colors font-xmedium"
                    >
                      مسیریابی با نشان
                    </a>
                    <a
                      href="https://balad.ir"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs hover:bg-slate-100 transition-colors font-xmedium"
                    >
                      مسیریابی با بلد
                    </a>
                    <a
                      href="https://maps.google.com/?q=35.727671,51.460275"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs hover:bg-slate-100 transition-colors font-xmedium"
                    >
                      Google Maps
                    </a>
                  </div>
                </div>

                {/* کامپوننت نقشه تعاملی */}
                <div className="rounded-2xl overflow-hidden shadow-inner border border-slate-200/80">
                  <ContactMap />
                </div>
              </div>

              {/* راهنمای دسترسی */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 text-xs text-slate-600 font-xregular">
                <div className="p-3 bg-white rounded-xl border border-slate-200/60">
                  <strong className="text-[#253359] block mb-1">دسترسی با مترو:</strong>
                  ایستگاه مترو سبلان (خط ۲)، خروجی سبلان شمالی، تاکسی یا پیاده به سمت خیابان شهید شجاعی.
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200/60">
                  <strong className="text-[#253359] block mb-1">دسترسی با خودرو شخصی:</strong>
                  بزرگراه شهید صیاد شیرازی، خروجی سبلان، خیابان سبلان شمالی، خیابان شهید شجاعی.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* پرسش‌های متداول مشتریان در ارتباط با شرکت */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 mt-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h3 className="text-2xl md:text-3xl font-xbold text-[#1e2a4a]">
            سوالات متداول مشتریان
          </h3>
          <p className="text-xs md:text-sm text-slate-500 mt-2 font-xregular">
            پاسخ سریع به متداول‌ترین سوالات درباره خرید، نصب، گارانتی و بازدید حضوری در شرکت رهیاب
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
            <h4 className="text-sm font-xbold text-[#253359] mb-2 flex items-center gap-2">
              <FaCheckCircle className="text-emerald-500 text-xs" />
              آیا امکان مشاوره و بازدید حضوری از دستگاه‌ها وجود دارد؟
            </h4>
            <p className="text-xs text-slate-600 leading-6 font-xregular">
              بله، کارشناسان شرکت رهیاب در ساعات اداری (۸:۳۰ الی ۱۸) در محل دفتر مرکزی آماده تست حضوری تجهیزات، مشاهده عملکرد منوی فارسی سیستم‌های رهیاب و مشاوره انتخاب سانترال پاناسونیک و تلفن‌های ویپ هستند.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
            <h4 className="text-sm font-xbold text-[#253359] mb-2 flex items-center gap-2">
              <FaCheckCircle className="text-emerald-500 text-xs" />
              آیا شرکت رهیاب کارشناس نصب به محل اعزام می‌کند؟
            </h4>
            <p className="text-xs text-slate-600 leading-6 font-xregular">
              بله، تیم فنی متخصص شرکت رهیاب کلیه خدمات کابل‌کشی مخابراتی، نصب سانترال، برنامه‌ریزی تلفن گویا و راه‌اندازی شبکه ویپ را در تهران و تمام شهرستان‌های کشور انجام می‌دهند.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
            <h4 className="text-sm font-xbold text-[#253359] mb-2 flex items-center gap-2">
              <FaCheckCircle className="text-emerald-500 text-xs" />
              شرایط گارانتی و خدمات پس از فروش به چه صورت است؟
            </h4>
            <p className="text-xs text-slate-600 leading-6 font-xregular">
              کلیه مراکز تلفن رهیاب دارای ۱ سال گارانتی تعویض و ۱۰ سال تضمین خدمات و قطعات مستقیم شرکت هستند. تجهیزات پاناسونیک و ویپ نیز با ضمانت اصالت و سلامت کامل کالا تحویل خریداران می‌گردد.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
            <h4 className="text-sm font-xbold text-[#253359] mb-2 flex items-center gap-2">
              <FaCheckCircle className="text-emerald-500 text-xs" />
              نحوه ارسال تجهیزات به شهرستان‌ها چگونه است؟
            </h4>
            <p className="text-xs text-slate-600 leading-6 font-xregular">
              سفارش‌های شهرستان ظرف حداکثر ۲۴ ساعت از طریق باربری، تیپاکس، پست پیشتاز یا چاپار بسته‌بندی ضدضربه شده و ارسال می‌گردند.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
