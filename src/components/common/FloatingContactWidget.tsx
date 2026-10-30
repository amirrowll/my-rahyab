"use client";

import React, { useState } from "react";
import { FaPhoneAlt, FaTimes, FaHeadset } from "react-icons/fa";
import { FaWhatsapp, FaTelegram } from "react-icons/fa6";

// آیکون اختصاصی و دقیق پیام‌رسان ایتا (Eitaa SVG)
const EitaaIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    viewBox="0 0 32 32"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16 2.5C8.544 2.5 2.5 8.544 2.5 16s6.044 13.5 13.5 13.5 13.5-6.044 13.5-13.5S23.456 2.5 16 2.5zm6.85 17.65c-.75 2.1-3.25 3.3-6.2 3.3-4.1 0-7.3-2.6-7.3-6.8 0-4.1 3.1-7.2 7.3-7.2 3.8 0 6.6 2.4 6.8 5.7h-3.4c-.2-1.6-1.5-2.7-3.4-2.7-2.3 0-3.9 1.7-3.9 4.2 0 2.4 1.6 4.1 3.9 4.1 1.7 0 2.9-.8 3.3-2.1l2.9 1.5z" />
  </svg>
);

// آیکون اختصاصی و دقیق پیام‌رسان بله (Bale SVG)
const BaleIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    viewBox="0 0 32 32"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16 2C8.268 2 2 8.268 2 16c0 2.57.693 4.978 1.902 7.049L2.1 29.1a1 1 0 0 0 1.2 1.2l6.051-1.802A13.918 13.918 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm-4 8.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm-8 8.5c0-.552.448-1 1-1h6c.552 0 1 .448 1 1 0 2.761-2.239 5-5 5s-5-2.239-5-5z" />
  </svg>
);

export default function FloatingContactWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const contactChannels = [
    {
      name: "واتساپ (WhatsApp)",
      subtitle: "۰۹۱۲۵۳۵۴۸۱۱",
      href: "https://wa.me/989125354811?text=%D8%B3%D9%84%D8%A7%D9%85%D8%8C%20%D8%AC%D9%87%D8%AA%20%D9%85%D8%B4%D8%A7%D9%88%D8%B1%D9%87%20%D8%AE%D8%B1%DB%8C%D8%AF%20%D9%88%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%20%D8%B3%D8%A7%D9%86%D8%AA%D8%B1%D8%A7%D9%84%20%D9%88%20%D9%88%DB%8C%D9%BE%20%D9%BE%DB%8C%D8%A7%D9%85%20%D9%85%DB%8C%E2%80%8C%D8%AF%D9%87%D9%85.",
      icon: <FaWhatsapp className="w-5 h-5 text-white" />,
      bgClass: "bg-[#25D366] hover:bg-[#20ba59]",
      badge: "پاسخگویی سریع",
    },
    {
      name: "تلگرام (Telegram)",
      subtitle: "@javadmhmd",
      href: "https://t.me/javadmhmd",
      icon: <FaTelegram className="w-5 h-5 text-white" />,
      bgClass: "bg-[#229ED9] hover:bg-[#1d8bbf]",
      badge: "پشتیبانی ۲۴ ساعته",
    },
    {
      name: "ایتا (Eitaa)",
      subtitle: "۰۹۱۲۵۳۵۴۸۱۱",
      href: "https://eitaa.com/09125354811",
      icon: <EitaaIcon className="w-5 h-5 text-white" />,
      bgClass: "bg-[#F05A28] hover:bg-[#d84d1f]",
      badge: "پیام‌رسان ایرانی",
    },
    {
      name: "بله (Bale)",
      subtitle: "۰۹۱۲۵۳۵۴۸۱۱",
      href: "https://ble.ir/09125354811",
      icon: <BaleIcon className="w-5 h-5 text-white" />,
      bgClass: "bg-[#00A693] hover:bg-[#008f7e]",
      badge: "پشتیبانی مستقیم",
    },
    {
      name: "تماس تلفنی مستقیم",
      subtitle: "۰۹۱۲۵۳۵۴۸۱۱ / ۰۲۱-۸۸۴۴۰۳۴۵",
      href: "tel:09125354811",
      icon: <FaPhoneAlt className="w-4 h-4 text-white" />,
      bgClass: "bg-[#253359] hover:bg-[#1a2440]",
      badge: "تماس فوری",
    },
  ];

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start select-none font-xmedium">
      {/* منوی بازشونده کانال‌های ارتباطی */}
      {isOpen && (
        <div className="mb-4 bg-white/95 backdrop-blur-xl border border-slate-200/80 shadow-2xl rounded-3xl p-4 w-72 md:w-80 transition-all duration-300 animate-in fade-in slide-in-from-bottom-5">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-sm font-xbold text-[#253359]">
                مشاوره و پشتیبانی آنلاین
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="بستن پنجره"
            >
              <FaTimes className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-500 mb-3 leading-5">
            برای مشاوره تخصصی، استعلام قیمت سانترال و ویپ در پیام‌رسان دلخواه خود پیام بگذارید:
          </p>

          <div className="space-y-2">
            {contactChannels.map((channel, idx) => (
              <a
                key={idx}
                href={channel.href}
                target={channel.href.startsWith("tel:") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-200/60 transition-all duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-200 ${channel.bgClass}`}
                  >
                    {channel.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-xbold text-slate-800 group-hover:text-[#253359] transition-colors">
                      {channel.name}
                    </div>
                    <div className="text-xs text-slate-500 font-xregular dir-ltr text-right">
                      {channel.subtitle}
                    </div>
                  </div>
                </div>
                <span className="text-[10px] font-xmedium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 group-hover:bg-[#253359] group-hover:text-white transition-colors">
                  {channel.badge}
                </span>
              </a>
            ))}
          </div>

          <div className="mt-3 pt-2 border-t border-slate-100 text-center">
            <span className="text-[11px] text-slate-400">
              شرکت رهیاب • ۳۰ سال تجربه در سانترال و مخابرات
            </span>
          </div>
        </div>
      )}

      {/* دکمه اصلی شناور (Trigger Button) */}
      <div className="relative group">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative flex items-center gap-3 px-5 py-3.5 rounded-full shadow-2xl transition-all duration-300 focus:outline-none ${
            isOpen
              ? "bg-slate-800 text-white hover:bg-slate-900"
              : "bg-gradient-to-r from-[#253359] via-[#1a2542] to-[#253359] text-white hover:shadow-blue-900/40 hover:scale-105"
          }`}
          aria-label="گفتگو و مشاوره آنلاین"
        >
          {/* حلقه انیمیشن پالس */}
          {!isOpen && (
            <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-emerald-400 to-blue-500 opacity-75 blur-sm animate-pulse" />
          )}

          <div className="relative flex items-center gap-2.5">
            {isOpen ? (
              <FaTimes className="w-5 h-5" />
            ) : (
              <>
                <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                  <FaHeadset className="w-4 h-4 text-emerald-300 animate-bounce" />
                </div>
                <span className="text-sm font-xbold hidden sm:inline-block">
                  مشاوره و چت اختصاصی
                </span>
              </>
            )}
          </div>
        </button>

        {/* تولتیپ روی حالت بسته در دسکتاپ */}
        {!isOpen && (
          <div className="hidden lg:group-hover:flex absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs px-3 py-1.5 rounded-xl whitespace-nowrap shadow-lg animate-in fade-in">
            ایتا، بله، واتساپ، تلگرام و تماس
          </div>
        )}
      </div>
    </div>
  );
}
