import {StyleSheet} from 'react-native';
import {sys_colors} from '../../../utils/constants';

export default StyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  container: {
    padding: 35,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  textLoading: {
    color: sys_colors.text.primary,
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
});
