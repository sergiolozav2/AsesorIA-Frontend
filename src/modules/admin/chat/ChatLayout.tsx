import { RxSpeakerLoud } from "react-icons/rx";
import {
  ModuleLayout,
  ModuleSidebarLinkType,
} from "../core/components/ModulesLayout";
import { MdOutlineEmail, MdOutlineSettings } from "react-icons/md";

type ChatLayoutProps = {
  children: React.ReactNode;
};

const chatModules: ModuleSidebarLinkType[] = [
  {
    text: "Canales",
    to: "/admin/chat/channels",
    icon: <RxSpeakerLoud />,
  },
  {
    text: "Conversaciones",
    to: "/admin/chat/messages",
    icon: <MdOutlineEmail />,
  },
  {
    text: "Configuración",
    to: "/admin/chat/settings",
    icon: <MdOutlineSettings />,
  },
];
export function ChatLayout(props: ChatLayoutProps) {
  return (
    <ModuleLayout modules={chatModules} title="Chat">
      {props.children}
    </ModuleLayout>
  );
}
