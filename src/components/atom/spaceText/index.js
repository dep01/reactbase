import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {sys_text_styles} from '../../../utils/constants';

export const SpaceText = ({
  left = '',
  right = '',
  leftStyle = {},
  rightStyle = {},
  containerStyle = {},
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.defaultLeft, leftStyle]}>{left}</Text>
      <Text style={[styles.defaultLeft, rightStyle]}>{right}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  defaultLeft: {
    ...sys_text_styles.content_medium_black,
    textAlign: 'left',
    maxWidth: '50%',
    minWidth: '50%',
  },

  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
