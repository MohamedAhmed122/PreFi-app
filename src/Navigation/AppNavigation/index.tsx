import React, {useState, useEffect} from 'react';
//Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//STORAGE
import UseGetItem from '../../hooks/useGetItem';
import {setItem, removeItem} from '../../utils/storage';
//TYPES
import {AppStackParamList} from '../../types/navigation';
//SCREENS
import HomeScreen from '../../screen/HomeScreen';
import OnBoardingScreen from '../../screen/OnBoardingScreen/index';

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppNavigator = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean>(true);
  let {item: alreadyLunched} = UseGetItem('isAlreadyLunched');
  console.log(alreadyLunched);

  // check if this the first time that user Launch the App if so Display OnBoardingScreen
  useEffect(() => {
    if (alreadyLunched === null || alreadyLunched === undefined) {
      setIsFirstLaunch(true);
      setItem('isAlreadyLunched', 'Yes user has Launched!!');
    } else {
      setIsFirstLaunch(false);
    }
  }, [alreadyLunched, isFirstLaunch]);

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
