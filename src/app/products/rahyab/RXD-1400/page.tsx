import { Metadata } from "next";
import Rahyab1400 from "@/products/rahyabRX/Rahyab1400";
import Container from "@/components/container/Container";

export const metadata: Metadata = {
  title: "مرکز تلفن دیجیتال RXD-1400 | سانترال ظرفیت بالا | رهیاب",
  description:
    "مرکز تلفن دیجیتال RXD-1400 رهیاب با ظرفیت بالا برای هتل‌های بزرگ، بیمارستان‌ها و سازمان‌های گسترده. قابلیت‌ها: ترانک دیجیتال، 3 دفترچه تلفن، اپراتور نامحدود، شبکه بانکی. تماس: 021-88440345",
  keywords: [
    "RXD-1400",
    "مرکز تلفن ظرفیت بالا",
    "سانترال بیمارستان",
    "سانترال هتل 5 ستاره",
    "مرکز تلفن دیجیتال بزرگ",
    "سانترال سازمانی",
    "رهیاب RXD-1400",
    "خرید سانترال حرفه‌ای",
  ],
  openGraph: {
    title: "مرکز تلفن دیجیتال RXD-1400 رهیاب - ظرفیت بالا",
    description: "قدرتمندترین مرکز تلفن دیجیتال رهیاب برای سازمان‌های بزرگ",
    images: [
      {
        url: "https://myrahyab.ir/imageLanding/rxd-1400.jpg",
        width: 800,
        height: 600,
        alt: "مرکز تلفن دیجیتال رهیاب RXD-1400",
      },
    ],
    url: "https://myrahyab.ir/products/rxd-1400",
  },
  alternates: {
    canonical: "https://myrahyab.ir/products/rxd-1400",
  },
};

export default function RXD1400Page() {
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
        name: "RXD-1400",
        item: "https://myrahyab.ir/products/rxd-1400",
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
            name: "مرکز تلفن دیجیتال رهیاب RXD-1400",
            description:
              "قدرتمندترین مرکز تلفن دیجیتال با ظرفیت بالا برای سازمان‌های بزرگ",
            image: ["https://myrahyab.ir/imageLanding/rxd-1400.jpg"],
            url: "https://myrahyab.ir/products/rxd-1400",
            sku: "RXD-1400",
            mpn: "RXD-1400",
            brand: {
              "@type": "Brand",
              name: "رهیاب",
              logo: "https://myrahyab.ir/logo.png",
            },
            manufacturer: {
              "@type": "Organization",
              name: "شرکت رهیاب",
            },
            offers: {
              "@type": "Offer",
              url: "https://myrahyab.ir/products/rxd-1400",
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
              ratingValue: "4.9",
              reviewCount: "67",
            },
            additionalProperty: [
              {
                "@type": "PropertyValue",
                name: "نوع سیستم",
                value: "دیجیتال - ظرفیت بالا",
              },
              {
                "@type": "PropertyValue",
                name: "دفترچه تلفن",
                value: "3 نوع مجزا",
              },
              {
                "@type": "PropertyValue",
                name: "اپراتور",
                value: "نامحدود",
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
          <Rahyab1400 />
        </Container>
      </div>
    </>
  );
}
