import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {view} from '@risingstack/react-easy-state';
import {sys_colors, sys_styles, sys_text_styles} from '../../utils/constants';
import * as store from './store';
import {Divider} from '../../components';

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
        <Text style={styles.text}>Count Me!</Text>
        <Text style={styles.text}>{store.state.count}</Text>
        <View style={styles.containerButton}>
          <TouchableOpacity
            onPress={() => store.PlusAction()}
            style={styles.buttonPlus}>
            <Text style={styles.textButton}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => store.MinAction()}
            style={styles.buttonMin}>
            <Text style={styles.textButton}>-</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => store.AllowMinus()}
          style={styles.buttonAllowed}>
          <Text style={styles.textButtonAllow}>
            {store.state.isMinus ? 'Disable Minus' : 'Enable Minus'}
          </Text>
        </TouchableOpacity>
        <Divider lineHeight={0.7} height={20} width="100%" align="flex-start" />
        <TouchableOpacity
          onPress={() => store.TestLoading()}
          style={styles.buttonAllowed}>
          <Text style={styles.textButtonAllow}>Loading Overlay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});
const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: sys_colors.primary,
  },
  headerRightButton: {
    justifyContent: 'center',
    color: sys_colors.text.primary,
    flex: 1,
    width: 50,
    alignItems: 'center',
    textAlign: 'center',
  },
  text: {
    ...sys_text_styles.header_medium_black,
    textAlign: 'center',
  },
  containerButton: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPlus: {
    width: 50,
    height: 30,
    borderRadius: 10,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  buttonMin: {
    width: 50,
    height: 30,
    borderRadius: 10,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  buttonAllowed: {
    width: 120,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  textButton: {
    ...sys_text_styles.header_white,
  },
  textButtonAllow: {
    ...sys_text_styles.header_medium_white,
  },
});
