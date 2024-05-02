import { useCreateChannelWhatsapp } from "@/modules/chat/hooks/useCreateChannelWhatsapp";
import { useEffect } from "react";
import { toast } from "react-toastify";

export function WhatsappQrContainer() {
  const { qr, scanned } = useCreateChannelWhatsapp();

  useEffect(() => {
    if (scanned) {
      toast.success("Cuenta enlazada exitosamente!");
    }
  }, [scanned]);
  return qr && <img className="aspect-square h-80" src={qr} />;
}
