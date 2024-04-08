import { NextResponse } from 'next/server';

import prisma from '@/lib/db';

export async function PATCH(
  req: Request,
  { params }: { params: { subtaskId: string } },
) {
  const { isCompleted } = await req.json();
  const subtask = await prisma.subtask.update({
    data: {
      isCompleted,
    },
    where: {
      id: params.subtaskId,
    },
  });

  return NextResponse.json(subtask);
}
