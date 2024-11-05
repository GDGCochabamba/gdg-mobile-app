import { useEffect, useState } from 'react';
import { useEventStore } from '@/zustand/store';

import fbSchedules from '@/firebase/firestore/fbSchedules';
import { FbSchedule } from '@/models/FbSchedule';

const useAgendaService = () => {
  const { event } = useEventStore((state) => state.data);
  const [data, setData] = useState<{ data: FbSchedule | null; loading: boolean }>({
    data: null,
    loading: false,
  });

  const getScheduleEvents = async (scheduleId: string) => {
    setData({ ...data, loading: true });
    const result = await fbSchedules.getSchedulesById(scheduleId);
    setData({ data: result, loading: false });
  };

  useEffect(() => {
    if (event) {
      getScheduleEvents(event.id).then();
    }
  }, [event]);

  return { schedules: data.data, loading: data.loading, getScheduleEvents };
};

const agendaService = {
  useAgendaService,
};

export default agendaService;
