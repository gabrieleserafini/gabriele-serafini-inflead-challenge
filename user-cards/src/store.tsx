import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface storeState {
    remove: (user: []) => void;
    add: (user: []) => void;
    wishlist: any[];
}

export const useStore = create<storeState>()(
    persist((set) => ({
      wishlist: [],
      add: (user) => set((state) => ({ wishlist: [...state.wishlist, user] })),
      remove: (user) => set((state) => ({ wishlist: state.wishlist.filter((item) => item.id !== user.id) })),
    }),
    { name: "wishlist local" },
));