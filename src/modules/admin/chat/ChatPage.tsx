import { LoadingModule } from "../core/components/LoadingModule";
import { ModuleTitle } from "../core/components/ModulesLayout";
import { ChatWindow } from "./components/ChatWindow/ChatWindow";
import { useChats } from "./hooks/useChats";

export function ChatPage() {
  const { data, isLoading } = useChats();

  return (
    <div className="flex h-full w-full flex-col md:px-8 md:pb-8">
      <div className="px-4 md:px-0">
        <ModuleTitle>Conversaciones</ModuleTitle>
      </div>
      <div className="mt-4 flex h-full flex-col">
        {isLoading && <LoadingModule />}
        {data && <ChatWindow chats={data.list} />}
      </div>
    </div>
  );
}
