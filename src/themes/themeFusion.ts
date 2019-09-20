import * as colors from '../colors'
import { Theme } from '../types'
import { theme } from './themeDefault'

export const themeFusion: Theme = {
  name: 'Fusion',
  colors: {
    background: theme.colors.background,
    border: theme.colors.border,
    brand: {
      default: colors.workspacePrimary,
      dark: colors.workspaceDark,
      medium: colors.workspaceMedium,
      light: colors.workspaceLight,
      xlight: colors.workspaceExtraLight,
      secondary: colors.workspaceSecondary,
    },
    button: {
      default: theme.colors.button.default,
      error: theme.colors.button.default,
      primary: {
        background: {
          active: colors.workspaceDark,
          default: colors.workspacePrimary,
          hover: colors.workspaceDark,
        },
        border: {
          active: colors.workspaceDark,
          default: colors.workspacePrimary,
          hover: colors.workspaceDark,
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
          active: colors.workspaceDark,
          default: colors.workspacePrimary,
          hover: colors.workspaceDark,
        },
        color: {
          active: colors.workspacePrimary,
          default: colors.workspacePrimary,
          hover: colors.workspacePrimary,
        },
      },
    },
    text: theme.colors.text,
  },
  font: theme.font,
  grid: theme.grid,
  shadow: theme.shadow,
}
