import data from '@/dev-data/data.json';

import BoardColumn from '../components/board-column';

interface Props {
  params: {
    boardId: string;
  };
}

export default function Page({ params }: Props) {
  const board = data.boards[0];

  return (
    <div className="container grid auto-cols-[280px] grid-flow-col gap-6 overflow-x-auto py-6">
      {board.columns.map((column) => (
        <BoardColumn key={column.name} column={column} />
      ))}
    </div>
  );
}
