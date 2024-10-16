import React from 'react';
import { StyleSheet, Text, Pressable, type PressableProps } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';

interface MainButtonProps extends PressableProps {
  text: string;
  onPress: () => void;
}

const MainButton = ({ text, onPress }: MainButtonProps) => {
  const buttonColor = useThemeColor({}, 'buttons');
  return (
    <Pressable onPress={onPress} style={[styles.button, { backgroundColor: buttonColor.primary.button }]}>
      <Text style={[styles.text, { color: buttonColor.primary.textButton }]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
  },
  text: {
    textAlign: 'center',
  },
});

export default MainButton;
