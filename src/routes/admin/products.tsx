import { ProductsPage } from "@/modules/products/ProductsPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/products")({
  component: Products,
});

function Products() {
  return <ProductsPage />;
}
