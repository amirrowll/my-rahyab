import Container from "@/components/container/Container";
import PanasonicProductsPage from "@/products/PanasonicPage/PanasonicProductsPage";
import React from "react";

export default function PanasonicPage() {
  return (
    <>
      <div className="relative py-4 md:py-8">
        <Container>
          <PanasonicProductsPage />
        </Container>
      </div>
    </>
  );
}
