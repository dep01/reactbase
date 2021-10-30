import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {sys_colors, sys_font} from '../../../utils/constants';
export const CustomInput = ({
  label = '',
  left = null,
  right = null,
  containerStyle = {},
  inputStyle = {},
  labelStyle = {},
  containerText = {},
  onChangeText,
  secureTextEntry,
  keyboardType,
  placeholder = '',
  value = '',
  maxLength = 30,
  numberOfLines = 1,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {label != '' ? (
        <Text style={[styles.labelStyle, labelStyle]}>
          {label.toUpperCase()}
        </Text>
      ) : null}
      <View style={[styles.containerText, containerText]}>
        {left != null ? (
          <View
            style={{
              width: '15%',
              backgroundColor: sys_colors.textInput,
            }}>
            {left}
          </View>
        ) : null}

        <TextInput
          style={[
            styles.inputStyle,
            {paddingLeft: left != null ? 5 : 30},
            inputStyle,
          ]}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          placeholder={placeholder}
          maxLength={maxLength}
          numberOfLines={numberOfLines}
          value={value}
        />
        {right != null ? (
          <View
            style={{
              width: '15%',
              backgroundColor: sys_colors.textInput,
            }}>
            {right}
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
    backgroundColor: sys_colors.primary,
    marginTop: 15,
  },
  labelStyle: {
    color: sys_colors.text.label,
    fontSize: 14,
    fontFamily: sys_font.primary[400],
  },
  inputStyle: {
    backgroundColor: sys_colors.textInput,
    paddingLeft: 30,
    fontSize: 14,
    flex: 1,
    minWidth: '70%',
    color: sys_colors.text.primary,
    fontFamily: sys_font.primary[400],
  },
});
