/*!
 * © 2020 Atypon Systems LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as colors from '../colors'
import { Theme } from '../types'
import { theme } from './themeDefault'

export const themeSubmissionDesk: Theme = {
  name: 'Submission Desk',
  colors: {
    background: {
      primary: colors.white,
      secondary: colors.coolXLight,
      tertiary: colors.coolLight,
      fifth: colors.greyWhite,
      dark: colors.greyDark,
      error: colors.alertDangerLight,
      info: colors.alertInfoLight,
      success: colors.alertSuccessLight,
      warning: colors.alertWarningLight,
    },
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
      icon: theme.colors.button.icon,
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
      social: theme.colors.button.social,
    },
    text: theme.colors.text,
  },
  font: theme.font,
  grid: theme.grid,
  shadow: theme.shadow,
}
