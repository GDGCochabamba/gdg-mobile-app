import { GeoPoint, Timestamp } from '@firebase/firestore-types';

export interface FbEvent {
  id: string;
  description: string;
  name: string;
  registrationAdditionalQuestions: RegistrationAdditionalQuestion[];
  capacity: number;
  owner: string;
  image: string;
  location: Location;
  date: DateClass;
  price: Price;
  admins: string[];
  shortDescription: string;
  openRegistration: boolean;
  bannerImage: string;
}

export interface DateClass {
  start: Timestamp;
  end: Timestamp;
}

export interface End {
  seconds: number;
  nanoseconds: number;
}

export interface Location {
  geolocation: GeoPoint;
  name: string;
}

export interface Price {
  discount: number;
  currency: string;
  description: string;
  amount: number;
}

export interface RegistrationAdditionalQuestion {
  type: string;
  key: string;
  required: boolean;
  answer: string;
  label: string;
  options?: string[];
}
