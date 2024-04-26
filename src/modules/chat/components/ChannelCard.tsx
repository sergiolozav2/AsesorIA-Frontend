import { toast } from "react-toastify";
import { WhatsappIcon } from "./WhatsappIcon";
import { formatToUserDate } from "@/modules/core/utils/formatToUserDate";

type ChannelCardProps = {
  creadoEn: string;
  wa_sesionID: string;
};
export function ChannelCard(props: ChannelCardProps) {
  return (
    <div className="flex items-center rounded border-b border-border px-5 py-3">
      <WhatsappIcon />
      <div className="ml-4 flex flex-col">
        <div className="flex items-center">
          <p className="font-medium">
            Canal de Whatsapp ({formatSesionID(props.wa_sesionID)})
          </p>
        </div>
        <p className="mt-0.5 text-muted-foreground">
          Creado el: {formatToUserDate(props.creadoEn)}
        </p>
      </div>
      <button
        className="ml-auto w-fit rounded-md bg-destructive px-2 py-1 font-semibold text-destructive-foreground shadow-md hover:underline"
        onClick={() => toast.warning("No implementado aún")}
      >
        Eliminar
      </button>
    </div>
  );
}

function formatSesionID(wa_sesionID: string) {
  return wa_sesionID.split("-")[0];
}
