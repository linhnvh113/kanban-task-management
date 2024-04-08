'use client';

import VerticalEllipsis from '@/assets/icon-vertical-ellipsis.svg';
import { useDialogStore } from '@/hooks/use-dialog-store';

import SubtaskCard from '../board/subtask-card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Label } from '../ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

export default function TaskDetailDialog() {
  const {
    types,
    data: { task },
    onOpen,
    onClose,
  } = useDialogStore();

  const isOpen = !!(types.findLast(() => true) === 'task-detail');

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader className="space-y-6">
          <DialogTitle className="flex items-center justify-between">
            <div>{task?.title}</div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <VerticalEllipsis />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => onOpen('edit-task')}>
                  Edit Task
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onOpen('delete-task')}>
                  Delete Task
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </DialogTitle>
          {task?.description && (
            <DialogDescription>{task?.description}</DialogDescription>
          )}
        </DialogHeader>
        <div className="space-y-4">
          <h4>Subtasks</h4>
          <div className="space-y-2">
            {task?.subtasks?.map((subtask) => (
              <SubtaskCard key={subtask.id} subtask={subtask} />
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <Label>Current Status</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={task?.columnId} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </DialogContent>
    </Dialog>
  );
}
