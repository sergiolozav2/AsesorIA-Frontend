import { createFileRoute } from "@tanstack/react-router";
import { ChatChannelsPage } from "../../../modules/admin/chat/ChatChannelsPage";

export const Route = createFileRoute("/admin/chat/channels")({
  component: ChatChannelsPage,
});
