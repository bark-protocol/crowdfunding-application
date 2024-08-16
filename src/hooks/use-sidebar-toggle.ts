import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface SidebarToggleStore {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export const useSidebarToggle = create(
  persist<SidebarToggleStore>(
    (set, get) => ({
      isOpen: true, // Initialize as desired
      toggleSidebar: () => {
        set({ isOpen: !get().isOpen });
      },
    }),
    {
      name: 'sidebar-toggle', // Key for localStorage
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
