import { NextResponse } from 'next/server';

import prisma from '@/lib/db';

export async function GET() {
  const boards = await prisma.board.findMany();
  return NextResponse.json(boards);
}

export async function POST(req: Request) {
  const { name, columns } = await req.json();

  const board = await prisma.board.create({
    data: {
      name,
      columns: {
        createMany: {
          data: columns,
        },
      },
    },
  });

  return NextResponse.json(board);
}
