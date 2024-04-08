import React from 'react';
import {View, Dimensions, Text} from 'react-native';
import {sys_colors, sys_text_styles} from 'rbase-helpers/constants';

const {width, height} = Dimensions.get('window');

export const Card = ({
  children,
  Height = height * 0.1,
  borderRadius = 0,
  padding = 0,
  backgroundColor = sys_colors.primary,
  title = '',
  uppercase = false,
  Width = width * 0.1,
  marginBottom = 10,
  marginTop = 0,
  marginLeft = 0,
  marginRight = 0,
}) => {
  return (
    <View
      style={{
        width: Width,
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        marginTop: marginTop,
        marginRight: marginRight,
      }}>
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
          backgroundColor: backgroundColor,
        }}>
        {children}
      </View>
    </View>
  );
};
