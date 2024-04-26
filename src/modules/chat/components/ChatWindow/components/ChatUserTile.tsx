import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitialsFromName } from "../../../utils/getInitialsFromName";

type ChatUserTileProps = {
  pushName: string;
  message?: string;
  profilePicture: string;
  onClick: () => void;
};
export function ChatUserTile(props: ChatUserTileProps) {
  return (
    <button
      className="flex items-center border-b border-b-border py-2.5 pl-3.5 pr-6 text-left hover:bg-accent/40"
      onClick={props.onClick}
    >
      <Avatar>
        <AvatarImage src={props.profilePicture} />
        <AvatarFallback>{getInitialsFromName(props.pushName)}</AvatarFallback>
      </Avatar>
      <div className="ml-3.5 flex flex-col overflow-hidden py-2">
        <p className="text-sm font-medium">{props.pushName}</p>
        <p className="overflow-hidden overflow-ellipsis whitespace-nowrap text-sm text-muted-foreground">
          {props.message}
        </p>
      </div>
    </button>
  );
}
