interface Props {
  task: any;
}

export default function ColumnTask({ task }: Props) {
  return (
    <div className="rounded-lg bg-white px-4 py-6 shadow-md">
      <h3 className="mb-2">{task.title}</h3>
      <h5>0 of 5 subtasks</h5>
    </div>
  );
}
