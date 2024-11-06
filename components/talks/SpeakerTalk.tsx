import React from 'react';
import { i18n } from '@/i18n';
import { View, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import ImageApp from '@/components/ImageApp';
import Separator from '@/components/Separator';
import AlarmSvr from '@/components/svg/AlarmSvr';
import TextApp from '@/components/texts/TextApp';

import { useThemeColor } from '@/hooks/useThemeColor';

import { fonts, heightSizes, widthSizes } from '@/styles/Sizes';

import { Talk } from '@/models/FbSchedule';

interface Props {
  talk: Talk;
}

export default function SpeakerTalk({ talk }: Props) {
  const gdgColors = useThemeColor({}, 'gdgColors');
  const disableColor = useThemeColor({}, 'disable');
  const cardBorder = useThemeColor({}, 'cardBorder');
  const textColors = useThemeColor({}, 'textColors');
  const dateColor = useThemeColor({}, 'date');
  const isActive = talk.active;

  const renderSpeakerPhoto = () => {
    if (talk.speakerPhoto) {
      return <ImageApp source={{ uri: talk.speakerPhoto }} style={styles.speakerPhoto} />;
    }

    return <FontAwesome name="user-circle" size={24} color="black" />;
  };

  const renderInfo = () => {
    return (
      <View style={styles.texts}>
        <>
          <TextApp text={talk.title} style={styles.title} numberOfLines={2} />
          <TextApp text={talk.speakerName} style={[styles.speakerName, { color: dateColor }]} />
        </>
      </View>
    );
  };

  const renderDuration = () => {
    return (
      <>
        <Separator />
        <View style={styles.extraInfo}>
          {talk.finished ? <TextApp text={i18n.t('finished')} style={{ color: dateColor }} /> : <View />}
          <View style={styles.durationContainer}>
            <AlarmSvr />
            <TextApp text={talk.duration!} style={[styles.duration, { color: dateColor }]} />
          </View>
        </View>
      </>
    );
  };

  return (
    <View style={[styles.container, { borderColor: isActive ? gdgColors.blue : cardBorder }]}>
      <View style={[styles.talkInfo, { marginBottom: talk.duration ? heightSizes[10] : 0 }]}>
        {renderSpeakerPhoto()}
        {renderInfo()}
      </View>
      {talk.duration && renderDuration()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 10,
    borderWidth: 2,
    padding: widthSizes[10],
    paddingVertical: heightSizes[10],
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  talkInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  texts: {
    marginLeft: widthSizes[10],
    width: '100%',
  },
  text: {
    fontSize: fonts[16],
    fontWeight: 'bold',
  },
  speakerPhoto: {
    width: widthSizes[50],
    height: widthSizes[50],
    borderRadius: 50,
  },
  title: {
    fontSize: fonts[16],
    fontWeight: 'bold',
    width: '80%',
  },
  speakerName: {
    fontSize: fonts[14],
    marginTop: heightSizes[4],
  },
  durationContainer: {
    marginTop: heightSizes[10],
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  duration: {
    fontSize: fonts[14],
    marginLeft: widthSizes[5],
  },
  extraInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
