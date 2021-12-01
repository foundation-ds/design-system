import { ThemeProvider } from "styled-components";
import {
  bilbasenTheme,
  bilbasenDarkTheme,
  dbaTheme,
  dbaDarkTheme,
  schibstedTheme,
} from "@foundation-ds/utilities";
import { GlobalFonts } from "@foundation-ds/utilities";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ["utilities", "Elements", "Patterns", "Collections", "*"],
    },
  },
  backgrounds: {
    grid: {
      disable: true,
    },
  },
};

export const globalTypes = {
  brand: {
    name: "Brand",
    description: "Brand",
    defaultValue: "Bilbasen",
    toolbar: {
      icon: "globe",
      // Array of plain string values or MenuItem shape (see below)
      items: ["Bilbasen", "DBA", "Schibsted"],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "Light",
    toolbar: {
      icon: "paintbrush",
      // Array of plain string values or MenuItem shape (see below)
      items: ["Light", "Dark"],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
};

const globalThemes = {
  BilbasenTheme: bilbasenTheme,
  BilbasenDarkTheme: bilbasenDarkTheme,
  DBATheme: dbaTheme,
  DBADarkTheme: dbaDarkTheme,
  SchibstedTheme: schibstedTheme,
};

const withThemeProvider = (Story, context) => {
  const theme = `${context.globals.brand}${
    context.globals.theme === "Light" ? "" : context.globals.theme
  }Theme`;

  return (
    <ThemeProvider theme={globalThemes[theme]}>
      <GlobalFonts />
      <Story {...context} />
    </ThemeProvider>
  );
};

export const decorators = [withThemeProvider];
