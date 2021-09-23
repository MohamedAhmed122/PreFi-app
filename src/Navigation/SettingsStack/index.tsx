import React from 'react';
//Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//TYPES
import {SettingsStackParams, SettingsStackParamList} from './interface';
//SCREENS
import SettingsScreen from '@screen/SettingsScreen/index';

const Stack = createNativeStackNavigator<SettingsStackParamList>();

const SettingsStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={SettingsStackParams.Settings}
          component={SettingsScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SettingsStack;
