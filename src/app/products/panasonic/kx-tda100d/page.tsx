import PanasonicProductDetail from "@/products/PanasonicPage/PanasonicProductDetail";
import { panasonicProducts } from "@/products/PanasonicPage/panasonicData";

export default function KXTDA100DPage() {
  const product = panasonicProducts["kx-tda100d"];
  return <PanasonicProductDetail product={product} />;
}
