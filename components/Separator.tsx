import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import { heightSizes } from '@/styles/Sizes';

interface Props {
  marginTop?: number;
  marginBottom?: number;
}

export default function Separator({ marginTop, marginBottom }: Props) {
  const disable = useThemeColor({}, 'disable');

  return (
    <View
      style={[styles.disableIndicator, { backgroundColor: disable, marginTop: marginTop, marginBottom: marginBottom }]}
    />
  );
}

const styles = StyleSheet.create({
  disableIndicator: {
    width: 'auto',
    height: heightSizes['1'],
  },
});
