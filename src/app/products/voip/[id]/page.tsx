import { voipPhones } from "@/data/voipPhones";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import VoIPDetailClient from "./VoIPDetailClient";

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return voipPhones.map((phone) => ({
    id: phone.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const phone = voipPhones.find((p) => p.id === id);

  if (!phone) {
    return {
      title: "تلفن ویپ یافت نشد | رهیاب",
    };
  }

  return {
    title: `${phone.name} | تلفن تحت شبکه ${phone.brand} - قیمت و خرید`,
    description: `خرید و قیمت ${phone.name} برند ${phone.brand} (${phone.category}). ${phone.description.slice(0, 150)}... گارانتی رهیاب و ۱۰ سال خدمات پس از فروش. تلفن: 021-88440345`,
    keywords: [
      phone.name,
      `تلفن ${phone.brand}`,
      `تلفن ویپ ${phone.brand}`,
      "تلفن تحت شبکه",
      "IP Phone",
      "تلفن SIP",
      "قیمت تلفن ویپ",
      "خرید تلفن ویپ",
      "رهیاب",
    ],
    openGraph: {
      title: `${phone.name} | تلفن VoIP ${phone.brand}`,
      description: phone.description,
      images: [phone.image],
      url: `https://myrahyab.ir/products/voip/${phone.id}`,
    },
    alternates: {
      canonical: `https://myrahyab.ir/products/voip/${phone.id}`,
    },
  };
}

export default async function VoIPPhoneDetailPage({ params }: Props) {
  const { id } = await params;
  const phone = voipPhones.find((p) => p.id === id);

  if (!phone) {
    notFound();
  }

  return <VoIPDetailClient phone={phone} />;
}
