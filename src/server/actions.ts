'use server';

import prisma from '@/lib/db';

export async function getAllBoards() {
  const boards = await prisma.board.findMany();
  return boards;
}

export async function getBoard() {
  const board = await prisma.board.findFirst({
    include: {
      columns: {
        select: { name: true },
      },
    },
  });
  return board;
}

export async function getBoardById(boardId: string) {
  const board = await prisma.board.findUnique({
    where: {
      id: boardId,
    },
    include: {
      columns: true,
    },
  });

  return board;
}

export async function getBoardDetail(boardId: string) {
  const board = await prisma.board.findUnique({
    where: {
      id: boardId,
    },
    include: {
      columns: {
        include: {
          tasks: {
            include: {
              subtasks: true,
            },
          },
        },
      },
    },
  });

  return board;
}

export async function getColumns(boardId: string) {
  const columns = await prisma.column.findMany({
    where: {
      boardId,
    },
  });

  return columns;
}
