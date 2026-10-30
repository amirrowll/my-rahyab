import PanasonicProductDetail from "@/products/PanasonicPage/PanasonicProductDetail";
import { panasonicProducts } from "@/products/PanasonicPage/panasonicData";

export default function KXTDE200Page() {
  const product = panasonicProducts["kx-tde200"];
  return <PanasonicProductDetail product={product} />;
}
