import Container from "@/components/container/Container";
import PanasonicLowCapacity from "@/products/PanasonicPage/PanasonicLowCapacity";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "سانترال های کم ظرفیت پاناسونیک | KX-TES824, KX-TEM824, KX-TA616",
    description: "سانترال های کم ظرفیت پاناسونیک مناسب کسبوکارهای کوچک و متوسط. KX-TES824، KX-TEM824 و KX-TA616 با امکانات پیشرفته و قابلیت ارتقاء",
  };
}

export default function PanasonicLowCapacityPage() {
  return (
    <Container>
      <PanasonicLowCapacity />
    </Container>
  );
}
