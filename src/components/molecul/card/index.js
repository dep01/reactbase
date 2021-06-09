import React from 'react';
import {View, Dimensions, Text} from 'react-native';
import {sys_colors, sys_text_styles} from '../../../utils/constants';

const {width, height} = Dimensions.get('window');

export const Card = ({
  children,
  Height = height * 0.1,
  borderRadius = 0,
  padding = 0,
  backgroundColor = sys_colors.primary2,
  title = '',
  uppercase = false,
}) => {
  return (
    <View>
      {title != '' ? (
        <Text
          style={{
            ...sys_text_styles.header_black,
            marginBottom: 5,
            textAlign: 'left',
          }}>
          {uppercase ? title.toUpperCase() : title}
        </Text>
      ) : null}
      <View
        style={{
          minHeight: Height,
          borderRadius: borderRadius,
          padding: padding,
          marginBottom: 10,
          backgroundColor: backgroundColor,
        }}>
        {children}
      </View>
    </View>
  );
};
