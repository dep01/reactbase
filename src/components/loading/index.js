import React from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import globalStore from '../../utils/global';
import {view} from '@risingstack/react-easy-state';
import styles from './style';
import {sys_colors} from '../../utils/constants';

const LoadingIndicator = () => {
  if (globalStore.isLoading) {
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