import BoardDialog from '../dialogs/board-dialog';
import DeleteBoardDialog from '../dialogs/delete-dialog';
import TaskDetailDialog from '../dialogs/task-detail-dialog';
import TaskDialog from '../dialogs/task-dialog';

export function DialogProvider() {
  return (
    <>
      <BoardDialog />
      <DeleteBoardDialog />
      <TaskDetailDialog />
      <TaskDialog />
    </>
  );
}
