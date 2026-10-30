import Container from "@/components/container/Container";
import WirelessPhones from "@/products/phones/WirelessPhones";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "تلفن بیسیم پاناسونیک | آزادی حرکت با برد بالا",
    description: "تلفنهای بیسیم پاناسونیک با برد تا 300 متر و کیفیت صدای عالی. 18 مدل متنوع برای خانه و محیط کار",
  };
}

export default function WirelessPhonesPage() {
  return (
    <Container>
      <WirelessPhones />
    </Container>
  );
}
