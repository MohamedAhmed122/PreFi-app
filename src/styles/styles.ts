import {scale} from 'react-native-size-matters';
import {Platform} from 'react-native';

export const fontWeights = {
  thin: Platform.select({ios: '100', android: '100'}),
  extraLight: Platform.select({ios: '200', android: '100'}),
  light: Platform.select({ios: '300', android: '200'}),
  normal: Platform.select({ios: '400', android: '300'}),
  medium: Platform.select({ios: '500', android: '400'}),
  semiBold: Platform.select({ios: '600', android: '500'}),
  bold: Platform.select({ios: '700', android: '600'}),
  extraBold: Platform.select({ios: '800', android: '700'}),
  heavy: Platform.select({ios: '900', android: '800'}),
};

export const fontSizes = {
  xBig: scale(34),
  big: scale(22),
  xxMedium: scale(20),
  xMedium: scale(19),
  medium: scale(16),
  small: scale(14),
  verySmall: scale(12),
};
