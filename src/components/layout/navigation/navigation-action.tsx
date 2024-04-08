'use client';

import { SquareKanban } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useDialogStore } from '@/hooks/use-dialog-store';

export default function NavigationAction() {
  const { onOpen } = useDialogStore();

  return (
    <Button
      variant="ghost"
      className="flex h-14 w-full justify-start gap-3 rounded-l-none rounded-r-full px-6"
      onClick={() => onOpen('board-form')}
    >
      <SquareKanban />
      <h3>+ Create New Board</h3>
    </Button>
  );
}
