import React from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import * as globalStore from '../../../utils/global_store';
import {view} from '@risingstack/react-easy-state';
import styles from './style';
import {sys_colors} from '../../../utils/constants';

const LoadingOverlay = () => {
  if (globalStore.global_state.isLoading) {
    return (
      <View style={styles.loading}>
        <View style={styles.container}>
          <ActivityIndicator size="large" color={sys_colors.text.primary} />
          <Text style={styles.textLoading}>Loading ...</Text>
        </View>
      </View>
    );
  } else {
    return null;
  }
};

export default view(LoadingOverlay);
