import { Input } from "@/components/ui/input";
import { MdSearch } from "react-icons/md";

export function ChatSearchBar() {
  return (
    <label className="flex items-center w-full md:w-fit rounded-md border border-border bg-background pl-2.5 text-muted-foreground focus-within:ring-1 focus-within:ring-ring">
      <MdSearch className="text-2xl " />
      <Input
        className="border-none bg-transparent max-w-fit"
        placeholder="Buscar contactos"
      />
    </label>
  );
}
