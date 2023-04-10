import React, {useEffect, useRef}  from 'react';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import Toast from 'react-native-toast-notifications';

import {LoadingOverlay} from 'rbase-components/molecules/LoadingOverlay';
import Router from './routes/root';
import {sys_colors} from 'rbase-helpers/constants';
import {
  globalStore,
  global_base_state,
  setter_global_state,
} from 'rbase-helpers/global_store';
import { AlertCustom } from 'rbase-components/atoms';

export default () => {
  const toastRef = useRef();
  const global_state = {
    ...globalStore(state => global_base_state(state)),
  };
  useEffect(() => {
    setter_global_state.toastRef(toastRef);
  }, []);
  return (
    <SafeAreaProvider>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      <Toast
        ref={global_state.toastRef}
        placement="bottom"
        duration={1500}
        animationType="zoom-in"
        animationDuration={250}
        successColor={sys_colors.secondary}
        dangerColor={sys_colors.text.label}
        warningColor={sys_colors.line.primary}
        normalColor={sys_colors.secondary}
        offset={20}
        offsetTop={20}
        offsetBottom={20}
        swipeEnabled={true}
      />
      <AlertCustom
        icon={global_state.modal_icon}
        title={global_state.modal_title}
        message={global_state.modal_message}
        align='center'
        onRequestClose={() => setter_global_state.show_modal()}
        visible={global_state.show_modal}
        onOk={()=>setter_global_state.show_modal()}
        okText="OK"
      />
      
      <AlertCustom
        icon={global_state.modal_confirmation_icon}
        title={global_state.modal_confirmation_title}
        message={global_state.modal_confirmation_message}
        align='center'
        onRequestClose={() => setter_global_state.show_confirmation_modal()}
        visible={global_state.show_confirmation_modal}
        onCancel={()=>setter_global_state.show_confirmation_modal()}
        onOk={()=>{
          global_state.modal_confirmation_ok();
          setter_global_state.show_confirmation_modal();
        }}
        okText="OK"
        cancelText="CANCEL"
      />
      <LoadingOverlay />
    </SafeAreaProvider>
  );
};
