import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitialsFromName } from "../../../utils/getInitialsFromName";
import { Chat } from "../ChatWindow";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCard } from "./MessageCard";
import { useScrollToBottom } from "../../../hooks/useScrollToBottom";
import { SendMessageInput } from "./SendMessageInput";
import { MdArrowBack } from "react-icons/md";

type ConversationWindowProps = {
  handleUnselectChat: () => void;
  chat: Chat;
};
export function SelectedConversation(props: ConversationWindowProps) {
  const { chat } = props;
  const { contactInfo } = chat;

  const scrollBottomRef = useScrollToBottom();
  return (
    <div className="relative flex h-full max-h-full flex-col justify-between">
      <div className="flex h-[75px] items-center border-b border-border py-4 pl-1 pr-4">
        <button
          className="flex rounded-full p-2 hover:bg-foreground/15 md:hidden"
          onClick={props.handleUnselectChat}
        >
          <MdArrowBack className="text-lg" />
        </button>
        <Avatar className="ml-1 md:ml-3">
          <AvatarImage src={contactInfo.profilePicture} />
          <AvatarFallback>
            {getInitialsFromName(contactInfo.pushName)}
          </AvatarFallback>
        </Avatar>
        <p className="ml-4 font-medium">{contactInfo.pushName}</p>
      </div>
      <div className="absolute bottom-[75px] left-0 right-0 top-[75px]  overflow-y-auto bg-card">
        <ScrollArea className="h-full overflow-y-auto">
          <div ref={scrollBottomRef} className="flex flex-col gap-4 px-4 py-6">
            {props.chat.mensajes.map((message, index) => (
              <MessageCard
                key={index}
                message={message.message}
                self={message.self}
              />
            ))}
          </div>
        </ScrollArea>
      </div>
      <div className="flex h-[75px] border-t border-border px-4">
        <SendMessageInput />
      </div>
    </div>
  );
}
