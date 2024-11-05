import React from 'react';
import { View, TouchableOpacity, DimensionValue, StyleSheet } from 'react-native';

import TextApp from '@/components/texts/TextApp';

import { heightSizes } from '@/styles/Sizes';
import { FbSchedule, Room } from '@/models/FbSchedule';
import { useThemeColor } from '@/hooks/useThemeColor';

interface Props {
  schedules: FbSchedule;
  index: number;
  setIndexTab: (index: number) => void;
  room: Room;
  indexTab: number;
}

export default function TabsTalks({ schedules, index, setIndexTab, room, indexTab }: Props) {
  const gdgColors = useThemeColor({}, 'gdgColors');
  const width = (100 / schedules!.rooms!.length).toString();
  const withTabInPercent = `${width}%`;

  return (
    <TouchableOpacity
      key={index}
      style={[styles.tabContainer, { width: withTabInPercent as DimensionValue }]}
      onPress={() => setIndexTab(index)}>
      <TextApp text={room.name} />
      <View
        style={[
          styles.tabIndicator,
          { height: heightSizes[3], backgroundColor: index === indexTab ? gdgColors.blue : 'transparent' },
        ]}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    width: 'auto',
    height: heightSizes[45],
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIndicator: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});
