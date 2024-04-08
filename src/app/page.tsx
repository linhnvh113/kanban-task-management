import { redirect } from 'next/navigation';

import InitialDialog from '@/components/dialogs/initial-dialog';
import { getBoard } from '@/server/actions';

export default async function Page() {
  const board = await getBoard();
  if (board) {
    return redirect(`/boards/${board.id}`);
  }

  return <InitialDialog />;
}
