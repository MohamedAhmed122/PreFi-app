import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type NO_PARAMS = undefined;

export enum AccountStackParams {
  Account = 'Account',
  AccountDetail = 'AccountDetail',
  CreateAccount = 'CreateAccount',
  EditAccount = 'EditAccount',
}

export type AccountStackParamList = {
  [AccountStackParams.Account]: NO_PARAMS;
  [AccountStackParams.AccountDetail]: NO_PARAMS;
  [AccountStackParams.CreateAccount]: NO_PARAMS;
  [AccountStackParams.EditAccount]: NO_PARAMS;
};

export type RootNavigationProp<P extends AccountStackParams> =
  StackNavigationProp<AccountStackParamList, P>;

export type RootRouteProp<P extends AccountStackParams> = RouteProp<
  AccountStackParamList,
  P
>;
