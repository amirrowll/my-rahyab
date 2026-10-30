"use client";

import React, { useState } from "react";
import { reviewsData } from "@/data/reviewsData";
import { FaStar, FaCheckCircle, FaCommentDots, FaPhoneAlt } from "react-icons/fa";

export default function CustomerReviewsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("همه");

  const categories = [
    "همه",
    "سانترال پاناسونیک",
    "تجهیزات VoIP",
    "مرکز تلفن رهیاب",
    "گیت‌وی و شبکه",
  ];

  const filteredReviews =
    selectedCategory === "همه"
      ? reviewsData
      : reviewsData.filter((r) => r.category === selectedCategory);

  return (
    <section className="py-20 bg-gradient-to-b from-[#f8faff] via-white to-[#f4f7fc] font-xmedium text-slate-800">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        {/* هدر بخش نظرات */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#253359] text-xs font-xbold mb-3 border border-blue-100">
              <FaCommentDots className="text-blue-600" />
              <span>نظرات و تجربیات خریداران</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-xbold text-[#1e2a4a] tracking-tight">
              دیدگاه مشتریان درباره خرید سانترال و سیستم‌های ویپ رهیاب
            </h2>
            <p className="text-sm md:text-base text-slate-600 font-xregular mt-2 max-w-2xl leading-7">
              تجربه واقعی مشتریان در بهره‌گیری از مشاوره، راه‌اندازی و گارانتی شرکت رهیاب در زمینه سانترال و تجهیزات ارتباطی.
            </p>
          </div>

          <div className="flex items-center gap-4 bg-white p-4 rounded-3xl border border-slate-100 shadow-sm self-start lg:self-end">
            <div className="text-center px-4">
              <div className="text-3xl font-xbold text-[#253359]">۴.۹</div>
              <div className="flex text-amber-400 text-xs justify-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">رضایت بیش از ۳۴۰ خریدار</div>
            </div>
          </div>
        </div>

        {/* فیلتر دسته‌بندی‌ها */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-2xl text-xs md:text-sm font-xbold transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? "bg-[#253359] text-white shadow-md"
                  : "bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* شبکه نمایش نظرات (فقط نام افراد، بدون نام مراکز) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* ستاره‌ها و دسته‌بندی */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400 text-sm">
                    {[...Array(rev.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <span className="text-[11px] font-xbold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                    {rev.category}
                  </span>
                </div>

                {/* متن نظر */}
                <p className="text-xs md:text-sm text-slate-700 font-xregular leading-7 mb-6 text-justify">
                  «{rev.comment}»
                </p>

                {/* پاسخ پشتیبانی رهیاب */}
                {rev.adminReply && (
                  <div className="p-3.5 rounded-2xl bg-blue-50/70 border-r-2 border-blue-600 mb-4 text-xs font-xmedium text-slate-700 leading-6">
                    <span className="font-xbold text-[#253359] block mb-1">
                      پاسخ شرکت رهیاب:
                    </span>
                    {rev.adminReply}
                  </div>
                )}
              </div>

              {/* مشخصات نویسنده: فقط نام و شهر خریدار */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#253359] to-blue-600 text-white flex items-center justify-center font-xbold text-sm shadow-sm">
                    {rev.author.charAt(0)}
                  </div>
                  <div>
                    <div className="text-xs md:text-sm font-xbold text-slate-800 flex items-center gap-1.5">
                      <span>{rev.author}</span>
                      {rev.verified && (
                        <FaCheckCircle className="text-emerald-500 text-xs" title="خریدار تایید شده" />
                      )}
                    </div>
                    <div className="text-[11px] text-slate-400 font-xregular">
                      خریدار محترم • {rev.city}
                    </div>
                  </div>
                </div>
                <span className="text-[10px] text-slate-400">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* بنر تماس مستقیم */}
        <div className="mt-12 p-6 md:p-8 rounded-3xl bg-gradient-to-r from-[#253359] via-[#1a2542] to-[#121a30] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-right">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-emerald-400 text-2xl flex-shrink-0">
              <FaPhoneAlt />
            </div>
            <div>
              <h4 className="text-base md:text-lg font-xbold">
                مشاوره مستقیم برای خرید یا راه‌اندازی سانترال و ویپ
              </h4>
              <p className="text-xs text-white/80 mt-1 font-xregular">
                پاسخگویی مستقیم مهندس محمدی جهت برآورد هزینه و ارسال پیش‌فاکتور فوری
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <a
              href="tel:09125354811"
              className="flex-1 md:flex-none text-center px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-xbold text-sm shadow-lg transition-colors"
            >
              تماس مستقیم: ۰۹۱۲۵۳۵۴۸۱۱
            </a>
            <a
              href="tel:02188440345"
              className="flex-1 md:flex-none text-center px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-xbold text-sm border border-white/20 transition-colors"
            >
              ۰۲۱-۸۸۴۴۰۳۴۵
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
