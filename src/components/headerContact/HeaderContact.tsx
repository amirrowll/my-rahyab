"use client";

import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaWhatsapp, FaTelegram } from "react-icons/fa";

export default function HeaderContact() {
  return (
    <div className="relative -mt-16 mb-8 z-10 font-xmedium">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1200px] mx-auto px-4">
        {/* کارت آدرس */}
        <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 group">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
            <FaMapMarkerAlt />
          </div>
          <h3 className="text-base font-xbold text-[#253359] mb-2">دفتر مرکزی شرکت رهیاب</h3>
          <p className="text-xs md:text-sm text-slate-600 font-xregular leading-6">
            تهران، سبلان شمالی، خیابان شهید شجاعی، پلاک ۳۸
          </p>
          <span className="text-[11px] text-slate-400 mt-3">ساعات کاری: شنبه تا چهارشنبه ۸:۳۰ الی ۱۸</span>
        </div>

        {/* کارت تماس مستقیم - برجسته با تاکید روی ۰۹۱۲۵۳۵۴۸۱۱ */}
        <div className="bg-gradient-to-br from-[#253359] via-[#1a2542] to-[#121a30] text-white rounded-3xl p-6 shadow-2xl border border-blue-900/50 flex flex-col items-center text-center transform md:-translate-y-3 hover:scale-105 transition-all duration-300">
          <div className="w-14 h-14 rounded-2xl bg-emerald-500 text-white flex items-center justify-center text-2xl mb-4 shadow-lg animate-pulse">
            <FaPhoneAlt />
          </div>
          <h3 className="text-lg font-xbold text-white mb-1">مشاوره و فروش تخصصی</h3>
          <span className="text-[11px] text-emerald-300 mb-3">پاسخگویی مستقیم مهندس محمدی:</span>

          <a
            href="tel:09125354811"
            className="text-xl font-xbold text-white tracking-wider hover:text-emerald-300 transition-colors dir-ltr block mb-2"
          >
            ۰۹۱۲-۵۳۵۴۸۱۱
          </a>

          <a
            href="tel:02188440345"
            className="text-xs text-white/80 hover:text-white transition-colors dir-ltr block mb-4"
          >
            تلفن دفتر: ۰۲۱-۸۸۴۴۰۳۴۵
          </a>

          <div className="flex gap-2">
            <a
              href="https://wa.me/989125354811"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-xbold flex items-center gap-1.5 transition-colors"
            >
              <FaWhatsapp />
              <span>واتساپ</span>
            </a>
            <a
              href="https://t.me/javadmhmd"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-xbold flex items-center gap-1.5 transition-colors"
            >
              <FaTelegram />
              <span>تلگرام</span>
            </a>
          </div>
        </div>

        {/* کارت ایمیل و مکاتبات */}
        <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 group">
          <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
            <FaEnvelope />
          </div>
          <h3 className="text-base font-xbold text-[#253359] mb-2">مکاتبات و استعلام رسمی</h3>
          <p className="text-xs md:text-sm text-slate-600 font-xregular leading-6">
            ارسال درخواست پیش‌فاکتور رسمی سازمانی به آدرس:
          </p>
          <a
            href="mailto:rahyabmhmd@gmail.com"
            className="text-xs font-xbold text-blue-700 hover:underline mt-2 dir-ltr"
          >
            rahyabmhmd@gmail.com
          </a>
          <span className="text-[11px] text-slate-400 mt-2">پاسخگویی ظرف کمتر از ۱۲ ساعت</span>
        </div>
      </div>
    </div>
  );
}
