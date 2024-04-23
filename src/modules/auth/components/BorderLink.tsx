import { Link, LinkProps } from "@tanstack/react-router";

interface BorderLinkProps extends LinkProps {
  children: React.ReactNode;
}
export function BorderLink(props: BorderLinkProps) {
  return (
    <Link
      to={props.to}
      className="rounded border-2 border-primary-800 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-neutral-950/10"
    >
      {props.children}
    </Link>
  );
}
