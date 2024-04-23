type ModuleSidebarLayout = {
  children: React.ReactNode;
  title: string;
};

export function ModuleSidebarLayout(props: ModuleSidebarLayout) {
  return (
    <div className="md:min-w-module-navbar dark:border-r-neutr flex w-full flex-col border-r border-r-transparent bg-stone-50 shadow-md md:h-full md:w-module-navbar md:px-2 dark:border-r-neutral-700 dark:bg-neutral-800">
      <h2 className="mb-2 ml-10 mt-1.5 text-xl font-semibold md:mb-4 md:ml-3 md:mt-6 dark:text-stone-100">
        {props.title}
      </h2>
      <div className="flex gap-1 md:flex-col">{props.children}</div>
    </div>
  );
}
