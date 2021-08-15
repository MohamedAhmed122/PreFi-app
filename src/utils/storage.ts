import AsyncStorage from '@react-native-async-storage/async-storage';
import {item as itemType} from '../types/storageItems';

const setItem = async (key: string, item: itemType): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, item);
  } catch (error) {
    console.log(error);
  }
};

const removeItem = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
};

export {setItem, removeItem};
