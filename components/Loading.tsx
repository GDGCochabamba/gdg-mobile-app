import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

import { i18n } from '@/i18n';

import TextApp from '@/components/texts/TextApp';

import { useThemeColor } from '@/hooks/useThemeColor';
import { fonts } from '@/styles/Sizes';

interface Props {
  loading: boolean;
}

const Loading = ({ loading }: Props) => {
  const white = useThemeColor({}, 'white');

  if (!loading) {
    return <View />;
  }

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={white} />
      <TextApp text={i18n.t('loading')} style={[styles.text, { color: white }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    zIndex: 1000,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  text: {
    fontSize: fonts[20],
  },
});

export default Loading;
