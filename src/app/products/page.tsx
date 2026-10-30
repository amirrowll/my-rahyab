"use client";

import Link from "next/link";
import { FiPhone, FiServer } from "react-icons/fi";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import { FaChartLine, FaNetworkWired } from "react-icons/fa";
import { gateways } from "@/data/gateways";

export default function ProductsPage() {
  const categories = [
    {
      id: "rahyab",
      title: "محصولات رهیاب",
      description: "سانترالهای دیجیتال و آنالوگ ساخت ایران",
      icon: <FaChartLine className="w-6 md:w-8 h-6 md:h-8" />,
      gradient: "from-[#253359] to-[#1a2440]",
      image: "/imageLanding/rahyabALL.jpg",
      subcategories: [
        { name: "سانترال RX", link: "/products/rahyab", count: "5 مدل" },
        { name: "سانترال RXD", link: "/products/rahyab", count: "2 مدل" },
        { name: "لوازم جانبی", link: "/products/rahyab", count: "متنوع" }
      ]
    },
    {
      id: "panasonic",
      title: "محصولات پاناسونیک",
      description: "سانترالهای حرفهای با کیفیت ژاپنی",
      icon: <FaNetworkWired className="w-6 md:w-8 h-6 md:h-8" />,
      gradient: "from-blue-600 to-blue-800",
      image: "/imageLanding/tda600.png",
      subcategories: [
        { name: "سانترال پرظرفیت", link: "/products/panasonic", count: "8+ مدل" },
        { name: "سانترال کم ظرفیت", link: "/products/panasonic/low-capacity", count: "6+ مدل" },
        { name: "سانترال تحت شبکه", link: "/products/panasonic/ip-pbx", count: "5+ مدل" }
      ]
    },
    {
      id: "phones",
      title: "گوشیهای تلفن",
      description: "انواع تلفنهای سازمانی و خانگی",
      icon: <FiPhone className="w-6 md:w-8 h-6 md:h-8" />,
      gradient: "from-purple-600 to-purple-800",
      image: "/imageLanding/KX-DT343.png",
      subcategories: [
        { name: "تلفن دیجیتال", link: "/products/phones/digital", count: "12+ مدل" },
        { name: "تلفن IP", link: "/products/phones/ip", count: "10+ مدل" },
        { name: "تلفن SIP", link: "/products/phones/sip", count: "9+ مدل" },
        { name: "تلفن آنالوگ", link: "/products/phones/analog", count: "10+ مدل" },
        { name: "تلفن بیسیم", link: "/products/phones/wireless", count: "7+ مدل" },
        { name: "تلفن کنفرانس", link: "/products/phones/conference", count: "1 مدل" }
      ]
    },
    {
      id: "voip",
      title: "تجهیزات VoIP",
      description: "گیتوی، سوییچ و تجهیزات تحت شبکه",
      icon: <FiServer className="w-6 md:w-8 h-6 md:h-8" />,
      gradient: "from-green-600 to-green-800",
      image: "/imageLanding/HT814.png",
      subcategories: [
        { name: "تلفنهای VoIP", link: "/products/voip", count: "32 محصول" },
        { name: "گیتوی VoIP", link: "/products/gateways", count: `${gateways.length} محصول` },
        { name: "سوییچهای شبکه", link: "#", count: "به زودی" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9ff] via-white to-[#f0f2ff]">
      <div className="relative bg-gradient-to-br from-[#0f1729] via-[#253359] to-[#1a2440] text-white py-12 md:py-16 overflow-hidden mt-20">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#253359]/40 rounded-full blur-[80px] md:blur-[100px] animate-pulse"></div>
          <div className="absolute top-1/4 right-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-[#1a2440]/40 rounded-full blur-[80px] md:blur-[100px] animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute inset-0 bg-[url('/imageLanding/Dot.svg')] opacity-[0.02]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center space-y-3 md:space-y-5">
            <div className="inline-flex items-center gap-2 px-4 md:px-5 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20">
              <div className="relative">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-2 h-2 bg-white rounded-full animate-ping"></div>
              </div>
              <span className="font-xbold text-xs md:text-sm">همه چیز برای ارتباطات شما</span>
            </div>
            
            <div className="space-y-2 md:space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-xbold leading-tight">
                <span className="text-white">دنیای کامل محصولات</span>
                <br />
                <span className="text-white/90">رهیاب و پاناسونیک</span>
              </h1>
              
              <p className="text-sm md:text-base lg:text-lg text-white/70 font-xmedium max-w-3xl mx-auto leading-relaxed">
                از سانترالهای دیجیتال و آنالوگ تا تجهیزات VoIP پیشرفته
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 pt-2">
              <div className="bg-white/10 backdrop-blur-xl px-4 md:px-6 py-2 md:py-3 rounded-xl border border-white/20">
                <div className="text-xl md:text-2xl font-xbold text-white">+100</div>
                <div className="text-xs md:text-sm font-xmedium text-white/60">محصول</div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl px-4 md:px-6 py-2 md:py-3 rounded-xl border border-white/20">
                <div className="text-xl md:text-2xl font-xbold text-white">30+</div>
                <div className="text-xs md:text-sm font-xmedium text-white/60">سال تجربه</div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl px-4 md:px-6 py-2 md:py-3 rounded-xl border border-white/20">
                <div className="text-xl md:text-2xl font-xbold text-white">24/7</div>
                <div className="text-xs md:text-sm font-xmedium text-white/60">پشتیبانی</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {categories.map((category, idx) => (
            <div
              key={category.id}
              className="group relative bg-white rounded-2xl md:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden"
              style={{
                animation: `fadeInUp 0.6s ease-out ${idx * 0.15}s both`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`}></div>
              
              <div className="relative">
                <div className="relative h-48 md:h-64 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10"></div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-5`}></div>
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-contain p-4 md:p-8 transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute top-3 md:top-4 right-3 md:right-4 w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br ${category.gradient} rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500`}>
                    {category.icon}
                  </div>
                </div>

                <div className="p-5 md:p-8">
                  <div className="mb-4 md:mb-6">
                    <h2 className="text-xl md:text-3xl font-xbold text-[#253359] mb-2 md:mb-3 group-hover:text-[#1a2440] transition-colors">
                      {category.title}
                    </h2>
                    <p className="text-[#606060] font-xmedium text-sm md:text-lg leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  <div className="space-y-2 md:space-y-3">
                    {category.subcategories.map((sub, subIdx) => (
                      <Link
                        key={subIdx}
                        href={sub.link}
                        className="flex items-center justify-between p-3 md:p-4 bg-gradient-to-r from-[#f8f9ff] via-white to-[#f8f9ff] rounded-lg md:rounded-xl hover:shadow-lg transition-all duration-500 group/item border-2 border-transparent hover:border-[#253359]/20 transform hover:-translate-y-1"
                        style={{
                          animation: `slideInRight 0.5s ease-out ${subIdx * 0.1}s both`
                        }}
                      >
                        <div className="flex items-center gap-3 md:gap-4">
                          <div className={`w-8 md:w-10 h-8 md:h-10 bg-gradient-to-br ${category.gradient} rounded-lg flex items-center justify-center text-white font-xbold text-xs md:text-sm group-hover/item:scale-110 group-hover/item:rotate-6 transition-all duration-300 shadow-md`}>
                            {subIdx + 1}
                          </div>
                          <span className="font-xbold text-[#253359] text-sm md:text-lg group-hover/item:text-[#1a2440] transition-colors">
                            {sub.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3">
                          <span className="text-xs md:text-sm font-xbold text-white bg-gradient-to-r from-[#253359] to-[#1a2440] px-3 md:px-4 py-1.5 md:py-2 rounded-full shadow-md">
                            {sub.count}
                          </span>
                          <div className="w-8 md:w-10 h-8 md:h-10 bg-[#253359]/10 rounded-full flex items-center justify-center group-hover/item:bg-[#253359] transition-all duration-300">
                            <HiOutlineArrowLeft className="text-[#253359] group-hover/item:text-white group-hover/item:translate-x-[-4px] transition-all duration-300 text-sm md:text-base" />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}</style>

        <div className="mt-8 md:mt-12 grid grid-cols-3 gap-3 md:gap-6">
          <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 text-center border-2 border-[#253359]/10">
            <div className="w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br from-[#253359] to-[#1a2440] rounded-full flex items-center justify-center text-white mx-auto mb-2 md:mb-4 text-lg md:text-2xl font-xbold">
              +30
            </div>
            <h3 className="font-xbold text-[#253359] text-sm md:text-lg mb-1 md:mb-2">سال تجربه</h3>
            <p className="text-[#606060] font-xmedium text-xs md:text-sm">در تولید و توزیع تجهیزات</p>
          </div>

          <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 text-center border-2 border-[#253359]/10">
            <div className="w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white mx-auto mb-2 md:mb-4 text-lg md:text-2xl font-xbold">
              10
            </div>
            <h3 className="font-xbold text-[#253359] text-sm md:text-lg mb-1 md:mb-2">سال پشتیبانی</h3>
            <p className="text-[#606060] font-xmedium text-xs md:text-sm">خدمات پس از فروش</p>
          </div>

          <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 text-center border-2 border-[#253359]/10">
            <div className="w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center text-white mx-auto mb-2 md:mb-4 text-lg md:text-2xl font-xbold">
              1
            </div>
            <h3 className="font-xbold text-[#253359] text-sm md:text-lg mb-1 md:mb-2">سال گارانتی</h3>
            <p className="text-[#606060] font-xmedium text-xs md:text-sm">برای تمام محصولات</p>
          </div>
        </div>

        <div className="mt-8 md:mt-12">
          <div className="bg-gradient-to-r from-[#253359] to-[#1a2440] rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 md:w-64 h-48 md:h-64 bg-white/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-xl md:text-3xl font-xbold text-white mb-3 md:mb-4">
                نیاز به مشاوره دارید؟
              </h3>
              <p className="text-white/90 font-xmedium text-sm md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
                کارشناسان ما آماده راهنمایی شما برای انتخاب بهترین تجهیزات متناسب با نیاز کسبوکارتان هستند
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
                <Link
                  href="/contactUs"
                  className="w-full sm:w-auto bg-white text-[#253359] px-6 md:px-8 py-3 md:py-4 rounded-xl font-xbold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg text-sm md:text-base"
                >
                  تماس با ما
                </Link>
                <a
                  href="tel:09125354811"
                  className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-xbold hover:bg-white/20 transition-all duration-300 border-2 border-white/30 text-sm md:text-base"
                >
                  021-88440345
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
