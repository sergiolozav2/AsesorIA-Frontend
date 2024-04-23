import { ChannelWhatsappFlag } from "./ChannelWhatsappFlag";

type ChannelWhatsappCardProps = {
  onClick: () => void;
};

export function ChannelWhatsappCard(props: ChannelWhatsappCardProps) {
  return (
    <div className="flex max-w-96 rounded border border-stone-200 bg-white shadow">
      <ChannelWhatsappFlag />
      <div className="flex flex-col px-3 pb-2 pt-3 text-sm">
        <p className="mb-1 text-base font-semibold">Whatsapp</p>
        <p className="text-stone-700">
          Enlaza tu cuenta de whatsapp con QR y comienza a recibir mensajes.
        </p>
        <button
          className="ml-auto w-fit font-semibold text-stone-800 hover:underline"
          onClick={props.onClick}
        >
          Crear
        </button>
      </div>
    </div>
  );
}
