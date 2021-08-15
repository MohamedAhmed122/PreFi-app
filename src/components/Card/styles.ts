// import {width, height} from '../../styles';
import {ScaledSheet} from 'react-native-size-matters';

//NOTE: we are using ScaledSheet instead of styleSheet
const styles = ScaledSheet.create({
  container: {
    width: '100@s', // = scale(100)
    height: '200@vs', // = verticalScale(200)
    padding: '2@msr', // = Math.round(moderateScale(2))
    margin: 5,
  },
});

export default styles;
