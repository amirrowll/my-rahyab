import PanasonicProductDetail from "@/products/PanasonicPage/PanasonicProductDetail";
import { panasonicProducts } from "@/products/PanasonicPage/panasonicData";

export default function KXTDA200Page() {
  const product = panasonicProducts["kx-tda200"];
  return <PanasonicProductDetail product={product} />;
}
