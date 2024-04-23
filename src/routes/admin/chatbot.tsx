import { createFileRoute } from "@tanstack/react-router";
import { ChatbotPage } from "../../modules/admin/chatbot/ChatbotPage";

export const Route = createFileRoute("/admin/chatbot")({
  component: Chatbot,
});

function Chatbot() {
  return <ChatbotPage />;
}
