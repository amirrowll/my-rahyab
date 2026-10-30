"use client";
import React from "react";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaBox, FaGlobe, FaPuzzlePiece, FaBuilding } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";

export default function PanasonicProducts() {
  const products = [
    {
      id: 1,
      image: "/imageLanding/tde600.png",
      model: "KX-TDE600",
      title: "سانترال پاناسونیک TDE600",
      capacity: "640/1120",
      features: ["IP سازگار", "11 اسلات", "ظرفیت بالا"],
    },
    {
      id: 2,
      image: "/imageLanding/tde200.png",
      model: "KX-TDE200",
      title: "سانترال پاناسونیک TDE200",
      capacity: "128/256",
      features: ["VoIP", "10 اسلات", "IP Ready"],
    },
    {
      id: 3,
      image: "/imageLanding/tde100.png",
      model: "KX-TDE100",
      title: "سانترال پاناسونیک TDE100",
      capacity: "64/128",
      features: ["SIP", "5 اسلات", "انعطافپذیر"],
    },
    {
      id: 4,
      image: "/imageLanding/tda620.png",
      model: "KX-TDA620",
      title: "سانترال پاناسونیک TDA620",
      capacity: "640/960",
      features: ["قابل ارتقا", "11 اسلات", "مدولار"],
    },
  ];

  return (
    <div className="relative py-4 md:py-10 bg-gradient-to-br from-gray-50 via-white to-purple-50/30 mt-8">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <div>
            <div className="inline-block mb-2 px-4 py-1 bg-gradient-to-r from-[#253359]/10 to-purple-600/10 rounded-full">
              <span className="text-[#253359] font-xbold text-xs md:text-sm flex items-center gap-2">
                <FaBox /> محصولات پاناسونیک
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-xbold text-[#253359]">
              سانترال پرظرفیت پاناسونیک
            </h2>
            <p className="text-gray-600 font-xmedium text-sm md:text-base mt-2">
              سیستمهای تلفنی IP حرفهای برای سازمانهای بزرگ
            </p>
          </div>
          <Link href="/products/panasonic">
            <button className="group flex items-center gap-2 bg-[#253359] text-white px-6 py-3 rounded-xl font-xbold text-sm hover:shadow-xl hover:bg-gradient-to-r from-[#253359] to-purple-600 transition-all duration-300 hover:scale-105">
              <span>همه محصولات</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </Link>
        </div>

        {/* Products Swiper */}
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={{ clickable: true }}
          mousewheel={true}
          keyboard={true}
          loop={false}
          spaceBetween={24}
          modules={[Pagination, Mousewheel, Keyboard, Navigation]}
          breakpoints={{
            320: { slidesPerView: 1.1 },
            480: { slidesPerView: 1.3 },
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2.5 },
            1280: { slidesPerView: 3 },
          }}
          className="panasonic-swiper"
        >
          {products.map((product, index) => (
            <SwiperSlide key={product.id}>
              <Link href={`/products/panasonic/${product.model}`}>
                <div
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Image Container */}
                  <div className="relative h-56 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <img
                      className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-700"
                      src={product.image}
                      alt={product.title}
                    />

                    {/* Floating Action Button */}
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <button className="w-full bg-gradient-to-r from-[#253359] to-purple-600 text-white py-3 rounded-xl font-xbold text-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                        مشاهده جزئیات
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Model Badge */}
                    <div className="inline-block mb-3 px-3 py-1 bg-gradient-to-r from-[#253359]/10 to-purple-600/10 rounded-lg">
                      <span className="text-[#253359] font-xbold text-xs">
                        {product.model}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-xbold text-[#0C0C0C] mb-2 group-hover:text-[#253359] transition-colors duration-300">
                      {product.title}
                    </h3>

                    {/* Capacity */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-600 font-xmedium">
                        ظرفیت: {product.capacity}
                      </span>
                    </div>

                    {/* Features */}
                    <div className="space-y-2 mb-4">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <svg
                            className="w-4 h-4 text-green-500 flex-shrink-0"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span className="text-xs text-gray-600 font-xmedium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-sm text-[#253359] font-xbold">
                        تماس بگیرید
                      </span>
                      <svg
                        className="w-5 h-5 text-[#253359] group-hover:translate-x-1 transition-transform"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </div>
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
                </div>
              </Link>
            </SwiperSlide>
          ))}

          {/* View All Slide */}
          <SwiperSlide>
            <Link href="/products/panasonic">
              <div className="h-full min-h-[450px] bg-gradient-to-br from-[#253359] via-[#1e2a4a] to-[#0f1525] rounded-2xl flex flex-col items-center justify-center p-8 text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-20 translate-x-20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 -translate-x-16"></div>

                <div className="relative z-10">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <svg
                      className="w-10 h-10 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-xbold text-white mb-3">
                    مشاهده همه
                  </h3>
                  <p className="text-white/70 font-xmedium text-sm mb-6">
                    محصولات بیشتری در انتظار شماست
                  </p>
                  <div className="inline-flex items-center gap-2 text-white font-xbold text-sm">
                    <span>کلیک کنید</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            {
              icon: <FaGlobe />,
              title: "تکنولوژی IP",
              desc: "سازگار با VoIP و SIP",
            },
            {
              icon: <FaPuzzlePiece />,
              title: "معماری مدولار",
              desc: "قابل ارتقا و انعطافپذیر",
            },
            {
              icon: <FaBuilding />,
              title: "مناسب سازمانهای بزرگ",
              desc: "ظرفیت تا 1120 داخلی",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="text-4xl text-[#253359]">{item.icon}</div>
                <div>
                  <h4 className="font-xbold text-[#253359] mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 font-xmedium">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .panasonic-swiper {
          padding: 20px 0 60px;
          overflow: visible;
        }

        .panasonic-swiper .swiper-pagination {
          bottom: 20px;
        }

        .panasonic-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #253359;
          opacity: 0.3;
          transition: all 0.3s;
        }

        .panasonic-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          width: 32px;
          border-radius: 6px;
          background: linear-gradient(to right, #253359, #9333ea);
        }

        @media (max-width: 1024px) {
          .panasonic-swiper .swiper-button-next,
          .panasonic-swiper .swiper-button-prev {
            display: none;
          }
        }

        .panasonic-swiper .swiper-button-next,
        .panasonic-swiper .swiper-button-prev {
          width: 48px;
          height: 48px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: all 0.3s;
        }

        .panasonic-swiper .swiper-button-next:hover,
        .panasonic-swiper .swiper-button-prev:hover {
          background: linear-gradient(to right, #253359, #9333ea);
          transform: scale(1.1);
        }

        .panasonic-swiper .swiper-button-next::after,
        .panasonic-swiper .swiper-button-prev::after {
          font-size: 20px;
          color: #253359;
          font-weight: bold;
        }

        .panasonic-swiper .swiper-button-next:hover::after,
        .panasonic-swiper .swiper-button-prev:hover::after {
          color: white;
        }
      `}</style>
    </div>
  );
}
