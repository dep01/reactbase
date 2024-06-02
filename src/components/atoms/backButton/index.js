import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {sys_colors} from 'rbase-helpers/constants';
import {useNavigation} from '@react-navigation/native';

const backButtonPayload = {
  onPress: null,
  iconName: 'west',
  color: sys_colors.text.white,
  size: 24,
  align: 'flex-start',
  style: {},
};
export const BackButton = (payload = backButtonPayload) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={payload.onPress ? payload.onPress : () => navigation.goBack()}
      style={[{alignItems: payload.align}, styles.button, payload.style]}>
      <Icon name={payload.iconName} color={payload.color} size={payload.size} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
});
