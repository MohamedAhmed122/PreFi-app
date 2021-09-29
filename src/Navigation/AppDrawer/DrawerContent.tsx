import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  // DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import {HeaderTitle} from 'components/Header';
import {drawerItems} from './container';

import {View} from 'react-native';
import styles from './style';
import {Colors} from 'styles';
interface CustomDrawerContentProps {
  props: DrawerContentComponentProps;
}
export const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        <HeaderTitle />
      </View>
      {drawerItems.map(item => (
        <DrawerItem
          key={item.id}
          // inactiveBackgroundColor={Colors.gray}
          activeBackgroundColor={Colors.green}
          label={item.label}
          focused={
            props.state.index ===
            props.state.routes.findIndex(e => e.name === item.label)
          }
          icon={item.icon}
          onPress={() => item.onPress(props)}
        />
      ))}
    </DrawerContentScrollView>
  );
};

// const drawerItems = [
//   {
//     id: '1',
//     name: AppDraweParams.Home,
//     label: 'Home',
//     icon: ({color, size}: {color: string; size: number}) => {
//       return (
//         <MaterialCommunityIcon name="close-box" color={color} size={size} />
//       );
//     },
//     onPress: (props: any) => props.navigation.navigate(Stacks.AppDrawer.Home),
//   },
//   {
//     id: '2',
//     name: AppDraweParams.Account,
//     label: 'Account',
//     icon: ({color, size}: {color: string; size: number}) => {
//       return (
//         <MaterialCommunityIcon name="close-box" color={color} size={size} />
//       );
//     },
//     onPress: (props: any) =>
//       props.navigation.navigate(Stacks.AppDrawer.Account),
//   },
//   {
//     id: '3',
//     name: AppDraweParams.Categories,
//     label: 'Categories',
//     icon: ({color, size}: {color: string; size: number}) => {
//       return (
//         <MaterialCommunityIcon name="close-box" color={color} size={size} />
//       );
//     },
//     onPress: (props: any) =>
//       props.navigation.navigate(Stacks.AppDrawer.Categories),
//   },
//   {
//     id: '4',
//     name: AppDraweParams.Favorites,
//     label: 'Favorites',
//     icon: ({color, size}: {color: string; size: number}) => {
//       return (
//         <MaterialCommunityIcon name="close-box" color={color} size={size} />
//       );
//     },
//     onPress: (props: any) =>
//       props.navigation.navigate(Stacks.AppDrawer.Favorites),
//   },
//   {
//     id: '5',
//     name: AppDraweParams.Trends,
//     label: 'Trends',
//     icon: ({color, size}: {color: string; size: number}) => {
//       return (
//         <MaterialCommunityIcon name="close-box" color={color} size={size} />
//       );
//     },
//     onPress: (props: any) => props.navigation.navigate(Stacks.AppDrawer.Trends),
//   },
//   {
//     id: '6',
//     name: AppDraweParams.Settings,
//     label: 'Settings',
//     icon: ({color, size}: {color: string; size: number}) => {
//       return (
//         <MaterialCommunityIcon name="close-box" color={color} size={size} />
//       );
//     },
//     onPress: (props: any) =>
//       props.navigation.navigate(Stacks.AppDrawer.Settings),
//   },
// ];
