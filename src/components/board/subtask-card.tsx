import axios from 'axios';

import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';

import type { Subtask } from '@prisma/client';

interface Props {
  subtask: Subtask;
}

export default function SubtaskCard({ subtask }: Props) {
  return (
    <div className="flex items-center gap-4 bg-background p-3">
      <Checkbox
        defaultChecked={subtask.isCompleted}
        checked={subtask.isCompleted}
        onCheckedChange={async () => {
          await axios.patch(`/api/subtasks/${subtask.id}`, {
            isCompleted: !subtask.isCompleted,
          });
        }}
      />
      <Label>{subtask.title}</Label>
    </div>
  );
}
