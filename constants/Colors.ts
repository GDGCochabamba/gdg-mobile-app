/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';
const outputRange = ['#aaa', '#000'];

export const Colors = {
  light: {
    text: '#11181C',
    white: '#ffffff',
    background: '#fff',
    backgroundList: '#eeefef',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    disable: '#DAE0E3',
    date: '#6D757A',
    blue: '#007AFF',
    cardBorder: '#CAC4D0',
    textColors: {
      white: '#ffffff',
      black: '#000000',
    },
    forms: {
      outputRange: outputRange,
    },
    buttons: {
      primary: {
        button: '#0a7ea4',
        textButton: '#ffffff',
      },
      login: {
        button: '#333333',
        textButton: '#ffffff',
      },
    },
    gdgColors: {
      blue: '#2475E5',
      red: '#E84434',
      green: '#0A9D58',
      yellow: '#F6B918',
    },
  },
  dark: {
    text: '#ECEDEE',
    white: '#ffffff',
    background: '#151718',
    backgroundList: '#1a1a1a',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    disable: '#DAE0E3',
    date: '#6D757A',
    blue: '#007AFF',
    cardBorder: '#CAC4D0',
    textColors: {
      white: '#ffffff',
      black: '#000000',
    },
    forms: {
      outputRange: outputRange,
    },
    buttons: {
      primary: {
        button: '#0a7ea4',
        textButton: '#ffffff',
      },
      login: {
        button: '#333333',
        textButton: '#ffffff',
      },
    },
    gdgColors: {
      blue: '#2475E5',
      red: '#E84434',
      green: '#0A9D58',
      yellow: '#F6B918',
    },
  },
};
