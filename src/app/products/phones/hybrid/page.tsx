import Container from "@/components/container/Container";
import HybridPhones from "@/products/phones/HybridPhones";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "گوشی تلفن سانترال هایبرید | پاناسونیک",
    description: "گوشی های تلفن سانترال هایبرید پاناسونیک - ترکیب تکنولوژی آنالوگ و دیجیتال. 5 مدل با امکانات پیشرفته",
  };
}

export default function HybridPhonesPage() {
  return (
    <Container>
      <HybridPhones />
    </Container>
  );
}
