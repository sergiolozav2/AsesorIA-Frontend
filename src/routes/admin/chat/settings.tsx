import { ChatSettings } from "@/modules/chat/ChatSettings";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/chat/settings")({
  component: ChatSettings,
});
