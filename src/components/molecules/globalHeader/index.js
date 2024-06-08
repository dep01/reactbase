import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  backgroundColorsConstant,
  textColorsConstant,
} from 'rbase-constants/colors_constant';
import {fontFamilyConstant} from 'rbase-constants/fonts_constant';

const globalHeaderPayload = {
  children:null,
  title: '',
  right: null,
  left: null,
  height: '10%',
  fontSize: 16,
  textAlign: 'center',
  color: textColorsConstant.secondary,
  style: {},
  type: 'primary',
};
export const GlobalHeader = (params = globalHeaderPayload) => {
  const payload = {...globalHeaderPayload, ...params};
  return payload.type == 'primary' ? (
    <View style={[styles.container, {height: payload.height}, payload.style]}>
      {payload.left != null || payload.right != null ? (
        <View style={styles.left}>{payload.left}</View>
      ) : null}
      {payload.title != '' ? (
        <Text
          style={[
            styles.title,
            {
              fontSize: payload.fontSize,
              textAlign: payload.textAlign,
              color: payload.color,
            },
          ]}>
          {payload.title.toUpperCase()}
        </Text>
      ) : (
        <View style={styles.children}>{payload.children}</View>
      )}
      {payload.left != null || payload.right != null ? (
        <View style={styles.right}>{payload.right}</View>
      ) : null}
    </View>
  ) : (
    <View style={[styles.container, {height: payload.height}, payload.style]}>
      {payload.left != null ? (
        <View style={styles.left}>{payload.left}</View>
      ) : null}
      {payload.title != '' ? (
        <Text
          style={[
            styles.title,
            {
              fontSize: payload.fontSize,
              textAlign: payload.textAlign,
              color: payload.color,
            },
          ]}>
          {payload.title.toUpperCase()}
        </Text>
      ) : (
        <View style={styles.children}>{payload.children}</View>
      )}
      {payload.right != null ? (
        <View style={styles.right}>{payload.right}</View>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    padding: 10,
    backgroundColor: backgroundColorsConstant.secondary,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    fontFamily: fontFamilyConstant.primary[700],
  },
  children: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  right: {
    height: '100%',
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
