/*!
 * © 2019 Atypon Systems LLC
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

export const themeDark: Theme = {
  name: 'eReader',
  colors: {
    background: theme.colors.background,
    border: theme.colors.border,
    brand: theme.colors.brand,
    button: {
      default: {
        background: {
          active: colors.ereaderGrey1,
          default: colors.ereaderGrey2,
          hover: colors.ereaderGrey1,
        },
        border: {
          active: colors.connectPrimary,
          default: colors.ereaderGrey2,
          hover: colors.connectPrimary,
        },
        color: {
          active: colors.white,
          default: colors.white,
          hover: colors.white,
        },
      },
      error: {
        background: {
          active: colors.ereaderError,
          default: colors.ereaderError,
          hover: 'transparent',
        },
        border: {
          active: colors.ereaderError,
          default: colors.ereaderError,
          hover: colors.ereaderError,
        },
        color: {
          active: colors.ereaderGrey3,
          default: colors.ereaderGrey3,
          hover: colors.ereaderError,
        },
      },
      primary: {
        background: {
          active: colors.connectDark,
          default: colors.connectPrimary,
          hover: colors.connectDark,
        },
        border: {
          active: colors.connectDark,
          default: colors.connectButtons,
          hover: colors.connectDark,
        },
        color: {
          active: colors.white,
          default: colors.white,
          hover: colors.white,
        },
      },
      secondary: {
        background: {
          active: colors.ereaderGrey1,
          default: colors.ereaderGrey2,
          hover: colors.ereaderGrey1,
        },
        border: {
          active: colors.connectPrimary,
          default: colors.ereaderGrey2,
          hover: colors.connectPrimary,
        },
        color: {
          active: colors.connectPrimary,
          default: colors.white,
          hover: colors.connectPrimary,
        },
      },
    },
    text: {
      primary: colors.white,
      secondary: colors.white,
      tertiary: colors.ereaderGrey6,
      muted: colors.ereaderGrey5,
      inactive: colors.ereaderGrey6,
      onDark: colors.white,
      onLight: colors.ereaderGrey4,
      error: colors.alertDanger,
      info: colors.alertInfo,
      success: colors.alertSuccess,
      warning: colors.alertWarning,
    },
  },
  font: theme.font,
  grid: theme.grid,
  shadow: theme.shadow,
}
