import { Outlet, createFileRoute } from "@tanstack/react-router";
import { ApplicationSidebar } from "../../modules/core/components/ApplicationSidebar";

export const Route = createFileRoute("/admin")({
  component: AppLayout,
});

function AppLayout() {
  return (
    <>
      <ApplicationSidebar />
      <div className="flex">
        <div className="mr-0 transition-all md:mr-admin-navbar"></div>
        <Outlet />
      </div>
    </>
  );
}
