import PanasonicProductDetail from "@/products/PanasonicPage/PanasonicProductDetail";
import { panasonicProducts } from "@/products/PanasonicPage/panasonicData";

export default function KXTDA100DBAPage() {
  const product = panasonicProducts["kx-tda100dba"];
  return <PanasonicProductDetail product={product} />;
}
