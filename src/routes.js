import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import splash from './view/splashscreen';
import example from './view/example';
import blank from './view/blank';
const Stack = createStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="/splash">
        <Stack.Screen name="/splash" component={splash} />
        <Stack.Screen name="/example" component={example} />
        <Stack.Screen name="/blank" component={blank} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
