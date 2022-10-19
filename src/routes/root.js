import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashScreenPage} from '../pages';

import {routes_name} from '.';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes_name.SPLASH}
        component={SplashScreenPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
