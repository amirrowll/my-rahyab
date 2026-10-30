import PanasonicProductDetail from "@/products/PanasonicPage/PanasonicProductDetail";
import { panasonicProducts } from "@/products/PanasonicPage/panasonicData";

export default function KXTDA600Page() {
  const product = panasonicProducts["kx-tda600"];
  return <PanasonicProductDetail product={product} />;
}
