import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  // DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {View} from 'react-native';

import styles from './style';
import {HeaderTitle} from 'components/Header';
import {Stacks} from 'Navigation/Stacks';
import {Colors} from 'styles';
interface CustomDrawerContentProps {
  props: DrawerContentComponentProps;
}
export const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        <HeaderTitle />
      </View>

      <DrawerItem
        // inactiveBackgroundColor={Colors.gray}
        activeBackgroundColor={Colors.green}
        label="Home"
        icon={({color, size}) => {
          return (
            <MaterialCommunityIcon name="close-box" color={color} size={size} />
          );
        }}
        onPress={() =>
          props.navigation.navigate(Stacks.AppNavigator.Categories)
        }
      />
    </DrawerContentScrollView>
  );
};
