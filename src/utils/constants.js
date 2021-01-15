import {Appearance} from 'react-native-appearance';

const mode = Appearance.getColorScheme() || 'light';

export const icon = {
  ic_react: require('../assets/icon/ic_react.png'),
};
export const baseColor = {
  body: mode == 'dark' ? '#121212' : '#ffffff',
  header: mode == 'dark' ? '#1F1F1F' : '#f5f5f5',
  text: mode == 'dark' ? 'white' : 'black',
};
