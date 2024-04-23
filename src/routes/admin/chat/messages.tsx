import { createFileRoute } from "@tanstack/react-router";
import { ChatPage } from "../../../modules/admin/chat/ChatPage";

export const Route = createFileRoute("/admin/chat/messages")({
  component: ChatPage,
});
