type ModuleTitleProps = {
  children: React.ReactNode;
};

export function ModuleTitle(props: ModuleTitleProps) {
  return <h3 className="mt-6 px-4 font-semibold text-xl">{props.children}</h3>;
}
