import React from 'react';
import { StyleSheet } from 'react-native';

import TextApp from '@/components/texts/TextApp';
import { useThemeColor } from '@/hooks/useThemeColor';

import { heightSizes } from '@/styles/Sizes';

import dateUtils from '@/utils/dateUtils';
import { FbEvent } from '@/models/FbEvent';

interface Props {
  event: FbEvent;
}

export default function EventDate({ event }: Props) {
  const dateColor = useThemeColor({}, 'date');
  const dateString = dateUtils.formatDate(dateUtils.convertTimestampToDate(event.date.start));

  return <TextApp text={dateString} style={[styles.dateEvent, { color: dateColor }]} />;
}

const styles = StyleSheet.create({
  dateEvent: {
    color: 'black',
    marginTop: heightSizes['5'],
  },
});
