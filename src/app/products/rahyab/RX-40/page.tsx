import { Metadata } from "next";
import Rahyab40 from "@/products/rahyabRX/Rahyab40";
import Container from "@/components/container/Container";

export const metadata: Metadata = {
  title: "مرکز تلفن RX-40 | سانترال 16/8 تا 32/8 خط | رهیاب",
  description:
    "مرکز تلفن کامپیوتری RX-40 رهیاب با ظرفیت 16/8 قابل گسترش تا 32/8. مناسب شرکت‌های کوچک، کلینیک‌ها و دفاتر اداری. امکانات: Caller ID، دفترچه 7200 شماره، صورتحساب اتوماتیک. تماس: 021-88440345",
  keywords: [
    "RX-40",
    "مرکز تلفن RX-40",
    "سانترال RX-40",
    "قیمت RX-40",
    "سانترال کوچک",
    "مرکز تلفن 8 خط",
    "سانترال دفتر",
    "سانترال کلینیک",
    "رهیاب RX-40",
    "خرید سانترال ارزان",
  ],
  openGraph: {
    title: "مرکز تلفن RX-40 رهیاب - سانترال 16/4 تا 32/8 خط",
    description: "راهکار ایده‌آل برای شرکت‌های کوچک و دفاتر اداری",
    images: [
      {
        url: "https://myrahyab.ir/imageLanding/rx-40.jpg",
        width: 800,
        height: 600,
        alt: "مرکز تلفن رهیاب RX-40",
      },
    ],
    url: "https://myrahyab.ir/products/rx-40",
  },
  alternates: {
    canonical: "https://myrahyab.ir/products/rx-40",
  },
};

export default function RX40Page() {
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
        name: "RX-40",
        item: "https://myrahyab.ir/products/rx-40",
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
            name: "مرکز تلفن رهیاب RX-40",
            description:
              "مرکز تلفن کامپیوتری با ظرفیت 8 خط شهری و 16 خط داخلی قابل گسترش تا 32/8",
            image: ["https://myrahyab.ir/imageLanding/rx-40.jpg"],
            url: "https://myrahyab.ir/products/rx-40",
            sku: "RX-40",
            mpn: "RX-40",
            brand: {
              "@type": "Brand",
              name: "رهیاب",
              logo: "https://myrahyab.ir/logo.png",
            },
            offers: {
              "@type": "Offer",
              url: "https://myrahyab.ir/products/rx-40",
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
              ratingValue: "4.6",
              reviewCount: "32",
            },
            additionalProperty: [
              {
                "@type": "PropertyValue",
                name: "ظرفیت",
                value: "16/8 تا 32/8",
              },
              {
                "@type": "PropertyValue",
                name: "دفترچه تلفن",
                value: "7200 شماره",
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
          <Rahyab40 />
        </Container>
      </div>
    </>
  );
}
