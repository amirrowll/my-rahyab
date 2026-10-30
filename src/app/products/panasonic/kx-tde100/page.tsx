import PanasonicProductDetail from "@/products/PanasonicPage/PanasonicProductDetail";
import { panasonicProducts } from "@/products/PanasonicPage/panasonicData";

export default function KXTDE100Page() {
  const product = panasonicProducts["kx-tde100"];
  return <PanasonicProductDetail product={product} />;
}
