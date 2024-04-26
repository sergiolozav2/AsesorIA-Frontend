import { ChannelCard } from "./ChannelCard";

type ChannelCardListProps = {
  list: { creadoEn: string; wa_sesionID: string }[];
};
export function ChannelCardList(props: ChannelCardListProps) {
  return (
    <>
      {props.list.map((channel) => (
        <ChannelCard
          key={channel.wa_sesionID}
          creadoEn={channel.creadoEn}
          wa_sesionID={channel.wa_sesionID}
        />
      ))}
    </>
  );
}
