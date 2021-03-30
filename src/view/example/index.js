import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {view} from 'react-easy-state';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {sys_colors} from '../../utils/constants';
import * as store from './store';

export default view(({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      title: 'Example Page',
      style: {backgroundColor: 'white'},
      headerStyle: {
        backgroundColor: sys_colors.secondary,
      },
      headerRight: () => (
        <TouchableOpacity
          style={styles.headerRightButton}
          onPress={() => {
            store.gotoBlank({navigation});
          }}>
          <Icon name="file" size={18} />
        </TouchableOpacity>
      ),
    });
    store.initialized();
    return () => {
      store.cleanUp();
    };
  }, [navigation, store]);
  return (
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
  );
});
const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: sys_colors.primary,
  },
  headerRightButton: {
    justifyContent: 'center',
    color: baseColor.text,
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
