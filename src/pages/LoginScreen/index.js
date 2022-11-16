import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {
  sys_colors,
  sys_icons,
  sys_styles,
  sys_text_styles,
} from 'rbase-helpers/constants';
import shallow from 'zustand/shallow';
import {action, setter, useStore, base_state} from './store';
import {Card} from 'rbase-components/molecules';
import {BackButton, CustomButton, CustomInput} from 'rbase-components/atoms';

const {height, width} = Dimensions.get('window');
export default ({navigation}) => {
  const state = {
    ...useStore(state => base_state(state), shallow),
  };

  useEffect(() => {
    action.initialize();
    return () => {
      action.cleanUp();
    };
  }, [navigation, action]);
  return (
    <View style={sys_styles.scaffold}>
      <View style={sys_styles.container_center_screen}>
        <Card
          Width="90%"
          padding={12}
          title="Login"
          borderRadius={15}
          backgroundColor={sys_colors.text.white}
          children={
            <View>
              <CustomInput
                onChangeText={val => setter.username(val)}
                containerStyle={styles.containerInput}
                label="USERNAME"
                labelStyle={styles.textLabel}
                placeholder="Username..."
                inputStyle={styles.textInput}
                value={state.username}
              />
              <CustomInput
                labelStyle={styles.textLabel}
                placeholder="Password..."
                secureTextEntry={state.showPassword}
                onChangeText={val => setter.password(val)}
                containerStyle={styles.containerInput}
                label="password"
                inputStyle={styles.textInput}
                right={
                  <BackButton
                    size={30}
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      backgroundColor: sys_colors.primary,
                    }}
                    onPress={() => setter.showPassword()}
                    iconName={state.showPassword ? 'eye' : 'eye-off'}
                    color={sys_colors.icon.active}
                  />
                }
                value={state.password}
              />
              <CustomButton
                title="Login"
                baseWidth="100%"
                style={styles.buttonLogin}
                onPress={() => action.doLogin(navigation)}
              />
            </View>
          }
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  textLabel: {
    ...sys_text_styles.header_small_black,
    color: sys_colors.text.black,
  },
  textDaftar: {
    ...sys_text_styles.header_small_black,
    color: sys_colors.text.black,
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
  textInput: {
    ...sys_text_styles.header_small_black,
    backgroundColor: sys_colors.primary,
    color: sys_colors.text.primary,
  },
  containerInput: {
    marginBottom: 10,
  },
  containerDaftar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.8,
  },
  buttonLogin: {
    marginTop: 10,
    borderRadius: 15,
  },
  logoPdam: {
    width: width * 0.6,
    height: width * 0.6,
  },
});
