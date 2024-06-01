import {StyleSheet, Dimensions} from 'react-native';
import {FONT_FAMILY_CONSTANT, FONT_SIZE_CONSTANT} from './fonts_constant';
import {
  TEXT_COLORS_CONSTANT,
  BACKGROUND_COLORS_CONSTANT,
} from './colors_constant';

const {width, height} = Dimensions.get('window');

// Base padding size constant
export const PADDING_SIZE_CONSTANT = {
  CONTAINER: 12,
  CARD: 5,
  ZERO: 0,
};

// Text base style constant
export const TEXT_STYLES_CONSTANT = StyleSheet.create({
  HEADER_PRIMARY: {
    fontFamily: FONT_FAMILY_CONSTANT.PRIMARY[800],
    fontSize: FONT_SIZE_CONSTANT.BIG,
    color: TEXT_COLORS_CONSTANT.PRIMARY,
  },
  HEADER_MEDIUM_PRIMARY: {
    fontFamily: FONT_FAMILY_CONSTANT.PRIMARY[800],
    fontSize: FONT_SIZE_CONSTANT.MEDIUM,
    color: TEXT_COLORS_CONSTANT.PRIMARY,
  },
  HEADER_SMALL_PRIMARY: {
    fontFamily: FONT_FAMILY_CONSTANT.PRIMARY[800],
    fontSize: FONT_SIZE_CONSTANT.SMALL,
    color: TEXT_COLORS_CONSTANT.PRIMARY,
  },
  HEADER_SECONDARY: {
    fontFamily: FONT_FAMILY_CONSTANT.PRIMARY[800],
    fontSize: FONT_SIZE_CONSTANT.BIG,
    color: TEXT_COLORS_CONSTANT.SECONDARY,
  },
  HEADER_MEDIUM_SECONDARY: {
    fontFamily: FONT_FAMILY_CONSTANT.PRIMARY[800],
    fontSize: FONT_SIZE_CONSTANT.MEDIUM,
    color: TEXT_COLORS_CONSTANT.SECONDARY,
  },
  HEADER_SMALL_SECONDARY: {
    fontFamily: FONT_FAMILY_CONSTANT.PRIMARY[800],
    fontSize: FONT_SIZE_CONSTANT.SMALL,
    color: TEXT_COLORS_CONSTANT.SECONDARY,
  },
  CONTENT_PRIMARY: {
    fontFamily: FONT_FAMILY_CONSTANT.PRIMARY[400],
    fontSize: FONT_SIZE_CONSTANT.BIG,
    color: TEXT_COLORS_CONSTANT.PRIMARY,
  },
  CONTENT_MEDIUM_PRIMARY: {
    fontFamily: FONT_FAMILY_CONSTANT.PRIMARY[400],
    fontSize: FONT_SIZE_CONSTANT.MEDIUM,
    color: TEXT_COLORS_CONSTANT.PRIMARY,
  },
  CONTENT_SMALL_PRIMARY: {
    fontFamily: FONT_FAMILY_CONSTANT.PRIMARY[400],
    fontSize: FONT_SIZE_CONSTANT.SMALL,
    color: TEXT_COLORS_CONSTANT.PRIMARY,
  },
  CONTENT_SECONDARY: {
    fontFamily: FONT_FAMILY_CONSTANT.PRIMARY[400],
    fontSize: FONT_SIZE_CONSTANT.BIG,
    color: TEXT_COLORS_CONSTANT.SECONDARY,
  },
  CONTENT_MEDIUM_SECONDARY: {
    fontFamily: FONT_FAMILY_CONSTANT.PRIMARY[400],
    fontSize: FONT_SIZE_CONSTANT.MEDIUM,
    color: TEXT_COLORS_CONSTANT.SECONDARY,
  },
  CONTENT_SMALL_SECONDARY: {
    fontFamily: FONT_FAMILY_CONSTANT.PRIMARY[400],
    fontSize: FONT_SIZE_CONSTANT.SMALL,
    color: TEXT_COLORS_CONSTANT.SECONDARY,
  },
});

// Base style constant
export const BASE_STYLES_CONSTANT = StyleSheet.create({
  SCAFFOLD: {
    width: width,
    height: height,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: BACKGROUND_COLORS_CONSTANT.PRIMARY,
  },
  SCAFFOLD_CENTER: {
    width: width,
    height: height,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: BACKGROUND_COLORS_CONSTANT.PRIMARY,
  },
  CONTAINER: {
    flex: 1,
    width: width,
    backgroundColor: BACKGROUND_COLORS_CONSTANT.PRIMARY,
    padding: PADDING_SIZE_CONSTANT.CONTAINER,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  CONTAINER_CENTER: {
    flex: 1,
    width: width,
    backgroundColor: BACKGROUND_COLORS_CONSTANT.PRIMARY,
    padding: PADDING_SIZE_CONSTANT.CONTAINER,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  CONTAINER_CENTER_SCREEN: {
    flex: 1,
    width: width,
    backgroundColor: BACKGROUND_COLORS_CONSTANT.PRIMARY,
    padding: PADDING_SIZE_CONSTANT.CONTAINER,
    alignItems: 'center',
    justifyContent: 'center',
  },
  SCROLL_CONTAINER: {
    padding: PADDING_SIZE_CONSTANT.CONTAINER,
    width: width,
    marginBottom: height * 0.08,
    backgroundColor: BACKGROUND_COLORS_CONSTANT.PRIMARY,
  },
});
