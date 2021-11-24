import { DefaultTheme } from "../../../tokens/dist/styles";

//! DO NOT IMPORT FROM THIS FILE - USE './theme-selectors.ts' INSTEAD

export const getFontSrc = (theme: DefaultTheme) => {
  return theme.typography.fontSrc;
};

export const getDefaultStack = (theme: DefaultTheme) => {
  return theme.typography.defaultStack;
};

export const getFontRegular = (theme: DefaultTheme) => {
  return theme.typography.regular.fontName;
};

export const getFontMedium = (theme: DefaultTheme) => {
  return theme.typography.medium.fontName;
};

export const getMinFontSize = (
  theme: DefaultTheme,
  typeDeclaration: "default" | "small"
) => {
  return theme.typography.typeScale[typeDeclaration].fontSize.min;
};

export const getMaxFontSize = (
  theme: DefaultTheme,
  typeDeclaration: "default" | "small"
) => {
  return theme.typography.typeScale[typeDeclaration].fontSize.max;
};

export const getMinLineHeight = (
  theme: DefaultTheme,
  typeDeclaration: "default" | "small"
) => {
  return theme.typography.typeScale[typeDeclaration].lineHeight.min;
};

export const getMaxLineHeight = (
  theme: DefaultTheme,
  typeDeclaration: "default" | "small"
) => {
  return theme.typography.typeScale[typeDeclaration].lineHeight.max;
};

export const getFontWeight = (
  theme: DefaultTheme,
  typeDeclaration: "default" | "small"
) => {
  return theme.typography.typeScale[typeDeclaration].fontWeight;
};
