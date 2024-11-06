import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextApp from '@/components/texts/TextApp';
import { i18n } from '@/i18n';

export default function ContestScreen() {
  return (
    <View style={styles.container}>
      <TextApp text={i18n.t('comingSoon')} />
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
});
