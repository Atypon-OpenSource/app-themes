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
import { themeRemarq as theme } from './themeRemarq'

const fontFamily = '"Roboto", sans-serif'

export const themeRemarqDark: Theme = {
  name: 'RemarqDark',
  colors: {
    background: {
      primary: colors.remarqDarkTheme,
      secondary: colors.white,
      tertiary: colors.alabasterGrey,
      fifth: colors.greyWhite,
      dark: '#ffffff',
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
      primary: colors.greyDark,
      secondary: colors.coolLight,
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
      default: {
        background: {
          active: 'rgba(255,255,255,0.1)',
          default: 'transparent',
          hover: 'rgba(255,255,255,0.1)',
        },
        border: {
          active: colors.remarqSecondary,
          default: colors.remarqSecondary,
          hover: colors.remarqSecondary,
        },
        color: {
          active: colors.remarqSecondary,
          default: colors.remarqSecondary,
          hover: colors.remarqSecondary,
        },
      },
      error: theme.colors.button.default,
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
          active: colors.remarqDark,
          default: colors.remarqPrimary,
          hover: colors.remarqDark,
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
      primary: colors.white,
      secondary: colors.paleGrey,
      tertiary: colors.greyLight,
      muted: colors.greyLight,
      inactive: colors.remarqPrimary,
      onDark: colors.white,
      onLight: colors.paleGrey,
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
  shadow: {
    boxShadow: '0 0 10px 0 rgba(255, 255, 255, 0.05)',
    dropShadow: '0 4px 11px 0 rgba(255, 255, 255, 0.1)',
  },
}
