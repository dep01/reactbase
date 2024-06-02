import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {action} from './store';
import {GlobalHeader} from 'rbase-components/molecules';
import {
  baseStyleConstant,
  textStyleConstant,
} from 'rbase-constants/styles_constant';
export default ({navigation}) => {
  useEffect(() => {
    action.initialize();
    return () => {
      action.cleanUp();
    };
  }, [navigation, action]);
  return (
    <View style={baseStyleConstant.scaffold}>
      <GlobalHeader title="HOME" />
      <View style={baseStyleConstant.containerCenterScreen}>
        <Text style={styles.titleText}>This is HomeScreen page</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  titleText: {
    ...textStyleConstant.headerSmallPrimary,
  },
});
