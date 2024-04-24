import { FaUser } from "react-icons/fa6";
import { ModuleTitle } from "../core/components/ModulesLayout";

export function ChatPage() {
  return (
    <div className="flex w-full flex-col">
      <ModuleTitle>Conversaciones</ModuleTitle>
      <div className="mt-4 flex w-full md:px-4">
        <div className="flex w-full flex-col bg-neutral-50/5 md:w-72 md:min-w-72">
          <button className="flex items-center border-b-2 border-b-neutral-500/60 px-2 py-1 text-left hover:bg-stone-100/5">
            <div className="h-fit rounded-full bg-neutral-100/15 p-3 text-xl">
              <FaUser />
            </div>
            <div className="ml-3.5 flex flex-col py-2">
              <p className="font-semibold">Mario Lopez</p>
              <p className="text-xs">Que tal</p>
            </div>
          </button>
          <button className="flex items-center px-2  py-1 text-left hover:bg-stone-100/5">
            <div className="h-fit rounded-full bg-neutral-100/15 p-3 text-xl">
              <FaUser />
            </div>
            <div className="ml-3.5 flex flex-col overflow-hidden py-2">
              <p className="overflow-hidden overflow-ellipsis whitespace-nowrap font-semibold">
                Fabiana Antelopezssssss
              </p>
              <p className="overflow-hidden overflow-ellipsis whitespace-nowrap text-xs">
                Que tal la comida de churrasco
              </p>
            </div>
          </button>
        </div>
        <div className="hidden w-full bg-neutral-100/5 md:block">Mensajes</div>
      </div>
    </div>
  );
}
