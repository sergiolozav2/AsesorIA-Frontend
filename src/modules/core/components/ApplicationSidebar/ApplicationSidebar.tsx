import {
  MdOutlineAnalytics,
  MdOutlineChat,
  MdOutlineHome,
  MdPeopleOutline,
} from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { SidebarLink } from "./components/SidebarLink";
import { GoPackage } from "react-icons/go";
import { TbSitemap } from "react-icons/tb";
import { SidebarSection } from "./components/SidebarSection";
import { LogoutButton } from "./components/LogoutButton";
import { useSidebarStore } from "./hooks/useSidebarStore";
import { DarkSheet } from "./components/DarkSheet";

export function ApplicationSidebar() {
  const isOpen = useSidebarStore((state) => state.isOpen);

  const sidebarClass = isOpen ? "" : "hidden";
  const componentClass = isOpen ? "" : "pointer-events-none";
  return (
    <div
      className={`${componentClass} fixed inset-0 right-auto isolate z-10 min-h-screen w-admin-navbar md:pointer-events-auto`}
    >
      {isOpen && <DarkSheet />}
      <div
        className={`${sidebarClass} h-full flex-col border-r border-border bg-card md:flex`}
      >
        <div className="flex items-center px-4 pt-6">
          <img className="mr-2 max-w-6" src="/images/logo/logo-128.png " />
          <p className="font-semibold text-foreground">Asesor.IA</p>
        </div>
        <div className="h-full origin-left pt-4">
          <div className="flex flex-col gap-1.5 pl-3 pr-2 pt-4 font-medium">
            <SidebarLink
              to="/admin/home"
              text="Inicio"
              icon={<MdOutlineHome />}
            />
            <SidebarSection text="Chat" icon={<MdOutlineChat />}>
              <SidebarLink text="Canales" to="/admin/chat/channels" />
              <SidebarLink text="Conversaciones" to="/admin/chat/messages" />
            </SidebarSection>
            <SidebarLink
              to="/admin/clients"
              text="Clientes"
              icon={<MdPeopleOutline />}
            />
            <SidebarLink
              to="/admin/products"
              text="Productos"
              icon={<GoPackage />}
            />
            <SidebarLink
              to="/admin/chatbot"
              text="Chatbot"
              icon={<TbSitemap />}
            />
            <SidebarLink
              to="/admin/events"
              text="Eventos"
              icon={<IoMdNotificationsOutline />}
            />
            <SidebarLink
              to="/admin/metrics"
              text="Métricas"
              icon={<MdOutlineAnalytics />}
            />
            <LogoutButton />
          </div>
        </div>
      </div>
    </div>
  );
}
