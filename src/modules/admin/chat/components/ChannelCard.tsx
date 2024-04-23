import { toast } from "react-toastify";
import { formatToUserDate } from "../../core/utils/formatToUserDate";
import { ChannelWhatsappFlag } from "./ChannelWhatsappFlag";

type ChannelCardProps = {
  creadoEn: string;
  wa_sesionID: string;
};
export function ChannelCard(props: ChannelCardProps) {
  return (
    <div className="flex max-w-96 rounded border border-stone-200 bg-white shadow dark:border-neutral-600 dark:bg-transparent">
      <ChannelWhatsappFlag />
      <div className="flex w-full flex-col px-3 pb-2 pt-3">
        <p className="text-base font-medium">
          Canal de Whatsapp ({formatSesionID(props.wa_sesionID)})
        </p>
        <p className="mb-2 mt-0.5 text-stone-700 dark:text-stone-100">
          Creado el: {formatToUserDate(props.creadoEn)}
        </p>
        <button
          className="ml-auto w-fit font-semibold text-red-700 hover:underline dark:text-white"
          onClick={() => toast.warning("No implementado aún")}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

function formatSesionID(wa_sesionID: string) {
  return wa_sesionID.split("-")[0];
}
