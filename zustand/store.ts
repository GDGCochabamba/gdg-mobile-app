import { create } from 'zustand';
import User from '@/models/User';
import { FbEvent } from '@/models/FbEvent';

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

type EventStore = {
  event: FbEvent | null;
  changeEvent: (newEvent: FbEvent | null) => void;
};

export const useEventStore = create<EventStore>((set) => ({
  event: null,
  changeEvent: (newEvent) => set(() => ({ event: newEvent })),
}));
