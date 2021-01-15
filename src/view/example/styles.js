import {StyleSheet, Dimensions} from 'react-native';
import {baseColor} from '../../utils/constants';
const {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: baseColor.body,
  },
  headerRightButton: {
    justifyContent: 'center',
    color: baseColor.text,
    flex: 1,
    width: 50,
    alignItems: 'center',
    textAlign: 'center',
  },
  text: {fontWeight: 'bold', textAlign: 'center', color: baseColor.text},
  containerButton: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPlus: {
    width: 50,
    height: 30,
    borderRadius: 10,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  buttonMin: {
    width: 50,
    height: 30,
    borderRadius: 10,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  buttonAllowed: {
    width: 120,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  textButton: {fontSize: 24, fontWeight: 'bold', color: 'white'},
  textButtonAllow: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});
