import React from 'react';
import { i18n } from '@/i18n';
import { View, StyleSheet } from 'react-native';
import { useEventStore } from '@/zustand/store';

import Separator from '@/components/Separator';
import EventDate from '@/components/EventDate';
import TextApp from '@/components/texts/TextApp';
import GDGIconSvr from '@/components/svg/GDGIconSvr';
import EventDirection from '@/components/EventDirection';
import ActiveEventIndicator from '@/components/ActiveEventIndicator';

import { fonts, heightSizes, withSizes } from '@/styles/Sizes';
import CardEventSection from '@/components/CardEventSection';

export default function EventDetailScreen() {
  const event = useEventStore((state) => state.event);
  if (!event) {
    return (
      <View style={styles.notFoundContainer}>
        <GDGIconSvr />
        <TextApp text={i18n.t('eventNotFound')} style={styles.notFoundText} />
      </View>
    );
  }

  const renderCards = () => {
    return (
      <View style={styles.cardsContainer}>
        <View style={styles.rowCard}>
          <CardEventSection title={i18n.t('agenda')} event={event} />
          <CardEventSection title={i18n.t('eventMap')} event={event} />
        </View>
        <View style={styles.rowCard}>
          <CardEventSection title={i18n.t('gdgFriends')} event={event} />
          <CardEventSection title={i18n.t('contest')} event={event} />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <EventDate event={event} />
      <TextApp text={event.name} style={styles.title} />
      <ActiveEventIndicator event={event} />
      <EventDirection event={event} />
      <Separator marginTop={heightSizes[10]} marginBottom={heightSizes[10]} />
      {renderCards()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: withSizes['15'],
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: fonts[20],
    marginTop: heightSizes['13'],
    marginBottom: heightSizes['10'],
  },
  notFoundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notFoundText: {
    fontSize: fonts[20],
    color: 'black',
    marginTop: heightSizes['10'],
  },
  cardsContainer: {},
  rowCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
