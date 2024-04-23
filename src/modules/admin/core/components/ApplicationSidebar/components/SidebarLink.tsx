import { Link, LinkProps } from "@tanstack/react-router";

interface SidebarOptionButton extends LinkProps {
  text: string;
  onClick: () => void;
  icon: React.ReactNode;
}

export function SidebarLink(props: SidebarOptionButton) {
  return (
    <Link
      className="rounded-md border-l-4 border-transparent py-2 pl-3 pr-4 text-left text-stone-600 hover:bg-stone-900/5 dark:text-stone-100 dark:hover:bg-stone-100/10 [&.active]:border-primary-800 [&.active]:bg-primary-100 [&.active]:text-primary-800 dark:[&.active]:border-l-primary-500 dark:[&.active]:bg-stone-100/10 dark:[&.active]:text-white"
      to={props.to}
      onClick={props.onClick}
    >
      <div className="flex items-center text-sm">
        <span className="text-lg">{props.icon}</span>
        <h3 className="pl-3">{props.text}</h3>
      </div>
    </Link>
  );
}
