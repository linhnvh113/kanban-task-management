'use client';

import { useEffect, useState } from 'react';

import BoardForm from '../forms/board-form';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';

export default function InitialDialog() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <Dialog open>
        <DialogContent>
          <DialogHeader>
            <DialogTitle> Add New Board</DialogTitle>
          </DialogHeader>
          <BoardForm />
          <DialogFooter>
            <Button type="submit" form="board-form" className="w-full">
              Create New Board
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  );
}
