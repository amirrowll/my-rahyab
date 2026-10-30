import PanasonicProductDetail from "@/products/PanasonicPage/PanasonicProductDetail";
import { panasonicProducts } from "@/products/PanasonicPage/panasonicData";

export default function KXTDA620Page() {
  const product = panasonicProducts["kx-tda620"];
  return <PanasonicProductDetail product={product} />;
}
