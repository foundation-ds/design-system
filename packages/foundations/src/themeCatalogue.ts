import { DefaultTheme } from "@schibsted-ds/tokens/dist/styles";

// Default themes imports
import bilbasen from "@schibsted-ds/tokens/dist/web/bilbasen/json/config.json";
import dba from "@schibsted-ds/tokens/dist/web/dba/json/config.json";

// 🌜 Dark themes imports
import bilbasenDark from "@schibsted-ds/tokens/dist/web/bilbasen/json/config.dark.json";
import dbaDark from "@schibsted-ds/tokens/dist/web/dba/json/config.dark.json";

// Default themes decleration
export const bilbasenTheme: DefaultTheme = bilbasen;
export const dbaTheme: DefaultTheme = dba;

// 🌜 Dark themes decleration
export const bilbasenDarkTheme: DefaultTheme = bilbasenDark;
export const dbaDarkTheme: DefaultTheme = dbaDark;

export const themes = [
  bilbasenTheme,
  bilbasenDarkTheme,
  dbaTheme,
  dbaDarkTheme,
];
