import React from 'react';
//Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//STORAGE
import {useDisplayOnBoarding} from '@hooks/useDisplayOnBoarding';
//TYPES
import {AppStackParamList} from '../../types/navigation';
//SCREENS
import HomeScreen from '@screen/HomeScreen';
import OnBoardingScreen from '@screen/OnBoardingScreen/index';

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppNavigator = () => {
  let {isFirstLaunch} = useDisplayOnBoarding();
  console.log(isFirstLaunch, 'isFirstLaunch');

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isFirstLaunch && (
          <Stack.Screen
            name="OnBoarding"
            component={OnBoardingScreen}
            options={{headerShown: false}}
          />
        )}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
