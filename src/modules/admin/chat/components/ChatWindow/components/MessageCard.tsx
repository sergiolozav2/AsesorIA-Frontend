type MessageCardProps = {
  self: boolean;
  message: string;
};

export function MessageCard(props: MessageCardProps) {
  let messageClass = "bg-muted/80 text-muted-foreground";
  if (props.self) {
    messageClass = "ml-auto bg-primary text-primary-foreground";
  }
  return (
    <p
      className={`${messageClass} w-fit max-w-[75%] rounded-md px-2.5 py-1.5 shadow`}
    >
      {props.message}
    </p>
  );
}
