import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {sys_colors} from '../../../utils/constants';
import {useNavigation} from '@react-navigation/native';
export const BackButton = ({
  onPress,
  iconName = 'west',
  color = sys_colors.text.primary,
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
    alignItems: 'flex-start',
  },
});
