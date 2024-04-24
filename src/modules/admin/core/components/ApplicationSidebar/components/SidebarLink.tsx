import { Link, LinkProps } from "@tanstack/react-router";

interface SidebarLinkProps extends LinkProps {
  text: string;
  onClick: () => void;
}

export function SidebarLink(props: SidebarLinkProps) {
  return (
    <Link
      className="w-full rounded-md py-2 font-normal text-foreground/80 hover:text-accent-foreground [&.active]:bg-accent [&.active]:font-medium [&.active]:text-primary "
      to={props.to}
      onClick={props.onClick}
    >
      <p className="pl-4 text-sm">{props.text}</p>
    </Link>
  );
}
