"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  FaPhoneAlt,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";
import { FaWhatsapp, FaTelegram } from "react-icons/fa6";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navMenuItems = [
    {
      id: "home",
      title: "صفحه اصلی",
      href: "/",
    },
    {
      id: "panasonic",
      title: "سانترال پاناسونیک",
      shortTitle: "پاناسونیک",
      href: "/products/panasonic",
      submenu: [
        {
          name: "سانترال کم‌ظرفیت (KX-TES824 / TEM824)",
          desc: "مناسب شرکت‌ها و دفاتر تا ۲۴ خط داخلی",
          href: "/products/panasonic/low-capacity",
        },
        {
          name: "سانترال پرظرفیت دیجیتال (TDA100 / 200 / 600)",
          desc: "سازمانی تا صدها خط و ترانک دیجیتال E1",
          href: "/products/panasonic",
        },
        {
          name: "سانترال تحت شبکه IP-PBX (سری NS500 / TDE)",
          desc: "سیپ ترانک، دورکاری و تلفن‌های تحت شبکه",
          href: "/products/panasonic/ip-pbx",
        },
        {
          name: "راهنمای جامع خرید سانترال پاناسونیک",
          desc: "مقایسه تخصصی مدل‌ها و برآورد ظرفیت",
          href: "/blog/rahnamaye-kharid-central-panasonic",
        },
      ],
    },
    {
      id: "voip",
      title: "تجهیزات VoIP",
      shortTitle: "ویپ (VoIP)",
      href: "/products/voip",
      submenu: [
        {
          name: "تلفن‌های تحت شبکه (IP Phone)",
          desc: "گرنداستریم، یالینک، اسنوم و پاناسونیک",
          href: "/products/voip",
        },
        {
          name: "گیت‌وی‌های ویپ (FXO و FXS)",
          desc: "اتصال خطوط شهری به سرور ویپ و ایزابل",
          href: "/products/gateways",
        },
        {
          name: "گیت‌وی گرنداستریم HT814 و سری GXW",
          desc: "انتقال خط تلفن بین شعب و پورت‌های آنالوگ",
          href: "/products/gateways/ht814",
        },
        {
          name: "مقاله تخصصی: ویپ چیست و چگونه کار می‌کند؟",
          desc: "راهنمای کامل راه‌اندازی و سیپ ترانک",
          href: "/blog/voip-chist-rahnamaye-jame",
        },
      ],
    },
    {
      id: "rahyab",
      title: "مراکز تلفن رهیاب",
      shortTitle: "مراکز رهیاب",
      href: "/products/rahyab",
      submenu: [
        {
          name: "مرکز تلفن رهیاب RX-112",
          desc: "سانترال کامپیوتری تا ۱۶ شهری و ۱۰۴ داخلی",
          href: "/products/rahyab/RX-112",
        },
        {
          name: "مرکز تلفن رهیاب RX-40",
          desc: "سانترال اقتصادی تا ۶ شهری و ۲۴ داخلی",
          href: "/products/rahyab/RX-40",
        },
        {
          name: "مرکز تلفن دیجیتال RXD-320 و RXD-1400",
          desc: "ترانک دیجیتال E1 و تلفن گویا پیش‌فرض",
          href: "/products/rahyab/RXD-320",
        },
        {
          name: "مقایسه مرکز تلفن رهیاب با پاناسونیک",
          desc: "بررسی قیمت، گارانتی و امکانات فارسی",
          href: "/blog/moghayese-central-panasonic-va-rahyab",
        },
      ],
    },
    {
      id: "phones",
      title: "گوشی‌های تلفن",
      shortTitle: "تلفن‌ها",
      href: "/products/phones/digital",
      submenu: [
        { name: "تلفن‌های دیجیتال اداری", desc: "سری DT پاناسونیک", href: "/products/phones/digital" },
        { name: "تلفن‌های IP و تحت شبکه", desc: "PoE، کیفیت صدای HD", href: "/products/phones/ip" },
        { name: "تلفن‌های بیسیم اداری", desc: "برد بالا و باتری قوی", href: "/products/phones/wireless" },
        { name: "تلفن‌های آنالوگ رومیزی", desc: "اقتصادی و با دوام", href: "/products/phones/analog" },
      ],
    },
    {
      id: "blog",
      title: "وبلاگ و مقالات",
      shortTitle: "وبلاگ",
      href: "/blog",
    },
    {
      id: "contact",
      title: "تماس با ما",
      shortTitle: "تماس",
      href: "/contactUs",
    },
  ];

  return (
    <>
      {/* سرتاسر هدر فیکس در بالا بدون هیچ فضای خالی و با پس‌زمینه کاملاً مات و یکدست */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full font-xmedium bg-white shadow-md border-b border-slate-200/90 select-none">
        {/* نوار اطلاع‌رسانی بالایی - ارتفاع ثابت و مات، بدون هیچ جابجایی ناگهانی */}
        <div className="bg-[#121a30] text-white text-[11px] md:text-xs py-1.5 px-4 hidden sm:block border-b border-slate-800">
          <div className="max-w-[1440px] mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-emerald-400 font-xbold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                مشاوره و استعلام قیمت فوری سانترال و ویپ:
              </span>
              <a
                href="tel:09125354811"
                className="text-white hover:text-emerald-300 font-xbold tracking-wider transition-colors dir-ltr"
              >
                ۰۹۱۲-۵۳۵۴۸۱۱ (مهندس محمدی)
              </a>
              <span className="text-white/40">|</span>
              <a
                href="tel:02188440345"
                className="text-white/80 hover:text-white transition-colors"
              >
                دفتر مرکزی شرکت: ۰۲۱-۸۸۴۴۰۳۴۵
              </a>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-white/70">ارتباط سریع در پیام‌رسان‌ها:</span>
              <a
                href="https://wa.me/989125354811"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors flex items-center gap-1"
                title="واتساپ"
              >
                <FaWhatsapp className="w-3.5 h-3.5" />
                <span className="text-[10px]">واتساپ</span>
              </a>
              <a
                href="https://eitaa.com/09125354811"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition-colors font-xbold text-[10px] bg-white/10 px-1.5 py-0.5 rounded"
                title="ایتا"
              >
                ایتا
              </a>
              <a
                href="https://ble.ir/09125354811"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-400 transition-colors font-xbold text-[10px] bg-white/10 px-1.5 py-0.5 rounded"
                title="بله"
              >
                بله
              </a>
              <a
                href="https://t.me/javadmhmd"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
                title="تلگرام"
              >
                <FaTelegram className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* نوبار اصلی دسکتاپ و موبایل */}
        <nav className="w-full bg-white transition-all duration-200 py-2.5 md:py-3 px-4 md:px-6">
          <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-2 flex-nowrap">
            {/* لوگو و نام برند */}
            <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
              <img
                alt="لوگوی رسمی شرکت رهیاب"
                className="w-9 h-8 md:w-11 md:h-9 object-contain group-hover:scale-105 transition-transform"
                src="/imageLanding/myrahyab-removebg-preview.svg"
              />
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-xbold text-[#253359] tracking-tight group-hover:text-blue-700 transition-colors whitespace-nowrap leading-none">
                  شرکت رهیاب
                </span>
                <span className="text-[10px] text-slate-500 font-xregular mt-1 hidden 2xl:block whitespace-nowrap leading-none">
                  مرکز تلفن، سانترال و ویپ
                </span>
              </div>
            </Link>

            {/* منوی دسکتاپ - کاملاً ریسپانسیو و بدون شکستگی خطوط */}
            <div className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 2xl:gap-2 flex-nowrap flex-shrink-0">
              {navMenuItems.map((item) => (
                <div
                  key={item.id}
                  className="relative group flex-shrink-0"
                  onMouseEnter={() => item.submenu && setOpenDropdown(item.id)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 px-2 xl:px-2.5 2xl:px-3 py-2 rounded-xl text-xs xl:text-[13px] 2xl:text-sm font-xbold transition-all whitespace-nowrap flex-shrink-0 ${
                      openDropdown === item.id
                        ? "text-[#253359] bg-slate-100"
                        : "text-slate-700 hover:text-[#253359] hover:bg-slate-50"
                    }`}
                  >
                    {/* در اندازه‌های متوسط دسکتاپ عناوین فشرده و در مانیتورهای بزرگ عناوین کامل نمایش داده می‌شوند */}
                    <span className="inline xl:hidden whitespace-nowrap">{item.shortTitle || item.title}</span>
                    <span className="hidden xl:inline whitespace-nowrap">{item.title}</span>
                    {item.submenu && (
                      <FaChevronDown className="w-2.5 h-2.5 text-slate-400 group-hover:rotate-180 transition-transform duration-200 flex-shrink-0" />
                    )}
                  </Link>

                  {/* زیرمنو کشویی دسکتاپ */}
                  {item.submenu && (
                    <div className="absolute top-full right-0 pt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto z-50">
                      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-2.5 space-y-1">
                        {item.submenu.map((sub, sIdx) => (
                          <Link
                            key={sIdx}
                            href={sub.href}
                            className="flex flex-col p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all text-right group/sub"
                          >
                            <span className="text-xs font-xbold text-slate-800 group-hover/sub:text-[#253359] transition-colors leading-5 whitespace-nowrap">
                              {sub.name}
                            </span>
                            <span className="text-[11px] text-slate-500 font-xregular mt-0.5 leading-4 line-clamp-1">
                              {sub.desc}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* دکمه تماس CTA با شماره ۰۹۱۲۵۳۵۴۸۱۱ */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <a
                href="tel:09125354811"
                className="inline-flex items-center gap-2 px-3 md:px-4 py-2 md:py-2.5 rounded-xl bg-gradient-to-r from-[#253359] via-[#1a2542] to-[#253359] text-white text-xs md:text-sm font-xbold shadow-md hover:shadow-blue-900/30 hover:scale-105 transition-all whitespace-nowrap flex-shrink-0"
              >
                <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center animate-pulse flex-shrink-0">
                  <FaPhoneAlt className="w-2.5 h-2.5" />
                </div>
                <span className="dir-ltr font-xbold tracking-wider">۰۹۱۲-۵۳۵۴۸۱۱</span>
              </a>

              {/* دکمه همبرگری موبایل */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors lg:hidden flex-shrink-0"
                aria-label="منوی موبایل"
              >
                {isOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* منوی کشویی موبایل */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden font-xmedium animate-in fade-in duration-200">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 w-80 max-w-[85%] bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto z-10">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <img
                    alt="لوگو شرکت رهیاب"
                    className="w-10 h-8 object-contain"
                    src="/imageLanding/myrahyab-removebg-preview.svg"
                  />
                  <span className="font-xbold text-lg text-[#253359]">شرکت رهیاب</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-slate-400 hover:text-slate-600 rounded-full"
                >
                  <FaTimes className="w-5 h-5" />
                </button>
              </div>

              {/* شماره مستقیم در موبایل */}
              <a
                href="tel:09125354811"
                className="flex items-center justify-between p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 mb-4"
              >
                <div className="text-right">
                  <div className="text-xs font-xbold">مشاوره و استعلام تلفنی:</div>
                  <div className="text-sm font-xbold dir-ltr">۰۹۱۲-۵۳۵۴۸۱۱</div>
                </div>
                <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                  <FaPhoneAlt className="w-3.5 h-3.5" />
                </div>
              </a>

              {/* آیتم‌های منو در موبایل */}
              <div className="space-y-1">
                {navMenuItems.map((item) => (
                  <div key={item.id} className="border-b border-slate-50 pb-1">
                    <div className="flex items-center justify-between py-2.5">
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-sm font-xbold text-slate-800 hover:text-[#253359] transition-colors"
                      >
                        {item.title}
                      </Link>
                      {item.submenu && (
                        <button
                          onClick={() =>
                            setOpenDropdown(openDropdown === item.id ? null : item.id)
                          }
                          className="p-1 text-slate-400"
                        >
                          <FaChevronDown
                            className={`w-3.5 h-3.5 transition-transform ${
                              openDropdown === item.id ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    {item.submenu && openDropdown === item.id && (
                      <div className="pr-3 pl-1 py-1 space-y-1 bg-slate-50 rounded-xl mb-2">
                        {item.submenu.map((sub, sIdx) => (
                          <Link
                            key={sIdx}
                            href={sub.href}
                            onClick={() => setIsOpen(false)}
                            className="block text-xs text-slate-600 hover:text-[#253359] py-1.5 font-xmedium"
                          >
                            • {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* فوتر منوی موبایل */}
            <div className="pt-4 border-t border-slate-100 text-center space-y-2">
              <div className="text-xs text-slate-500">ارتباط مستقیم در پیام‌رسان‌ها:</div>
              <div className="flex justify-center items-center gap-3 text-sm">
                <a
                  href="https://wa.me/989125354811"
                  className="px-2.5 py-1 bg-emerald-500 text-white rounded-lg flex items-center gap-1 text-xs"
                  title="واتساپ"
                >
                  <FaWhatsapp /> واتساپ
                </a>
                <a
                  href="https://eitaa.com/09125354811"
                  className="px-2.5 py-1 bg-orange-500 text-white rounded-lg text-xs font-xbold"
                  title="ایتا"
                >
                  ایتا
                </a>
                <a
                  href="https://ble.ir/09125354811"
                  className="px-2.5 py-1 bg-teal-600 text-white rounded-lg text-xs font-xbold"
                  title="بله"
                >
                  بله
                </a>
                <a
                  href="https://t.me/javadmhmd"
                  className="px-2.5 py-1 bg-blue-500 text-white rounded-lg text-xs flex items-center gap-1"
                  title="تلگرام"
                >
                  <FaTelegram /> تلگرام
                </a>
              </div>
              <div className="text-[11px] text-slate-500 mt-2">
                دفتر مرکزی شرکت رهیاب • ۰۲۱-۸۸۴۴۰۳۴۵
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}