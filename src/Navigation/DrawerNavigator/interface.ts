// import { AppNavigationParams } from './../interface';
import {CompositeNavigationProp} from '@react-navigation/core';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {NavigatorScreenParams, RouteProp} from '@react-navigation/native';
import {
  AppNavigationStackParamList,
  AppNavigationParams,
} from '../AppNavigator/interface';

export enum DrawerParams {
  AppNavigator = 'AppNavigator',
}
export type DrawerParamList = {
  [DrawerParams.AppNavigator]: undefined;
};
export type UserDrawerNavigationProp<P extends DrawerParams> =
  //   CompositeNavigationProp<
  //     AppNavigationStackParamList<AppNavigationParams.>,
  //     DrawerNavigationProp<DrawerParamList, P>
  //   >;
  DrawerNavigationProp<DrawerParamList, P>;

export type DrawerRouteProp<P extends DrawerParams> = RouteProp<
  AppNavigationStackParamList,
  P
>;
