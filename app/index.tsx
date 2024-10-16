import React from 'react';
import { View, Text } from 'react-native';

import useInterval from '@/hooks/useInterval';
import useAppNavigation from '@/hooks/useAppNavigation';

import { Routes } from '@/constants/Routes';

const MainApp = () => {
  const { replaceTo } = useAppNavigation();

  const verifyNavigation = () => {
    replaceTo(Routes.Root.login);
  };

  useInterval(verifyNavigation, 3000);

  return (
    <View>
      <Text>MainApp</Text>
    </View>
  );
};

export default MainApp;
