import React from 'react';

import { notFound } from 'next/navigation';

import Header from '@/components/layout/header';
import Navigation from '@/components/layout/navigation';
import { getAllBoards, getBoardById } from '@/server/actions';

interface Props {
  children: React.ReactNode;
  params: {
    boardId: string;
  };
}

export default async function BoardLayout({ children, params }: Props) {
  const boards = await getAllBoards();
  const board = await getBoardById(params.boardId);

  if (!board) {
    return notFound();
  }

  return (
    <div className="relative min-h-screen flex-col bg-background">
      <Header board={board} />
      <div className="flex items-start justify-start">
        <Navigation boards={boards} />

        <main className="flex-1 overflow-auto md:h-[calc(100vh-80px)] xl:h-[calc(100vh-96px)]">
          {children}
        </main>
      </div>
    </div>
  );
}
