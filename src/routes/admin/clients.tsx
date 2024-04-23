import { createFileRoute } from "@tanstack/react-router";
import { ClientsPage } from "../../modules/admin/clients/RoutesPage";

export const Route = createFileRoute("/admin/clients")({
  component: Routes,
});

function Routes() {
  return <ClientsPage />;
}
