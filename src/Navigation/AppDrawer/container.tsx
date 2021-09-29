import React from 'react';
// TYPES
import {AppDraweParams} from './interface';
import {Stacks} from 'Navigation/Stacks';
// SCREEN
import AccountScreen from 'screen/AccountScreen';
import HomeScreen from 'screen/HomeScreen';
import CategoryScreen from 'screen/CategoriesScreen';
import SettingsScreen from 'screen/SettingsScreen';
import FavoriteScreen from 'screen/FavoriteScreen';
import TrendsScreen from 'screen/TrendsScreen';
// ICON
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export const drawerItems = [
  {
    id: '1',
    name: AppDraweParams.Home,
    label: 'Home',
    icon: ({color, size}: {color: string; size: number}) => {
      return (
        <MaterialCommunityIcon name="close-box" color={color} size={size} />
      );
    },
    onPress: (props: any) => props.navigation.navigate(Stacks.AppDrawer.Home),
  },
  {
    id: '2',
    name: AppDraweParams.Account,
    label: 'Account',
    icon: ({color, size}: {color: string; size: number}) => {
      return (
        <MaterialCommunityIcon name="close-box" color={color} size={size} />
      );
    },
    onPress: (props: any) =>
      props.navigation.navigate(Stacks.AppDrawer.Account),
  },
  {
    id: '3',
    name: AppDraweParams.Categories,
    label: 'Categories',
    icon: ({color, size}: {color: string; size: number}) => {
      return (
        <MaterialCommunityIcon name="close-box" color={color} size={size} />
      );
    },
    onPress: (props: any) =>
      props.navigation.navigate(Stacks.AppDrawer.Categories),
  },
  {
    id: '4',
    name: AppDraweParams.Favorites,
    label: 'Favorites',
    icon: ({color, size}: {color: string; size: number}) => {
      return (
        <MaterialCommunityIcon name="close-box" color={color} size={size} />
      );
    },
    onPress: (props: any) =>
      props.navigation.navigate(Stacks.AppDrawer.Favorites),
  },
  {
    id: '5',
    name: AppDraweParams.Trends,
    label: 'Trends',
    icon: ({color, size}: {color: string; size: number}) => {
      return (
        <MaterialCommunityIcon name="close-box" color={color} size={size} />
      );
    },
    onPress: (props: any) => props.navigation.navigate(Stacks.AppDrawer.Trends),
  },
  {
    id: '6',
    name: AppDraweParams.Settings,
    label: 'Settings',
    icon: ({color, size}: {color: string; size: number}) => {
      return (
        <MaterialCommunityIcon name="close-box" color={color} size={size} />
      );
    },
    onPress: (props: any) =>
      props.navigation.navigate(Stacks.AppDrawer.Settings),
  },
];

export let drawers = [
  {
    id: '1',
    name: AppDraweParams.Home,
    component: HomeScreen,
  },
  {
    id: '2',
    name: AppDraweParams.Account,
    component: AccountScreen,
  },
  {
    id: '3',
    name: AppDraweParams.Categories,
    component: CategoryScreen,
  },
  {
    id: '4',
    name: AppDraweParams.Favorites,
    component: FavoriteScreen,
  },
  {
    id: '5',
    name: AppDraweParams.Trends,
    component: TrendsScreen,
  },
  {
    id: '6',
    name: AppDraweParams.Settings,
    component: SettingsScreen,
  },
];
