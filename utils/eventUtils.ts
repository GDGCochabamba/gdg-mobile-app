import { FbEvent } from '@/models/FbEvent';
import { FBEventRecord } from '@/models/FbEventRecord';

const eventIsActive = (event: FbEvent): boolean => {
  const endDate = event.date.end;
  return endDate.toDate() > new Date();
};

const getEventRecordByEventId = (event: FbEvent, eventRecords: FBEventRecord[]) => {
  return eventRecords.find((record) => record.eventId === event.id);
};

const eventUtils = {
  eventIsActive,
  getEventRecordByEventId,
};

export default eventUtils;
