type ModuleSidebarLayout = {
  children: React.ReactNode;
  title: string;
};

export function ModuleSidebarLayout(props: ModuleSidebarLayout) {
  return (
    <div className="md:min-w-module-navbar flex w-full flex-col bg-stone-50 md:px-2 shadow-md md:h-full md:w-module-navbar">
      <h2 className="mb-2 md:mb-4 ml-10 mt-1.5 text-xl font-semibold md:ml-3 md:mt-6">
        {props.title}
      </h2>
      <div className="flex md:flex-col gap-1">{props.children}</div>
    </div>
  );
}
