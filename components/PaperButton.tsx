import {Button} from 'react-native-paper';
import React from 'react';
import {ButtonProps} from '../types';

const PaperButton = ({
  onPress,
  textColor,
  buttonText,
  dark,
  style,
  buttonColor,
  disabled,
  contentStyle,
}: ButtonProps) => {
  return (
    <Button
      theme={{roundness: 1}}
      mode="outlined"
      dark={dark}
      onPress={onPress}
      textColor={textColor}
      buttonColor={buttonColor}
      disabled={disabled}
      contentStyle={{}}
      labelStyle={{}}
      style={style}>
      {buttonText}
    </Button>
  );
};

export default PaperButton;
