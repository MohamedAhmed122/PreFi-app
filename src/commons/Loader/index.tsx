import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Colors} from '@styles/colors';

interface LoaderProps {
  color?: string;
}

const Loader: React.FC<LoaderProps> = ({color = Colors.defaultPrimary}) => {
  return <ActivityIndicator color={color} size={'large'} />;
};

export default Loader;
