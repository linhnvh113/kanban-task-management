import { NextResponse } from 'next/server';

import prisma from '@/lib/db';

export async function DELETE(
  req: Request,
  { params }: { params: { boardId: string } },
) {
  const board = await prisma.board.delete({
    where: {
      id: params.boardId,
    },
  });

  return NextResponse.json(board);
}
