import {StyleSheet, Dimensions} from 'react-native';
import {fonts, colors} from '../../styles';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: width * 0.14,
    width: width * 0.6,
    backgroundColor: colors.green,
    borderRadius: width * 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  'button-outline': {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.green,
  },
  text: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: fonts.button,
  },
  'text-outline': {
    color: colors.green,
    fontSize: fonts.button,
  },
});

export default styles;
