import { NextResponse } from 'next/server';

import prisma from '@/lib/db';

export async function GET(
  req: Request,
  { params }: { params: { boardId: string } },
) {
  const columns = await prisma.column.findMany({
    where: {
      boardId: params.boardId,
    },
  });

  return NextResponse.json(columns);
}
