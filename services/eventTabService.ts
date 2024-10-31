import { useEffect, useState } from 'react';
import fbFirestore from '@/firebase/fbFirestore';

import useUserSession from '@/hooks/useUserSession';

import { FbEvent } from '@/models/FbEvent';
import fbPayments from '@/firebase/firestore/fbPayments';

const useEventTabService = () => {
  const { user } = useUserSession();
  const [events, setEvents] = useState<FbEvent[]>([]);
  const [payment, setPayment] = useState<any | null>(null);

  const getAllEvents = async () => {
    const results = await fbFirestore.fbEvents.getAllEvents();
    if (results) {
      setEvents(results);
    }
  };

  const getPaymentByEmail = async () => {
    if (!user || !user.email) {
      return;
    }

    const newPayment = await fbPayments.getPaymentByEmail(user.email);
    if (newPayment) {
      setPayment(newPayment);
    }
  };

  const getData = async () => {
    if (user) {
      await getAllEvents();
      // await getPaymentByEmail();
    }
  };

  useEffect(() => {
    getData().then();
  }, [user]);

  return { events };
};

const EventTabService = {
  useEventTabService,
};

export default EventTabService;
