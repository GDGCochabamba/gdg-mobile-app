import { Timestamp } from '@firebase/firestore-types';
import { FbEvent } from '@/models/FbEvent';

const convertTimestampToDate = (timestamp: Timestamp): Date => {
  return timestamp.toDate();
};

const formatDate = (date: Date): string => {
  const day = date.toLocaleString('es-ES', { day: 'numeric' });
  const month =
    date.toLocaleString('es-ES', { month: 'long' }).charAt(0).toUpperCase() +
    date.toLocaleString('es-ES', { month: 'long' }).slice(1);
  const year = date.toLocaleString('es-ES', { year: 'numeric' });

  return `${day} de ${month}, de ${year}`;
};

const eventIsActive = (event: FbEvent): boolean => {
  const endDate = event.date.end;
  return endDate.toDate() > new Date();
};

const dateUtils = {
  convertTimestampToDate,
  formatDate,
  eventIsActive,
};

export default dateUtils;
