type ModuleTitleProps = {
  children: React.ReactNode;
};

export function ModuleTitle(props: ModuleTitleProps) {
  return <h3 className="mt-7 px-4 font-medium">{props.children}</h3>;
}
