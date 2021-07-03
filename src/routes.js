import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {BlankScreen, ExampleScreen, SplashScreen} from './view';

const Stack = createStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splash">
        <Stack.Screen
          name="splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="example"
          component={ExampleScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="blank"
          component={BlankScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
