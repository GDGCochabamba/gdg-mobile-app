import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import TextApp from '@/components/texts/TextApp';

import { FbEvent } from '@/models/FbEvent';
import { heightSizes, widthSizes } from '@/styles/Sizes';
import { useThemeColor } from '@/hooks/useThemeColor';

interface Props {
  title: string;
  event: FbEvent;
  icon: any;
  onPress?: () => void;
}

export default function CardEventSection({ title, icon, onPress }: Props) {
  const cardBorder = useThemeColor({}, 'cardBorder');

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={onPress === undefined}
      style={[styles.container, { borderColor: cardBorder, borderWidth: 1 }]}>
      <TextApp text={title} style={styles.title} />
      {icon}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '45%',
    height: heightSizes['120'],
    borderRadius: 10,
    padding: widthSizes['10'],
    margin: widthSizes['10'],
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: heightSizes['10'],
  },
});
