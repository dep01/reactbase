import React from 'react';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {ToastProvider} from 'react-native-toast-notifications';
import {LoadingOverlay} from 'rbase-components/molecules/LoadingOverlay';
import Router from '@/routes/root';

export default () => {
  return (
    <SafeAreaProvider>
      <ToastProvider>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </ToastProvider>
      <LoadingOverlay />
    </SafeAreaProvider>
  );
};
