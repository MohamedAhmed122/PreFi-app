import {SettingsStackParamList} from 'Navigation/SettingsStack/interface';
import {NavigatorScreenParams, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AccountStackParamList} from 'Navigation/AccountStack/interface';
import {DrawerParamList} from 'Navigation/AppDrawer/interface';

export type NO_PARAMS = undefined;

export enum AppNavigationParams {
  Home = 'Home',
  Onboarding = 'Onboarding',
  Favorite = 'Favorite',
  Trends = 'Trends',
  Categories = 'Categories',
  AccountStack = 'AccountStack',
  SettingsStack = 'SettingsStack',
  AppDrawer = '  Appdrawer',
}

export type AppNavigationStackParamList = {
  [AppNavigationParams.Home]: NO_PARAMS;
  [AppNavigationParams.Onboarding]: NO_PARAMS;
  [AppNavigationParams.Favorite]: NO_PARAMS;
  [AppNavigationParams.Trends]: NO_PARAMS;
  [AppNavigationParams.Categories]: NO_PARAMS;
  [AppNavigationParams.AccountStack]: NavigatorScreenParams<AccountStackParamList>;
  [AppNavigationParams.SettingsStack]: NavigatorScreenParams<SettingsStackParamList>;
  [AppNavigationParams.AppDrawer]: NavigatorScreenParams<DrawerParamList>;
};

export type RootNavigationProp<P extends AppNavigationParams> =
  StackNavigationProp<AppNavigationStackParamList, P>;

export type RootRouteProp<P extends AppNavigationParams> = RouteProp<
  AppNavigationStackParamList,
  P
>;
