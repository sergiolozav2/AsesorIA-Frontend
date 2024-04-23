import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4"></div>
        </div>
        <DialogFooter >
          <button type="submit">Save changes</button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
