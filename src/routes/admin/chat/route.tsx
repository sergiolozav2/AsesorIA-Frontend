import { Outlet, createFileRoute } from "@tanstack/react-router";
import { ChatLayout } from "../../../modules/admin/chat/ChatLayout";

export const Route = createFileRoute("/admin/chat")({
  component: ChatLayoutRoute,
});

function ChatLayoutRoute() {
  return (
    <ChatLayout>
      <Outlet />
    </ChatLayout>
  );
}
