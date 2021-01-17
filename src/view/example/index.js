import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import * as store from './store';
import {view} from 'react-easy-state';
import {baseColor} from '../../utils/constants';
import Icon from 'react-native-vector-icons/FontAwesome5';


export default view(({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      title: 'Example Page',
      style: {backgroundColor: 'white'},
      headerStyle: {
        backgroundColor: baseColor.header,
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
  }, [navigation, store]);
  return (
    <View style={styles.page}>
      <Text style={styles.text}>Count Me!</Text>
      <Text style={styles.text}>{store.state.count}</Text>
      <View style={styles.containerButton}>
        <TouchableOpacity
          onPress={() => store.plus()}
          style={styles.buttonPlus}>
          <Text style={styles.textButton}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => store.min()} style={styles.buttonMin}>
          <Text style={styles.textButton}>-</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => store.allowMinus()}
        style={styles.buttonAllowed}>
        <Text style={styles.textButtonAllow}>
          {store.state.isMinus ? 'Disable Minus' : 'Enable Minus'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => store.testLoading()}
        style={styles.buttonAllowed}>
        <Text style={styles.textButtonAllow}>Loading Overlay</Text>
      </TouchableOpacity>
    </View>
  );
});
