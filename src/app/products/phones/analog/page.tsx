import Container from "@/components/container/Container";
import AnalogPhones from "@/products/phones/AnalogPhones";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "گوشی تلفن آنالوگ | پاناسونیک - 13 مدل متنوع",
    description: "تلفن های رومیزی آنالوگ پاناسونیک - 13 مدل با Caller ID، LCD، حافظه تا 50 شماره. مناسب خانگی و اداری",
  };
}

export default function AnalogPhonesPage() {
  return (
    <Container>
      <AnalogPhones />
    </Container>
  );
}
