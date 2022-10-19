import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {useStore, action, setter} from './store';
import {sys_styles,sys_icons} from 'rbase-helpers/constants';
import shallow from 'zustand/shallow';
export default ({navigation}) => {
  const state = {
    ...useStore(
      state => ({
        loading: state.loading
      }),
      shallow,
    ),
  };
  
  useEffect(() => {
    action.initialize(navigation);
    return () => {
      action.cleanUp();
    };
  }, [navigation, action]);
  return (
    <View style={sys_styles.container_center_screen}>
      <Image source={sys_icons.ic_loading} resizeMode={'contain'} style={{width:'40%'}} />
    </View>
  );
};

const styles = StyleSheet.create({});
