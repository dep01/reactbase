import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {sys_colors} from '../../../utils/constants';

export const Divider = ({
  color = sys_colors.line.primary,
  height = 10,
  width = '100%',
  align = 'center',
  lineHeight = 0.5,
}) => {
  return (
    <View
      style={{
        height: height,
        width: width,
        backgroundColor: 'transparent',
        alignItems: 'center',
        alignSelf: align,
      }}>
      <View
        style={{
          height: height / 2 + lineHeight,
          width: '100%',
          borderBottomColor: color,
          borderBottomWidth: lineHeight,
          position: 'absolute',
          top: 0,
        }}
      />

      <View
        style={{
          height: height / 2 - lineHeight,
          width: '100%',
          position: 'absolute',
          bottom: 0,
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({});
