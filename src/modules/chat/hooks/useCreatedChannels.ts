import { ChannelService } from "@/backend";
import { useQuery } from "@tanstack/react-query";

export function useCreatedChannels() {
  const query = useQuery({
    queryFn: ChannelService.getChannelSessions,
    queryKey: ["channels"],
  });

  return query;
}
