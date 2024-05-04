import { WhatsappIcon } from "./WhatsappIcon";
import { formatToUserDate } from "@/modules/core/utils/formatToUserDate";
import { useDeleteChannel } from "../hooks/useDeleteChannel";
import { Button } from "@/components/ui/button";

type ChannelCardProps = {
  createdAt: string;
  waSessionID: string;
  onDelete: () => void;
};
export function ChannelCard(props: ChannelCardProps) {
  const { deleteChannel, isPending } = useDeleteChannel({
    onSuccess: props.onDelete,
  });
  function handleDeleteCard() {
    deleteChannel({
      waSessionID: props.waSessionID,
    });
  }
  return (
    <div className="flex items-center rounded border-b border-border px-5 py-3">
      <WhatsappIcon />
      <div className="ml-4 flex flex-col">
        <div className="flex items-center">
          <p className="font-medium">
            Canal de Whatsapp ({formatSesionID(props.waSessionID)})
          </p>
        </div>
        <p className="mt-0.5 text-muted-foreground">
          Creado el: {formatToUserDate(props.createdAt)}
        </p>
      </div>
      <Button
        className="ml-auto px-2 py-1 font-semibold"
        variant="destructive"
        onClick={handleDeleteCard}
        disabled={isPending}
      >
        Eliminar
      </Button>
    </div>
  );
}

function formatSesionID(wa_sesionID: string) {
  return wa_sesionID.split("-")[0];
}
