import React, { useEffect, useRef, useState } from 'react';
import { View, TextInput, Animated, StyleSheet, type TextInputProps } from 'react-native';

import { fonts, heightSizes, withSizes } from '@/styles/Sizes';
import { useThemeColor } from '@/hooks/useThemeColor';
import useInputValue from '@/hooks/useInputValue';

interface FormInputProps extends TextInputProps {
  label: string;
  type?: 'default' | 'numeric' | 'email-address' | 'phone-pad' | 'password';
}

const FormInput = ({ label, type = 'default', ...props }: FormInputProps) => {
  const { value, onChangeText } = useInputValue({ type });
  const [isFocused, setIsFocused] = useState(false);
  const formsColor = useThemeColor({}, 'forms');
  const animatedLabelPosition = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(animatedLabelPosition, {
      toValue: isFocused || value ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isFocused, value]);

  const labelStyle: any = {
    position: 'absolute',
    left: withSizes['10'],
    top: animatedLabelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [withSizes['18'], -withSizes['10']],
    }),
    fontSize: animatedLabelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [fonts['16'], fonts['12']],
    }),
    color: animatedLabelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: formsColor.outputRange,
    }),
  };

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.label, labelStyle]}>{label}</Animated.Text>
      <TextInput
        {...props}
        value={value}
        style={styles.input}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: withSizes['18'],
    marginVertical: withSizes['10'],
  },
  label: {
    position: 'absolute',
    left: withSizes['10'],
    color: '#aaa',
    backgroundColor: 'white',
    paddingHorizontal: withSizes['2'],
  },
  input: {
    height: heightSizes['40'],
    borderColor: '#000',
    borderBottomWidth: 1,
    fontSize: fonts['16'],
    paddingHorizontal: withSizes['10'],
  },
});

export default FormInput;
