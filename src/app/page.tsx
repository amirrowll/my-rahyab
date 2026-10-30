import Container from "@/components/container/Container";
import Features from "@/components/feature/Features";
import Header from "@/components/header/Header";
import ProductsShowcase from "@/components/products/ProductsShowcase";
import ProductsRahyab from "@/products/productsRahyab/ProductsRahyab";
import RahyabAccessories from "@/products/productsRahyab/RahyabAccessories";
import PhoneCategories from "@/components/phones/PhoneCategories";
import VoIPSection from "@/components/voip/VoIPSection";
import CustomerReviewsSection from "@/components/reviews/CustomerReviewsSection";
import HomeBlogSection from "@/components/blog/HomeBlogSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "رهیاب | مرکز تلفن، سانترال پاناسونیک، ویپ (VoIP) و تجهیزات ارتباطی",
  description: "شرکت رهیاب با ۳۰ سال سابقه، تولیدکننده مرکز تلفن ایرانی RX و RXD و مرجع تخصصی فروش، نصب و تعمیر انواع سانترال پاناسونیک (کم‌ظرفیت، پرظرفیت و تحت شبکه)، تلفن‌های ویپ و گیت‌وی‌ها با گارانتی معتبر. تماس: 021-88440345",
  keywords: [
    "رهیاب",
    "سانترال پاناسونیک",
    "مرکز تلفن",
    "خرید سانترال پاناسونیک",
    "قیمت سانترال پاناسونیک",
    "سانترال کم ظرفیت",
    "KX-TES824",
    "سانترال TDA100",
    "سانترال NS500",
    "تلفن ویپ",
    "VoIP",
    "گیت وی ویپ",
    "تلفن گرنداستریم",
    "تلفن یالینک",
    "RX-112",
    "RX-40",
    "RXD-320",
    "سانترال تهران"
  ],
  openGraph: {
    title: "رهیاب | مرکز تلفن، سانترال پاناسونیک و تجهیزات VoIP",
    description: "تولید و فروش مرکز تلفن، سانترال پاناسونیک و تجهیزات ویپ با گارانتی و ۱۰ سال خدمات پس از فروش",
    url: "https://myrahyab.ir",
    siteName: "رهیاب",
    locale: "fa_IR",
    type: "website",
  },
};

export default function Home() {
  return (
    <div>
      <Container>
        <Header/>
        <Features/>
        <ProductsRahyab/>
        <ProductsShowcase/>
        <RahyabAccessories/>
        <PhoneCategories/>
        <VoIPSection/>
        <CustomerReviewsSection/>
        <HomeBlogSection/>
      </Container>
    </div>
  );
}
