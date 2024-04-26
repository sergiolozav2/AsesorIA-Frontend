import { ClientsPage } from "@/modules/clients/RoutesPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/clients")({
  component: Routes,
});

function Routes() {
  return <ClientsPage />;
}
