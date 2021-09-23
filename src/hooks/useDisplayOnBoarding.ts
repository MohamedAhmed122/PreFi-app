import {useState, useEffect} from 'react';
import useGetItem from './useGetItem';
import {setItem, removeItem} from '@utils/storage';

export const useDisplayOnBoarding = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean>(false);
  let {item: alreadyLunched} = useGetItem('isAlreadyLunched');
  console.log(alreadyLunched, 'alreadyLunched');

  // check if this the first time that user Launch the App if so Display OnBoardingScreen
  useEffect(() => {
    if (alreadyLunched === null || alreadyLunched === undefined) {
      setIsFirstLaunch(true);
      setItem('isAlreadyLunched', 'Yes user has Launched!!');
    } else {
      setIsFirstLaunch(false);
    }
    // removeItem('isAlreadyLunched');
  }, [alreadyLunched, isFirstLaunch]);

  return {isFirstLaunch};
};
