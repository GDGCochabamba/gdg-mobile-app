import { Dimensions, PixelRatio } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const scaleWidth = (size: any) => (screenWidth / 375) * size; // 375 es el ancho base de referencia

const scaleHeight = (size: any) => (screenHeight / 812) * size; // 812 es la altura base de referencia (iPhone X)

const scaleFont = (size: any) => size * PixelRatio.getFontScale();

const withSizes = {
  100: width,
  90: scaleWidth(90),
  30: scaleWidth(30),
  20: scaleWidth(20),
  15: scaleWidth(15),
  18: scaleWidth(18),
  10: scaleWidth(10),
  5: scaleWidth(5),
  3: scaleWidth(3),
  2: scaleWidth(2),
  1: scaleWidth(1),
};

const heightSizes = {
  100: height,
  90: scaleHeight(90),
  40: scaleHeight(40),
  35: scaleHeight(35),
  30: scaleHeight(30),
  20: scaleHeight(20),
  18: scaleHeight(18),
  10: scaleHeight(10),
};

const fonts = {
  16: scaleFont(16),
  12: scaleFont(12),
};

export { withSizes, heightSizes, fonts };
