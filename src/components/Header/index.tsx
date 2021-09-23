import {useNavigation} from '@react-navigation/native';
import {
  DrawerParams,
  UserDrawerNavigationProp,
} from 'Navigation/DrawerNavigator/interface';
import {Stacks} from 'Navigation/Stacks';
import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from 'styles';

interface HeaderProps {
  navigation: UserDrawerNavigationProp<DrawerParams.AppNavigator>;
}
export const HeaderLeft: React.FC = ({}) => {
  const {navigation} = useNavigation<HeaderProps>();
  const handlePress = () => navigation.openDrawer();
  return (
    <TouchableOpacity onPress={handlePress}>
      <MaterialCommunityIcons
        name="microsoft-xbox-controller-menu"
        color={Colors.black}
        size={32}
      />
    </TouchableOpacity>
  );
};

export function HeaderTitle() {
  return (
    <View>
      <Text style={styles.pre}>
        Per<Text style={styles.fi}>Fi</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pre: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  fi: {
    color: Colors.green,
  },
});
