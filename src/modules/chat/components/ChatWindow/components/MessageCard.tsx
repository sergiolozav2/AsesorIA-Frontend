import { formatOnlyTime } from "@/modules/core/utils/formatToUserDate";

type MessageCardProps = {
  fromMe: boolean;
  message: string;
  createdAt: string;
};

export function MessageCard(props: MessageCardProps) {
  let messageClass = "bg-muted/80 text-muted-foreground";
  if (props.fromMe) {
    messageClass = "ml-auto bg-primary text-primary-foreground";
  }
  return (
    <div
      className={`${messageClass} relative w-fit max-w-[75%] rounded-md px-2.5 py-1.5 shadow`}
    >
      <p className="break-all pr-14">{props.message}</p>
      <div className="absolute bottom-0 right-2 text-xs">
        {formatOnlyTime(props.createdAt)}
      </div>
    </div>
  );
}
