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

const Drawer = createDrawerNavigator<AppNavigationStackParamList>();

export const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={AppNavigationParams.Home}
        drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen
          name={AppNavigationParams.Home}
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
