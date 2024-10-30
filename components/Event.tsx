import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FbEvent } from '@/models/FbEvent';
import TextApp from '@/components/texts/TextApp';
import { heightSizes, withSizes } from '@/styles/Sizes';

interface Props {
  event: FbEvent;
}

export default function Event({ event }: Props) {
  return (
    <View style={[styles.container, { backgroundColor: 'white' }]}>
      <TextApp text={event.name} style={{ color: 'black' }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: withSizes['100'],
    height: heightSizes['35'],
    justifyContent: 'center',
    alignItems: 'center',
  },
});
