import * as colors from '../colors'
import { Theme } from '../types'
import { theme } from './themeDefault'

export const themeScitrus: Theme = {
  name: 'Scitrus',
  colors: {
    background: theme.colors.background,
    border: theme.colors.border,
    brand: {
      default: colors.scitrusPrimary,
      dark: colors.scitrusDark,
      medium: colors.scitrusPrimary,
      light: colors.scitrusLight,
      xlight: colors.scitrusLight,
      secondary: colors.scitrusSecondary,
    },
    button: {
      default: theme.colors.button.default,
      error: theme.colors.button.default,
      primary: {
        background: {
          active: colors.scitrusDark,
          default: colors.scitrusPrimary,
          hover: colors.scitrusDark,
        },
        border: {
          active: colors.scitrusDark,
          default: colors.scitrusPrimary,
          hover: colors.scitrusDark,
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
          active: colors.scitrusDark,
          default: colors.scitrusPrimary,
          hover: colors.scitrusDark,
        },
        color: {
          active: colors.scitrusPrimary,
          default: colors.scitrusPrimary,
          hover: colors.scitrusPrimary,
        },
      },
    },
    text: theme.colors.text,
  },
  font: theme.font,
  grid: theme.grid,
  shadow: theme.shadow,
}
