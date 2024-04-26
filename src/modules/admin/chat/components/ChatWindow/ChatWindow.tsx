import { useState } from "react";
import { ChatSearchBar } from "./components/ChatSearchBar";
import { ChatUserTile } from "./components/ChatUserTile";
import { ChatWindowTab } from "./components/ChatWindowTab";

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
              pushName={chat.contactInfo.pushName}
              profilePicture={chat.contactInfo.profilePicture}
              message={chat.mensajes[0]?.message}
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
  creadoEn: string;
  clienteID: number;
  cliente: null;
  mensajes: Mensaje[];
  contactInfo: ContactInfo;
}

export interface ContactInfo {
  senderID: number;
  pushName: string;
  profilePicture: string;
}

export interface Mensaje {
  self: boolean;
  message: string;
  datetime: number;
}
