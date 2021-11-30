// ==========================================================================
// Typography
// ==========================================================================

import { createGlobalStyle } from "styled-components";
import { ThemeSelectors } from "../selectors/theme-selectors";
import { calculateRem } from "../utils/utils.converters";
import { DefaultTheme } from "@foundation-ds/tokens";

export const GlobalFonts = createGlobalStyle`
    body {
      font-family: ${({ theme }) => ThemeSelectors.getFontRegular(theme)};
    }
`;

/// RESPONSIVE TYPE

export const fluidType = (
  theme: DefaultTheme,
  minFontSize: string,
  maxFontSize: string
) => {
  const minScreenSize = ThemeSelectors.getMinWidth(theme);
  const maxScreenSize = ThemeSelectors.getMaxWidth(theme);

  return `
    font-size: ${calculateRem(parseInt(minFontSize))};

    @media screen and (min-width: ${calculateRem(parseInt(minScreenSize))}) {
      font-size: calc(${minFontSize} + (${
    parseInt(maxFontSize) - parseInt(minFontSize)
  }) * (100vw - ${minScreenSize})/(${
    parseInt(maxScreenSize) - parseInt(minScreenSize)
  }));
    }
    @media screen and (min-width: ${calculateRem(parseInt(maxScreenSize))}) {
      font-size: ${calculateRem(parseInt(maxFontSize))};
    }
  `;
};

export const typography = (theme: DefaultTheme, dec: string = "default") => {
  const minFontSize = ThemeSelectors.getMinFontSize(theme, dec);
  const maxFontSize = ThemeSelectors.getMaxFontSize(theme, dec);

  if (minFontSize !== maxFontSize) {
    return fluidType(theme, minFontSize, maxFontSize);
  } else {
    return `font-size: ${calculateRem(parseInt(minFontSize))};`;
  }
};
