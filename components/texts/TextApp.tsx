import React from 'react';
import { Text } from 'react-native';
import { TextProps } from 'react-native/Libraries/Text/Text';

interface Props extends TextProps {
  text: string;
}

const TextApp = ({ text = '', ...props }: Props) => {
  return <Text {...props}>{text}</Text>;
};

export default TextApp;
