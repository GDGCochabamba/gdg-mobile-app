import React from 'react';
import { i18n } from '@/i18n';
import { View, StyleSheet } from 'react-native';

import Separator from '@/components/Separator';
import TextApp from '@/components/texts/TextApp';
import MainButton from '@/components/buttons/MainButton';
import CheckCircleSvr from '@/components/svg/CheckCircleSvr';

import { useThemeColor } from '@/hooks/useThemeColor';

import eventUtils from '@/utils/eventUtils';
import linkingUtils from '@/utils/linkingUtils';
import { fonts, heightSizes } from '@/styles/Sizes';

import { FbEvent } from '@/models/FbEvent';
import { FBEventRecord } from '@/models/FbEventRecord';

interface Props {
  event: FbEvent;
  eventRecords: FBEventRecord[];
}

export default function RegistrationStatus({ event, eventRecords }: Props) {
  const gdgColors = useThemeColor({}, 'gdgColors');
  const textColor = useThemeColor({}, 'date');
  const eventRecord = eventUtils.getEventRecordByEventId(event, eventRecords || []);

  const renderStateComponent = () => {
    if (eventUtils.eventIsActive(event) && !eventRecord && event.registrationLink && event.openRegistration) {
      return (
        <View style={styles.messageContainer}>
          <MainButton
            text={i18n.t('registrationOpen')}
            onPress={() => linkingUtils.openUrl(event.registrationLink)}
            style={[styles.registrationButton, { backgroundColor: gdgColors.blue }]}
          />
        </View>
      );
    }

    if (!eventRecord) {
      return (
        <View style={styles.messageContainer}>
          <TextApp text={i18n.t('registrationClosed')} style={[styles.text, { color: textColor }]} />
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

  const renderContent = () => {
    return (
      <>
        <Separator marginTop={heightSizes[20]} marginBottom={heightSizes[20]} />
        {renderStateComponent()}
      </>
    );
  };

  return <>{eventUtils.eventIsActive(event) && renderContent()}</>;
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
  registrationButton: {
    width: '100%',
    borderRadius: 25,
  },
});
