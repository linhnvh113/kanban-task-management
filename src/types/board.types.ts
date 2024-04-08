import { Board, Column, Subtask, Task } from '@prisma/client';

export type BoardWithColumns = Board & {
  columns: Column[];
};

export type TaskWithSubTasks = Task & {
  subtasks: Subtask[];
};

export type ColumnWithTasks = Column & {
  tasks: TaskWithSubTasks[];
};
