import { create } from 'zustand';
import User from '@/models/User';
import { FbEvent } from '@/models/FbEvent';
import { FBEventRecord } from '@/models/FbEventRecord';

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
  data: {
    event: FbEvent | null;
    eventRecords: FBEventRecord[] | null;
  };
  changeEvent: (newEvent: FbEvent | null, eventRecords: FBEventRecord[] | null) => void;
};

export const useEventStore = create<EventStore>((set) => ({
  data: { event: null, eventRecords: null },
  changeEvent: (newEvent, eventRecords) => set(() => ({ data: { event: newEvent, eventRecords } })),
}));
