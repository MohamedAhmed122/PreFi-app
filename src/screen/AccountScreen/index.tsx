import {
  AppNavigationParams,
  RootNavigationProp,
} from 'Navigation/AppNavigator/interface';
import {Stacks} from 'Navigation/Stacks';
import React from 'react';
import {Pressable, Text, SafeAreaView} from 'react-native';
// import styles from './styles';
interface AccountProps {
  navigation: RootNavigationProp<AppNavigationParams.AccountStack>;
}
const AccountScreen: React.FC<AccountProps> = ({navigation}) => {
  const handlePress = () => navigation.navigate(Stacks.AppNavigator.Home);

  return (
    <SafeAreaView>
      <Text>Account Screen</Text>
      <Pressable onPress={handlePress}>
        <Text> Home</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default AccountScreen;
