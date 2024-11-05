import React from 'react';
import { i18n } from '@/i18n';
import { View, StyleSheet } from 'react-native';

import TextApp from '@/components/texts/TextApp';
import MainButton from '@/components/buttons/MainButton';
import CheckCircleSvr from '@/components/svg/CheckCircleSvr';
import PermContactCalendarSvr from '@/components/svg/PermContactCalendarSvr';

import { useThemeColor } from '@/hooks/useThemeColor';

import { fonts, heightSizes, widthSizes } from '@/styles/Sizes';
import linkingUtils from '@/utils/linkingUtils';
import eventUtils from '@/utils/eventUtils';

import { FbEvent } from '@/models/FbEvent';
import { FBEventRecord } from '@/models/FbEventRecord';

interface Props {
  event: FbEvent;
  eventRecords: FBEventRecord[];
}

export default function EventCredential({ event, eventRecords }: Props) {
  const text = useThemeColor({}, 'text');
  const textColor = useThemeColor({}, 'date');
  const disable = useThemeColor({}, 'disable');
  const gdgColors = useThemeColor({}, 'gdgColors');
  const cardBorder = useThemeColor({}, 'cardBorder');

  const eventRecord = eventUtils.getEventRecordByEventId(event, eventRecords || []);

  if (eventRecord) {
    return (
      <View style={[styles.container, { borderColor: cardBorder, backgroundColor: disable }]}>
        <View style={styles.content}>
          <PermContactCalendarSvr />
          <View style={styles.messageContainer}>
            <TextApp text={i18n.t('yourCredentialOfEvent')} style={styles.title} />
            <TextApp text={i18n.t('yourCredentialEventMessage')} style={[styles.detail, { color: textColor }]} />
            <View style={styles.statusMessage}>
              <CheckCircleSvr />
              <TextApp text={i18n.t('youAreRegistered')} style={[styles.text, { color: text }]} />
            </View>
          </View>
        </View>
      </View>
    );
  }

  if (!event.openRegistration) {
    return <></>;
  }

  return (
    <View style={[styles.container, { borderColor: cardBorder }]}>
      <View style={styles.registrationContainer}>
        <View style={styles.registrationTextContainer}>
          <TextApp
            text={i18n.t('weHaveLimitedSpots')}
            style={[styles.title, { color: textColor, fontWeight: 'bold', marginBottom: heightSizes[5] }]}
          />
          <TextApp text={i18n.t('registrationAlertMessage')} style={[styles.title, { color: textColor }]} />
        </View>
        <View style={styles.containerButton}>
          <MainButton
            text={i18n.t('signUpHere')}
            onPress={() => linkingUtils.openUrl(event.registrationLink)}
            style={[styles.mainButton, { backgroundColor: gdgColors.blue }]}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: widthSizes[20],
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 20,
    paddingHorizontal: widthSizes[15],
  },
  content: {
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: widthSizes[10],
    marginBottom: widthSizes[10],
  },
  eventsContainer: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  messageContainer: {
    marginLeft: widthSizes[10],
  },
  title: {
    fontSize: fonts[17],
  },
  detail: {
    fontSize: fonts[14],
    marginTop: heightSizes[5],
  },
  text: {
    fontSize: fonts[14],
    marginLeft: widthSizes[5],
  },
  statusMessage: {
    marginTop: widthSizes[10],
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  registrationContainer: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: widthSizes[20],
    marginBottom: widthSizes[10],
  },
  registrationTextContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: widthSizes[5],
  },
  containerButton: {
    width: '85%',
    marginTop: heightSizes[10],
    marginBottom: heightSizes[10],
  },
  mainButton: {
    borderRadius: 25,
  },
});
