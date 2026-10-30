import { gateways } from "@/data/gateways";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import GatewayDetailClient from "./GatewayDetailClient";

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return gateways.map((g) => ({
    id: g.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const gateway = gateways.find((g) => g.id === id);

  if (!gateway) {
    return {
      title: "گیت وی ویپ یافت نشد | رهیاب",
    };
  }

  return {
    title: `${gateway.name} | گیت وی ویپ ${gateway.brand} - قیمت و خرید`,
    description: `${gateway.name} مدل ${gateway.model}. ${gateway.description.slice(0, 150)}... با گارانتی رهیاب و ۱۰ سال خدمات پس از فروش. تلفن: 021-88440345`,
    keywords: [
      gateway.name,
      gateway.model,
      `گیت وی ${gateway.brand}`,
      "گیت وی ویپ",
      "گیتوی FXO",
      "گیتوی FXS",
      "خرید گیت وی",
      "قیمت گیت وی",
      "رهیاب",
    ],
    openGraph: {
      title: `${gateway.name} | گیت وی ویپ ${gateway.brand}`,
      description: gateway.description,
      images: [gateway.image || "https://myrahyab.ir/imageLanding/phonegooya.png"],
      url: `https://myrahyab.ir/products/gateways/${gateway.id}`,
    },
    alternates: {
      canonical: `https://myrahyab.ir/products/gateways/${gateway.id}`,
    },
  };
}

export default async function GatewayDetailPage({ params }: Props) {
  const { id } = await params;
  const gateway = gateways.find((g) => g.id === id);

  if (!gateway) {
    notFound();
  }

  return <GatewayDetailClient gateway={gateway} />;
}
