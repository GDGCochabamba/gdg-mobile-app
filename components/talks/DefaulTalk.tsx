import React from 'react';
import { View, StyleSheet } from 'react-native';

import TextApp from '@/components/texts/TextApp';
import { useThemeColor } from '@/hooks/useThemeColor';

import { fonts, heightSizes, widthSizes } from '@/styles/Sizes';
import { Talk } from '@/models/FbSchedule';

interface Props {
  talk: Talk;
}

export default function DefaultTalk({ talk }: Props) {
  const gdgColors = useThemeColor({}, 'gdgColors');
  const disableColor = useThemeColor({}, 'disable');
  const cardBorder = useThemeColor({}, 'cardBorder');
  const textColors = useThemeColor({}, 'textColors');
  const isAvailable = talk.active;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isAvailable ? gdgColors.blue : disableColor,
          borderColor: isAvailable ? gdgColors.blue : cardBorder,
        },
      ]}>
      <TextApp text={talk.title} style={[styles.text, { color: isAvailable ? textColors.white : textColors.black }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    paddingLeft: widthSizes[20],
    height: heightSizes[55],
    justifyContent: 'center',
  },
  text: {
    fontSize: fonts[16],
    fontWeight: 'bold',
  },
});
