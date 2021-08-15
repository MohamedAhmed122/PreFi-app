import React from 'react';
import {Text, View} from 'react-native';
import IconContainer from './src/commons/IconContainer/index';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Colors} from './src/styles';

export default function App() {
  return (
    <View style={{margin: 50}}>
      <Text>Hello, World!</Text>
      <IconContainer color={Colors.greenLight} borderColor={Colors.white}>
        <AntDesign name="stepforward" color={Colors.white} size={20} />
      </IconContainer>

      <IconContainer>
        <AntDesign name="stepforward" color={Colors.gray} size={20} />
      </IconContainer>
    </View>
  );
}
