import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {sys_colors, sys_font} from '../../../utils/constants';

export const CustomButton = ({
  title = '',
  type = 'primary',
  style = {},
  textStyle = {},
  children,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.default,
        {
          backgroundColor:
            type == 'primary'
              ? sys_colors.button.primary
              : sys_colors.button.secondary,
        },
        style,
      ]}>
      {title != '' ? (
        <Text
          style={[
            styles.text,
            {
              color:
                type == 'primary'
                  ? sys_colors.text.secondary
                  : sys_colors.text.primary,
            },
            textStyle,
          ]}>
          {title.toUpperCase()}
        </Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  default: {
    width: '45%',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: sys_font.primary[800],
    fontSize: 12,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
