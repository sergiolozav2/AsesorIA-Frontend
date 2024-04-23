import { createFileRoute } from "@tanstack/react-router";
import { ChatSettings } from "../../../modules/admin/chat/ChatSettings";

export const Route = createFileRoute("/admin/chat/settings")({
  component: ChatSettings,
});
