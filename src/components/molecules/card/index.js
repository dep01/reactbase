import React from 'react';
import {View, Dimensions, Text} from 'react-native';
import {textStyleConstant} from 'rbase-constants/styles_constant';
import {backgroundColorsConstant} from 'rbase-constants/colors_constant';

const {width, height} = Dimensions.get('window');

const cardPayload = {
  children:null,
  height: height * 0.1,
  borderRadius: 0,
  padding: 0,
  backgroundColor: backgroundColorsConstant.primary,
  title: '',
  uppercase: false,
  width: width ,
  marginBottom: 10,
  marginTop: 0,
  marginLeft: 0,
  marginRight: 0,
};

export const Card = (params = cardPayload) => {
  const payload = {...cardPayload,...params}
  return (
    <View
      style={{
        width: payload.width,
        marginBottom: payload.marginBottom,
        marginLeft: payload.marginLeft,
        marginTop: payload.marginTop,
        marginRight: payload.marginRight,
      }}>
      {payload.title != '' ? (
        <Text
          style={{
            ...textStyleConstant.headerPrimary,
            marginBottom: 5,
            textAlign: 'left',
          }}>
          {payload.uppercase ? payload.title.toUpperCase() : payload.title}
        </Text>
      ) : null}
      <View
        style={{
          minHeight: payload.height,
          borderRadius: payload.borderRadius,
          padding: payload.padding,
          backgroundColor: payload.backgroundColor,
        }}>
        {payload.children}
      </View>
    </View>
  );
};
