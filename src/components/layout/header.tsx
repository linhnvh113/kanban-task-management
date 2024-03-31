import AddTaskMobile from '@/assets/icon-add-task-mobile.svg';
import ChevronDown from '@/assets/icon-chevron-down.svg';
import VerticalEllipsis from '@/assets/icon-vertical-ellipsis.svg';
import LogoDark from '@/assets/logo-dark.svg';
import LogoMobile from '@/assets/logo-mobile.svg';

import { Button } from '../ui/button';

export default function Header() {
  return (
    <header className="sticky top-0 w-full">
      <div className="container h-16 items-center justify-between bg-white md:grid md:h-20 md:grid-cols-[260px_1fr]">
        <div>
          <LogoDark />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <LogoMobile />
            <h1 className="flex items-center gap-2">
              <span>Platform Launch</span>
              <ChevronDown />
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <Button type="button">
              <AddTaskMobile />
            </Button>
            <Button type="button" variant="ghost" className="px-0">
              <VerticalEllipsis />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
