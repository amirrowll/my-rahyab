import PanasonicProductDetail from "@/products/PanasonicPage/PanasonicProductDetail";
import { panasonicProducts } from "@/products/PanasonicPage/panasonicData";

export default function KXTDA100DBPPage() {
  const product = panasonicProducts["kx-tda100dbp"];
  return <PanasonicProductDetail product={product} />;
}
