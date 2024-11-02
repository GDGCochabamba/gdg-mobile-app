import React from 'react';
import { i18n } from '@/i18n';
import { View, StyleSheet } from 'react-native';

import Separator from '@/components/Separator';
import TextApp from '@/components/texts/TextApp';
import CheckCircleSvr from '@/components/svg/CheckCircleSvr';

import { useThemeColor } from '@/hooks/useThemeColor';

import eventUtils from '@/utils/eventUtils';
import { fonts, heightSizes } from '@/styles/Sizes';

import { FbEvent } from '@/models/FbEvent';
import { FBEventRecord } from '@/models/FbEventRecord';

interface Props {
  event: FbEvent;
  eventRecords: FBEventRecord[];
}

export default function RegistrationStatus({ event, eventRecords }: Props) {
  const textColor = useThemeColor({}, 'date');
  const eventRecord = eventUtils.getEventRecordByEventId(event, eventRecords || []);

  const renderStateComponent = () => {
    if (eventUtils.eventIsActive(event) && !eventRecord) {
      return (
        <View style={styles.messageContainer}>
          <TextApp text={i18n.t('youAreNotRegistered')} style={[styles.text, { color: textColor }]} />
        </View>
      );
    }

    return (
      <View style={styles.messageContainer}>
        <CheckCircleSvr />
        <TextApp text={i18n.t('youAreRegistered')} style={[styles.text, { color: textColor }]} />
      </View>
    );
  };

  if (eventUtils.eventIsActive(event) && eventRecord) {
    return (
      <>
        <Separator marginTop={heightSizes[20]} marginBottom={heightSizes[20]} />
        {renderStateComponent()}
      </>
    );
  }

  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
  },
  messageContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: fonts[14],
    marginLeft: heightSizes[10],
  },
});
