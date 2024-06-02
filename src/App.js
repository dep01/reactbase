import React, {useEffect, useRef} from 'react';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import Toast from 'react-native-toast-notifications';

import {LoadingOverlay} from 'rbase-components/molecules/LoadingOverlay';
import Router from './routes/root';
import {
  backgroundColorsConstant,
  textColorsConstant,
  borderColorsConstant,
} from 'rbase-constants/colors_constant';
import {
  globalStore,
  globalBaseState,
  setterGlobalState,
} from 'rbase-utils/global_store';
import {AlertCustom} from 'rbase-components/atoms';

export default () => {
  const toastRef = useRef();
  const globalState = globalStore(state => globalBaseState(state));
  useEffect(() => {
    setterGlobalState.toastRef(toastRef);
  }, []);
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      <Toast
        ref={globalState.toastRef}
        placement="bottom"
        duration={1500}
        animationType="zoom-in"
        animationDuration={250}
        successColor={backgroundColorsConstant.secondary}
        dangerColor={textColorsConstant.label}
        warningColor={borderColorsConstant.primary}
        normalColor={backgroundColorsConstant.secondary}
        offset={20}
        offsetTop={20}
        offsetBottom={20}
        swipeEnabled={true}
      />
      <AlertCustom
        icon={globalState.modalIcon}
        title={globalState.modalTitle}
        message={globalState.modalMessage}
        align="center"
        onRequestClose={() => setterGlobalState.showModal()}
        visible={globalState.showModal}
        onOk={() => setterGlobalState.showModal()}
        okText="OK"
      />

      <AlertCustom
        icon={globalState.modalConfimationIcon}
        title={globalState.modalConfimationTitle}
        message={globalState.modalConfirmationMessage}
        align="center"
        onRequestClose={() => setterGlobalState.showConfirmationModal()}
        visible={globalState.showConfirmationModal}
        onCancel={() => setterGlobalState.showConfirmationModal()}
        onOk={() => {
          globalState.modalConfirmationOk();
          setterGlobalState.showConfirmationModal();
        }}
        okText="OK"
        cancelText="CANCEL"
      />
      <LoadingOverlay />
    </SafeAreaProvider>
  );
};
