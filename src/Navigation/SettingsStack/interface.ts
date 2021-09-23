import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type NO_PARAMS = undefined;

export enum SettingsStackParams {
  Settings = 'Settings',
}

export type SettingsStackParamList = {
  [SettingsStackParams.Settings]: NO_PARAMS;
};

export type RootNavigationProp<P extends SettingsStackParams> =
  StackNavigationProp<SettingsStackParamList, P>;

export type RootRouteProp<P extends SettingsStackParams> = RouteProp<
  SettingsStackParamList,
  P
>;
