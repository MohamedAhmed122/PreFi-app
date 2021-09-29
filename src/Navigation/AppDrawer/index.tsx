import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {CustomDrawerContent} from './DrawerContent';
import {createNavigationContainerRef} from '@react-navigation/core';
import {AppDraweParamsList} from './interface';

import {drawers} from './container';

const Drawer = createDrawerNavigator<AppDraweParamsList>();
export const navigationRef = createNavigationContainerRef();

export const DrawerNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Drawer.Navigator
        // screenOptions={{headerShown: false}}
        drawerContent={props => <CustomDrawerContent {...props} />}>
        {drawers.map(drawer => (
          <Drawer.Screen
            key={drawer.id}
            name={drawer.name}
            component={drawer.component}
            // options={drawer.options}
          />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

// let drawers = [
//   {
//     id: '1',
//     name: AppDraweParams.Home,
//     component: HomeScreen,
//     options: {
//       drawerIcon: ({color, size}: {color: string; size: number}) => {
//         return <FontAwesomeIcon name="home" color={color} size={size} />;
//       },
//     },
//   },
//   {
//     id: '2',
//     name: AppDraweParams.Account,
//     component: AccountScreen,
//     options: {
//       drawerIcon: ({color, size}: {color: string; size: number}) => {
//         return <FontAwesomeIcon name="account" color={color} size={size} />;
//       },
//     },
//   },
//   {
//     id: '3',
//     name: AppDraweParams.Categories,
//     component: CategoryScreen,
//     options: {
//       drawerIcon: ({color, size}: {color: string; size: number}) => {
//         return <FontAwesomeIcon name="account" color={color} size={size} />;
//       },
//     },
//   },
//   {
//     id: '4',
//     name: AppDraweParams.Favorites,
//     component: FavoriteScreen,
//     options: {
//       drawerIcon: ({color, size}: {color: string; size: number}) => {
//         return <FontAwesomeIcon name="account" color={color} size={size} />;
//       },
//     },
//   },
//   {
//     id: '5',
//     name: AppDraweParams.Trends,
//     component: TrendsScreen,
//     options: {
//       drawerIcon: ({color, size}: {color: string; size: number}) => {
//         return <FontAwesomeIcon name="account" color={color} size={size} />;
//       },
//     },
//   },
//   {
//     id: '6',
//     name: AppDraweParams.Settings,
//     component: SettingsScreen,
//     options: {
//       drawerIcon: ({color, size}: {color: string; size: number}) => {
//         return <FontAwesomeIcon name="home" color={color} size={size} />;
//       },
//     },
//   },
// ];
