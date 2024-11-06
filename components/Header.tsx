import React from 'react';
import { i18n } from '@/i18n';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import ImageApp from '@/components/ImageApp';
import TextApp from '@/components/texts/TextApp';
import GDGLogoSvr from '@/components/svg/GDGLogoSvr';
import Ionicons from '@expo/vector-icons/Ionicons';

import useUserSession from '@/hooks/useUserSession';
import { useThemeColor } from '@/hooks/useThemeColor';
import useAppNavigation from '@/hooks/useAppNavigation';

import { Routes } from '@/constants/Routes';
import { fonts, widthSizes } from '@/styles/Sizes';

interface Props {
  enableBack?: boolean;
  hideProfile?: boolean;
  customBackground?: string;
}

export default function Header({ enableBack = false, hideProfile = false, customBackground }: Props) {
  const background = customBackground ? customBackground : useThemeColor({}, 'background');
  const gdgColors = useThemeColor({}, 'gdgColors');
  const { user } = useUserSession();
  const { goBack, navigateTo } = useAppNavigation();

  const renderRightSection = () => {
    if (enableBack) {
      return (
        <TouchableOpacity onPress={goBack} style={styles.goBackContainer}>
          <Ionicons name="chevron-back-outline" size={24} color={gdgColors.blue} />
          <TextApp text={i18n.t('goBack')} style={[styles.goBackText, { color: gdgColors.blue }]} />
        </TouchableOpacity>
      );
    }

    return <GDGLogoSvr />;
  };

  const renderPhoto = () => {
    if (!user || !user.photoURL || hideProfile) {
      return <View />;
    }

    return (
      <TouchableOpacity onPress={() => navigateTo(Routes.Root.profile)}>
        <ImageApp source={{ uri: user!.photoURL! }} style={styles.imageProfile} />
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: background, paddingVertical: hideProfile ? widthSizes[10] : widthSizes[5] },
      ]}>
      {renderRightSection()}
      {renderPhoto()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: widthSizes.full,
    paddingHorizontal: widthSizes[5],
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageProfile: {
    borderRadius: 50,
    right: widthSizes[5],
    width: widthSizes[30],
    height: widthSizes[30],
  },
  goBackContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  goBackText: {
    fontSize: fonts[17],
  },
});
