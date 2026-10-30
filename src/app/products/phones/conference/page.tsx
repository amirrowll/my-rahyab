import Container from "@/components/container/Container";
import ConferencePhones from "@/products/phones/ConferencePhones";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "گوشی تلفن کنفرانس | پاناسونیک KX-NT700",
    description: "تلفن کنفرانس پاناسونیک KX-NT700 - کنفرانس سه طرفه، کیفیت صدای HD، ضبط مکالمه، مناسب جلسات اداری",
  };
}

export default function ConferencePhonesPage() {
  return (
    <Container>
      <ConferencePhones />
    </Container>
  );
}
