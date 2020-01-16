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

export const themeAuthorea: Theme = {
  name: 'Authorea',
  colors: {
    background: {
      primary: colors.white,
      secondary: colors.greyWhite,
      tertiary: colors.coolLight,
      fifth: colors.white,
      dark: colors.greyDark,
      error: colors.alertDangerLight,
      info: colors.alertInfoLight,
      success: colors.alertSuccessLight,
      warning: colors.alertWarningLight,
    },
    border: {
      error: colors.alertDanger,
      info: colors.alertInfo,
      success: colors.alertSuccess,
      warning: colors.alertWarning,
      primary: colors.greyXLight,
      secondary: colors.coolLight,
      tertiary: colors.greyWhite,
      field: {
        active: colors.authoreaPrimary,
        default: colors.greyMedium,
        hover: colors.authoreaPrimary,
      },
    },
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
      icon: theme.colors.button.icon,
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
      social: theme.colors.button.social,
    },
    text: theme.colors.text,
  },
  font: theme.font,
  grid: theme.grid,
  shadow: theme.shadow,
}
