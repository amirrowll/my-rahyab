import { Metadata } from "next";
import Rahyab608 from "@/products/rahyabRX/Rahyab608";
import Container from "@/components/container/Container";

export const metadata: Metadata = {
  title: "مرکز تلفن RX-608 | سانترال 16/64 تا 96/512 خط | رهیاب",
  description:
    "مرکز تلفن کامپیوتری RX-608 رهیاب با ظرفیت 8/64 قابل گسترش تا 96/512. مناسب بیمارستان‌های بزرگ، هتل‌های 5 ستاره و سازمان‌های دولتی. ضبط تلفن گویا 2 دقیقه، دفترچه 7200 شماره. تماس: 021-88440345",
  keywords: [
    "خرید RX-608",
    "قیمت RX-608",
    "سانترال 512 خط",
    "مرکز تلفن بیمارستان",
    "سانترال هتل 5 ستاره",
    "RX-608 رهیاب",
    "سانترال حرفه‌ای تهران",
    "گارانتی سانترال",
  ],
  openGraph: {
    title: "مرکز تلفن RX-608 رهیاب - ظرفیت 16/64 تا 96/512",
    description: "سیستم تلفن کامپیوتری حرفه‌ای با معماری مدولار",
    images: [
      {
        url: "https://myrahyab.ir/imageLanding/rx-608.jpg",
        width: 1200,
        height: 600,
        alt: "مرکز تلفن رهیاب RX-608",
      },
    ],
    url: "https://myrahyab.ir/products/rx-608",
  },
  alternates: {
    canonical: "https://myrahyab.ir/products/rx-608",
  },
};

export default function RX608Page() {
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
        name: "RX-608",
        item: "https://myrahyab.ir/products/rx-608",
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
            name: "مرکز تلفن رهیاب RX-608",
            description:
              "مرکز تلفن کامپیوتری با ظرفیت 8/64 قابل گسترش تا 96/512 خط",
            image: ["https://myrahyab.ir/imageLanding/rx-608.jpg"],
            url: "https://myrahyab.ir/products/rx-608",
            sku: "RX-608",
            mpn: "RX-608",
            brand: {
              "@type": "Brand",
              name: "رهیاب",
              logo: "https://myrahyab.ir/logo.png",
            },
            offers: {
              "@type": "Offer",
              url: "https://myrahyab.ir/products/rx-608",
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
              reviewCount: "41",
            },
            additionalProperty: [
              {
                "@type": "PropertyValue",
                name: "ظرفیت پایه",
                value: "16/64",
              },
              {
                "@type": "PropertyValue",
                name: "حداکثر ظرفیت",
                value: "96/512",
              },
              {
                "@type": "PropertyValue",
                name: "تلفن گویا",
                value: "2 دقیقه",
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
          <Rahyab608 />
        </Container>
      </div>
    </>
  );
}
