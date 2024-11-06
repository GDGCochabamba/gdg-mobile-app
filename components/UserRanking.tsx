import React from 'react';
import { i18n } from '@/i18n';
import { View, StyleSheet } from 'react-native';

import ImageApp from '@/components/ImageApp';
import TextApp from '@/components/texts/TextApp';

import { fonts, heightSizes, widthSizes } from '@/styles/Sizes';
import { FbUser } from '@/models/FbUser';

interface Props {
  user: FbUser;
  index?: number;
}

export default function UserRanking({ user, index }: Props) {
  const position = index ? index + 1 : 0;

  return (
    <View style={styles.userContainer}>
      <View style={styles.userInfo}>
        {/*<TextApp text={position.toString()} style={styles.userName} />*/}
        <ImageApp source={{ uri: user!.photoURL! }} style={styles.photoUrl} />
        <TextApp text={user!.displayName?.toString() || i18n.t('anonymous')} style={styles.userName} />
      </View>
      <TextApp text={user?.points?.toString() || '0'} style={styles.userPoints} />
    </View>
  );
}

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: heightSizes[10],
    marginBottom: heightSizes[10],
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    fontSize: fonts[16],
    fontWeight: 'bold',
    marginLeft: widthSizes[10],
  },
  userPoints: {
    fontSize: fonts[16],
  },
  photoUrl: {
    width: widthSizes[30],
    height: widthSizes[30],
    borderRadius: 20,
  },
});
