import { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";
import { FaBookOpen, FaClock, FaCalendarAlt, FaArrowLeft, FaCheckCircle } from "react-icons/fa";

export const metadata: Metadata = {
  title: "مجله تخصصی سانترال، ویپ و مخابرات | وبلاگ شرکت رهیاب",
  description:
    "مجموعه مقالات تخصصی، راهنمای خرید و مقایسه انواع سانترال پاناسونیک، سیستم‌های تلفنی ویپ (VoIP)، گیت‌وی‌ها، تلفن‌های تحت شبکه و مراکز تلفن بومی رهیاب. تماس: 021-88440345",
  keywords: [
    "وبلاگ سانترال",
    "مقالات سانترال پاناسونیک",
    "راهنمای خرید ویپ",
    "آموزش سانترال",
    "مقایسه سانترال",
    "قیمت سانترال پاناسونیک",
    "تلفن ویپ",
    "گیت وی ویپ",
    "رهیاب"
  ],
  openGraph: {
    title: "مجله تخصصی سانترال و ویپ | رهیاب",
    description: "جامع‌ترین راهنماهای خرید، مقایسه و آموزش سانترال پاناسونیک و تلفن‌های تحت شبکه ویپ",
    url: "https://myrahyab.ir/blog",
    siteName: "رهیاب",
    type: "website",
  },
  alternates: {
    canonical: "https://myrahyab.ir/blog",
  },
};

export default function BlogIndexPage() {
  const categories = [
    "همه مقالات",
    "سانترال پاناسونیک",
    "تجهیزات VoIP",
    "آموزش و ترفندها",
    "تلفن‌های اداری",
    "مقایسه تخصصی",
    "گیت‌وی‌ها"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9ff] via-white to-[#f0f2ff] py-6 md:py-10 font-xmedium">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#253359] via-[#1a2542] to-[#0f172a] text-white p-8 md:p-14 mb-12 shadow-2xl">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-xbold text-blue-200 mb-4 border border-white/15">
              <FaBookOpen />
              <span>پایگاه دانش و مقالات تخصصی مخابرات</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-xbold mb-4 leading-tight">
              راهنمای تخصصی سانترال، ویپ و تجهیزات ارتباطی
            </h1>

            <p className="text-white/80 text-base md:text-lg leading-8 font-xregular mb-6">
              تحلیل و مقایسه بی‌طرفانه سیستم‌های تلفنی، بررسی دقیق انواع سانترال پاناسونیک، نحوه مهاجرت به فناوری ویپ (VoIP) و راهنمای خرید بهترین گوشی‌ها و گیت‌وی‌ها از زبان متخصصان با ۳۰ سال تجربه.
            </p>

            <div className="flex flex-wrap gap-4 text-xs text-white/90">
              <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl">
                <FaCheckCircle className="text-emerald-400" />
                <span>بررسی موشکافانه مدل‌های TES824، TDA و NS500</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl">
                <FaCheckCircle className="text-emerald-400" />
                <span>مشاوره رایگان تلفنی: ۰۲۱-۸۸۴۴۰۳۴۵</span>
              </div>
            </div>
          </div>
        </div>

        {/* لیست مقالات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-3xl border border-slate-100 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-1.5"
            >
              {/* تصویر و بج دسته‌بندی */}
              <div className="relative h-56 overflow-hidden bg-slate-50 flex items-center justify-center p-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 right-4 bg-[#253359] text-white text-xs px-3 py-1 rounded-full shadow-md font-xbold">
                  {post.category}
                </span>
              </div>

              {/* محتوای کارت */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt className="text-slate-400" />
                      {post.publishDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaClock className="text-slate-400" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg md:text-xl font-xbold text-slate-900 group-hover:text-blue-700 transition-colors mb-3 leading-snug">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="text-xs md:text-sm text-slate-600 font-xregular line-clamp-3 leading-6 mb-4">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <span className="text-xs text-slate-500">{post.author}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-xbold text-[#253359] hover:text-blue-600 transition-colors group-hover:translate-x-[-4px]"
                  >
                    <span>مطالعه کامل</span>
                    <FaArrowLeft className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* بنر مشاوره پایین صفحه مقالات */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-right">
            <h3 className="text-xl md:text-2xl font-xbold text-[#253359] mb-2">
              هنوز در انتخاب سانترال یا سیستم ویپ مطمئن نیستید؟
            </h3>
            <p className="text-sm md:text-base text-slate-600 font-xregular">
              کارشناسان شرکت رهیاب با ۳۰ سال سابقه در مخابرات آماده ارائه مشاوره رایگان تلفنی و برآورد ظرفیت دقیق سازمان شما هستند.
            </p>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <a
              href="tel:09125354811"
              className="px-6 py-3.5 bg-[#253359] text-white rounded-2xl font-xbold hover:bg-[#1a2542] transition-all shadow-lg hover:shadow-blue-900/30 text-sm"
            >
              تماس مستقیم: ۰۹۱۲۵۳۵۴۸۱۱
            </a>
            <a
              href="tel:02188440345"
              className="px-6 py-3.5 bg-white border border-slate-200 text-[#253359] rounded-2xl font-xbold hover:bg-slate-50 transition-all text-sm"
            >
              دفتر فروش: ۰۲۱-۸۸۴۴۰۳۴۵
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
