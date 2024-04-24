import { WhatsappIcon } from "./WhatsappIcon";

type ChannelWhatsappCardProps = {
  onClick: () => void;
};

export function ChannelWhatsappCard(props: ChannelWhatsappCardProps) {
  return (
    <div className="flex max-w-96 rounded-md border border-border bg-card shadow">
      <div className="flex flex-col px-3 pb-2 pt-3 text-sm">
        <div className="mb-2 flex items-center">
          <WhatsappIcon />
          <p className="w-fit ml-2 rounded-sm  font-semibold text-foreground">
            Whatsapp
          </p>
        </div>
        <p className="text-card-foreground">
          Enlaza tu cuenta de whatsapp con QR y comienza a recibir mensajes.
        </p>
        <button
          className="ml-auto w-fit font-semibold text-accent-foreground hover:underline"
          onClick={props.onClick}
        >
          Crear
        </button>
      </div>
    </div>
  );
}
