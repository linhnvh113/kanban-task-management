'use client';

import ModeToggle from '@/components/mode-toggle';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useLayoutStore } from '@/hooks/use-layout-store';

import NavigationAction from './navigation-action';
import NavigationClose from './navigation-close';
import NavigationItem from './navigation-item';
import NavigationOpen from './navigation-open';

import type { Board } from '@prisma/client';

interface Props {
  boards: Board[];
}

export default function Navigation({ boards }: Props) {
  const { isNavOpen } = useLayoutStore();

  return isNavOpen ? (
    <aside className="sticky bottom-0 left-0 z-10 hidden border-r md:top-20 md:block md:min-w-[260px] xl:top-24 xl:min-w-[300px]">
      <div className="flex flex-col bg-white py-8 md:h-[calc(100vh-80px)] xl:h-[calc(100vh-96px)]">
        <div className="flex-1 space-y-5">
          <h2 className="md:px-5 xl:px-6">{`ALL BOARDS (${boards.length})`}</h2>
          <ScrollArea className="md:pr-5 xl:pr-6">
            {boards.map((board) => (
              <NavigationItem key={board.name} board={board} />
            ))}
            <NavigationAction />
          </ScrollArea>
        </div>

        <ModeToggle />
        <NavigationClose />
      </div>
    </aside>
  ) : (
    <NavigationOpen />
  );
}
