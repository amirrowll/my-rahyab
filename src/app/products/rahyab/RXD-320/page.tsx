import { Metadata } from "next";
import Rahyab320 from "@/products/rahyabRX/Rahyab320";
import Container from "@/components/container/Container";

export const metadata: Metadata = {
  title: "مرکز تلفن دیجیتال RXD-320 | سانترال دیجیتال با ترانک | رهیاب",
  description:
    "مرکز تلفن دیجیتال RXD-320 رهیاب با قابلیت اتصال به ترانک‌های دیجیتال، DID System، VoIP و شبکه‌های بانکی. مناسب سازمان‌های بزرگ، هتل‌ها و بیمارستان‌ها. 3 نوع دفترچه تلفن. مشاوره: 021-88440345",
  keywords: [
    "RXD-320",
    "مرکز تلفن دیجیتال",
    "سانترال دیجیتال",
    "ترانک دیجیتال",
    "DID System",
    "VoIP رهیاب",
    "سانترال IP",
    "مرکز تلفن هتل",
    "سانترال بیمارستان",
    "رهیاب دیجیتال",
  ],
  openGraph: {
    title: "مرکز تلفن دیجیتال RXD-320 رهیاب - سیستم پیشرفته",
    description: "نسل جدید مراکز تلفن دیجیتال با ترانک دیجیتال و VoIP",
    images: [
      {
        url: "https://myrahyab.ir/imageLanding/rxd-320.jpg",
        width: 800,
        height: 600,
        alt: "مرکز تلفن دیجیتال رهیاب RXD-320",
      },
    ],
    url: "https://myrahyab.ir/products/rxd-320",
  },
  alternates: {
    canonical: "https://myrahyab.ir/products/rxd-320",
  },
};

export default function RXD320Page() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "خانه",
        item: "https://myrahyab.ir",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "محصولات",
        item: "https://myrahyab.ir/products",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "RXD-320",
        item: "https://myrahyab.ir/products/rxd-320",
      },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "مرکز تلفن دیجیتال رهیاب RXD-320",
            description:
              "مرکز تلفن دیجیتال پیشرفته با قابلیت اتصال به ترانک‌های دیجیتال، DID و VoIP",
            image: ["https://myrahyab.ir/imageLanding/rxd-320.jpg"],
            url: "https://myrahyab.ir/products/rxd-320",
            sku: "RXD-320",
            mpn: "RXD-320",
            brand: {
              "@type": "Brand",
              name: "رهیاب",
            },
            manufacturer: {
              "@type": "Organization",
              name: "شرکت رهیاب",
              logo: "https://myrahyab.ir/logo.png",
            },
            offers: {
              "@type": "Offer",
              url: "https://myrahyab.ir/products/rxd-320",
              priceCurrency: "IRR",
              price: "0",
              itemCondition: "https://schema.org/NewCondition",
              availability: "https://schema.org/InStock",
              seller: {
                "@type": "Organization",
                name: "شرکت رهیاب",
                url: "https://myrahyab.ir",
                telephone: "+98-21-88440345",
              },
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "52",
            },
            additionalProperty: [
              {
                "@type": "PropertyValue",
                name: "نوع سیستم",
                value: "دیجیتال",
              },
              {
                "@type": "PropertyValue",
                name: "ترانک دیجیتال",
                value: "پشتیبانی کامل",
              },
              {
                "@type": "PropertyValue",
                name: "DID",
                value: "بله",
              },
              {
                "@type": "PropertyValue",
                name: "VoIP",
                value: "بله",
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <div className="mt-[80px] relative ">
        <Container>
          <Rahyab320 />
        </Container>
      </div>
    </>
  );
}
