'use client';

import { ChevronDown, EllipsisVertical, Plus } from 'lucide-react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useDialogStore } from '@/hooks/use-dialog-store';
import { useLayoutStore } from '@/hooks/use-layout-store';
import { cn } from '@/lib/utils';
import { BoardWithColumns } from '@/types/board.types';

import HeaderDropdown from './header-dropdown';

interface Props {
  board: BoardWithColumns;
}

export default function Header({ board }: Props) {
  const { onOpen } = useDialogStore();
  const { isNavOpen } = useLayoutStore();

  return (
    <header className="sticky top-0 bg-white">
      <div
        className={cn(
          'grid h-16 grid-cols-1 md:h-20 xl:h-24',
          isNavOpen
            ? 'md:grid-cols-[260px_minmax(0,1fr)] xl:grid-cols-[300px_minmax(0,1fr)]'
            : 'md:grid-cols-[auto_minmax(0,1fr)]',
        )}
      >
        <div
          className={cn(
            'hidden h-full items-center justify-between border-r md:flex md:px-5 xl:px-6',
            isNavOpen ? null : 'border-b',
          )}
        >
          <Image
            src="/logo-dark.svg"
            alt="Logo"
            width={153}
            height={26}
            priority
          />
        </div>

        <div className="container flex h-full items-center justify-between border-b">
          <div className="flex items-center gap-4">
            <Image
              src="/logo-mobile.svg"
              width={24}
              height={25}
              alt="Logo"
              className="md:hidden"
            />
            <HeaderDropdown>
              <div className="flex items-center gap-2">
                <h1>{board.name}</h1>
                <ChevronDown size={16} className="md:hidden" />
              </div>
            </HeaderDropdown>
          </div>
          <div className="flex items-center gap-4">
            <Button
              type="button"
              aria-label="open-task-form"
              onClick={() => onOpen('edit-task', { task: undefined })}
            >
              <Plus />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger aria-label="open-options-board-form">
                <EllipsisVertical color="gray" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem
                  onClick={() =>
                    onOpen('board-form', {
                      board,
                    })
                  }
                >
                  Edit Board
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="text-destructive"
                  onClick={() =>
                    onOpen('delete-board', {
                      board,
                    })
                  }
                >
                  Delete Board
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
