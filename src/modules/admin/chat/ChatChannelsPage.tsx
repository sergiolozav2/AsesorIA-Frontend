import { LoadingModule } from "../core/components/LoadingModule";
import { ModuleTitle } from "../core/components/ModulesLayout";
import { ChannelCardList } from "./components/ChannelCardList";
import { useCreatedChannels } from "./hooks/useCreatedChannels";
import { ChannelWhatsappCard } from "./components/ChannelWhatsappCard";
import { useState } from "react";
import { CreateChannelDialog } from "./components/CreateChannelDialog";

export function ChatChannelsPage() {
  const { data, isLoading } = useCreatedChannels();

  const [showDialog, setShowDialog] = useState(false);

  function handleShowDialog() {
    setShowDialog(true);
  }

  function handleCloseDialog() {
    setShowDialog(false);
  }

  return (
    <div className="flex w-full flex-col">
      <ModuleTitle>Crea canales para recibir mensajes</ModuleTitle>
      <div className="mt-4 flex flex-col px-4 text-sm">
        <h4 className="mb-2 ">Canales disponibles</h4>
        <ChannelWhatsappCard onClick={handleShowDialog} />
        <div className="mt-6 flex flex-col">
          <p className="mb-2">Tus canales</p>
          {isLoading && <LoadingModule />}
          <div className="flex flex-col gap-4">
            {data && <ChannelCardList list={data.list} />}
          </div>
        </div>
      </div>
      <CreateChannelDialog open={showDialog} handleClose={handleCloseDialog} />
    </div>
  );
}
