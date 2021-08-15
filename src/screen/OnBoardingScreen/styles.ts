// import {width, height} from '../../styles';
import {ScaledSheet} from 'react-native-size-matters';

//NOTE: we are using ScaledSheet instead of styleSheet
const styles = ScaledSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  image: {
    height: '300@s',
    width: '300@s',
  },
});

export default styles;
