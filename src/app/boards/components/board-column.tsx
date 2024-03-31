import ColumnTask from './column-task';

interface Props {
  column: any;
}

export default function BoardColumn({ column }: Props) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <div className="size-4 rounded-full bg-sky-400" />
        <h4>
          {column.name} ({column.tasks.length})
        </h4>
      </div>
      <div className="space-y-5">
        {column.tasks.map((task) => (
          <ColumnTask key={task.title} task={task} />
        ))}
      </div>
    </div>
  );
}
