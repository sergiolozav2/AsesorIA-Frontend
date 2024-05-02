import { Mensaje } from "../components/ChatWindow/ChatWindow";

export function getMessageText(message: Mensaje) {
  return (
    message?.content?.conversation ??
    message?.content?.extendedTextMessage?.text ??
    ""
  );
}
