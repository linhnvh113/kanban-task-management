import ColumnTask from './column-task';

import type { ColumnWithTasks } from '@/types/board.types';

interface Props {
  column: ColumnWithTasks;
}

export default function BoardColumn({ column: { name, tasks } }: Props) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <div className="size-4 rounded-full bg-sky-400" />
        <h3>{`${name} (${tasks.length})`}</h3>
      </div>
      <div className="space-y-5">
        {tasks.map((task) => (
          <ColumnTask key={task.title} task={task} />
        ))}
      </div>
    </div>
  );
}
