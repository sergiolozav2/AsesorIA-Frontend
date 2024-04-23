type SidebarTitleProps = {
  text: string;
};

export function SidebarTitle(props: SidebarTitleProps) {
  return (
    <p className="mx-2 text-xs font-semibold uppercase text-stone-500  dark:text-stone-50">
      {props.text}
    </p>
  );
}
