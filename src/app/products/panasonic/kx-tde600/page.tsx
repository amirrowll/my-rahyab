import PanasonicProductDetail from "@/products/PanasonicPage/PanasonicProductDetail";
import { panasonicProducts } from "@/products/PanasonicPage/panasonicData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "تلفن سانترال پاناسونیک KX-TDE600 | رهیاب",
  description: "سانترال پرظرفیت پاناسونیک KX-TDE600 با 640 خط شهری و 1152 خط داخلی - مناسب سازمانهای بزرگ و ادارات دولتی",
};

export default function KXTDE600Page() {
  const product = panasonicProducts["kx-tde600"];
  return <PanasonicProductDetail product={product} />;
}
