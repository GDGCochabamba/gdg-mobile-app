import React from 'react';
import { View, StyleSheet } from 'react-native';

import ImageApp from '@/components/ImageApp';
import GDGLogoSvr from '@/components/svg/GDGLogoSvr';

import { withSizes } from '@/styles/Sizes';
import useUserSession from '@/hooks/useUserSession';

export default function Header() {
  const { user } = useUserSession();

  const renderPhoto = () => {
    if (!user) {
      return <View />;
    }

    return <ImageApp source={{ uri: user.photoURL }} style={styles.imageProfile} />;
  };

  return (
    <View style={styles.container}>
      <GDGLogoSvr />
      {renderPhoto()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: withSizes.full,
    padding: withSizes[5],
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  imageProfile: {
    borderRadius: 50,
    right: withSizes[5],
    width: withSizes[30],
    height: withSizes[30],
  },
});
