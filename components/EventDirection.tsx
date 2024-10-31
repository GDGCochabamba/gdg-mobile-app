import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import TextApp from '@/components/texts/TextApp';
import DistanceSvr from '@/components/svg/DistanceSvr';
import DirectionsSvr from '@/components/svg/DirectionsSvr';

import dateUtils from '@/utils/dateUtils';
import mapUtils from '@/utils/mapUtils';
import { heightSizes, widthSizes } from '@/styles/Sizes';

import { FbEvent } from '@/models/FbEvent';

interface Props {
  event: FbEvent;
}

export default function EventDirection({ event }: Props) {
  return (
    <View style={styles.directionContainer}>
      <View style={styles.directionTextContainer}>
        <DistanceSvr />
        <View style={styles.textContainer}>
          <TextApp text={event.location.name} style={[styles.dateEvent, { fontWeight: 'bold' }]} />
          <TextApp text={`${event.location.address},`} style={styles.addressEvent} />
          <TextApp text={`${event.location.city}, ${event.location.country}`} style={styles.addressEvent} />
        </View>
      </View>
      <TouchableOpacity onPress={() => mapUtils.openMapsByEvent(event)}>
        <DirectionsSvr isActive={dateUtils.eventIsActive(event)} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  directionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: heightSizes['15'],
    alignItems: 'center',
  },
  directionTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: widthSizes['10'],
  },
  dateEvent: {
    color: 'black',
    marginTop: heightSizes['5'],
  },
  addressEvent: {
    width: 'auto',
  },
});
