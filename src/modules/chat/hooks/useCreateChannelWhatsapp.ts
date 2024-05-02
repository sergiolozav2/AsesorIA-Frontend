import { env } from "@/env";
import { useServerEvents } from "@/modules/core/hooks/useServerEvents";
import { useEffect, useState } from "react";

const url = env.VITE_BACKEND_URL + "/whatsapp/create-session";

export function useCreateChannelWhatsapp() {
  const [qr, setQr] = useState<string | undefined>(undefined);
  const [scanned, setScanned] = useState(false);

  const { event, isOpen } = useServerEvents(url);

  useEffect(() => {
    if (event.name === "qr") {
      setQr(event.data as string);
    }

    if (event.name === "open") {
      setScanned(true);
    }
  }, [event, event.data, event.name]);

  return { qr, isOpen, scanned };
}
