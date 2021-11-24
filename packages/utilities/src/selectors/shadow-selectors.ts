import { DefaultTheme as Theme } from '../../../tokens/dist/styles'

//! DO NOT IMPORT FROM THIS FILE - USE './theme-selectors.ts' INSTEAD

export const getShadow = (theme: Theme) => {
    return theme?.shadow?.one
}