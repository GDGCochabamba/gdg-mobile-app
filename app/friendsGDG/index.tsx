import React from 'react';
import { i18n } from '@/i18n';
import { View, StyleSheet } from 'react-native';

import TextApp from '@/components/texts/TextApp';

export default function FriendsGDGScreen() {
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
