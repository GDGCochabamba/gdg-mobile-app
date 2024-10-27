import React from 'react';
import { i18n } from '@/i18n';
import { View, StyleSheet } from 'react-native';

import MainButton from '@/components/buttons/MainButton';

import TextApp from '@/components/texts/TextApp';
import GDGLogoSvr from '@/components/svg/GDGLogoSvr';
import GDGIconSvr from '@/components/svg/GDGIconSvr';
import GoogleLogoSvr from '@/components/svg/GoogleLogoSvr';

import { useThemeColor } from '@/hooks/useThemeColor';

import { fonts, heightSizes, withSizes } from '@/styles/Sizes';

interface Props {
  loginWithGoogle: () => void;
}

const LoginScreen = ({ loginWithGoogle }: Props) => {
  const buttonColor = useThemeColor({}, 'buttons');

  const renderGDGIcon = () => {
    return (
      <View style={styles.gdgIcon}>
        <GDGIconSvr />
      </View>
    );
  };

  const renderWelcome = () => {
    return (
      <View style={styles.textContainer}>
        <TextApp text={i18n.t('joinTheCommunity')} style={styles.joinTheCommunity} />
        <TextApp text={i18n.t('welcomeMessage')} style={styles.welcomeMessage} />
      </View>
    );
  };

  const renderGDGLogo = () => {
    return (
      <View style={styles.gdgLogo}>
        <GDGLogoSvr />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderGDGIcon()}
      <View style={styles.centerContent}>
        {renderWelcome()}
        <MainButton
          text={i18n.t('loginWithGoogle')}
          onPress={() => loginWithGoogle()}
          leftIcon={<GoogleLogoSvr />}
          style={{ backgroundColor: buttonColor.login.button, borderRadius: 25 }}
        />
      </View>
      {renderGDGLogo()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  gdgIcon: {
    alignItems: 'center',
    width: withSizes['full'],
    marginTop: heightSizes['130'],
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: withSizes['30'],
  },
  joinTheCommunity: {
    fontSize: fonts['16'],
    fontWeight: 'bold',
    marginBottom: heightSizes['20'],
  },
  welcomeMessage: {
    fontSize: fonts['16'],
    marginBottom: heightSizes['25'],
    textAlign: 'center',
  },
  centerContent: {
    width: withSizes['full'],
    marginTop: heightSizes['70'],
    paddingHorizontal: withSizes['30'],
  },
  gdgLogo: {
    alignItems: 'center',
    position: 'absolute',
    width: withSizes['full'],
    bottom: heightSizes['10'],
  },
});

export default LoginScreen;
