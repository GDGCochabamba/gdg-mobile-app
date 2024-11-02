import React from 'react';
import { View, StyleSheet } from 'react-native';

import Separator from '@/components/Separator';

import { heightSizes } from '@/styles/Sizes';
import { useThemeColor } from '@/hooks/useThemeColor';

import { FbEvent } from '@/models/FbEvent';
import eventUtils from '@/utils/eventUtils';

interface Props {
  event: FbEvent;
}

export default function ActiveEventIndicator({ event }: Props) {
  const gdgColors = useThemeColor({}, 'gdgColors');

  if (event && !eventUtils.eventIsActive(event)) {
    return <Separator />;
  }

  return (
    <View style={styles.container}>
      <View style={[styles.fragment, { backgroundColor: gdgColors.blue }]} />
      <View style={[styles.fragment, { backgroundColor: gdgColors.green }]} />
      <View style={[styles.fragment, { backgroundColor: gdgColors.yellow }]} />
      <View style={[styles.fragment, { backgroundColor: gdgColors.red }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 'auto',
    flexDirection: 'row',
    height: heightSizes['4'],
  },
  fragment: {
    width: '25%',
    height: '100%',
  },
  disableIndicator: {
    width: 'auto',
    height: heightSizes['1'],
  },
});
