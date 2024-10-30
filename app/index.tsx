import React from 'react';
import { View, Text } from 'react-native';

import useInterval from '@/hooks/useInterval';
import useAppNavigation from '@/hooks/useAppNavigation';

import { Routes } from '@/constants/Routes';
import useUserSession from '@/hooks/useUserSession';

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
    <View>
      <Text>MainApp</Text>
    </View>
  );
}
