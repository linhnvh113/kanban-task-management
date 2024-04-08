import { create } from 'zustand';

import { removeLastElement } from '@/lib/array';
import { BoardWithColumns, TaskWithSubTasks } from '@/types/board.types';

type DialogType =
  | 'task-detail'
  | 'delete-task'
  | 'delete-board'
  | 'edit-task'
  | 'board-form';

interface DialogData {
  task?: TaskWithSubTasks;
  board?: BoardWithColumns;
}

interface DialogState {
  types: DialogType[];
  data: DialogData;
  /* eslint-disable-next-line */
  onOpen: (type: DialogType, data?: DialogData) => void;
  onClose: () => void;
  onCloseAll: () => void;
}

export const useDialogStore = create<DialogState>((set) => ({
  types: [],
  data: {},
  onOpen: (type, data) =>
    set((state) => ({
      types: [...state.types, type],
      data: data || state.data,
    })),
  onClose: () =>
    set((state) => ({ types: removeLastElement<DialogType>(state.types) })),
  onCloseAll: () => set({ types: [] }),
}));
