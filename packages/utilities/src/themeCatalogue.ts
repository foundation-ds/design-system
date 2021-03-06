import { DefaultTheme } from "@foundation-ds/tokens/dist/styles";

// Default themes imports
import bilbasen from "@foundation-ds/tokens/dist/web/bilbasen/json/config.json";
import dba from "@foundation-ds/tokens/dist/web/dba/json/config.json";
import schibsted from "@foundation-ds/tokens/dist/web/schibsted/json/config.json";

// 🌜 Dark themes imports
import bilbasenDark from "@foundation-ds/tokens/dist/web/bilbasen/json/config.dark.json";
import dbaDark from "@foundation-ds/tokens/dist/web/dba/json/config.dark.json";

// Default themes decleration
export const bilbasenTheme: DefaultTheme = bilbasen;
export const dbaTheme: DefaultTheme = dba;
export const schibstedTheme: DefaultTheme = schibsted;

// 🌜 Dark themes decleration
export const bilbasenDarkTheme: DefaultTheme = bilbasenDark;
export const dbaDarkTheme: DefaultTheme = dbaDark;
