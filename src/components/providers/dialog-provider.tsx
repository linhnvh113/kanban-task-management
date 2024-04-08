import BoardDialog from '../dialogs/board-dialog';
import DeleteBoardDialog from '../dialogs/delete-board-dialog';
import DeleteTaskDialog from '../dialogs/delete-task-dialog';
import TaskDetailDialog from '../dialogs/task-detail-dialog';
import TaskDialog from '../dialogs/task-dialog';

export function DialogProvider() {
  return (
    <>
      <BoardDialog />
      <DeleteBoardDialog />
      <DeleteTaskDialog />
      <TaskDetailDialog />
      <TaskDialog />
    </>
  );
}
