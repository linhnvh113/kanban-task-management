import { Eye } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useLayoutStore } from '@/hooks/use-layout-store';

export default function NavigationOpen() {
  const { toggleNav } = useLayoutStore();

  return (
    <Button
      type="button"
      onClick={toggleNav}
      className="fixed bottom-8 left-0 h-12 w-14 rounded-l-none rounded-r-full p-0"
    >
      <Eye size={16} />
    </Button>
  );
}
