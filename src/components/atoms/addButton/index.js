import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {sys_colors} from 'rbase-helpers/constants';
import {useNavigation} from '@react-navigation/native';
export const AddButton = ({
  onPress,
  iconName = 'add',
  color = sys_colors.text.white,
  size = 24,
  style = {},
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={onPress ? onPress : () => navigation.goBack()}
      style={[styles.button, style]}>
      <Icon name={iconName} color={color} size={size} />
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
