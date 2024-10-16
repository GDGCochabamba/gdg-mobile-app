import { create } from 'zustand';
import User from '@/models/User';

type Store = {
  user: User | null;
  changeUser: (newUser: User | null) => void;
  cleanCredentials: () => void;
};

const useStore = create<Store>((set) => ({
  user: null,
  changeUser: (newUser) => set(() => ({ user: newUser })),
  cleanCredentials: () => set(() => ({ user: null })),
}));
