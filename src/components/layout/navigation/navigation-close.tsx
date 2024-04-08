'use client';

import { EyeOff } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useLayoutStore } from '@/hooks/use-layout-store';

export default function NavigationClose() {
  const { toggleNav } = useLayoutStore();

  return (
    <Button
      type="button"
      className="text-medium-grey hover:text-main-purple-hover mt-2 cursor-pointer select-none justify-start gap-4 rounded-l-none rounded-r-full md:mr-5 xl:mr-6"
      onClick={toggleNav}
    >
      <EyeOff size={16} />
      <h3 className="text-white">Hide Sidebar</h3>
    </Button>
  );
}
