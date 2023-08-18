/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Props } from './typing';

interface storeState {
    remove: (user: Props[]) => void;
    add: (user: Props[]) => void;
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