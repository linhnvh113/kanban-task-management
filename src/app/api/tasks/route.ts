import { NextResponse } from 'next/server';

import prisma from '@/lib/db';

export async function POST(req: Request) {
  const { title, description, columnId, subtasks } = await req.json();

  const task = await prisma.task.create({
    data: {
      title,
      description,
      columnId,
      subtasks: {
        createMany: {
          data: subtasks,
        },
      },
    },
  });

  return NextResponse.json(task);
}
