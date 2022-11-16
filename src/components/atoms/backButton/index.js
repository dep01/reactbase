import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {sys_colors} from 'rbase-helpers/constants';
import {useNavigation} from '@react-navigation/native';
export const BackButton = ({
  onPress,
  iconName = 'west',
  color = sys_colors.text.white,
  size = 24,
  align = 'flex-start',
  style = {},
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={onPress ? onPress : () => navigation.goBack()}
      style={[{alignItems: align}, styles.button, style]}>
      <Icon name={iconName} color={color} size={size} />
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
