import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  BlankScreen,
  ExampleScreen,
  SplashScreen,
  SignScreen,
  FeaturesScreen,
  DetailFeaturesScreen,
  ComponentScreen,
} from '../view';
import {sys_colors, sys_font} from '../utils/constants';
import {static_routes} from './static_routes';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === static_routes.example) {
            iconName = 'home';
          } else if (route.name === static_routes.blank) {
            iconName = 'file';
          } else if (route.name === static_routes.features) {
            iconName = 'list';
          } else {
            iconName = 'atom';
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
      })}
      tabBarOptions={{
        activeTintColor: sys_colors.icon.active,
        inactiveTintColor: sys_colors.icon.unactive,
        activeBackgroundColor: sys_colors.secondary,
        inactiveBackgroundColor: sys_colors.primary,
        labelStyle: {
          fontFamily: sys_font.primary[600],
          fontSize: 10,
        },
      }}>
      <Tab.Screen
        name={static_routes.example}
        component={ExampleScreen}
        options={{title: 'Basic Logic'}}
      />
      <Tab.Screen
        name={static_routes.component}
        component={ComponentScreen}
        options={{title: 'Custom Component'}}
      />
      <Tab.Screen
        name={static_routes.blank}
        component={BlankScreen}
        options={{title: 'Blank Pages'}}
      />
      <Tab.Screen
        name={static_routes.features}
        component={FeaturesScreen}
        options={{title: 'Features'}}
      />
    </Tab.Navigator>
  );
};
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={static_routes.splash}>
        <Stack.Screen
          name={static_routes.splash}
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={static_routes.signin}
          component={SignScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={static_routes.homepage}
          component={BottomTabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={static_routes.detail_features}
          component={DetailFeaturesScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
