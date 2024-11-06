import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import TextApp from '@/components/texts/TextApp';

import { Talk, TalkType } from '@/models/FbSchedule';
import { heightSizes, widthSizes } from '@/styles/Sizes';
import DefaulTalk from '@/components/talks/DefaulTalk';
import SpeakerTalk from '@/components/talks/SpeakerTalk';
import { useThemeColor } from '@/hooks/useThemeColor';

interface Props {
  talks: Talk[] | undefined;
}

export default function TabsTalkContent({ talks }: Props) {
  const gdgColors = useThemeColor({}, 'gdgColors');
  const disableColor = useThemeColor({}, 'disable');
  const cardBorder = useThemeColor({}, 'cardBorder');

  if (!talks) {
    return <Text>No talks</Text>;
  }

  const renderTalkItem = (talk: Talk) => {
    if (
      talk.type === TalkType.WELCOME ||
      talk.type === TalkType.CLOSING ||
      talk.type === TalkType.BREAK ||
      talk.type === TalkType.LUNCH ||
      talk.type === TalkType.REGISTRATION ||
      talk.type === TalkType.SOCIAL ||
      talk.type === TalkType.OTHER
    ) {
      return <DefaulTalk talk={talk} />;
    }

    if (
      talk.type === TalkType.TALK ||
      talk.type === TalkType.WORKSHOP ||
      talk.type === TalkType.LIGHTNING_TALK ||
      talk.type === TalkType.PANEL
    ) {
      return <SpeakerTalk talk={talk} />;
    }

    return <TextApp text={talk.title} />;
  };

  const renderIndicator = (talk: Talk) => {
    return (
      <View style={styles.indicator}>
        <View style={[styles.circle, { backgroundColor: talk.finished ? gdgColors.blue : cardBorder }]} />
        <View style={[styles.line, { backgroundColor: talk.finished ? gdgColors.blue : cardBorder, top: 60 }]} />
      </View>
    );
  };

  const renderContainer = (talk: Talk) => {
    return (
      <View style={styles.talkContent}>
        {/*{renderIndicator(talk)}*/}
        <View style={styles.tabsContainer}>{renderTalkItem(talk)}</View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList data={talks} renderItem={({ item }) => renderContainer(item)} style={styles.tabsContainer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: heightSizes[10],
    paddingHorizontal: widthSizes[5],
  },
  tabsContainer: {
    flex: 1,
  },
  talkContent: {
    flexDirection: 'row',
    padding: 10,
  },
  talkContainer: {
    width: '90%',
  },
  indicator: {
    width: '10%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  circle: {
    width: widthSizes[20],
    height: widthSizes[20],
    borderRadius: 50,
  },
  line: {
    position: 'absolute',
    width: widthSizes[5],
    left: widthSizes[7],
    height: '100%',
  },
});
