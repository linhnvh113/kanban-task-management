'use client';

import { useDialogStore } from '@/hooks/use-dialog-store';

import BoardForm from '../forms/board-form';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';

export default function BoardDialog() {
  const {
    types,
    data: { board },
    onClose,
  } = useDialogStore();

  const isOpen = !!(types.findLast(() => true) === 'board-form');

  return (
    isOpen && (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{board ? 'Edit Board' : 'Add New Board'}</DialogTitle>
          </DialogHeader>
          <BoardForm formData={board} />
          <DialogFooter>
            <Button type="submit" form="board-form" className="w-full">
              {board ? 'Saves Changes' : 'Create New Board'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  );
}
