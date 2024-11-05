import React from 'react';
import { i18n } from '@/i18n';
import { View, StyleSheet } from 'react-native';
import { useEventStore } from '@/zustand/store';

import Separator from '@/components/Separator';
import EventDate from '@/components/EventDate';
import TextApp from '@/components/texts/TextApp';
import GDGIconSvr from '@/components/svg/GDGIconSvr';
import DiversitySvr from '@/components/svg/DiversitySvr';
import MapSearchSvr from '@/components/svg/MapSearchSvr';
import EventDirection from '@/components/EventDirection';
import PersonPlaySvr from '@/components/svg/PersonPlaySvr';
import CardSection from '@/components/CardSection';
import ActiveEventIndicator from '@/components/ActiveEventIndicator';
import FormatListBulletedSvr from '@/components/svg/FormatListBulletedSvr';

import useAppNavigation from '@/hooks/useAppNavigation';

import { fonts, heightSizes, widthSizes } from '@/styles/Sizes';
import { Routes } from '@/constants/Routes';
import EventCredential from '@/components/EventCredential';

export default function EventDetailScreen() {
  const { navigateTo } = useAppNavigation();
  const { event, eventRecords } = useEventStore((state) => state.data);

  const goToAgenda = () => {
    navigateTo(Routes.Root.agenda);
  };

  const goToMap = () => {
    navigateTo(Routes.Root.eventMap);
  };

  const goToFriends = () => {
    navigateTo(Routes.Root.friendsGDG);
  };

  const goToContest = () => {
    navigateTo(Routes.Root.contest);
  };

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
          <CardSection title={i18n.t('agenda')} icon={<FormatListBulletedSvr />} onPress={goToAgenda} />
          <CardSection title={i18n.t('eventMap')} icon={<MapSearchSvr />} onPress={goToMap} />
        </View>
        <View style={styles.rowCard}>
          <CardSection title={i18n.t('gdgFriends')} icon={<DiversitySvr />} onPress={goToFriends} />
          <CardSection title={i18n.t('contest')} icon={<PersonPlaySvr />} onPress={goToContest} />
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
      <Separator marginTop={heightSizes[10]} />
      {renderCards()}
      <EventCredential event={event} eventRecords={eventRecords || []} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: widthSizes[15],
    backgroundColor: 'white',
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: fonts[20],
    marginTop: heightSizes[13],
    marginBottom: heightSizes[10],
  },
  notFoundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notFoundText: {
    fontSize: fonts[20],
    color: 'black',
    marginTop: heightSizes[10],
  },
  cardsContainer: {},
  rowCard: {
    marginTop: heightSizes[15],
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
