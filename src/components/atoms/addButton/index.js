import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {iconColorsConstant} from 'rbase-constants/colors_constant';
import {useNavigation} from '@react-navigation/native';

const addButtonPayload = {
  onPress: null,
  iconName: 'add',
  color: iconColorsConstant.primary,
  size: 24,
  style: {},
};
export const AddButton = (params = addButtonPayload) => {
  const payload = {...addButtonPayload,...params}
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={payload.onPress ? payload.onPress : () => navigation.goBack()}
      style={[styles.button, payload.style]}>
      <Icon name={payload.iconName} color={payload.color} size={payload.size} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
