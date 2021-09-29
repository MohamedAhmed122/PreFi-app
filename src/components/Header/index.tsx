import React from 'react';
import {DrawerActions} from '@react-navigation/native';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Colors} from 'styles';
import {navigationRef} from 'Navigation/AppDrawer';

interface HeaderProps {}
export const HeaderLeft: React.FC = ({}) => {
  const handlePress = () => navigationRef.dispatch(DrawerActions.openDrawer());
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
