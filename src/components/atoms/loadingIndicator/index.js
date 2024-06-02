import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import {iconColorsConstant} from 'rbase-constants/colors_constant';
import {fontFamilyConstant} from 'rbase-constants/fonts_constant';

const loadingIndicatorPayload = {
  text: 'Loading...',
  loadingColor: iconColorsConstant.active,
  textColor: iconColorsConstant.active,
  forInfinityScroll: false,
};

export const LoadingIndicator = (payload = loadingIndicatorPayload) => {
  return payload.forInfinityScroll ? (
    <View style={{width: '100%', height: 50}}>
      <View style={styles.loading}>
        <View style={styles.container}>
          <ActivityIndicator size="large" color={payload.loadingColor} />
          <Text style={[styles.textLoading, {color: payload.textColor}]}>
            {payload.text}
          </Text>
        </View>
      </View>
    </View>
  ) : (
    <View style={styles.loading}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color={payload.loadingColor} />
        <Text style={[styles.textLoading, {color: payload.textColor}]}>
          {payload.text}
        </Text>
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
    fontFamily: fontFamilyConstant.primary[400],
  },
});
