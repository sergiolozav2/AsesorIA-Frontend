import { Navigate, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/chat/")({
  component: Chat,
});

function Chat() {
  return <Navigate to="/admin/chat/channels" />;
}
