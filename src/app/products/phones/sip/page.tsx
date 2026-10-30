import Container from "@/components/container/Container";
import SIPPhones from "@/products/phones/SIPPhones";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "گوشی تلفن SIP | پاناسونیک",
    description: "تلفنهای SIP پاناسونیک با پروتکل SIP و امکانات VoIP. 7 مدل متنوع برای سازمانها و ادارات",
  };
}

export default function SIPPhonesPage() {
  return (
    <Container>
      <SIPPhones />
    </Container>
  );
}
