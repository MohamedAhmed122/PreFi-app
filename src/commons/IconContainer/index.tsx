import React from 'react';
import {View} from 'react-native';
import {Colors} from '@styles/colors';
import {ScaledSheet} from 'react-native-size-matters';

interface IconContainerProps {
  borderColor?: string;
  color?: string;
}

const IconContainer: React.FC<IconContainerProps> = ({
  children,
  borderColor = Colors.gray,
  color = Colors.white,
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          borderColor: borderColor,
          backgroundColor: color,
        },
      ]}>
      {children}
    </View>
  );
};

export default IconContainer;

const styles = ScaledSheet.create({
  container: {
    backgroundColor: Colors.white,
    height: '42@s',
    width: '42@s',
    borderRadius: '21@s',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
