import React from 'react';
import { View, StyleSheet, FlatList, RefreshControl } from 'react-native';

import Event from '@/components/Event';
import EventTabService from '@/services/eventTabService';

import { FbEvent } from '@/models/FbEvent';
import { useThemeColor } from '@/hooks/useThemeColor';

export default function EventsScreen() {
  const background = useThemeColor({}, 'background');
  const backgroundList = useThemeColor({}, 'backgroundList');
  const { events, eventRecords, loading, getData } = EventTabService.useEventTabService();

  const renderEvent = ({ item }: { item: FbEvent }) => <Event event={item} eventRecords={eventRecords} />;

  return (
    <View style={[styles.container, { backgroundColor: background }]}>
      <FlatList
        renderItem={renderEvent}
        data={events}
        style={[styles.eventsContainer, { backgroundColor: backgroundList }]}
        refreshControl={<RefreshControl refreshing={loading} onRefresh={() => getData()} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  eventsContainer: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
});
