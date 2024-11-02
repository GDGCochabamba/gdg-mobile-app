import { useEffect, useState } from 'react';
import fbFirestore from '@/firebase/fbFirestore';

import useUserSession from '@/hooks/useUserSession';

import fbEventRecords from '@/firebase/firestore/fbEventRecords';

import { FBEventRecord } from '@/models/FbEventRecord';
import { FbEvent } from '@/models/FbEvent';

const useEventTabService = () => {
  const { user } = useUserSession();
  const [events, setEvents] = useState<FbEvent[]>([]);
  const [eventRecords, setEventRecords] = useState<FBEventRecord[]>([]);

  const getAllEvents = async () => {
    const results = await fbFirestore.fbEvents.getAllEvents();
    if (results) {
      setEvents(results);
    }
  };

  const getEventRecordsByEmail = async () => {
    if (!user || !user.email) {
      return;
    }

    const eventRecords: FBEventRecord[] = await fbEventRecords.getEventRecordByEmail(user.email);
    if (eventRecords) {
      setEventRecords(eventRecords);
    }
  };

  const getData = async () => {
    if (user) {
      await getAllEvents();
      await getEventRecordsByEmail();
    }
  };

  useEffect(() => {
    getData().then();
  }, [user]);

  return { events, eventRecords };
};

const EventTabService = {
  useEventTabService,
};

export default EventTabService;
