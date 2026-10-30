import Container from "@/components/container/Container";
import IPPhones from "@/products/phones/IPPhones";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "گوشی تلفن IP تحت شبکه | پاناسونیک، سامسونگ، گرند استریم",
    description: "تلفنهای IP تحت شبکه با امکانات VoIP و کیفیت صدای HD. 13 مدل متنوع از برندهای معتبر",
  };
}

export default function IPPhonesPage() {
  return (
    <Container>
      <IPPhones />
    </Container>
  );
}
