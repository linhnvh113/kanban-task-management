'use client';

import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { useDeleteBoard, useDeleteTask } from '@/hooks/use-api';
import { useDialogStore } from '@/hooks/use-dialog-store';

import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';

export default function DeleteBoardDialog() {
  const { types, data, onClose, onCloseAll } = useDialogStore();

  const router = useRouter();

  const isVisibleT = !!(types.findLast(() => true) === 'delete-task');
  const isVisibleB = !!(types.findLast(() => true) === 'delete-board');

  const { mutate: mutateDeleteTask } = useDeleteTask<string | undefined>();
  const { mutate: mutateDeleteBoard } = useDeleteBoard<string | undefined>();

  const onDelete = () => {
    if (isVisibleT) {
      mutateDeleteTask(data.task?.id, {
        onSuccess: () => {
          toast.success('The task has been deleted successfully!');
          onCloseAll();
          router.refresh();
        },
        onError: () => {
          toast.error('Something went wrong. Please try again later!');
          onCloseAll();
          router.refresh();
        },
      });
    } else {
      mutateDeleteBoard(data.board?.id, {
        onSuccess: () => {
          toast.success('The board has been deleted successfully!');
          onCloseAll();
          router.refresh();
        },
        onError: () => {
          toast.error('Something went wrong. Please try again later!');
          onCloseAll();
          router.refresh();
        },
      });
    }
  };

  return (
    <Dialog open={isVisibleT || isVisibleB} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-destructive">
            {isVisibleT ? 'Delete this task' : 'Delete this board'}
          </DialogTitle>
          <DialogDescription>
            {`Are you sure you want to delete the ${isVisibleT ? `'${data?.task?.title}' task` : `'${data?.board?.name}' board`}. This action will remove all columns and tasks and cannot be reversed.`}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex flex-col justify-between gap-4 md:flex-row">
          <Button variant="destructive" className="w-full" onClick={onDelete}>
            Delete
          </Button>
          <Button variant="secondary" className="w-full" onClick={onClose}>
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
