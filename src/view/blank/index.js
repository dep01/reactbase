import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {view} from '@risingstack/react-easy-state';
import {sys_colors} from '../../utils/constants';
import * as store from './store';

export default view(({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
    store.initialized();
    return () => {
      store.cleanUp();
    };
  }, [navigation, store]);
  return (
    <View style={styles.page}>
      <Text style={styles.text}>{store.state.content_text}</Text>
    </View>
  );
});
const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: sys_colors.primary,
  },
  text: {
    color: sys_colors.text.white,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
