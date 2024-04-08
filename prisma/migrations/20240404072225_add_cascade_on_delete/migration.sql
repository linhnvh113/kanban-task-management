-- DropForeignKey
ALTER TABLE "column" DROP CONSTRAINT "column_board_id_fkey";

-- DropForeignKey
ALTER TABLE "subtask" DROP CONSTRAINT "subtask_task_id_fkey";

-- DropForeignKey
ALTER TABLE "task" DROP CONSTRAINT "task_column_id_fkey";

-- AddForeignKey
ALTER TABLE "column" ADD CONSTRAINT "column_board_id_fkey" FOREIGN KEY ("board_id") REFERENCES "board"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task" ADD CONSTRAINT "task_column_id_fkey" FOREIGN KEY ("column_id") REFERENCES "column"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subtask" ADD CONSTRAINT "subtask_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "task"("id") ON DELETE CASCADE ON UPDATE CASCADE;
