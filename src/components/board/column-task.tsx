'use client';

import { useDialogStore } from '@/hooks/use-dialog-store';

import type { TaskWithSubTasks } from '@/types/board.types';

interface Props {
  task: TaskWithSubTasks;
}

export default function ColumnTask({ task }: Props) {
  const { title, subtasks } = task;

  const { onOpen } = useDialogStore();

  const subtaskCompletedCount = subtasks.filter(
    (subtask) => subtask.isCompleted === true,
  ).length;

  return (
    <div
      aria-hidden="true"
      className="rounded-lg bg-white px-4 py-6 shadow-md"
      onClick={() =>
        onOpen('task-detail', {
          task,
        })
      }
    >
      <h3 className="mb-2">{title}</h3>
      <h5>{`${subtaskCompletedCount} of ${subtasks.length} subtasks`}</h5>
    </div>
  );
}
