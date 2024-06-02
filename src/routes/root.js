import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SplashScreenPage, HomeScreenPage, LoginScreenPage} from '../pages';
import {routesName} from '.';
import {
  backgroundColorsConstant,
  iconColorsConstant,
} from 'rbase-constants/colors_constant';
import {textStyleConstant} from 'rbase-constants/styles_constant';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        activeTintColor: iconColorsConstant.active,
        inactiveTintColor: iconColorsConstant.inActive,
        activeBackgroundColor: backgroundColorsConstant.secondary,
        inactiveBackgroundColor: backgroundColorsConstant.primary,
        labelStyle: {
          fontFamily: textStyleConstant.contentSmallPrimary,
          fontSize: 10,
        },
        tabBarLabel: () => null,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === routesName.home) {
            iconName = 'home';
          } else {
            iconName = 'account';
          }
          return (
            <Icon
              name={iconName}
              size={24}
              color={
                focused
                  ? iconColorsConstant.active
                  : iconColorsConstant.inActive
              }
            />
          );
        },
      })}>
      <Tab.Screen
        name={routesName.home}
        component={HomeScreenPage}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName={routesName.splashScreen}>
      <Stack.Screen
        name={routesName.splashScreen}
        component={SplashScreenPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={routesName.layout}
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={routesName.login}
        component={LoginScreenPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
