import {
  MaterialTopTabNavigationEventMap,
  MaterialTopTabNavigationOptions,
  createMaterialTopTabNavigator,
} from '@react-navigation/material-top-tabs';
import { withLayoutContext } from 'expo-router';
import { ParamListBase, TabNavigationState } from '@react-navigation/native';
import Header from '@/components/Header';
import { i18n } from '@/i18n';

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

export default function TabLayout() {
  return (
    <>
      <Header />
      <MaterialTopTabs>
        <MaterialTopTabs.Screen name="index" options={{ title: i18n.t('events') }} />
        <MaterialTopTabs.Screen name="community" options={{ title: i18n.t('community') }} />
      </MaterialTopTabs>
    </>
  );
}
