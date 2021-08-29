import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
// assets default icons must be here, just add your another icon
export const sys_icons = {
  ic_react: require('../assets/icon/ic_react.png'),
};
// default of apps color here, you can change it with another
export const sys_colors = {
  primary: '#E8F4EA',
  secondary: '#07A8ED',
  icon: {
    active: 'gold',
    unactive: '#d5d5d5',
  },
  text: {
    secondary: '#f5f5f5',
    primary: '#121212',
    label: '#CC6633',
    black: '#000',
    white: '#fff',
  },
  button: {
    primary: '#07A8ED',
    secondary: '#f5f5f5',
  },
  line: {
    primary: '#d5d5d5',
    secondary: '#121212',
  },
  textInput: '#fff',
};
// default fonts, you can change it with another
export const sys_font = {
  primary: {
    200: 'Nunito-ExtraLight',
    300: 'Nunito-Light',
    400: 'Nunito-Regular',
    600: 'Nunito-SemiBold',
    700: 'Nunito-Bold',
    800: 'Nunito-ExtraBold',
    900: 'Nunito-Black',
    normal: 'Nunito-Regular',
  },
};
// default text style, improve it include your project
export const sys_text_styles = StyleSheet.create({
  header_black: {
    fontFamily: sys_font.primary[800],
    fontSize: 16,
    color: sys_colors.text.black,
  },
  header_medium_black: {
    fontFamily: sys_font.primary[800],
    fontSize: 14,
    color: sys_colors.text.black,
  },
  header_small_black: {
    fontFamily: sys_font.primary[800],
    fontSize: 12,
    color: sys_colors.text.black,
  },
  header_white: {
    fontFamily: sys_font.primary[800],
    fontSize: 16,
    color: sys_colors.text.white,
  },
  header_medium_white: {
    fontFamily: sys_font.primary[800],
    fontSize: 14,
    color: sys_colors.text.white,
  },
  header_small_white: {
    fontFamily: sys_font.primary[800],
    fontSize: 12,
    color: sys_colors.text.white,
  },
  content_black: {
    fontFamily: sys_font.primary[400],
    fontSize: 16,
    color: sys_colors.text.black,
  },
  content_medium_black: {
    fontFamily: sys_font.primary[400],
    fontSize: 14,
    color: sys_colors.text.black,
  },
  content_small_black: {
    fontFamily: sys_font.primary[400],
    fontSize: 12,
    color: sys_colors.text.black,
  },
  content_white: {
    fontFamily: sys_font.primary[400],
    fontSize: 16,
    color: sys_colors.text.white,
  },
  content_medium_white: {
    fontFamily: sys_font.primary[400],
    fontSize: 14,
    color: sys_colors.text.white,
  },
  content_small_white: {
    fontFamily: sys_font.primary[400],
    fontSize: 12,
    color: sys_colors.text.white,
  },
});
// default global style
export const sys_styles = StyleSheet.create({
  scaffold: {
    width: width,
    height: height,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
  },
  scaffold_center: {
    width: width,
    height: height,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
    width: width,
    backgroundColor: sys_colors.primary,
    padding: 12,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  container_center: {
    flex: 1,
    width: width,
    backgroundColor: sys_colors.primary,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  container_center_screen: {
    flex: 1,
    width: width,
    backgroundColor: sys_colors.primary,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scroll_container: {
    padding: 12,
    width: width,
    marginBottom: height * 0.08,
  },
});
