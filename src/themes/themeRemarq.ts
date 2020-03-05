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

const fontFamily = '"Roboto", sans-serif'

export const themeRemarq: Theme = {
  ...theme,
  name: 'Remarq',
  colors: {
    background: {
      primary: colors.marbleGrey,
      secondary: colors.greyWhite,
      tertiary: colors.alabasterGrey,
      fifth: colors.white,
      dark: colors.remarqPrimary,
      error: colors.chablisRed,
      info: colors.powderBlue,
      success: colors.peppermintGreen,
      warning: colors.butteryYellow,
    },
    border: {
      ...theme.colors.border,
      primary: colors.mercuryGrey2,
      field: {
        active: colors.remarqPrimary,
        default: colors.greyMedium,
        hover: colors.remarqPrimary,
      },
    },
    brand: {
      default: colors.remarqPrimary,
      dark: colors.black,
      medium: colors.remarqPrimary,
      light: colors.remarqLight,
      xlight: colors.remarqLight,
      secondary: colors.remarqSecondary,
    },
    button: {
      ...theme.colors.button,
      default: {
        background: {
          active: colors.greyWhite,
          default: colors.white,
          hover: colors.greyWhite,
        },
        border: {
          active: colors.remarqSecondary,
          default: colors.remarqSecondary,
          hover: colors.remarqSecondary,
        },
        color: {
          active: colors.greyMuted,
          default: colors.greyMuted,
          hover: colors.greyMuted,
        },
      },
      primary: {
        background: {
          active: colors.black,
          default: colors.remarqPrimary,
          hover: colors.black,
        },
        border: {
          active: colors.black,
          default: colors.remarqPrimary,
          hover: colors.black,
        },
        color: {
          active: colors.white,
          default: colors.white,
          hover: colors.white,
        },
      },
      secondary: {
        background: {
          active: colors.marbleGrey,
          default: colors.white,
          hover: colors.marbleGrey,
        },
        border: {
          active: colors.black,
          default: colors.remarqPrimary,
          hover: colors.black,
        },
        color: {
          active: colors.remarqPrimary,
          default: colors.remarqPrimary,
          hover: colors.remarqPrimary,
        },
      },
    },
    text: {
      ...theme.colors.text,
      primary: colors.remarqLight,
    },
  },
  font: {
    ...theme.font,
    family: {
      sans: fontFamily,
      serif: 'serif',
    },
    size: {
      xlarge: '20px',
      large: '18px',
      medium: '16px',
      normal: '14px',
      small: '12px',
    },
    weight: {
      xbold: 900,
      bold: 700,
      semibold: 500,
      medium: 500,
      normal: 400,
      light: 300,
      xlight: 100,
    },
  },
  grid: {
    ...theme.grid,
    radius: {
      default: '0',
      small: '0',
      rounder: '16px',
    },
  },
}
