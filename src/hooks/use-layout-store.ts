import { create } from 'zustand';

interface LayoutState {
  isNavOpen: boolean;
  toggleNav: () => void;
}

export const useLayoutStore = create<LayoutState>((set) => ({
  isNavOpen: true,
  toggleNav: () => set((state) => ({ isNavOpen: !state.isNavOpen })),
}));
