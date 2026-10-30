import Container from "@/components/container/Container";
import DigitalPhones from "@/products/phones/DigitalPhones";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "گوشی تلفن سانترال دیجیتال | پاناسونیک و سامسونگ",
    description: "گوشی های تلفن سانترال دیجیتال پاناسونیک و سامسونگ با کیفیت صدای عالی و امکانات پیشرفته. 15+ مدل متنوع برای سازمانها",
  };
}

export default function DigitalPhonesPage() {
  return (
    <Container>
      <DigitalPhones />
    </Container>
  );
}
