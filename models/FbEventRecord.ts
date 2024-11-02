import { Timestamp } from '@firebase/firestore-types';

export interface FBEventRecord {
  updatedAt: Timestamp;
  couponId: string;
  role: string;
  additionalAnswers: AdditionalAnswers;
  paymentId: string;
  orderId: string;
  validated: boolean;
  fullName: string;
  id: string;
  phoneNumber: string;
  searchTerm: string;
  eventId: string;
  email: string;
  createdAt: Timestamp;
}

export interface AdditionalAnswers {
  comments: string;
  gender: string;
  dietaryRestrictions: string;
}
