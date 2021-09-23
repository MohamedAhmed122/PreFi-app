import React from 'react';
//TYPES
import {
  AppNavigationParams,
  RootNavigationProp,
} from 'Navigation/AppNavigator/interface';
import {Stacks} from 'Navigation/Stacks';
//COMPONENTS && STYLE
import {Image, View} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import styles from './styles';

interface OnBoardingProps {
  navigation: RootNavigationProp<AppNavigationParams.Onboarding>;
}

const OnBoardingScreen: React.FC<OnBoardingProps> = ({navigation}) => {
  //navigate to HomeScreen
  const handleNextScreen = () => {
    navigation.navigate(Stacks.AppNavigator.Onboarding);
  };
  return (
    <View style={styles.container}>
      <Onboarding
        onSkip={handleNextScreen}
        onDone={handleNextScreen}
        pages={[
          {
            backgroundColor: '#fff',
            image: (
              <Image
                style={styles.image}
                resizeMode="contain"
                source={require('@assets/images/slide1.png')}
              />
            ),
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: '#fff',
            image: (
              <Image
                style={styles.image}
                resizeMode="contain"
                source={require('@assets/images/slide2.png')}
              />
            ),
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: '#fff',
            image: (
              <Image
                style={styles.image}
                resizeMode="contain"
                source={require('@assets/images/slide3.png')}
              />
            ),
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
        ]}
      />
    </View>
  );
};

export default OnBoardingScreen;
