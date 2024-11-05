import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import EventDate from '@/components/EventDate';
import TextApp from '@/components/texts/TextApp';
import EventDirection from '@/components/EventDirection';
import RegistrationStatus from '@/components/RegistrationStatus';
import ActiveEventIndicator from '@/components/ActiveEventIndicator';

import useAppNavigation from '@/hooks/useAppNavigation';

import { useEventStore } from '@/zustand/store';
import { Routes } from '@/constants/Routes';

import { fonts, heightSizes, widthSizes } from '@/styles/Sizes';
import { FbEvent } from '@/models/FbEvent';
import { FBEventRecord } from '@/models/FbEventRecord';

interface Props {
  event: FbEvent;
  eventRecords: FBEventRecord[];
}

export default function Event({ event, eventRecords = [] }: Props) {
  const { navigateTo } = useAppNavigation();
  const changeEvent = useEventStore((state) => state.changeEvent);

  const goToDetail = () => {
    changeEvent(event, eventRecords);
    navigateTo(Routes.Root.eventDetail);
  };

  return (
    <TouchableOpacity onPress={goToDetail} style={[styles.container, styles.card, { backgroundColor: 'white' }]}>
      <EventDate event={event} />
      <TextApp text={event.name} style={styles.title} />
      <ActiveEventIndicator event={event} />
      <EventDirection event={event} />
      {event && <RegistrationStatus event={event} eventRecords={eventRecords} />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: widthSizes['10'],
    marginHorizontal: widthSizes['15'],
    padding: widthSizes['15'],
    width: 'auto',
    justifyContent: 'center',
    borderRadius: 20,
  },
  card: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: fonts[20],
    marginTop: heightSizes['13'],
    marginBottom: heightSizes['10'],
  },
});
