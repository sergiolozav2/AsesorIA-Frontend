import { createFileRoute } from "@tanstack/react-router";
import { ProductsPage } from "../../modules/admin/products/ProductsPage";

export const Route = createFileRoute("/admin/products")({
  component: Products,
});

function Products() {
  return <ProductsPage />;
}
