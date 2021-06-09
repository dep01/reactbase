import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const sys_icons = {
  ic_react: require('../assets/icon/ic_react.png'),
};

export const sys_colors = {
  primary: '#121212',
  secondary: '#1F1F1F',
  icon: {
    active: 'gold',
    unactive: '#d5d5d5',
  },
  text: {
    black: '#121212',
    white: '#f5f5f5',
  },
};

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
});
