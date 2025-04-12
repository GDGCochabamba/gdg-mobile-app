import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import TabsTalks from '@/components/TabsTalks';
import TabsTalkContent from '@/components/TabsTalkContent';

import { useThemeColor } from '@/hooks/useThemeColor';

import agendaService from '@/services/agendaService';
import Loading from '@/components/Loading';

export default function AgendaScreen() {
  const { schedules, loading } = agendaService.useAgendaService();
  const background = useThemeColor({}, 'background');
  const [indexTab, setIndexTab] = useState(0);

  const renderTabs = () => {
    return (
      <View style={[styles.tabsContainer, { backgroundColor: background }]}>
        {schedules?.rooms?.map((room, index) => {
          return (
            <TabsTalks schedules={schedules} index={index} setIndexTab={setIndexTab} room={room} indexTab={indexTab} />
          );
        })}
      </View>
    );
  };

  const renderTabContent = () => {
    return <TabsTalkContent talks={schedules?.rooms[indexTab].talks} />;
  };

  return (
    <View style={styles.container}>
      {loading && <Loading loading={loading} backgroundColor={'transparent'} />}
      {schedules && schedules.rooms && schedules.rooms.length > 0 && (
        <>
          {renderTabs()}
          {renderTabContent()}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabsContainer: {
    flexDirection: 'row',
  },
});
