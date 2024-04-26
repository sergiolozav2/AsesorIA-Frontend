import { Outlet, createFileRoute } from "@tanstack/react-router";
import { ModuleLayout } from "@/modules/admin/core/components/ModulesLayout";

export const Route = createFileRoute("/admin/chat")({
  component: ChatLayoutRoute,
});

function ChatLayoutRoute() {
  return (
    <ModuleLayout>
      <Outlet />
    </ModuleLayout>
  );
}
