import { ChatChannelsPage } from "@/modules/chat/ChatChannelsPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/chat/channels")({
  component: ChatChannelsPage,
});
