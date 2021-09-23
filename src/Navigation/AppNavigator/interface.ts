import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type NO_PARAMS = undefined;

export enum AppNavigationParams {
  Home = 'Home',
  Onboarding = 'Onboarding',
  Favorite = 'Favorite',
  Trends = 'Trends',
  Categories = 'Categories',
  AccountStack = 'AccountStack',
  SettingsStack = 'SettingsStack',
}

export type AppNavigationStackParamList = {
  [AppNavigationParams.Home]: NO_PARAMS;
  [AppNavigationParams.Onboarding]: NO_PARAMS;
  [AppNavigationParams.Favorite]: NO_PARAMS;
  [AppNavigationParams.Trends]: NO_PARAMS;
  [AppNavigationParams.Categories]: NO_PARAMS;
  [AppNavigationParams.AccountStack]: NO_PARAMS;
  [AppNavigationParams.SettingsStack]: NO_PARAMS;
};

export type RootNavigationProp<P extends AppNavigationParams> =
  StackNavigationProp<AppNavigationStackParamList, P>;

export type RootRouteProp<P extends AppNavigationParams> = RouteProp<
  AppNavigationStackParamList,
  P
>;
