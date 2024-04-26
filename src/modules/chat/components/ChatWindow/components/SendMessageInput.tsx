import { Input } from "@/components/ui/input";
import { MdSend } from "react-icons/md";

export function SendMessageInput() {
  return (
    <div className="flex h-full w-full items-center">
      <Input
        className="w-full border border-border ring-primary focus-visible:ring-1"
        placeholder="Mensaje"
      />
      <button
        className="ml-4 rounded-full p-2 hover:bg-foreground/15"
        aria-label="enviar mensaje"
      >
        <MdSend className="text-xl" />
      </button>
    </div>
  );
}
