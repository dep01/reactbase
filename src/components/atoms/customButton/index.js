import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import { buttonColorsConstant, textColorsConstant } from 'rbase-constants/colors_constant';
import { fontFamilyConstant, fontSizeConstant } from 'rbase-constants/fonts_constant';

const customButtonPayload ={
  title : '',
  type : 'primary',
  style : {},
  textStyle : {},
  baseWidth : '45%',
  baseHeight : 55,
  children,
  onPress,
}

export const CustomButton = (payload=customButtonPayload) => {
  return (
    <TouchableOpacity
      onPress={payload.onPress}
      style={[
        styles.default,
        {
          width: payload.baseWidth,
          height: payload.baseHeight,
          backgroundColor:
            type === 'primary'
              ? buttonColorsConstant.primary
              : buttonColorsConstant.secondary,
        },
        payload.style,
      ]}>
      {payload.title !== '' ? (
        <Text
          style={[
            styles.text,
            {
              color:
                type === 'primary'
                  ? textColorsConstant.secondary
                  : textColorsConstant.primary,
            },
            payload.textStyle,
          ]}>
          {payload.title.toUpperCase()}
        </Text>
      ) : (
        payload.children
      )}
    </TouchableOpacity>
  );
};
CustomButton.Types = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};
const styles = StyleSheet.create({
  default: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: fontFamilyConstant.primary[600],
    fontSize: fontSizeConstant.small,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
