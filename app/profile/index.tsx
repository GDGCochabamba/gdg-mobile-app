import React from 'react';
import { i18n } from '@/i18n';
import { View, StyleSheet } from 'react-native';

import ImageApp from '@/components/ImageApp';
import TextApp from '@/components/texts/TextApp';
import MainButton from '@/components/buttons/MainButton';

import useUserSession from '@/hooks/useUserSession';

import { fonts, widthSizes } from '@/styles/Sizes';
import QRCode from 'react-native-qrcode-svg';

export default function ProfileScreen() {
  const { user, logout } = useUserSession();
  if (!user) {
    return <></>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageNameContainer}>
        <ImageApp source={{ uri: user!.photoURL! }} style={styles.imageProfile} />
        <View style={styles.nameContainer}>
          <TextApp text={user?.displayName || i18n.t('anonymous')} style={styles.nameText} />
        </View>
      </View>
      <View style={styles.body}>
        <QRCode value={user.uid} size={widthSizes[200]} />
      </View>
      <View style={styles.actionContainer}>
        <MainButton text={i18n.t('logout')} onPress={logout} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: widthSizes[20],
  },
  imageProfile: {
    borderRadius: 20,
    top: widthSizes[10],
    width: widthSizes[120],
    height: widthSizes[120],
  },
  imageNameContainer: {
    flexDirection: 'row',
    marginTop: widthSizes[10],
  },
  nameContainer: {
    marginTop: widthSizes[20],
    marginLeft: widthSizes[20],
  },
  nameText: {
    fontSize: fonts[20],
    fontWeight: 'bold',
  },
  actionContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: widthSizes[20],
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
