import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitialsFromName } from "../../../utils/getInitialsFromName";
import { Chat } from "../ChatWindow";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCard } from "./MessageCard";
import { useScrollToBottom } from "../../../hooks/useScrollToBottom";
import { SendMessageInput } from "./SendMessageInput";
import { MdArrowBack } from "react-icons/md";
import { getMessageText } from "@/modules/chat/utils/getTextFromMessage";
import { useState } from "react";
import { ContactInfo } from "./ContactInfo/ContactInfo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";

type ConversationWindowProps = {
  handleUnselectChat: () => void;
  chat: Chat;
};
export function SelectedConversation(props: ConversationWindowProps) {
  const { chat } = props;

  const [openContactInfo, setOpenContactInfo] = useState(false);

  const classContactInfo = openContactInfo
    ? "absolute top-0 bottom-0 right-0 xl:static"
    : "";
  function handleShowContactInfo() {
    setOpenContactInfo(true);
  }
  function handleCloseContactInfo() {
    setOpenContactInfo(false);
  }
  const scrollBottomRef = useScrollToBottom();
  const { client } = chat;
  return (
    <div className="relative flex h-full w-full">
      <div className="relative flex h-full max-h-full w-full flex-col justify-between">
        <div className="flex h-chat-header items-center border-b border-border pl-1">
          <button
            className="flex rounded-full p-2 hover:bg-foreground/15 md:hidden"
            onClick={props.handleUnselectChat}
          >
            <MdArrowBack className="text-lg" />
          </button>
          <button
            className="flex h-full w-full items-center"
            onClick={handleShowContactInfo}
          >
            <Avatar className="ml-1 md:ml-3">
              <AvatarImage src={client?.profilePicture} />
              <AvatarFallback>
                {getInitialsFromName(client?.firstName)}
              </AvatarFallback>
            </Avatar>
            <p className="ml-4 font-medium">{client?.firstName}</p>
          </button>
        </div>
        <div className="absolute bottom-[75px] left-0 right-0 top-[75px]  overflow-y-auto bg-card">
          <ScrollArea className="h-full overflow-y-auto">
            <div
              ref={scrollBottomRef}
              className="flex flex-col gap-4 px-4 py-6"
            >
              {props.chat.messages.map((message, index) => (
                <MessageCard
                  key={index}
                  message={getMessageText(message)}
                  fromMe={message.fromMe}
                  createdAt={message.createdAt}
                />
              ))}
            </div>
          </ScrollArea>
        </div>
        <div className="flex h-[75px] border-t border-border px-4">
          <SendMessageInput />
        </div>
      </div>
      <Accordion
        type="single"
        collapsible
        orientation="horizontal"
        value={openContactInfo ? "info" : ""}
      >
        <AccordionItem className="flex h-full" value="info">
          <AccordionContent
            className={`${classContactInfo} h-full w-full xl:w-96 xl:border-l`}
          >
            <ContactInfo
              chat={props.chat}
              closeContactInfo={handleCloseContactInfo}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
