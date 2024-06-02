import {StyleSheet, Dimensions} from 'react-native';
import {fontFamilyConstant, fontSizeConstant} from './fonts_constant';
import {textColorsConstant, backgroundColorsConstant} from './colors_constant';

const {width, height} = Dimensions.get('window');

// Base padding size constant
export const paddingSizeConstant = {
  container: 12,
  card: 5,
  zero: 0,
};

// Text base style constant
export const textStyleConstant = StyleSheet.create({
  // header primary with text color primary
  headerPrimary: {
    fontFamily: fontFamilyConstant.primary[800],
    fontSize: fontSizeConstant.big,
    color: textColorsConstant.primary,
  },

  // header medium with text color primary
  headerMediumPrimary: {
    fontFamily: fontFamilyConstant.primary[800],
    fontSize: fontSizeConstant.medium,
    color: textColorsConstant.primary,
  },

  // header small with text color primary
  headerSmallPrimary: {
    fontFamily: fontFamilyConstant.primary[800],
    fontSize: fontSizeConstant.small,
    color: textColorsConstant.primary,
  },

  // header primary with text color secondary
  headerSecondary: {
    fontFamily: fontFamilyConstant.primary[800],
    fontSize: fontSizeConstant.big,
    color: textColorsConstant.secondary,
  },

  // header medium with text color secondary
  headerMediumSecondary: {
    fontFamily: fontFamilyConstant.primary[800],
    fontSize: fontSizeConstant.medium,
    color: textColorsConstant.secondary,
  },

  // header small with text color secondary
  headerSmallSecondary: {
    fontFamily: fontFamilyConstant.primary[800],
    fontSize: fontSizeConstant.small,
    color: textColorsConstant.secondary,
  },

  // content primary with text color primary
  contentPrimary: {
    fontFamily: fontFamilyConstant.primary[400],
    fontSize: fontSizeConstant.big,
    color: textColorsConstant.primary,
  },

  // content medium with text color primary
  contentMediumPrimary: {
    fontFamily: fontFamilyConstant.primary[400],
    fontSize: fontSizeConstant.medium,
    color: textColorsConstant.primary,
  },

  // content small with text color primary
  contentSmallPrimary: {
    fontFamily: fontFamilyConstant.primary[400],
    fontSize: fontSizeConstant.small,
    color: textColorsConstant.primary,
  },

  // content primary with text color secondary
  contentSecondary: {
    fontFamily: fontFamilyConstant.primary[400],
    fontSize: fontSizeConstant.big,
    color: textColorsConstant.secondary,
  },

  // content medium with text color secondary
  contentMediumSecondary: {
    fontFamily: fontFamilyConstant.primary[400],
    fontSize: fontSizeConstant.medium,
    color: textColorsConstant.secondary,
  },

  // content small with text color secondary
  contentSmallSecondary: {
    fontFamily: fontFamilyConstant.primary[400],
    fontSize: fontSizeConstant.small,
    color: textColorsConstant.secondary,
  },
});

// Base style constant
export const baseStyleConstant = StyleSheet.create({
  // wrapper view
  scaffold: {
    width: width,
    height: height,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: backgroundColorsConstant.primary,
  },

  // wrapper view
  scaffoldCenter: {
    width: width,
    height: height,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: backgroundColorsConstant.primary,
  },

  // container start child
  container: {
    flex: 1,
    width: width,
    backgroundColor: backgroundColorsConstant.primary,
    padding: paddingSizeConstant.container,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  // container center child
  containerCenter: {
    flex: 1,
    width: width,
    backgroundColor: backgroundColorsConstant.primary,
    padding: paddingSizeConstant.container,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  // container center screen child
  containerCenterScreen: {
    flex: 1,
    width: width,
    backgroundColor: backgroundColorsConstant.primary,
    padding: paddingSizeConstant.container,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // for handling scroll container with bottom tab navigator
  scrollContainer: {
    padding: paddingSizeConstant.container,
    width: width,
    marginBottom: height * 0.08,
    backgroundColor: backgroundColorsConstant.primary,
  },
});
