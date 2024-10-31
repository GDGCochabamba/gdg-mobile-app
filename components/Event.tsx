import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import EventDate from '@/components/EventDate';
import TextApp from '@/components/texts/TextApp';
import EventDirection from '@/components/EventDirection';
import ActiveEventIndicator from '@/components/ActiveEventIndicator';

import useAppNavigation from '@/hooks/useAppNavigation';

import { useEventStore } from '@/zustand/store';
import { Routes } from '@/constants/Routes';

import { fonts, heightSizes, withSizes } from '@/styles/Sizes';
import { FbEvent } from '@/models/FbEvent';

interface Props {
  event: FbEvent;
}

export default function Event({ event }: Props) {
  const { navigateTo } = useAppNavigation();
  const changeEvent = useEventStore((state) => state.changeEvent);

  const goToDetail = () => {
    changeEvent(event);
    navigateTo(Routes.Root.eventDetail);
  };

  const registrationStatus = () => {
    return <View></View>;
  };

  return (
    <TouchableOpacity onPress={goToDetail} style={[styles.container, styles.card, { backgroundColor: 'white' }]}>
      <EventDate event={event} />
      <TextApp text={event.name} style={styles.title} />
      <ActiveEventIndicator event={event} />
      <EventDirection event={event} />
      {registrationStatus()}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: withSizes['10'],
    marginHorizontal: withSizes['15'],
    padding: withSizes['15'],
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
