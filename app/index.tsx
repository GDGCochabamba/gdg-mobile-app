import React from 'react';
import { View, StyleSheet } from 'react-native';

import GDGIconSvr from '@/components/svg/GDGIconSvr';

import useInterval from '@/hooks/useInterval';
import useUserSession from '@/hooks/useUserSession';
import useAppNavigation from '@/hooks/useAppNavigation';

import { Routes } from '@/constants/Routes';

export default function MainApp() {
  const { user } = useUserSession();
  const { replaceTo } = useAppNavigation();

  const verifyNavigation = () => {
    if (!user) {
      replaceTo(Routes.Root.login);
    } else {
      replaceTo(Routes.Root.topTabs);
    }
  };

  useInterval(verifyNavigation, 1000);

  return (
    <View style={styles.container}>
      <GDGIconSvr />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
