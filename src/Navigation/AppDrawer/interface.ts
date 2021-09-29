import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type NO_PARAMS = undefined;

export enum AppDraweParams {
  Account = 'Account',
  Settings = 'Settings',
  Home = 'Home',
  Categories = 'Categories',
  Trends = 'Trends',
  Favorites = 'Favorites',
}

export type AppDraweParamsList = {
  [AppDraweParams.Account]: NO_PARAMS;
  [AppDraweParams.Home]: NO_PARAMS;
  [AppDraweParams.Settings]: NO_PARAMS;
  [AppDraweParams.Categories]: NO_PARAMS;
  [AppDraweParams.Trends]: NO_PARAMS;
  [AppDraweParams.Favorites]: NO_PARAMS;
};

export type RootNavigationProp<P extends AppDraweParams> = StackNavigationProp<
  AppDraweParamsList,
  P
>;

export type RootRouteProp<P extends AppDraweParams> = RouteProp<
  AppDraweParamsList,
  P
>;
