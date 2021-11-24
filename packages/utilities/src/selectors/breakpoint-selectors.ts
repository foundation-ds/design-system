import { DefaultTheme as Theme } from "../../../tokens/dist/styles";

//! DO NOT IMPORT FROM THIS FILE - USE './theme-selectors.ts' INSTEAD

export const getMinWidth = (theme: Theme) => {
  return theme.breakpoint.minWidth;
};

export const getMaxWidth = (theme: Theme) => {
  return theme.breakpoint.maxWidth;
};
