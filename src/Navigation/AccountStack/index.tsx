import React from 'react';
//Navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//TYPES
import {AccountStackParams, AccountStackParamList} from './interface';
//SCREENS
import AccountScreen from '@screen/AccountScreen';
import AccountDetail from '@screen/AccountDetailScreen';
import EditAccount from '@screen/EditAccountScreen';
import CreateAccount from '@screen/CreateAccountScreen';

const Stack = createNativeStackNavigator<AccountStackParamList>();

const AccountStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={AccountStackParams.Account}
        component={AccountScreen}
      />
      <Stack.Screen
        name={AccountStackParams.AccountDetail}
        component={AccountDetail}
      />
      <Stack.Screen
        name={AccountStackParams.CreateAccount}
        component={CreateAccount}
      />
      <Stack.Screen
        name={AccountStackParams.EditAccount}
        component={EditAccount}
      />
    </Stack.Navigator>
  );
};

export default AccountStack;
