import React from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import * as globalStore from '../../utils/global_store';
import {view} from '@risingstack/react-easy-state';
import styles from './style';
import {sys_colors} from '../../utils/constants';

const LoadingIndicator = () => {
  if (globalStore.global_state.isLoading) {
    return (
      <View style={styles.loading}>
        <View style={styles.container}>
          <ActivityIndicator size="large" color={sys_colors.text.white} />
          <Text style={styles.textLoading}>Loading ...</Text>
        </View>
      </View>
    );
  } else {
    return <View></View>;
  }
};

export default view(LoadingIndicator);
