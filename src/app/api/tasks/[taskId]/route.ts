import { NextResponse } from 'next/server';

import prisma from '@/lib/db';

export async function DELETE(
  req: Request,
  { params }: { params: { taskId: string } },
) {
  await prisma.task.delete({
    where: {
      id: params.taskId,
    },
  });

  return NextResponse.json({});
}
