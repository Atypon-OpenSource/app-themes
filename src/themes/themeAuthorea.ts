import * as colors from '../colors'
import { Theme } from '../types'
import { theme } from './themeDefault'

export const themeAuthorea: Theme = {
  name: 'Authorea',
  colors: {
    background: theme.colors.background,
    border: theme.colors.border,
    brand: {
      default: colors.authoreaPrimary,
      dark: colors.authoreaDark,
      medium: colors.authoreaPrimary,
      light: colors.authoreaLight,
      xlight: colors.authoreaLight,
      secondary: colors.authoreaSecondary,
    },
    button: {
      default: theme.colors.button.default,
      error: theme.colors.button.default,
      primary: {
        background: {
          active: colors.authoreaDark,
          default: colors.authoreaPrimary,
          hover: colors.authoreaDark,
        },
        border: {
          active: colors.authoreaDark,
          default: colors.authoreaPrimary,
          hover: colors.authoreaDark,
        },
        color: {
          active: colors.white,
          default: colors.white,
          hover: colors.white,
        },
      },
      secondary: {
        background: {
          active: colors.coolLight,
          default: colors.white,
          hover: colors.coolLight,
        },
        border: {
          active: colors.authoreaDark,
          default: colors.authoreaPrimary,
          hover: colors.authoreaDark,
        },
        color: {
          active: colors.authoreaPrimary,
          default: colors.authoreaPrimary,
          hover: colors.authoreaPrimary,
        },
      },
    },
    text: theme.colors.text,
  },
  font: theme.font,
  grid: theme.grid,
  shadow: theme.shadow,
}
