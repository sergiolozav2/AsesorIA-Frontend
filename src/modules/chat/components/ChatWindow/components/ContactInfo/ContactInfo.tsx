import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { getInitialsFromName } from "@/modules/chat/utils/getInitialsFromName";
import { MdClose } from "react-icons/md";
import { Chat } from "../../ChatWindow";
import { getPhoneFromJid } from "@/modules/chat/utils/getPhoneFromJid";

type ContactInfoProps = {
  closeContactInfo: () => void;
  chat: Chat;
};
export function ContactInfo(props: ContactInfoProps) {
  return (
    <div className="flex h-full flex-col rounded-r-lg bg-card">
      <div className="h-chat-header flex items-center border-b px-2">
        <Button
          className="rounded-full bg-transparent text-xl text-foreground"
          onClick={props.closeContactInfo}
          size="icon"
        >
          <MdClose />
        </Button>
        <p className="ml-2 text-base font-medium">Contacto</p>
      </div>
      <div className="flex flex-col items-center py-6">
        <Avatar className="h-44 w-44">
          <AvatarImage src={props.chat.pushName} />
          <AvatarFallback className="text-4xl">
            {getInitialsFromName(props.chat.pushName)}
          </AvatarFallback>
        </Avatar>
        <p className="mt-2 text-xl">{props.chat.pushName}</p>
        <p className="text-muted-foreground">
          +{getPhoneFromJid(props.chat.jid)}
        </p>
      </div>
    </div>
  );
}
