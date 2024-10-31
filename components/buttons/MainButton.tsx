import React from 'react';
import { StyleSheet, Pressable, type PressableProps, View } from 'react-native';
import TextApp from '@/components/texts/TextApp';

import { useThemeColor } from '@/hooks/useThemeColor';

import { widthSizes } from '@/styles/Sizes';

interface MainButtonProps extends PressableProps {
  text: string;
  onPress: () => void;
  leftIcon?: React.ReactNode;
  style?: any;
}

const MainButton = ({ text, onPress, leftIcon, style = {} }: MainButtonProps) => {
  const buttonColor = useThemeColor({}, 'buttons');

  const renderContent = () => {
    if (leftIcon) {
      return (
        <View style={styles.leftIconContainer}>
          {leftIcon}
          <TextApp
            style={[styles.text, { color: buttonColor.primary.textButton, marginLeft: widthSizes['10'] }]}
            text={text}
          />
        </View>
      );
    }

    return <TextApp style={[styles.text, { color: buttonColor.primary.textButton }]} text={text} />;
  };

  return (
    <Pressable
      onPress={onPress}
      style={(state) => [
        styles.button,
        { backgroundColor: buttonColor.primary.button, opacity: state.pressed ? 0.6 : 1 },
        style,
      ]}>
      {renderContent()}
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
    fontWeight: 'bold',
    fontFamily: 'System',
  },
  leftIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
});

export default MainButton;
