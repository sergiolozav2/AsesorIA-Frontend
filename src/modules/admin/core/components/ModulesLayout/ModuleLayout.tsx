import { ModuleSidebarLayout } from "./ModuleSidebarLayout";
import { ModuleSidebarLink } from "./ModuleSidebarLink";
import { ModuleSidebarLinkType } from "./types";

type ModuleLayoutProps = {
  children: React.ReactNode;
  title: string;
  modules: ModuleSidebarLinkType[];
};

export function ModuleLayout(props: ModuleLayoutProps) {
  return (
    <div className="flex min-h-screen w-full max-w-full flex-col overflow-hidden bg-primary-50">
      <div className="flex h-full flex-col md:flex-row">
        <ModuleSidebarLayout title={props.title}>
          {props.modules.map((module) => (
            <ModuleSidebarLink
              key={module.text}
              to={module.to}
              text={module.text}
              icon={module.icon}
            />
          ))}
        </ModuleSidebarLayout>
        {props.children}
      </div>
    </div>
  );
}
