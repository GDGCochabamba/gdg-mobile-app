import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import Event from '@/components/Event';
import EventTabService from '@/services/eventTabService';

import { FbEvent } from '@/models/FbEvent';

export default function EventsScreen() {
  const { events } = EventTabService.useEventTabService();
  console.log(JSON.stringify(events, null, 2));

  const renderEvent = ({ item }: { item: FbEvent }) => <Event event={item} />;

  return (
    <View style={styles.container}>
      <FlatList
        renderItem={renderEvent}
        data={events}
        style={styles.eventsContainer}
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
    backgroundColor: 'blue',
  },
  eventsContainer: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: 'red',
  },
});
