import {StyleProp, ViewStyle} from 'react-native/types';

export type ButtonProps = {
  onPress: () => void;
  textColor: string;
  buttonText: string;
  mode: string | undefined;
  dark: boolean;
  buttonColor: string;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
};

export type OffersStackParamsList = {
  OffersHome: undefined;
};
