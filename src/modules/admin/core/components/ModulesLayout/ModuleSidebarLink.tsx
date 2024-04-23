import { Link } from "@tanstack/react-router";
import { ModuleSidebarLinkType } from "./types";

export function ModuleSidebarLink(props: ModuleSidebarLinkType) {
  return (
    <Link
      className="w-fit rounded-none border-b-2 border-l-4 border-transparent py-2 pl-3 pr-4 text-left text-stone-600 hover:bg-stone-900/5 md:w-full md:rounded-md md:border-b-0 dark:text-stone-50 [&.active]:border-b-primary-800 [&.active]:bg-stone-800/5 [&.active]:font-semibold [&.active]:text-stone-800 md:[&.active]:bg-stone-200 md:[&.active]:font-normal dark:[&.active]:bg-stone-100/15 dark:[&.active]:text-white"
      to={props.to}
      params={props.params}
    >
      <div className="flex items-center text-sm">
        <span className="hidden text-lg md:block">{props.icon}</span>
        <h1 className="pl-0 md:pl-3">{props.text}</h1>
      </div>
    </Link>
  );
}
