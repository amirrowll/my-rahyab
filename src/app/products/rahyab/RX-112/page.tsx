import { Metadata } from "next";
import Rahyab112 from "@/products/rahyabRX/Rahyab112";
import Container from "@/components/container/Container";

export const metadata: Metadata = {
  title: "مرکز تلفن RX-112 | سانترال 8/40 تا 8/104 خط | رهیاب",
  description:
    "مرکز تلفن کامپیوتری RX-112 رهیاب با ظرفیت 8/40 قابل گسترش تا 8/104. مناسب سازمان‌های متوسط و بزرگ. امکانات: Caller ID، برق اضطراری، دفترچه 7200 شماره، اپراتور کامپیوتری. گارانتی یک سال + 10 سال پشتیبانی. قیمت و مشاوره: 021-88440345",
  keywords: [
    "RX-112",
    "مرکز تلفن RX-112",
    "سانترال RX-112",
    "قیمت RX-112",
    "خرید سانترال متوسط",
    "مرکز تلفن 104 خط",
    "سانترال 8 خط شهری",
    "رهیاب RX-112",
    "مرکز تلفن کامپیوتری",
    "سانترال شرکتی",
    "تلفن سازمانی",
  ],
  openGraph: {
    title: "مرکز تلفن RX-112 رهیاب - سانترال 8/40 تا 8/104 خط",
    description:
      "مرکز تلفن کامپیوتری برای سازمان‌های متوسط با گارانتی و پشتیبانی 10 ساله",
    images: [
      {
        url: "https://myrahyab.ir/imageLanding/rx-112.jpg",
        width: 800,
        height: 600,
        alt: "مرکز تلفن رهیاب RX-112",
      },
    ],
    url: "https://myrahyab.ir/products/rx-112",
  },
  alternates: {
    canonical: "https://myrahyab.ir/products/rx-112",
  },
};

export default function RX112Page() {
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
        name: "RX-112",
        item: "https://myrahyab.ir/products/rx-112",
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
            name: "مرکز تلفن رهیاب RX-112",
            description:
              "مرکز تلفن کامپیوتری با ظرفیت 8 خط شهری و 40 خط داخلی قابل گسترش تا 8/104",
            image: ["https://myrahyab.ir/imageLanding/rx-112.jpg"],
            "url": "https://myrahyab.ir/products/rx-112",
            sku: "RX-112",
            mpn: "RX-112",
            brand: {
              "@type": "Brand",
              name: "رهیاب",
              logo: "https://myrahyab.ir/logo.png",
            },
            manufacturer: {
              "@type": "Organization",
              name: "شرکت رهیاب",
              url: "https://myrahyab.ir",
            },
            offers: {
              "@type": "Offer",
              url: "https://myrahyab.ir/products/rx-112",
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
              ratingValue: "4.7",
              reviewCount: "45",
              bestRating: "5",
              worstRating: "1",
            },
            additionalProperty: [
              {
                "@type": "PropertyValue",
                name: "ظرفیت خطوط شهری",
                value: "8",
              },
              {
                "@type": "PropertyValue",
                name: "ظرفیت خطوط داخلی",
                value: "40 تا 104",
              },
              {
                "@type": "PropertyValue",
                name: "دفترچه تلفن",
                value: "7200 شماره",
              },
              {
                "@type": "PropertyValue",
                name: "گارانتی",
                value: "1 سال",
              },
              {
                "@type": "PropertyValue",
                name: "پشتیبانی",
                value: "10 سال",
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
          <Rahyab112 />
        </Container>
      </div>
    </>
  );
}
