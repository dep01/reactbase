import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {
  backgroundColorsConstant,
  textColorsConstant,
} from 'rbase-constants/colors_constant';
import {fontFamilyConstant} from 'rbase-constants/fonts_constant';

const customInputPayload = {
  label: '',
  left: null,
  right: null,
  containerStyle: {},
  inputStyle: {},
  labelStyle: {},
  containerText: {},
  onChangeText,
  secureTextEntry,
  keyboardType,
  placeholder: '',
  value: '',
  maxLength: 30,
  numberOfLines: 1,
};
export const CustomInput = (payload = customInputPayload) => {
  return (
    <View style={[styles.container, payload.containerStyle]}>
      {payload.label != '' ? (
        <Text style={[styles.labelStyle, payload.labelStyle]}>
          {payload.label.toUpperCase()}
        </Text>
      ) : null}
      <View style={[styles.containerText, payload.containerText]}>
        {payload.left != null ? (
          <View
            style={{
              width: '15%',
              backgroundColor: textColorsConstant.input,
            }}>
            {payload.left}
          </View>
        ) : null}

        <TextInput
          style={[
            styles.inputStyle,
            {paddingLeft: payload.left != null ? 5 : 15},
            payload.inputStyle,
          ]}
          onChangeText={payload.onChangeText}
          secureTextEntry={payload.secureTextEntry}
          keyboardType={payload.keyboardType}
          placeholder={payload.placeholder}
          maxLength={payload.maxLength}
          numberOfLines={payload.numberOfLines}
          value={payload.value}
        />
        {payload.right != null ? (
          <View
            style={{
              width: '15%',
              backgroundColor: textColorsConstant.input,
            }}>
            {payload.right}
          </View>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 5,
  },
  containerText: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: backgroundColorsConstant.primary,
    marginTop: 15,
  },
  labelStyle: {
    color: textColorsConstant.label,
    fontSize: 14,
    fontFamily: fontFamilyConstant.primary[400],
  },
  inputStyle: {
    backgroundColor: textColorsConstant.input,
    paddingLeft: 30,
    fontSize: 14,
    flex: 1,
    minWidth: '70%',
    color: textColorsConstant.primary,
    fontFamily: fontFamilyConstant.primary[400],
  },
});
