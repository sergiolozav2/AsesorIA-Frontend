import { ChatService } from "@/backend";
import { useQuery } from "@tanstack/react-query";

export function useChats() {
  const query = useQuery({
    queryFn: ChatService.getChatAll,
    queryKey: ["chats"],
  });

  return query;
}
