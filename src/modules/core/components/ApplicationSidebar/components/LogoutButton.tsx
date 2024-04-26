import { MdLogout } from "react-icons/md";
import { SidebarTitle } from "./SidebarTitle";
import { useNavigate } from "@tanstack/react-router";

export function LogoutButton() {
  const navigate = useNavigate();

  function handleLogout() {
    navigate({ to: "/login" });
  }
  return (
    <button
      className="w-full rounded-md font-normal text-foreground/70 hover:text-primary/80"
      onClick={handleLogout}
    >
      <SidebarTitle text="Salir" icon={<MdLogout />} />
    </button>
  );
}
