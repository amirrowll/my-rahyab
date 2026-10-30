"use client";

import React from "react";
import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";
import { FaArrowLeft, FaBookOpen, FaClock, FaCalendarAlt } from "react-icons/fa";

export default function HomeBlogSection() {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-16 bg-gradient-to-b from-white via-[#f6f8fd] to-white font-xmedium">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6">
        {/* عنوان و هدر سکشن */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#253359] text-xs font-xbold mb-3 border border-blue-100">
              <FaBookOpen className="text-blue-600" />
              <span>پایگاه دانش و مقالات تخصصی مخابرات</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-xbold text-[#253359] tracking-tight">
              راهنمای خرید سانترال پاناسونیک و سیستم‌های نوین VoIP
            </h2>
            <p className="text-sm md:text-base text-gray-500 font-xregular mt-2 max-w-2xl leading-7">
              با مطالعه جدیدترین مقایسه‌ها و مقالات فنی تیم رهیاب، بهترین مرکز تلفن و تجهیزات مخابراتی متناسب با نیاز سازمان خود را انتخاب کنید.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-[#253359] text-white text-sm font-xbold hover:bg-[#1a2542] transition-all shadow-md hover:shadow-blue-900/20 whitespace-nowrap self-start md:self-end"
          >
            <span>مشاهده همه مقالات</span>
            <FaArrowLeft className="w-3 h-3" />
          </Link>
        </div>

        {/* لیست ۳ کارت برگزیده */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-3xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-1"
            >
              {/* تصویر و بج */}
              <div className="relative h-52 bg-slate-50 flex items-center justify-center p-4 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 right-4 bg-[#253359] text-white text-[11px] px-3 py-1 rounded-full shadow-sm font-xbold">
                  {post.category}
                </span>
              </div>

              {/* متن کارت */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt />
                      {post.publishDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaClock />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-base md:text-lg font-xbold text-gray-900 group-hover:text-blue-700 transition-colors mb-2 leading-snug line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-xs md:text-sm text-gray-500 font-xregular line-clamp-3 leading-6 mb-4">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                  <span className="text-[11px] text-gray-400">{post.author}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs md:text-sm font-xbold text-[#253359] hover:text-blue-600 transition-colors group-hover:translate-x-[-3px]"
                  >
                    <span>مطالعه مقاله</span>
                    <FaArrowLeft className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* برچسب‌های سریع دسترسی به دسته‌های مرتبط */}
        <div className="mt-10 pt-6 border-t border-gray-200/70 flex flex-wrap items-center justify-center gap-3 text-xs md:text-sm">
          <span className="text-gray-500 font-xbold">دسترسی سریع به کاتالوگ:</span>
          <Link
            href="/products/panasonic"
            className="px-3.5 py-1.5 rounded-xl bg-white border border-gray-200 text-gray-700 hover:border-[#253359] hover:text-[#253359] transition-all"
          >
            سانترال پاناسونیک پرظرفیت
          </Link>
          <Link
            href="/products/panasonic/low-capacity"
            className="px-3.5 py-1.5 rounded-xl bg-white border border-gray-200 text-gray-700 hover:border-[#253359] hover:text-[#253359] transition-all"
          >
            سانترال کم‌ظرفیت (KX-TES824)
          </Link>
          <Link
            href="/products/voip"
            className="px-3.5 py-1.5 rounded-xl bg-white border border-gray-200 text-gray-700 hover:border-[#253359] hover:text-[#253359] transition-all"
          >
            تلفن‌های ویپ گرنداستریم و یالینک
          </Link>
          <Link
            href="/products/gateways"
            className="px-3.5 py-1.5 rounded-xl bg-white border border-gray-200 text-gray-700 hover:border-[#253359] hover:text-[#253359] transition-all"
          >
            گیت‌وی‌های FXO و FXS
          </Link>
          <Link
            href="/products/rahyab"
            className="px-3.5 py-1.5 rounded-xl bg-[#253359]/10 text-[#253359] font-xbold hover:bg-[#253359] hover:text-white transition-all"
          >
            مرکز تلفن اختصاصی رهیاب RX
          </Link>
        </div>
      </div>
    </section>
  );
}
