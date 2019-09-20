import * as colors from '../colors'
import { Theme } from '../types'
import { theme } from './themeDefault'

export const themeSubmissionDesk: Theme = {
  name: 'Submission Desk',
  colors: {
    background: theme.colors.background,
    border: theme.colors.border,
    brand: {
      default: colors.submissionPrimary,
      dark: colors.submissionDark,
      medium: colors.submissionPrimary,
      light: colors.submissionLight,
      xlight: colors.submissionLight,
      secondary: colors.submissionSecondary,
    },
    button: {
      default: theme.colors.button.default,
      error: theme.colors.button.default,
      primary: {
        background: {
          active: colors.submissionDark,
          default: colors.submissionPrimary,
          hover: colors.submissionDark,
        },
        border: {
          active: colors.submissionDark,
          default: colors.submissionPrimary,
          hover: colors.submissionDark,
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
          active: colors.submissionDark,
          default: colors.submissionPrimary,
          hover: colors.submissionDark,
        },
        color: {
          active: colors.submissionPrimary,
          default: colors.submissionPrimary,
          hover: colors.submissionPrimary,
        },
      },
    },
    text: theme.colors.text,
  },
  font: theme.font,
  grid: theme.grid,
  shadow: theme.shadow,
}
