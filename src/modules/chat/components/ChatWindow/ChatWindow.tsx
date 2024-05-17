import { useState } from "react";
import { ChatSearchBar } from "./components/ChatSearchBar";
import { ChatUserTile } from "./components/ChatUserTile";
import { ChatWindowTab } from "./components/ChatWindowTab";
import { getMessageText } from "../../utils/getTextFromMessage";

type ChatWindowProps = {
  chats: Chat[];
};

export function ChatWindow(props: ChatWindowProps) {
  const [selectedChatID, setChatID] = useState<number | null>(null);

  const showChats = !selectedChatID ? "" : "hidden md:flex";
  const showMessages = selectedChatID ? "" : "hidden";

  function handleUnselectChat() {
    setChatID(null);
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
              pushName={chat?.client?.firstName}
              profilePicture={chat?.client?.profilePicture}
              message={getMessageText(chat.messages[chat.messages.length - 1])}
              onClick={() => setChatID(chat?.chatID)}
            />
          ))}
        </div>
      </div>
      <div
        className={`${showMessages} w-full min-w-64 rounded-lg border border-border bg-card md:flex md:rounded-l-none md:rounded-r-lg md:border-l-0`}
      >
        <ChatWindowTab
          key={selectedChatID}
          chat={props.chats.find((chat) => chat.chatID === selectedChatID)}
          handleUnselectChat={handleUnselectChat}
        />
      </div>
    </div>
  );
}

export interface Chat {
  chatID: number;
  jid: string;
  client: Client;
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

export interface Client {
  clientID: number;
  firstName: string;
  phone: string;
  profilePicture: string;
}
