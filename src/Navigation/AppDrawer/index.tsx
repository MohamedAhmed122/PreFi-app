import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {CustomDrawerContent} from './DrawerContent';
import {
  AppNavigationParams,
  AppNavigationStackParamList,
} from 'Navigation/AppNavigator/interface';
import AppNavigator from 'Navigation/AppNavigator';
import {createNavigationContainerRef} from '@react-navigation/core';

const Drawer = createDrawerNavigator<AppNavigationStackParamList>();
export const navigationRef = createNavigationContainerRef();

export const DrawerNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Drawer.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={AppNavigationParams.AppDrawer}
        drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen
          name={AppNavigationParams.AppDrawer}
          component={AppNavigator}
          options={{
            drawerIcon: ({color, size}) => {
              return <FontAwesomeIcon name="home" color={color} size={size} />;
            },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
