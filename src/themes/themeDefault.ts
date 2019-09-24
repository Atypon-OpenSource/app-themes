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

import 'typeface-montserrat'
import 'typeface-roboto-slab'
import * as colors from '../colors'
import { Theme } from '../types'

export const theme: Theme = {
  name: 'Default',
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
    border: {
      error: colors.alertDanger,
      info: colors.alertInfo,
      success: colors.alertSuccess,
      warning: colors.alertWarning,
      primary: colors.greyXLight,
      secondary: colors.coolLight,
      tertiary: colors.greyWhite,
      field: {
        active: colors.connectPrimary,
        default: colors.greyMedium,
        hover: colors.connectPrimary,
      },
    },
    brand: {
      default: colors.connectPrimary,
      dark: colors.connectDark,
      medium: colors.connectButtons,
      light: colors.coolLight,
      xlight: colors.coolLight,
      secondary: colors.connectSecondary,
    },
    button: {
      default: {
        background: {
          active: colors.greyWhite,
          default: colors.white,
          hover: colors.greyWhite,
        },
        border: {
          active: colors.greyXLight,
          default: colors.greyXLight,
          hover: colors.greyXLight,
        },
        color: {
          active: colors.greyMuted,
          default: colors.greyMuted,
          hover: colors.greyMuted,
        },
      },
      primary: {
        background: {
          active: colors.connectDark,
          default: colors.connectButtons,
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
          active: colors.coolLight,
          default: colors.white,
          hover: colors.coolLight,
        },
        border: {
          active: colors.connectDark,
          default: colors.connectButtons,
          hover: colors.connectDark,
        },
        color: {
          active: colors.connectButtons,
          default: colors.connectButtons,
          hover: colors.connectButtons,
        },
      },
      social: {
        background: {
          active: colors.greyWhite,
          default: colors.white,
          hover: colors.greyWhite,
        },
        border: {
          active: colors.greyXLight,
          default: colors.greyXLight,
          hover: colors.greyXLight,
        },
        color: {
          active: colors.greyMuted,
          default: colors.greyMuted,
          hover: colors.greyMuted,
        },
      },
      error: {
        background: {
          active: colors.alertDanger,
          default: colors.alertDanger,
          hover: 'transparent',
        },
        border: {
          active: colors.alertDanger,
          default: colors.alertDanger,
          hover: colors.alertDanger,
        },
        color: {
          active: colors.white,
          default: colors.white,
          hover: colors.alertDanger,
        },
      },
    },
    text: {
      primary: colors.greyDark,
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
      sans: '"Montserrat", sans-serif',
      serif: '"Roboto Slab", serif',
    },
    size: {
      xlarge: '22px',
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
      xbold: 800,
      bold: 700,
      semibold: 600,
      medium: 500,
      normal: 400,
      light: 300,
      xlight: 100,
    },
  },
  grid: {
    unit: 4,
    radius: {
      default: '6px',
      small: '4px',
      rounder: '16px',
    },
    mobile: 360,
    tablet: 768,
    smallDesktop: 1024,
    desktop: 1280,
    largeDesktop: 1920,
  },
  shadow: {
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.05)',
    dropShadow: '0 4px 11px 0 rgba(0, 0, 0, 0.1)',
  },
}
