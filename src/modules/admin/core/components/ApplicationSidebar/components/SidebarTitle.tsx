type SidebarTitleProps = {
  text: string;
};

export function SidebarTitle(props: SidebarTitleProps) {
  return (
    <p className="mx-2 text-xs font-medium uppercase text-stone-500">
      {props.text}
    </p>
  );
}
