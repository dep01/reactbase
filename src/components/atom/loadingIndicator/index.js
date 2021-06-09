import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import {sys_colors, sys_font} from '../../../utils/constants';

export const LoadingIndicator = ({
  text = 'Loading...',
  loadingColor = sys_colors.icon.active,
  textColor = sys_colors.icon.active,
  forInfinityScroll = false,
}) => {
  return forInfinityScroll ? (
    <View style={{width: '100%', height: 50}}>
      <View style={styles.loading}>
        <View style={styles.container}>
          <ActivityIndicator size="large" color={loadingColor} />
          <Text style={[styles.textLoading, {color: textColor}]}>{text}</Text>
        </View>
      </View>
    </View>
  ) : (
    <View style={styles.loading}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color={loadingColor} />
        <Text style={[styles.textLoading, {color: textColor}]}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  container: {
    padding: 35,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  textLoading: {
    marginTop: 5,
    fontSize: 14,
    fontFamily: sys_font.primary[400],
  },
});
