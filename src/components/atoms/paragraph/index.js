import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { textStyleConstant } from 'rbase-constants/styles_constant';

const paragraphPayload ={
  title : '',
  content : '',
  titleStyle : {},
  contentStyle : {},
  style : {},
  numberOfLines : null,
}

export const Paragraph = (payload = paragraphPayload) => {
  return (
    <View style={[{width: '100%'}, payload.style]}>
      <Text style={[styles.title, payload.titleStyle]} ellipsizeMode="tail">
        {payload.title}
      </Text>
      <Text
        numberOfLines={payload.numberOfLines}
        ellipsizeMode="tail"
        style={[styles.content, payload.contentStyle]}>
        {payload.content}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    ...textStyleConstant.headerMediumPrimary,
    width: '100%',
    marginBottom: 10,
    textAlign: 'left',
  },
  content: {
    ...textStyleConstant.contentMediumPrimary,
    width: '100%',
    textAlign: 'left',
  },
});
