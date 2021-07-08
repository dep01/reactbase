import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {view} from '@risingstack/react-easy-state';
import {sys_styles} from '../../utils/constants';
import * as store from './store';
import {
  BackButton,
  CustomButton,
  CustomInput,
  GlobalHeader,
} from '../../components';
export default view(({navigation}) => {
  useEffect(() => {
    store.initialized();
    return () => {
      store.cleanUp();
    };
  }, [navigation, store]);
  return (
    <View style={sys_styles.scaffold}>
      <GlobalHeader title="Welcome back" />
      <View style={sys_styles.container}>
        <CustomInput
          value={store.state.username}
          onChangeText={(val) => store.changeUsername(val)}
          label="username"
          placeholder="Input your username..."
        />
        <CustomInput
          value={store.state.password}
          secureTextEntry={store.state.secure_password}
          onChangeText={(val) => store.changePassword(val)}
          label="password"
          right={
            <BackButton
              iconName={
                store.state.secure_password ? 'visibility' : 'visibility-off'
              }
              onPress={() => store.changeShowPassword()}
              style={styles.buttonPassword}
            />
          }
          placeholder="Input your password..."
        />
        <View style={styles.containerButton}>
          <CustomButton
            title="signin"
            style={styles.buttonSignin}
            onPress={() => store.doLogin({navigation})}
          />
        </View>
      </View>
    </View>
  );
});
const styles = StyleSheet.create({
  containerButton: {width: '100%', alignItems: 'center'},
  buttonPassword: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSignin: {width: '80%', marginTop: 15},
});
