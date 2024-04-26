import { ChatbotPage } from "@/modules/chatbot/ChatbotPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/chatbot")({
  component: Chatbot,
});

function Chatbot() {
  return <ChatbotPage />;
}
