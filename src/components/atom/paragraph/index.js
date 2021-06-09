import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {sys_text_styles} from '../../../utils/constants';

export const Paragraph = ({
  title = '',
  content = '',
  titleStyle = {},
  contentStyle = {},
  style = {},
  numberOfLines = null,
}) => {
  return (
    <View style={[{width: '100%'}, style]}>
      <Text style={[styles.title, titleStyle]} ellipsizeMode="tail">
        {title}
      </Text>
      <Text
        numberOfLines={numberOfLines}
        ellipsizeMode="tail"
        style={[styles.content, contentStyle]}>
        {content}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    ...sys_text_styles.header_medium_black,
    width: '100%',
    marginBottom: 10,
    textAlign: 'left',
  },
  content: {
    ...sys_text_styles.content_medium_black,
    width: '100%',
    textAlign: 'left',
  },
});
