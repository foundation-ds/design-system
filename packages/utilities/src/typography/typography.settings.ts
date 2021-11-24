// ==========================================================================
// Typography
// ==========================================================================

import { createGlobalStyle } from "styled-components";
import { ThemeSelectors } from "../selectors/theme-selectors";
import { calculateRem } from "../utils/utils.converters";
import { DefaultTheme } from "@foundation-ds/tokens";

export const GlobalFonts = createGlobalStyle`
  @font-face {
      font-family: ${({ theme }) => ThemeSelectors.getFontRegular(theme)};
      src: url(${({ theme }) =>
        ThemeSelectors.getFontSrc(theme)} + '.svg') format('svg'),
          url(${({ theme }) =>
            ThemeSelectors.getFontSrc(theme)} + '.ttf') format('truetype'),
          url(${({ theme }) =>
            ThemeSelectors.getFontSrc(theme)} + '.woff') format('woff');
      font-weight: normal;
      font-style: normal;
    }

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

export const typography = (
  theme: DefaultTheme,
  dec: "default" | "small" = "default"
) => {
  const minFontSize = ThemeSelectors.getMinFontSize(theme, dec);
  const maxFontSize = ThemeSelectors.getMaxFontSize(theme, dec);

  if (minFontSize !== maxFontSize) {
    return fluidType(theme, minFontSize, maxFontSize);
  } else {
    return `font-size: ${calculateRem(parseInt(minFontSize))};`;
  }
};
