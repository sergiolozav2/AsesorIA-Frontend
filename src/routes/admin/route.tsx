import { Outlet, createFileRoute } from "@tanstack/react-router";
import { ApplicationSidebar } from "../../modules/admin/core/components/ApplicationSidebar";
import { ModeToggle } from "@/components/ui/mode-toggle";

export const Route = createFileRoute("/admin")({
  component: AppLayout,
});

function AppLayout() {
  return (
    <>
      <ApplicationSidebar />
      <ModeToggle />
      <div className="flex dark:bg-neutral-800">
        <div className="mr-0 transition-all md:mr-admin-navbar"></div>
        <Outlet />
      </div>
    </>
  );
}
