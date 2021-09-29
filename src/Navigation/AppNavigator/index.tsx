import React from 'react';
//Navigation
// import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//HOOKS
import {useDisplayOnBoarding} from '@hooks/useDisplayOnBoarding';
//TYPES
import {AppNavigationParams, AppNavigationStackParamList} from './interface';
//SCREENS
import AccountStack from '../AccountStack';
import HomeScreen from '@screen/HomeScreen';
import OnBoardingScreen from '@screen/OnBoardingScreen/index';
//RENDER
import {HeaderLeft, HeaderTitle} from 'components/Header';
import CategoryScreen from 'screen/CategoriesScreen';
import TrendsScreen from 'screen/TrendsScreen';
import FavoriteScreen from 'screen/FavoriteScreen';
import SettingsStack from 'Navigation/SettingsStack';

const Stack = createNativeStackNavigator<AppNavigationStackParamList>();

const AppNavigator = () => {
  let {isFirstLaunch} = useDisplayOnBoarding();
  console.log(isFirstLaunch, 'isFirstLaunch');

  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => <HeaderLeft />,
        headerTitle: () => <HeaderTitle />,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      {isFirstLaunch && (
        <Stack.Screen
          name={AppNavigationParams.Onboarding}
          component={OnBoardingScreen}
          options={{headerShown: false}}
        />
      )}
      <Stack.Screen name={AppNavigationParams.Home} component={HomeScreen} />
      <Stack.Screen
        name={AppNavigationParams.AccountStack}
        component={AccountStack}
      />
      <Stack.Screen
        name={AppNavigationParams.Categories}
        component={CategoryScreen}
      />
      <Stack.Screen
        name={AppNavigationParams.Trends}
        component={TrendsScreen}
      />
      <Stack.Screen
        name={AppNavigationParams.Favorite}
        component={FavoriteScreen}
      />
      <Stack.Screen
        name={AppNavigationParams.SettingsStack}
        component={SettingsStack}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
