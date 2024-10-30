import { useEffect, useState } from 'react';
import fbFirestore from '@/firebase/fbFirestore';
import { FbEvent } from '@/models/FbEvent';

const useEventTabService = () => {
  const [events, setEvents] = useState<FbEvent[]>([]);

  const getAllEvents = async () => {
    const results = await fbFirestore.fbEvents.getAllEvents();
    if (results) {
      setEvents(results);
    }
  };

  useEffect(() => {
    getAllEvents().then();
  }, []);

  return { events };
};

const EventTabService = {
  useEventTabService,
};

export default EventTabService;
