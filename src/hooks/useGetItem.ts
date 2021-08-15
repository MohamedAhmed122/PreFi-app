/* eslint-disable no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';

export default function UseGetItem(key: string) {
  const [item, setItem] = useState<string>();
  const [error, setError] = useState();

  const getItem = async (): Promise<any> => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value;
    } catch (err) {
      return err;
    }
  };

  useEffect(() => {
    getItem()
      .then((item: string) => setItem(item))
      .catch(err => setError(err));
  }, []);

  return {item, error};
}
