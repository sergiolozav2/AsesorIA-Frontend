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
    <div className="pointer-events-none fixed inset-0 right-auto flex min-h-screen w-admin-navbar flex-col md:pointer-events-auto">
      <div className="hidden items-center border-r border-stone-300 bg-white px-4 pt-6 md:flex">
        <img className="mr-2 max-w-6" src="/images/logo/logo-128.png " />
        <p className="font-semibold text-primary-950">Asesor.IA</p>
      </div>
      <div className="flex h-9 items-end p-1 md:hidden">
        <button className="pointer-events-auto px-1 py-0.5 text-xl hover:bg-stone-900/10 ">
          <MdMenu />
        </button>
      </div>
      <div className="h-full origin-left scale-x-0 border-r border-stone-300 bg-white pt-4 transition-transform md:scale-x-100">
        <div className="flex flex-col gap-1 px-2 py-1 font-medium">
          <div className="mb-2 mt-4">
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
          <SidebarTitle text="General" />
          <SidebarLink
            text="Configuración"
            to="/admin/metrics"
            onClick={() => 0}
            icon={<AiOutlineSetting />}
          />
        </div>
      </div>
    </div>
  );
}
