import PanasonicProductDetail from "@/products/PanasonicPage/PanasonicProductDetail";
import { panasonicProducts } from "@/products/PanasonicPage/panasonicData";

export default function KXTDA100DPPage() {
  const product = panasonicProducts["kx-tda100dp"];
  return <PanasonicProductDetail product={product} />;
}
