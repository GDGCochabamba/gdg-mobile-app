import React from 'react';
import { View, StyleSheet } from 'react-native';

import ImageApp from '@/components/ImageApp';
import GDGLogoSvr from '@/components/svg/GDGLogoSvr';

import { withSizes } from '@/styles/Sizes';

export default function Header() {
  return (
    <View style={styles.container}>
      <GDGLogoSvr />
      {/*<ImageApp source={require('@/assets/images/logo.png')} style={{ width: withSizes[30], height: withSizes[30] }} />*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: withSizes.full,
    padding: withSizes[5],
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
});
