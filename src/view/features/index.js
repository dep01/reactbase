import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {view} from '@risingstack/react-easy-state';
import {sys_colors, sys_styles, sys_text_styles} from '../../utils/constants';
import * as store from './store';
export default view(({navigation}) => {
  useEffect(() => {
    store.initialized();
    return () => {
      store.cleanUp();
    };
  }, [navigation, store]);
  return (
    <View style={sys_styles.scaffold}>
      <View style={sys_styles.container_center_screen}>
        <Text style={styles.titleText}>This is features page</Text>
      </View>
    </View>
  );
});
const styles = StyleSheet.create({
  titleText: {
    ...sys_text_styles.header_medium_black,
  }
});
  