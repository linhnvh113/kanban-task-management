'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

import IconBoard from '@/assets/icon-board.svg';

interface Props {
  board: any;
}

export default function NavigationItem({ board }: Props) {
  const params = useParams();

  return (
    <div key={board.id}>
      <Link
        href={`/boards/${board.id}`}
        className={`flex items-center gap-3 rounded-e-full px-6 py-4 ${
          params.boardId === board.id
            ? 'bg-primary text-white'
            : 'text-zinc-500 hover:bg-background hover:text-primary'
        }`}
      >
        <IconBoard />
        <h3>{board.name}</h3>
      </Link>
    </div>
  );
}
