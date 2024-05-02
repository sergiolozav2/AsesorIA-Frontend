import { useState } from "react";
import { ChatSearchBar } from "./components/ChatSearchBar";
import { ChatUserTile } from "./components/ChatUserTile";
import { ChatWindowTab } from "./components/ChatWindowTab";
import { getMessageText } from "../../utils/getTextFromMessage";

type ChatWindowProps = {
  chats: Chat[];
};

export function ChatWindow(props: ChatWindowProps) {
  const [selectedChat, setChat] = useState<Chat | null>(null);

  const showChats = !selectedChat ? "" : "hidden md:flex";
  const showMessages = selectedChat ? "" : "hidden";

  function handleUnselectChat() {
    setChat(null);
  }
  return (
    <div className="flex h-full w-full">
      <div
        className={`${showChats} flex w-full flex-col rounded-lg border border-border bg-card md:min-w-44 md:max-w-80 md:rounded-r-none`}
      >
        <div className="flex items-center border-b border-border px-6 py-4">
          <ChatSearchBar />
        </div>
        <div className="flex flex-col">
          {props.chats.map((chat) => (
            <ChatUserTile
              key={chat.chatID}
              pushName={chat.pushName}
              profilePicture={chat.pushName}
              message={getMessageText(chat.messages[chat.messages.length - 1])}
              onClick={() => setChat(chat)}
            />
          ))}
        </div>
      </div>
      <div
        className={`${showMessages} w-full min-w-64 rounded-lg border border-border bg-card md:flex md:rounded-l-none md:rounded-r-lg md:border-l-0`}
      >
        <ChatWindowTab
          key={selectedChat?.chatID}
          chat={selectedChat}
          handleUnselectChat={handleUnselectChat}
        />
      </div>
    </div>
  );
}

export interface Chat {
  chatID: number;
  jid: string;
  pushName: string;
  messages: Mensaje[];
}

export interface MessageContent {
  conversation?: string;
  extendedTextMessage?: {
    text: string;
  };
}

export interface Mensaje {
  fromMe: boolean;
  content: MessageContent;
  createdAt: string;
}
