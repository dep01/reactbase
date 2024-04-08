import {StyleSheet, Dimensions} from 'react-native';
import {heightPercentageToDP} from './responsive';

const {width, height} = Dimensions.get('window');
// assets default icons must be here, just add your another icon


export const SESSION = {
  ACCESS_TOKEN: 'ACCESS_TOKEN',
  REFRESH_TOKEN: 'REFRESH_TOKEN',
};


export const sys_icons = {
  ic_loading: require('../assets/images/ic_loading.png'),
};
// default of apps color here, you can change it with another
export const sys_colors = {
  primary: '#E8F4EA',
  secondary: '#0C5E9C',
  icon: {
    active: '#0FB7E4',
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
    primary: '#0C5E9C',
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
export const sys_text_styles = {
  ...StyleSheet.create({
    header_black: {
      fontFamily: sys_font.primary[800],
      fontSize: 16,
      fontWeight:'700',
      color: sys_colors.text.black,
    },
    header_medium_black: {
      fontFamily: sys_font.primary[800],
      fontWeight:'700',
      fontSize: 14,
      color: sys_colors.text.black,
    },
    header_small_black: {
      fontFamily: sys_font.primary[800],
      fontWeight:'700',
      fontSize: 12,
      color: sys_colors.text.black,
    },
    header_white: {
      fontFamily: sys_font.primary[800],
      fontWeight:'700',
      fontSize: 16,
      color: sys_colors.text.white,
    },
    header_medium_white: {
      fontFamily: sys_font.primary[800],
      fontWeight:'700',
      fontSize: 14,
      color: sys_colors.text.white,
    },
    header_small_white: {
      fontFamily: sys_font.primary[800],
      fontWeight:'700',
      fontSize: 12,
      color: sys_colors.text.white,
    },
    content_black: {
      fontFamily: sys_font.primary[400],
      fontWeight:'400',
      fontSize: 16,
      color: sys_colors.text.black,
    },
    content_medium_black: {
      fontFamily: sys_font.primary[400],
      fontWeight:'400',
      fontSize: 14,
      color: sys_colors.text.black,
    },
    content_small_black: {
      fontFamily: sys_font.primary[400],
      fontWeight:'400',
      fontSize: 12,
      color: sys_colors.text.black,
    },
    content_white: {
      fontFamily: sys_font.primary[400],
      fontWeight:'400',
      fontSize: 16,
      color: sys_colors.text.white,
    },
    content_medium_white: {
      fontFamily: sys_font.primary[400],
      fontWeight:'400',
      fontSize: 14,
      color: sys_colors.text.white,
    },
    content_small_white: {
      fontFamily: sys_font.primary[400],
      fontWeight:'400',
      fontSize: 12,
      color: sys_colors.text.white,
    },
  }),
};
// default global style
export const sys_styles = {
  ...StyleSheet.create({
    scaffold: {
      width: width,
      height: height,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      backgroundColor: sys_colors.primary,
    },
    scaffold_center: {
      width: width,
      height: height,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: sys_colors.primary,
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
      backgroundColor: sys_colors.primary,
    },
  }),
};
