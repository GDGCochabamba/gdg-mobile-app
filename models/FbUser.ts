import { Timestamp } from '@firebase/firestore-types';

export interface FbUser {
  email: string;
  photoURL: null | string;
  displayName: null | string;
  createdAt?: Timestamp;
  points?: number;
}
