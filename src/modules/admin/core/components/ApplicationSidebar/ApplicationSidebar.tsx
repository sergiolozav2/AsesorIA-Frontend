import {
  MdMenu,
  MdOutlineAnalytics,
  MdOutlineChat,
  MdOutlineHome,
  MdPeopleOutline,
} from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { SidebarLink } from "./components/SidebarLink";
import { SidebarTitle } from "./components/SidebarTitle";
import { GoPackage } from "react-icons/go";
import { TbSitemap } from "react-icons/tb";

export function ApplicationSidebar() {
  return (
    <div className="pointer-events-none fixed inset-0 right-auto min-h-screen w-admin-navbar md:pointer-events-auto">
      <div className="mt-1 flex h-9 items-end p-1 md:hidden">
        <button className="pointer-events-auto px-1 py-0.5 text-2xl hover:bg-stone-900/10">
          <MdMenu />
        </button>
      </div>

      <div className="hidden h-full flex-col border-r border-border bg-card md:flex">
        <div className="flex items-center px-4 pt-6">
          <img className="mr-2 max-w-6" src="/images/logo/logo-128.png " />
          <p className="font-semibold text-foreground">Asesor.IA</p>
        </div>
        <div className="h-full origin-left scale-x-0 pt-4 transition-transform md:scale-x-100">
          <div className="flex flex-col gap-3 pl-3 pr-2 pt-4 font-medium">
            <SidebarTitle
              text="Inicio"
              to="/admin/"
              icon={<MdOutlineHome />}
            ></SidebarTitle>
            <SidebarTitle to="/admin/chat" text="Chat" icon={<MdOutlineChat />}>
              <SidebarLink
                text="Canales"
                to="/admin/chat/channels"
                onClick={() => 0}
              />
              <SidebarLink
                text="Conversaciones"
                to="/admin/chat/messages"
                onClick={() => 0}
              />
            </SidebarTitle>
            <SidebarTitle
              to="/admin/clients"
              text="Clientes"
              icon={<MdPeopleOutline />}
            />
            <SidebarTitle
              to="/admin/products"
              text="Productos"
              icon={<GoPackage />}
            />
            <SidebarTitle
              to="/admin/chatbot"
              text="Chatbot"
              icon={<TbSitemap />}
            />
            <SidebarTitle
              to="/admin/events"
              text="Eventos"
              icon={<IoMdNotificationsOutline />}
            />
            <SidebarTitle
              to="/admin/metrics"
              text="Métricas"
              icon={<MdOutlineAnalytics />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
