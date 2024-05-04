import { ChannelService } from "@/backend";
import { ApiError } from "@/backend/core/ApiError";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export function useDeleteChannel(param: { onSuccess: () => void }) {
  const deleteChannel = useMutation({
    mutationFn: ChannelService.deleteChannelSession,
    onSuccess: () => {
      toast.success("Canal eliminado exitosamente!");
      param.onSuccess();
    },
    onError: (error: ApiError) => {
      toast.error(error.body.message ?? error.message);
    },
  });
  return {
    deleteChannel: deleteChannel.mutateAsync,
    isPending: deleteChannel.isPending,
    isError: deleteChannel.isError,
    data: deleteChannel.data,
  };
}
