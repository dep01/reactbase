import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SplashScreenPage, HomeScreenPage, LoginScreenPage} from '../pages';
import {sys_colors, sys_text_styles} from 'rbase-helpers/constants';
import {routes_name} from '.';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        activeTintColor: sys_colors.secondary,
        inactiveTintColor: sys_colors.icon.unactive,
        activeBackgroundColor: sys_colors.secondary,
        inactiveBackgroundColor: sys_colors.primary,
        labelStyle: {
          fontFamily: sys_text_styles.content_small_black,
          fontSize: 10,
        },
        tabBarLabel: () => null,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === routes_name.HOME) {
            iconName = 'home';
          } else {
            iconName = 'account';
          }
          return (
            <Icon
              name={iconName}
              size={24}
              color={
                focused ? sys_colors.icon.active : sys_colors.icon.unactive
              }
            />
          );
        },
      })}>
      <Tab.Screen
        name={routes_name.HOME}
        component={HomeScreenPage}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName={routes_name.SPLASH}>
      <Stack.Screen
        name={routes_name.SPLASH}
        component={SplashScreenPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={routes_name.LAYOUT}
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={routes_name.LOGIN}
        component={LoginScreenPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
