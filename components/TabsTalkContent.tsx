import React from 'react';
import { View, Text, FlatList } from 'react-native';

import TextApp from '@/components/texts/TextApp';

import { Talk } from '@/models/FbSchedule';

interface Props {
  talks: Talk[] | undefined;
}

export default function TabsTalkContent({ talks }: Props) {
  if (!talks) {
    return <Text>No talks</Text>;
  }

  const renderTalk = (talk: Talk) => {
    return (
      <View>
        <View></View>
        <View>
          <TextApp text={talk.title} />
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList data={talks} renderItem={({ item }) => renderTalk(item)} />
    </View>
  );
}
