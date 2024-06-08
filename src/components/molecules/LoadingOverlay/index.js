import React from 'react';
import {View, ActivityIndicator, Text, StyleSheet} from 'react-native';
const LoadingOverlay = () => {
  return (
    <View style={styles.loading}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color={'#2E2D98'} />
        <Text style={styles.textLoading}>Loading ...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  container: {
    padding: 35,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  textLoading: {
    color: '#2E2D98',
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export {LoadingOverlay};
