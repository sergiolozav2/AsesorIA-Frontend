import { Tabs, TabsContent } from "@/components/ui/tabs";
import { ChatWindowEmpty } from "./ChatWindowEmpty";
import { SelectedConversation } from "./SelectedConversation";
import { Chat } from "../ChatWindow";

type ChatWindowProps = {
  chat: Chat | undefined;
  handleUnselectChat: () => void;
};

const TabValues = {
  empty: "empty",
  messages: "messages",
};

export function ChatWindowTab(props: ChatWindowProps) {
  const isEmptyValue = props.chat ? TabValues.messages : TabValues.empty;
  return (
    <Tabs className="h-full w-full" value={isEmptyValue}>
      <TabsContent value={TabValues.empty}>
        <ChatWindowEmpty />
      </TabsContent>
      <TabsContent value={TabValues.messages}>
        {props.chat && (
          <SelectedConversation
            handleUnselectChat={props.handleUnselectChat}
            chat={props.chat}
          />
        )}
      </TabsContent>
    </Tabs>
  );
}
