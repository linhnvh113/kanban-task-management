import { notFound } from 'next/navigation';

import BoardColumn from '@/components/board/board-column';
import { getBoardDetail } from '@/server/actions';

interface Props {
  params: {
    boardId: string;
  };
}

export default async function Page({ params }: Props) {
  const board = await getBoardDetail(params.boardId);
  if (!board) {
    return notFound();
  }

  return (
    <div className="container grid h-full auto-cols-[280px] grid-flow-col gap-6 overflow-x-auto py-6">
      {board.columns.map((column) => (
        <BoardColumn key={column.name} column={column} />
      ))}
      <div className="mt-10 flex items-center justify-center space-y-6 bg-zinc-300/20">
        <h1>+ New Column</h1>
      </div>
    </div>
  );
}
