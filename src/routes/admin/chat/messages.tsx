import { ChatPage } from "@/modules/chat/ChatPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/chat/messages")({
  component: ChatPage,
});
