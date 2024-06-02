import React, {useEffect} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {action, setter, useStore, baseState} from './store';
import {Card} from 'rbase-components/molecules';
import {BackButton, CustomButton, CustomInput} from 'rbase-components/atoms';
import {
  baseStyleConstant,
  textStyleConstant,
} from 'rbase-constants/styles_constant';
import {
  backgroundColorsConstant,
  iconColorsConstant,
} from 'rbase-constants/colors_constant';

const {width} = Dimensions.get('window');
export default ({navigation}) => {
  const state = useStore(state => baseState(state));

  useEffect(() => {
    action.initialize();
    return () => {
      action.cleanUp();
    };
  }, [navigation, action]);
  return (
    <View style={baseStyleConstant.scaffold}>
      <View style={baseStyleConstant.containerCenterScreen}>
        <Card
          Width="90%"
          padding={12}
          title="Login"
          borderRadius={15}
          backgroundColor={backgroundColorsConstant.white}>
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
                    backgroundColor: backgroundColorsConstant.primary,
                  }}
                  onPress={() => setter.showPassword()}
                  iconName={state.showPassword ? 'eye' : 'eye-off'}
                  color={iconColorsConstant.active}
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
        </Card>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  textLabel: {
    ...textStyleConstant.headerSmallPrimary,
    color: sys_colors.text.black,
  },
  textDaftar: {
    ...textStyleConstant.headerSmallPrimary,
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
  textInput: {
    ...textStyleConstant.headerSmallPrimary,
    backgroundColor: backgroundColorsConstant.primary,
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
