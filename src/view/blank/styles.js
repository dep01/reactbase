import {StyleSheet, Dimensions} from 'react-native';
import {baseColor} from '../../utils/constants';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: baseColor.body,
  },
  text: {
    color: baseColor.text,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
