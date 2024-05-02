import { ChannelCardList } from "./components/ChannelCardList";
import { useCreatedChannels } from "./hooks/useCreatedChannels";
import { ChannelWhatsappCard } from "./components/ChannelWhatsappCard";
import { useState } from "react";
import { CreateChannelDialog } from "./components/CreateChannelDialog/CreateChannelDialog";
import { ModuleTitle } from "../core/components/ModulesLayout";
import { LoadingModule } from "../core/components/LoadingModule";

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
    <div className="flex w-full flex-col md:px-8 px-4">
      <ModuleTitle>Canales</ModuleTitle>
      <div className="mt-4 flex flex-col text-sm">
        <h4 className="mb-2 text-foreground">Canales disponibles</h4>
        <ChannelWhatsappCard onClick={handleShowDialog} />
        <div className="mt-6 flex flex-col">
          <p className="mb-2 text-foreground">Tus canales</p>
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
