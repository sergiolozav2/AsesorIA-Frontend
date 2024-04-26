import { BsChatText } from "react-icons/bs";

export function ChatWindowEmpty() {
  return (
    <div className="flex h-full flex-col items-center justify-center px-4 text-center text-xl font-semibold text-muted-foreground/80">
      <BsChatText className="mb-4 text-6xl" />
      <p className="max-w-96">Selecciona una conversación para iniciar un chat </p>
    </div>
  );
}
