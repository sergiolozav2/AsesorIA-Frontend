import { MdMenu } from "react-icons/md";

type ModuleTitleProps = {
  children: React.ReactNode;
};

export function ModuleTitle(props: ModuleTitleProps) {
  return (
    <div className="mt-2 flex text-foreground/90 md:mt-0">
      <div className="mt-1 flex h-9 items-end p-1 md:hidden">
        <button className="-ml-2 pointer-events-auto rounded-md px-1 py-0.5 text-2xl hover:bg-foreground/10">
          <MdMenu />
        </button>
      </div>
      <h3 className="mt-2 text-xl font-semibold md:ml-0 md:mt-6">
        {props.children}
      </h3>
    </div>
  );
}
