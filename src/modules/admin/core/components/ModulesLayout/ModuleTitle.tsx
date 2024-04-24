type ModuleTitleProps = {
  children: React.ReactNode;
};

export function ModuleTitle(props: ModuleTitleProps) {
  return (
    <h3 className="ml-6 mt-2 px-4 text-xl font-semibold text-primary md:ml-0 md:mt-6">
      {props.children}
    </h3>
  );
}
