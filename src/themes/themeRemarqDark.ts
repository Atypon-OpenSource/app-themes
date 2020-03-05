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
import { themeRemarq as theme } from './themeRemarq'

export const themeRemarqDark: Theme = {
  name: 'RemarqDark',
  ...theme,
  colors: {
    background: {
      ...theme.colors.background,
      primary: colors.remarqDarkTheme,
      secondary: colors.seashellGrey,
      dark: colors.white,
    },
    border: {
      ...theme.colors.border,
      primary: colors.greyDark,
      secondary: colors.greyLight,
      tertiary: colors.greyWhite,
      field: {
        active: colors.greyMedium,
        default: colors.greyMuted,
        hover: colors.greyMedium,
      },
    },
    brand: {
      default: colors.greyXLight,
      dark: colors.white,
      medium: colors.greyXLight,
      light: colors.greyMedium,
      xlight: colors.greyMuted,
      secondary: colors.remarqSecondary,
    },
    button: {
      ...theme.colors.button,
      default: {
        ...theme.colors.button.default,
        background: {
          active: 'rgba(255,255,255,0.1)',
          default: 'transparent',
          hover: 'rgba(255,255,255,0.1)',
        },
        color: {
          active: colors.remarqSecondary,
          default: colors.remarqSecondary,
          hover: colors.remarqSecondary,
        },
      },
      primary: {
        background: {
          active: colors.remarqSecondary,
          default: colors.remarqSecondary,
          hover: colors.remarqSecondary,
        },
        border: {
          active: colors.remarqSecondary,
          default: colors.remarqSecondary,
          hover: colors.remarqSecondary,
        },
        color: {
          active: colors.black,
          default: colors.remarqPrimary,
          hover: colors.black,
        },
      },
      secondary: {
        background: {
          active: colors.remarqPrimary,
          default: colors.remarqDarkThemeLight,
          hover: colors.remarqPrimary,
        },
        border: {
          active: colors.remarqPrimary,
          default: colors.remarqDarkThemeLight,
          hover: colors.remarqPrimary,
        },
        color: {
          active: colors.greyXLight,
          default: colors.greyXLight,
          hover: colors.greyXLight,
        },
      },
      social: {
        background: {
          active: colors.remarqPrimary,
          default: colors.remarqDarkThemeLight,
          hover: colors.remarqPrimary,
        },
        border: {
          active: colors.remarqPrimary,
          default: colors.remarqDarkThemeLight,
          hover: colors.remarqPrimary,
        },
        color: {
          active: colors.greyXLight,
          default: colors.greyXLight,
          hover: colors.greyXLight,
        },
      },
    },
    text: {
      ...theme.colors.text,
      primary: colors.white,
      secondary: colors.marbleGrey,
      muted: colors.greyLight,
      inactive: colors.remarqPrimary,
      onLight: colors.marbleGrey,
    },
  },
  shadow: {
    boxShadow: '0 0 10px 0 rgba(255, 255, 255, 0.05)',
    dropShadow: '0 4px 11px 0 rgba(255, 255, 255, 0.1)',
  },
}
