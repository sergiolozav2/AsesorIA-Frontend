import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { WhatsappQrContainer } from "./components/WhatsappQrContainer";

type CreateChannelDialogProps = {
  open: boolean;
  handleClose: () => void;
};

export function CreateChannelDialog(props: CreateChannelDialogProps) {
  return (
    <Dialog
      open={props.open}
      onOpenChange={(value) => !value && props.handleClose()}
    >
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Enlazar cuenta de Whatsapp</DialogTitle>
          <DialogDescription>
            Para hallar el escáner QR de WhatsApp, toca Menú - Dispositivos
            vinculados - Vincular un dispositivo.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center justify-center">
          <WhatsappQrContainer />
        </div>
      </DialogContent>
    </Dialog>
  );
}
