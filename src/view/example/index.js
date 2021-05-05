import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {view} from 'react-easy-state';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {sys_colors, sys_styles} from '../../utils/constants';
import * as store from './store';
import {GlobalHeader, BackButton} from '../../components';

export default view(({navigation}) => {
  useEffect(() => {
    store.initialized();
    return () => {
      store.cleanUp();
    };
  }, [navigation, store]);
  return (
    <View style={sys_styles.scaffold}>
      <GlobalHeader
        title="example"
        type="secondary"
        right={
          <BackButton
            iconName="east"
            onPress={() => store.NavigateBlank({navigation})}
            style={{
              alignItems: 'center',
            }}
          />
        }
      />
      <View style={styles.page}>
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
    color: sys_colors.text.white,
    flex: 1,
    width: 50,
    alignItems: 'center',
    textAlign: 'center',
  },
  text: {fontWeight: 'bold', textAlign: 'center', color: sys_colors.text.white},
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
  textButton: {fontSize: 24, fontWeight: 'bold', color: 'white'},
  textButtonAllow: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});
