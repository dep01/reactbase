import React from 'react';
import {store} from 'react-easy-state';
import {Alert} from 'react-native';
export const testString = 'hallo';
export const intTest = 99;

export const state = store({
  loading: true,
  count: 0,
  isMinus: false,
});

export const gotoBlank = ({navigation}) => {
  navigation.navigate('/blank');
};

export const plus = () => {
  state.count++;
};
export const min = () => {
  if (state.count > 0) {
    state.count--;
  } else {
    if (state.isMinus) {
      state.count--;
    } else {
      Alert.alert('Warning', 'Value is 0', [
        {
          text: 'close',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ]);
    }
  }
};
export const allowMinus = () => {
  if (state.count < 0) {
    state.isMinus = !state.isMinus;
    state.count = 0;
  } else {
    state.isMinus = !state.isMinus;
  }
};
