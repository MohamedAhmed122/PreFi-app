import {
  AppNavigationParams,
  RootNavigationProp,
} from 'Navigation/AppNavigator/interface';
import {Stacks} from 'Navigation/Stacks';
import React from 'react';
import {Pressable, Text, View} from 'react-native';
// import styles from './styles';
interface HomeProps {
  navigation: RootNavigationProp<AppNavigationParams.Home>;
}

const HomeScreen: React.FC<HomeProps> = ({navigation}) => {
  const handlePress = () =>
    navigation.navigate(Stacks.AppNavigator.AccountStack, {
      screen: Stacks.AccountStack.Account,
    });
  return (
    <View>
      <Pressable onPress={handlePress}>
        <Text> Go to settings</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;
