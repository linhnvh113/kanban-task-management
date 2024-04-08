'use client';

import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { useDeleteBoard } from '@/hooks/use-api';
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

export default function DeleteTaskDialog() {
  const {
    types,
    data: { task },
    onClose,
    onCloseAll,
  } = useDialogStore();

  const router = useRouter();

  const isOpen = !!(types.findLast(() => true) === 'delete-task');

  const { mutate } = useDeleteBoard<string | undefined>();

  const onDelete = () => {
    mutate(task?.id, {
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
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-destructive">
            Delete this task
          </DialogTitle>
          <DialogDescription>
            {`Are you sure you want to delete the '${task?.title}' task and its subtasks? This action cannot be reversed.`}
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
