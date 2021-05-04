import React, { useEffect, useRef } from 'react';
import Routes from './src/routes';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from "react-native-fast-toast";
import * as globalStore from './src/utils/global_store';
import LoadingIndicator from './src/components/loading';


const App = () => {
  const toastRef = useRef(null);

  useEffect(() => {
    globalStore.global_state.setToastRef(toastRef);
  }, [globalStore]);

  return(
    <SafeAreaProvider>
      <Routes/>
      <Toast ref={toastRef} />
      <LoadingIndicator />
    </SafeAreaProvider>
  );
};

export default App;
