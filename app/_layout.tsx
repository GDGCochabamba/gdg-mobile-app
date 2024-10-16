import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import 'react-native-reanimated';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { useColorScheme } from '@/hooks/useColorScheme';

import { GeneralScreenOptions, Routes } from '@/constants/Routes';
import { fullAllScreen } from '@/styles/containerStyles';

SplashScreen.preventAutoHideAsync().then();

function RootLayout() {
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync().then();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <View style={[fullAllScreen.appContainer]}>
        <View style={[fullAllScreen.fullFlex, { marginTop: insets.top, marginBottom: insets.bottom }]}>
          <Header />
          <View style={fullAllScreen.fullFlex}>
            <Stack initialRouteName={Routes.Root.index}>
              <Stack.Screen name={Routes.Root.index} options={GeneralScreenOptions} />
              <Stack.Screen name={Routes.Root.login} options={GeneralScreenOptions} />
              <Stack.Screen name={Routes.Root.signup} options={GeneralScreenOptions} />
              <Stack.Screen name={Routes.Root.notFound} options={GeneralScreenOptions} />
            </Stack>
          </View>
          <Footer />
        </View>
      </View>
    </ThemeProvider>
  );
}

export default RootLayout;
