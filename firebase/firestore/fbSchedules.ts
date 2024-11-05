import firestore from '@react-native-firebase/firestore';
import getTestSchedule from '@/firebase/data/schedulesData';

const getSchedulesById = async (scheduleId: string) => {
  let schedule: any = null;
  try {
    const querySnapshot = await firestore().collection('schedules').doc(scheduleId).get();
    schedule = querySnapshot.data();
  } catch (e) {
    console.log('getSchedulesById error:', e);
  }

  return schedule;
};

const createScheduleDevFest = async () => {
  const { schedule, scheduleId } = getTestSchedule();

  await firestore().collection('schedules').doc(scheduleId).set(schedule);
};

const fbSchedules = {
  getSchedulesById,
  createScheduleDevFest,
};

export default fbSchedules;
