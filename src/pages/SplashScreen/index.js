import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import useStore from './store';
import {widthPercentageToDP as wp} from '@/helpers/responsive';

export default ({navigation}) => {
  const checkLogin = useStore(state => state.checkLogin);
  useEffect(() => {
    checkLogin();
    return () => {};
  }, [navigation, checkLogin]);

  return (
    <View>
      <Text>Test</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
