import HideSidebar from '@/assets/icon-hide-sidebar.svg';
import ModeToggle from '@/components/mode-toggle';
import { ScrollArea } from '@/components/ui/scroll-area';
import data from '@/dev-data/data.json';

import NavigationItem from './navigation-item';

export default function Navigation() {
  return (
    <aside className="sticky bottom-0 left-0 overflow-hidden md:top-20">
      <div className="flex h-[calc(100vh-80px)] flex-col bg-white py-8">
        <div className="flex-1 pr-5">
          <h4 className="pb-5 pl-6">ALL BOARDS (3)</h4>
          <ScrollArea>
            {data.boards.map((board) => (
              <NavigationItem key={board.name} board={board} />
            ))}
          </ScrollArea>
        </div>

        <div className="px-2.5">
          <ModeToggle />
        </div>

        <button
          type="button"
          className="text-medium-grey hover:text-main-purple-hover flex cursor-pointer select-none items-center gap-4 p-2"
        >
          <HideSidebar />
          <h3>Hide Sidebar</h3>
        </button>
      </div>
    </aside>
  );
}
