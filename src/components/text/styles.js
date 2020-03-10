import {StyleSheet} from 'react-native';
import {fonts, colors} from '../../styles';

const styles = StyleSheet.create({
  text: {
    fontSize: fonts.text,
    color: colors.darkGray,
    textAlign: 'justify',
  },

  'text-title': {
    fontWeight: 'bold',
    fontSize: fonts.title,
    color: colors.black,
  },

  'text-label': {
    fontSize: fonts.label,
    color: colors.black,
    fontWeight: 'bold',
  },
});

export default styles;
