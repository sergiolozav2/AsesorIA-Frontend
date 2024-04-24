import { Link, LinkProps } from "@tanstack/react-router";

interface SidebarTitleProps extends LinkProps {
  text: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}

export function SidebarTitle(props: SidebarTitleProps) {
  return (
    <div className="select-none rounded-md pl-3 text-left font-medium text-foreground/85">
      <Link className="[&.active]:text-primary" to={props.to} disabled>
        <div className="flex items-center text-sm">
          <span className="text-xl">{props.icon}</span>
          <p className="pl-3">{props.text}</p>
        </div>
      </Link>
      <div className="ml-[9px] mt-1.5 flex flex-col gap-1.5 border-l border-border pb-1 pl-2">
        {props.children}
      </div>
    </div>
  );
}
