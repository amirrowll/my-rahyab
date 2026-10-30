"use client";

import React, { useState } from "react";
import Link from "next/link";
import { voipPhones } from "@/data/voipPhones";
import { gateways } from "@/data/gateways";
import {
  FaPhoneAlt,
  FaNetworkWired,
  FaServer,
  FaWifi,
  FaArrowLeft,
  FaCheckCircle,
  FaHeadset,
} from "react-icons/fa";

export default function VoIPSection() {
  const [activeTab, setActiveTab] = useState<"phones" | "gateways">("phones");

  const featuredPhones = voipPhones.slice(0, 4);
  const featuredGateways = gateways.slice(0, 4);

  return (
    <section className="py-20 bg-gradient-to-b from-white via-[#f6f9fe] to-white font-xmedium text-slate-800">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        {/* هدر بخش VoIP */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#253359] text-xs font-xbold mb-3 border border-blue-100">
              <FaNetworkWired className="text-blue-600" />
              <span>فناوری نوین Voice over IP</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-xbold text-[#141d33] tracking-tight">
              تجهیزات تخصصی VoIP، تلفن‌های تحت شبکه و گیت‌وی‌ها
            </h2>
            <p className="text-sm md:text-base text-slate-500 font-xregular mt-2 max-w-2xl leading-7">
              کاهش هزینه‌های مکالمات، تماس رایگان بین شعبات، دورکاری پرسنل و اتصال خطوط سیپ ترانک با پیشرفته‌ترین تلفن‌های گرنداستریم، یالینک و گیت‌وی‌های شهری.
            </p>
          </div>

          {/* تب سوئیچ بین گوشی‌های ویپ و گیت‌وی‌ها */}
          <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-2xl self-start lg:self-end">
            <button
              onClick={() => setActiveTab("phones")}
              className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-xbold transition-all ${
                activeTab === "phones"
                  ? "bg-[#253359] text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              📞 تلفن‌های تحت شبکه IP
            </button>
            <button
              onClick={() => setActiveTab("gateways")}
              className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-xbold transition-all ${
                activeTab === "gateways"
                  ? "bg-[#253359] text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              🖧 گیت‌وی‌های ویپ (FXO/FXS)
            </button>
          </div>
        </div>

        {/* محتوای تب تلفن‌های ویپ */}
        {activeTab === "phones" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredPhones.map((phone) => (
              <div
                key={phone.id}
                className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="h-44 bg-slate-50 rounded-2xl p-4 flex items-center justify-center mb-4 overflow-hidden">
                    <img
                      src={phone.image}
                      alt={phone.name}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-xbold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">
                      {phone.brand}
                    </span>
                    <span className="text-[10px] text-slate-400 font-xmedium">
                      {phone.category}
                    </span>
                  </div>

                  <h3 className="text-base font-xbold text-slate-900 group-hover:text-blue-700 transition-colors mb-2 truncate">
                    {phone.name}
                  </h3>

                  <p className="text-xs text-slate-500 font-xregular line-clamp-2 leading-5 mb-4">
                    {phone.description}
                  </p>

                  <div className="space-y-1.5 mb-4">
                    {phone.features.slice(0, 2).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-1.5 text-[11px] text-slate-600">
                        <FaCheckCircle className="text-emerald-500 text-xs flex-shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <Link
                    href={`/products/voip/${phone.id}`}
                    className="flex-1 py-2 text-center rounded-xl bg-slate-100 hover:bg-[#253359] hover:text-white text-xs font-xbold text-slate-700 transition-colors"
                  >
                    مشخصات فنی
                  </Link>
                  <a
                    href="tel:09125354811"
                    className="p-2 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white transition-colors"
                    title="استعلام قیمت تلفنی"
                  >
                    <FaPhoneAlt className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* محتوای تب گیت‌وی‌ها */}
        {activeTab === "gateways" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredGateways.map((gw) => (
              <div
                key={gw.id}
                className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="h-44 bg-slate-50 rounded-2xl p-4 flex items-center justify-center mb-4 overflow-hidden">
                    <img
                      src={gw.image || "/imageLanding/HT814.png"}
                      alt={gw.name}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-xbold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700">
                      {gw.brand}
                    </span>
                    <span className="text-[10px] text-slate-400 font-xmedium">
                      {gw.model}
                    </span>
                  </div>

                  <h3 className="text-base font-xbold text-slate-900 group-hover:text-blue-700 transition-colors mb-2 truncate">
                    {gw.name}
                  </h3>

                  <p className="text-xs text-slate-500 font-xregular line-clamp-2 leading-5 mb-4">
                    {gw.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {gw.fxsPorts && (
                      <span className="text-[10px] px-2 py-0.5 rounded-lg bg-emerald-50 text-emerald-700 font-xbold">
                        {gw.fxsPorts} پورت FXS
                      </span>
                    )}
                    {gw.fxoPorts && (
                      <span className="text-[10px] px-2 py-0.5 rounded-lg bg-blue-50 text-blue-700 font-xbold">
                        {gw.fxoPorts} پورت FXO
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <Link
                    href={`/products/gateways/${gw.id}`}
                    className="flex-1 py-2 text-center rounded-xl bg-slate-100 hover:bg-[#253359] hover:text-white text-xs font-xbold text-slate-700 transition-colors"
                  >
                    مشاهده جزئیات
                  </Link>
                  <a
                    href="tel:09125354811"
                    className="p-2 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white transition-colors"
                    title="استعلام قیمت و مشاوره"
                  >
                    <FaPhoneAlt className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* نوار پایانی هدایت به کاتالوگ و مقالات ویپ */}
        <div className="mt-12 p-6 rounded-3xl bg-slate-50 border border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-right">
            <FaHeadset className="text-[#253359] text-2xl" />
            <span className="text-xs md:text-sm text-slate-700">
              جهت طراحی شبکه ویپ و محاسبه پهنای باند و تعداد پورت‌های گیت‌وی، با مهندس محمدی مستقیماً مشورت فرمایید:
            </span>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              href="/blog/voip-chist-rahnamaye-jame"
              className="text-xs font-xbold text-blue-700 hover:underline"
            >
              📖 راهنمای کامل ویپ و سیپ ترانک
            </Link>
            <a
              href="tel:09125354811"
              className="px-5 py-2.5 rounded-xl bg-[#253359] text-white text-xs font-xbold hover:bg-[#1a2542] transition-colors"
            >
              تماس: ۰۹۱۲۵۳۵۴۸۱۱
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
