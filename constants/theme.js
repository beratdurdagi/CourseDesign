import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");
const TEXT_SIZE = 16;
export const SIZES = {
  //common sizes
  base: 8,
  text: TEXT_SIZE,
  padding: 24,

  //text sizes

  h1: 27,
  h2: 24,
  h3: 21,
  h4: 16,
  p: 14,
  small: TEXT_SIZE + -2,

  //button sizes
  buttonHeight: 48,
  buttonRadius: 8,
  buttonBorder: 1,

  //Input sizes

  inputHeight: 48,
  inputRadius: 8,
  inputBorder: StyleSheet.hairlineWidth,
};

export const SPACING = {
  xs: SIZES.base / 2, //4
  s: SIZES.base, // 8
  sm: SIZES.base * 1.5, //12
  m: SIZES.base * 2, //16
  md: SIZES.base * 2.5, //20
  l: SIZES.base * 3, //24
  xl: SIZES.base * 3.5, //28
  xxl: SIZES.base * 4, //32
};

export const LINE_HEIGHTS = {
  h1: Math.round(SIZES.h1 * 1.3),
  h2: Math.round(SIZES.h2 * 1.3),
  h3: Math.round(SIZES.h3 * 1.3),
  h4: Math.round(SIZES.h4 * 1.3),
  p: Math.round(SIZES.p * 1.3),
  text: Math.round(SIZES.text * 1.3),
  small: Math.round(SIZES.small * 1.3),
};

export const LETTER_SPACİNG = {
  h1: -(SIZES.h1 * 0.03),
  h2: -(SIZES.h2 * 0.03),
  h3: -(SIZES.h3 * 0.03),
  h4: -(SIZES.h4 * 0.03),
  p: 0,
  text: 0,
  small: 0,
};

export const COLORS = {
  notWhite: "#EDF0F2",
  nearlyWhite: "#FEFEFE",
  white: "#FFFFFF",
  nearlyBlack: "#213333",
  grey: "#3A5160",
  dark_grey: "#313A44",
  darkText: "#253840",
  darkerText: "#17262A",
  lightText: "#4A6572",
  deactivatedText: "#767676",
  dismissibleBackground: "#364A54",
  chipBackground: "#EEF1F3",
  pacer: "#F2F2F2",

  primary: "#007bff",
  secondary: "#6c757d",
  success: "#28a745",
  danger: "#dc3545",
  warning: ">#ffc107",
  info: "#17a2b8",
  dark: "#343a40",

  buttonColor: "rgba(0,0,0,0.5)",

  inputColor: "rgba(0,0,0,0.3)",

  black: "#000",
  white: "#FFFFFF",
};

export const FONTS = {
  largeTitle: {
    fontFamily: "Roboto-regular",
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
  },
  h1: {
    fontFamily: "WorkSans-SemiBold",
    fontWeight:'700',
    fontSize: SIZES.h1,
    lineHeight: LINE_HEIGHTS.h1,
    letterSpacing: LETTER_SPACİNG.h1,
    color:COLORS.darkText
  },
  h2: {
    fontWeight:'600',
    fontSize: SIZES.h2,
    lineHeight: LINE_HEIGHTS.h2,
    letterSpacing: 0.0018,
  },
  h3: {
    fontFamily: "Roboto-Bold",
    fontSize: SIZES.h3,
    lineHeight: LINE_HEIGHTS.h3,
    letterSpacing: LETTER_SPACİNG.h3,
  },
  h4: {
    fontFamily: "Roboto-Bold",
    fontSize: SIZES.h4,
    lineHeight: LINE_HEIGHTS.h4,
    letterSpacing: LETTER_SPACİNG.h4,
  },
  p: {
    fontFamily: "Roboto-Bold",
    fontSize: SIZES.p,
    lineHeight: LINE_HEIGHTS.p,
    letterSpacing: LETTER_SPACİNG.p,
  },
  body1: {
    fontFamily: "Roboto-Regular",
    fontSize: SIZES.h1,
    lineHeight: LINE_HEIGHTS.h1,
    letterSpacing: LETTER_SPACİNG.h1,
  },
  body2: {
    fontFamily: "Roboto-Regular",
    fontSize: SIZES.h2,
    lineHeight: LINE_HEIGHTS.h2,
    letterSpacing: LETTER_SPACİNG.h2,
  },
  body3: {
    fontFamily: "Roboto-Regular",
    fontSize: SIZES.h3,
    lineHeight: LINE_HEIGHTS.h3,
    letterSpacing: LETTER_SPACİNG.h3,
  },
  body4: {
    fontFamily: "Roboto-Regular",
    fontSize: SIZES.h4,
    lineHeight: LINE_HEIGHTS.h4,
    letterSpacing: LETTER_SPACİNG.h4,
  },
  body5: {
    fontFamily: "Roboto-Regular",
    fontSize: SIZES.p,
    lineHeight: LINE_HEIGHTS.p,
    letterSpacing: LETTER_SPACİNG.p,
  },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
