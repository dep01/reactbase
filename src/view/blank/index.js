import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from './styles';
import * as store from './store';
import {view} from 'react-easy-state';
import {baseColor} from '../../utils/constants';
export default view(({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  return (
    <View style={styles.page}>
      <Text style={styles.text}>This is a blank page</Text>
    </View>
  );
});
