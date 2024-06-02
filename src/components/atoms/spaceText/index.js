import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {textStyleConstant} from 'rbase-constants/styles_constant';

const spaceTextPayload = {
  left: '',
  right: '',
  leftStyle: {},
  rightStyle: {},
  containerStyle: {},
};

export const SpaceText = (payload = spaceTextPayload) => {
  return (
    <View style={[styles.container, payload.containerStyle]}>
      <Text style={[styles.defaultLeft, payload.leftStyle]}>
        {payload.left}
      </Text>
      <Text style={[styles.defaultLeft, payload.rightStyle]}>
        {payload.right}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  defaultLeft: {
    ...textStyleConstant.contentMediumPrimary,
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
