import { FbSchedule, Room, Talk, TalkType } from '@/models/FbSchedule';

const getTestSchedule = () => {
  const scheduleId = '';
  const schedule: FbSchedule = { rooms: [] };

  return { schedule, scheduleId };
};

export default getTestSchedule;
