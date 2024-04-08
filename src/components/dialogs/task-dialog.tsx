'use client';

import { useDialogStore } from '@/hooks/use-dialog-store';

import TaskForm from '../forms/task-form';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';

export default function TaskDialog() {
  const {
    types,
    data: { task },
    onClose,
  } = useDialogStore();

  const isOpen = !!(types.findLast(() => true) === 'edit-task');

  return (
    isOpen && (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{task ? 'Edit Task' : 'Add New Task'}</DialogTitle>
          </DialogHeader>
          <TaskForm formData={task} />
          <DialogFooter>
            <Button type="submit" form="task-form" className="w-full">
              {task ? 'Save Changes' : 'Create Task'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  );
}
