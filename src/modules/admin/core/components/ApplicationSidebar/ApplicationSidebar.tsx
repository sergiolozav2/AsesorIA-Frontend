import {
  MdMenu,
  MdOutlineAnalytics,
  MdOutlineChat,
  MdOutlineHome,
  MdPeopleOutline,
} from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { SidebarLink } from "./components/SidebarLink";
import { AiOutlineSetting } from "react-icons/ai";
import { SidebarTitle } from "./components/SidebarTitle";
import { GoPackage } from "react-icons/go";
import { TbSitemap } from "react-icons/tb";

export function ApplicationSidebar() {
  return (
    <div className="pointer-events-none fixed inset-0 right-auto min-h-screen w-admin-navbar md:pointer-events-auto">
      <div className="flex h-9 items-end p-1 md:hidden">
        <button className="pointer-events-auto px-1 py-0.5 text-xl hover:bg-stone-900/10 dark:text-stone-50 dark:hover:bg-stone-100/15">
          <MdMenu />
        </button>
      </div>
      <div className="hidden h-full flex-col border-r border-stone-300 bg-white md:flex dark:border-stone-700 dark:bg-neutral-800">
        <div className="flex items-center px-4 pt-6">
          <img className="mr-2 max-w-6" src="/images/logo/logo-128.png " />
          <p className="font-semibold text-primary-950 dark:text-stone-100">
            Asesor.IA
          </p>
        </div>
        <div className="h-full origin-left scale-x-0 pt-4 transition-transform md:scale-x-100 dark:border-stone-700">
          <div className="flex flex-col gap-1 px-2 py-1 font-medium">
            <div className="mb-1 mt-4">
              <SidebarTitle text="Aplicaciones" />
            </div>
            <SidebarLink
              text="Inicio"
              to="/admin/"
              onClick={() => 0}
              icon={<MdOutlineHome />}
            />
            <SidebarLink
              text="Chat"
              to="/admin/chat"
              onClick={() => 0}
              icon={<MdOutlineChat />}
            />
            <SidebarLink
              text="Clientes"
              to="/admin/clients"
              onClick={() => 0}
              icon={<MdPeopleOutline />}
            />
            <SidebarLink
              text="Productos"
              to="/admin/products"
              onClick={() => 0}
              icon={<GoPackage />}
            />
            <SidebarLink
              text="Chatbot"
              to="/admin/chatbot"
              onClick={() => 0}
              icon={<TbSitemap />}
            />
            <SidebarLink
              text="Eventos"
              to="/admin/events"
              onClick={() => 0}
              icon={<IoMdNotificationsOutline />}
            />
            <SidebarLink
              text="Métricas"
              to="/admin/metrics"
              onClick={() => 0}
              icon={<MdOutlineAnalytics />}
            />
            <div className="mb-1 mt-2">
              <SidebarTitle text="General" />
            </div>
            <SidebarLink
              text="Configuración"
              to="/admin/metrics"
              onClick={() => 0}
              icon={<AiOutlineSetting />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
