import React from 'react';
import {View} from 'react-native';
import {borderColorsConstant} from 'rbase-constants/colors_constant';

const dividerPayload = {
  color: borderColorsConstant.primary,
  height: 10,
  width: '100%',
  align: 'center',
  lineHeight: 0.5,
};

export const Divider = (params = dividerPayload) => {
  const payload = {...dividerPayload, ...params};
  return (
    <View
      style={{
        height: payload.height,
        width: payload.width,
        backgroundColor: 'transparent',
        alignItems: 'center',
        alignSelf: payload.align,
      }}>
      <View
        style={{
          height: payload.height / 2 + payload.lineHeight,
          width: '100%',
          borderBottomColor: payload.color,
          borderBottomWidth: payload.lineHeight,
          position: 'absolute',
          top: 0,
        }}
      />

      <View
        style={{
          height: payload.height / 2 - payload.lineHeight,
          width: '100%',
          position: 'absolute',
          bottom: 0,
        }}
      />
    </View>
  );
};
