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

import 'typeface-roboto'
import * as colors from '../colors'
import { Theme } from '../types'
import { theme } from './themeDefault'

const fontFamily = '"Roboto", sans-serif'

export const themeRemarq: Theme = {
  name: 'Remarq',
  colors: {
    background: {
      primary: colors.marbleGrey,
      secondary: colors.greyWhite,
      tertiary: colors.alabasterGrey,
      fifth: colors.white,
      dark: '#1f2124',
      error: colors.chablisRed,
      info: colors.powderBlue,
      success: colors.peppermintGreen,
      warning: colors.butteryYellow,
    },
    border: {
      error: colors.alertDanger,
      info: colors.alertInfo,
      success: colors.alertSuccess,
      warning: colors.alertWarning,
      primary: colors.mercuryGrey2,
      secondary: colors.coolLight,
      tertiary: colors.greyWhite,
      field: {
        active: colors.remarqPrimary,
        default: colors.greyMedium,
        hover: colors.remarqPrimary,
      },
    },
    brand: {
      default: colors.remarqPrimary,
      dark: colors.remarqDark,
      medium: colors.remarqPrimary,
      light: colors.remarqLight,
      xlight: colors.remarqLight,
      secondary: colors.remarqSecondary,
    },
    button: {
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
      error: theme.colors.button.default,
      primary: {
        background: {
          active: colors.remarqDark,
          default: colors.remarqPrimary,
          hover: colors.remarqDark,
        },
        border: {
          active: colors.remarqDark,
          default: colors.remarqPrimary,
          hover: colors.remarqDark,
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
          active: colors.remarqDark,
          default: colors.remarqPrimary,
          hover: colors.remarqDark,
        },
        color: {
          active: colors.remarqPrimary,
          default: colors.remarqPrimary,
          hover: colors.remarqPrimary,
        },
      },
      social: theme.colors.button.social,
    },
    text: {
      primary: colors.remarqLight,
      secondary: colors.greyMedium,
      tertiary: colors.greyLight,
      muted: colors.greyMuted,
      inactive: colors.greyXLight,
      onDark: colors.white,
      onLight: colors.greyMedium,
      error: colors.alertDanger,
      info: colors.alertInfo,
      success: colors.alertSuccess,
      warning: colors.alertWarning,
    },
  },
  font: {
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
    lineHeight: {
      large: '24px',
      normal: '16px',
      small: '14px',
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
    unit: 4,
    radius: {
      default: '0',
      small: '0',
      rounder: '16px',
    },
    mobile: 360,
    tablet: 768,
    smallDesktop: 1024,
    desktop: 1280,
    largeDesktop: 1920,
  },
  shadow: theme.shadow,
}
