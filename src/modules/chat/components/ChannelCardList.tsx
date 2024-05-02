import { ChannelCard } from "./ChannelCard";

type ChannelCardListProps = {
  list: { createdAt: string; waSessionID: string }[];
};
export function ChannelCardList(props: ChannelCardListProps) {
  return (
    <>
      {props.list.map((channel) => (
        <ChannelCard
          key={channel.waSessionID}
          createdAt={channel.createdAt}
          waSessionID={channel.waSessionID}
        />
      ))}
    </>
  );
}
