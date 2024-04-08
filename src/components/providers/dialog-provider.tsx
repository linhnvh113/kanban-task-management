'use client';

import dynamic from 'next/dynamic';

const BoardDialog = dynamic(() => import('../dialogs/board-dialog'), {
  ssr: false,
});
const DeleteBoardDialog = dynamic(() => import('../dialogs/delete-dialog'), {
  ssr: false,
});
const TaskDetailDialog = dynamic(
  () => import('../dialogs/task-detail-dialog'),
  { ssr: false },
);
const TaskDialog = dynamic(() => import('../dialogs/task-dialog'), {
  ssr: false,
});

export function DialogProvider() {
  return (
    <>
      <TaskDetailDialog />
      <BoardDialog />
      <TaskDialog />
      <DeleteBoardDialog />
    </>
  );
}
