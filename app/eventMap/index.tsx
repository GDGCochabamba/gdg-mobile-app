import React from 'react';
import { i18n } from '@/i18n';
import { View, StyleSheet } from 'react-native';

import { useEventStore } from '@/zustand/store';

import ImageApp from '@/components/ImageApp';
import TextApp from '@/components/texts/TextApp';

import { useThemeColor } from '@/hooks/useThemeColor';

import { fonts, widthSizes } from '@/styles/Sizes';

export default function EventMapScreen() {
  const textColors = useThemeColor({}, 'textColors');
  const cardBorder = useThemeColor({}, 'cardBorder');
  const { event } = useEventStore((state) => state.data);

  return (
    <View style={styles.container}>
      {event?.eventMap && (
        <View style={[styles.map, { borderColor: cardBorder, borderWidth: 1 }]}>
          <TextApp text={i18n.t('eventMap')} style={[styles.text, { color: textColors.black }]} />
          <ImageApp source={{ uri: event?.eventMap }} style={styles.image} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '90%',
    height: '90%',
    borderRadius: widthSizes[10],
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: widthSizes[10],
    resizeMode: 'contain',
  },
  text: {
    fontSize: fonts[20],
    fontWeight: 'bold',
    padding: widthSizes[10],
  },
});
