import React from 'react';
import { View, StyleSheet } from 'react-native';
import TextApp from '@/components/texts/TextApp';

import { FbEvent } from '@/models/FbEvent';

interface Props {
  title: string;
  event: FbEvent;
}

export default function CardEventSection({ title }: Props) {
  return (
    <View style={styles.container}>
      <TextApp text={title} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    margin: 5,
    backgroundColor: 'white',
    alignItems: 'center',
    width: 150,
  },
});
