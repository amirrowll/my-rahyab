import { blogPosts } from "@/data/blogPosts";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaClock,
  FaUser,
  FaPhoneAlt,
  FaCheckCircle,
  FaQuestionCircle,
  FaShareAlt,
  FaTag,
} from "react-icons/fa";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "مقاله یافت نشد | رهیاب",
    };
  }

  const url = `https://myrahyab.ir/blog/${post.slug}`;

  return {
    title: `${post.title} | مجله تخصصی رهیاب`,
    description: post.excerpt,
    keywords: post.keywords,
    authors: [{ name: post.author, url: "https://myrahyab.ir" }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      siteName: "رهیاب",
      locale: "fa_IR",
      type: "article",
      publishedTime: post.publishDate,
      authors: [post.author],
      images: [
        {
          url: post.image.startsWith("http")
            ? post.image
            : `https://myrahyab.ir${post.image}`,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [
        post.image.startsWith("http")
          ? post.image
          : `https://myrahyab.ir${post.image}`,
      ],
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const articleUrl = `https://myrahyab.ir/blog/${post.slug}`;

  // اسکیما ساختاریافته Article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.image.startsWith("http")
      ? post.image
      : `https://myrahyab.ir${post.image}`,
    author: {
      "@type": "Organization",
      name: "شرکت رهیاب",
      url: "https://myrahyab.ir",
    },
    publisher: {
      "@type": "Organization",
      name: "شرکت رهیاب",
      logo: {
        "@type": "ImageObject",
        url: "https://myrahyab.ir/logo.png",
      },
    },
    datePublished: "2024-11-01",
    dateModified: "2024-11-01",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
  };

  // اسکیما ساختاریافته FAQPage برای پاسخ‌های کشویی در نتایج گوگل
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.content.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  // اسکیما BreadcrumbList
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "صفحه اصلی",
        item: "https://myrahyab.ir",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "وبلاگ و مقالات",
        item: "https://myrahyab.ir/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: articleUrl,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#fafbff] py-6 md:py-10 font-xmedium text-slate-800">
      {/* اسکیماهای JSON-LD برای سئوی برتر گوگل */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-[1320px] mx-auto px-4 md:px-6">
        {/* نوار بردکرامب و بازگشت */}
        <div className="flex items-center justify-between py-4 mb-4 border-b border-slate-200/80 text-xs md:text-sm text-slate-500">
          <nav className="flex items-center gap-2">
            <Link href="/" className="hover:text-[#253359] transition-colors">
              خانه
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#253359] transition-colors">
              وبلاگ
            </Link>
            <span>/</span>
            <span className="text-slate-800 font-xbold line-clamp-1 max-w-[200px] md:max-w-md">
              {post.title}
            </span>
          </nav>

          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-[#253359] hover:text-blue-700 transition-colors font-xbold"
          >
            <FaArrowRight /> بازگشت به مقالات
          </Link>
        </div>

        {/* هدر مقاله */}
        <header className="mb-10 text-right">
          <div className="inline-block px-3.5 py-1.5 rounded-full bg-[#253359]/10 text-[#253359] font-xbold text-xs mb-4">
            {post.category}
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-xbold text-[#1e2a4a] mb-5 leading-tight md:leading-snug">
            {post.title}
          </h1>

          <p className="text-base md:text-lg text-slate-600 font-xregular leading-8 mb-6 max-w-4xl">
            {post.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-xs md:text-sm text-slate-500 pb-6 border-b border-slate-200">
            <div className="flex items-center gap-1.5">
              <FaUser className="text-slate-400" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <FaCalendarAlt className="text-slate-400" />
              <span>تاریخ انتشار: {post.publishDate}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <FaClock className="text-slate-400" />
              <span>زمان تقریبی مطالعه: {post.readTime}</span>
            </div>
          </div>
        </header>

        {/* بدنه دو ستونه (محتوا + سایدبار هوشمند) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* سایدبار سمت راست: فهرست مطالب و محصولات پیشنهادی */}
          <aside className="lg:col-span-4 order-2 lg:order-1 space-y-6 lg:sticky lg:top-28">
            {/* فهرست مطالب مقاله */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm">
              <h3 className="font-xbold text-base text-[#253359] mb-4 pb-3 border-b border-slate-100 flex items-center gap-2">
                <span>📑 سرفصل‌های این مقاله</span>
              </h3>
              <ul className="space-y-2.5 text-xs md:text-sm font-xmedium text-slate-600">
                {post.tableOfContents.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={`#${item.id}`}
                      className="hover:text-[#253359] hover:pr-1 transition-all block leading-6"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* جعبه محصولات و لینک‌های مرتبط به کاتالوگ فروش */}
            <div className="bg-gradient-to-br from-[#253359] to-[#141d33] text-white rounded-3xl p-6 shadow-xl">
              <span className="text-[11px] font-xbold px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-200 border border-blue-400/30">
                کاتالوگ و تجهیزات مرتبط
              </span>
              <h4 className="text-lg font-xbold mt-3 mb-2">مشاهده و خرید در رهیاب</h4>
              <p className="text-xs text-white/80 leading-5 mb-4">
                تجهیزات معرفی‌شده در این مقاله را با ۱ سال گارانتی و ۱۰ سال خدمات از رهیاب تهیه فرمایید:
              </p>
              <div className="space-y-2.5">
                {post.content.relatedProductLinks.map((prod, idx) => (
                  <Link
                    key={idx}
                    href={prod.url}
                    className="flex items-center justify-between p-3 rounded-2xl bg-white/10 hover:bg-white/20 transition-colors text-xs font-xbold text-white group"
                  >
                    <span className="group-hover:text-blue-200 transition-colors">
                      {prod.title}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/20 text-white">
                      {prod.badge}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* باکس تماس و استعلام فوری */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm text-center">
              <h4 className="font-xbold text-slate-800 text-base mb-2">
                نیاز به راهنمایی در انتخاب سیستم دارید؟
              </h4>
              <p className="text-xs text-slate-500 mb-4 leading-5">
                کارشناسان ارشد فنی رهیاب در کنار شما هستند.
              </p>
              <div className="space-y-2">
                <a
                  href="tel:09125354811"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-[#253359] text-white font-xbold text-sm hover:bg-[#1a2542] transition-colors shadow-md"
                >
                  <FaPhoneAlt className="w-3.5 h-3.5" />
                  <span>۰۹۱۲۵۳۵۴۸۱۱ (پاسخگوی مستقیم)</span>
                </a>
                <a
                  href="tel:02188440345"
                  className="w-full block py-2.5 rounded-2xl border border-slate-200 text-slate-700 font-xbold text-xs hover:bg-slate-50 transition-colors"
                >
                  تلفن دفتر مرکزی: ۰۲۱-۸۸۴۴۰۳۴۵
                </a>
              </div>
            </div>
          </aside>

          {/* محتوای اصلی مقاله */}
          <main className="lg:col-span-8 order-1 lg:order-2 bg-white rounded-3xl p-6 md:p-10 border border-slate-200/80 shadow-sm space-y-10">
            {/* تصویر شاخص */}
            <div className="h-64 md:h-96 rounded-2xl overflow-hidden bg-slate-50 flex items-center justify-center p-6 border border-slate-100">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* بخش مقدمه */}
            <div id="intro" className="space-y-4">
              {post.content.intro.map((p, idx) => (
                <p key={idx} className="text-base md:text-lg text-slate-700 leading-9 font-xregular text-justify">
                  {p}
                </p>
              ))}
            </div>

            {/* بخش‌های محتوایی */}
            {post.content.sections.map((section) => (
              <section key={section.id} id={section.id} className="pt-4 space-y-4">
                <h2 className="text-xl md:text-2xl font-xbold text-[#253359] pb-2 border-b border-slate-100">
                  {section.heading}
                </h2>

                {section.paragraphs.map((p, idx) => (
                  <p key={idx} className="text-base text-slate-700 leading-8 font-xregular text-justify">
                    {p}
                  </p>
                ))}

                {/* لیست بالت‌دار در صورت وجود */}
                {section.list && (
                  <ul className="space-y-2 pr-4">
                    {section.list.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm md:text-base text-slate-700">
                        <FaCheckCircle className="text-emerald-500 w-4 h-4 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* جدول مقایسه‌ای در صورت وجود */}
                {section.table && (
                  <div className="overflow-x-auto my-6 rounded-2xl border border-slate-200 shadow-sm">
                    <table className="w-full text-right text-xs md:text-sm">
                      <thead className="bg-[#253359] text-white">
                        <tr>
                          {section.table.headers.map((th, idx) => (
                            <th key={idx} className="p-3.5 font-xbold whitespace-nowrap">
                              {th}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 bg-white">
                        {section.table.rows.map((row, rIdx) => (
                          <tr
                            key={rIdx}
                            className={rIdx % 2 === 0 ? "bg-slate-50/60" : "bg-white"}
                          >
                            {row.map((cell, cIdx) => (
                              <td
                                key={cIdx}
                                className={`p-3.5 font-xmedium ${
                                  cIdx === 0 ? "font-xbold text-[#253359]" : "text-slate-700"
                                }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* باکس کال‌اوت نکته در صورت وجود */}
                {section.callout && (
                  <div className="p-5 rounded-2xl bg-amber-50/80 border-r-4 border-amber-500 text-amber-900 text-sm md:text-base font-xmedium leading-7 my-4">
                    {section.callout.text}
                  </div>
                )}
              </section>
            ))}

            {/* بخش پرسش‌های متداول (FAQ) با اسکیما */}
            <section id="faqs" className="pt-8 border-t border-slate-200 space-y-6">
              <div className="flex items-center gap-2">
                <FaQuestionCircle className="text-2xl text-[#253359]" />
                <h3 className="text-xl md:text-2xl font-xbold text-[#253359]">
                  پرسش‌های متداول مشتریان
                </h3>
              </div>

              <div className="space-y-4">
                {post.content.faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2"
                  >
                    <h4 className="font-xbold text-slate-900 text-sm md:text-base">
                      ❓ {faq.question}
                    </h4>
                    <p className="text-xs md:text-sm text-slate-600 font-xregular leading-7 pr-4">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* برچسب‌های کلمات کلیدی سئو */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs">
              <span className="flex items-center gap-1 text-slate-400 font-xbold">
                <FaTag /> کلمات کلیدی:
              </span>
              {post.keywords.map((kw, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full hover:bg-slate-200 transition-colors"
                >
                  {kw}
                </span>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
