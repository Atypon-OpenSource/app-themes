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

const fontFamily = '"Lato", sans-serif'

export const themeManuscripts: Theme = {
  name: 'Manuscripts',
  colors: {
    background: {
      primary: colors.white,
      secondary: colors.seashellGrey,
      tertiary: colors.alabasterGrey,
      fifth: colors.greyWhite,
      dark: colors.greyDark,
      error: colors.chablisRed,
      info: colors.powderBlue,
      success: colors.peppermintGreen,
      warning: colors.butteryYellow,
    },
    border: {
      error: colors.mandysRed,
      info: colors.manuscriptsPrimary,
      success: colors.springGreen,
      warning: colors.wheatYellow,
      primary: colors.dustyGrey,
      secondary: colors.mercuryGrey,
      tertiary: 'rgba(0, 0, 0, 0.1)',
      field: {
        active: colors.manuscriptsPrimary,
        default: colors.greyMedium,
        hover: colors.manuscriptsPrimary,
      },
    },
    brand: {
      dark: colors.jellyBeanBlue,
      medium: colors.manuscriptsDark,
      default: colors.manuscriptsPrimary,
      light: colors.iceBlue,
      xlight: colors.linkWaterBlue,
      secondary: colors.manuscriptsSecondary,
    },
    button: {
      default: {
        background: {
          active: 'transparent',
          default: 'transparent',
          hover: colors.manuscriptsXXL,
        },
        border: {
          active: colors.manuscriptsXXL,
          default: 'transparent',
          hover: 'transparent',
        },
        color: {
          active: colors.manuscriptsPrimary,
          default: colors.manuscriptsPrimary,
          hover: colors.manuscriptsPrimary,
        },
      },
      icon: {
        background: {
          active: 'transparent',
          default: 'transparent',
          hover: 'transparent',
        },
        border: {
          active: 'transparent',
          default: 'transparent',
          hover: 'transparent',
        },
        color: {
          active: colors.manuscriptsIcons,
          default: colors.greyDark,
          hover: colors.manuscriptsIcons,
        },
      },
      primary: {
        background: {
          active: colors.manuscriptsDark,
          default: colors.manuscriptsPrimary,
          hover: colors.manuscriptsDark,
        },
        border: {
          active: colors.manuscriptsDark,
          default: colors.manuscriptsPrimary,
          hover: colors.manuscriptsDark,
        },
        color: {
          active: colors.white,
          default: colors.white,
          hover: colors.white,
        },
      },
      secondary: {
        background: {
          active: 'transparent',
          default: 'transparent',
          hover: 'transparent',
        },
        border: {
          active: colors.mercuryGrey,
          default: colors.mercuryGrey,
          hover: colors.mercuryGrey,
        },
        color: {
          active: colors.manuscriptsPrimary,
          default: colors.greyDark,
          hover: colors.manuscriptsPrimary,
        },
      },
      error: {
        background: {
          active: colors.punchRed,
          default: colors.punchRed,
          hover: 'transparent',
        },
        border: {
          active: colors.punchRed,
          default: colors.punchRed,
          hover: colors.punchRed,
        },
        color: {
          active: colors.white,
          default: colors.white,
          hover: colors.punchRed,
        },
      },
      social: theme.colors.button.social,
    },
    text: {
      primary: colors.greyDark,
      secondary: colors.dustyGrey,
      tertiary: colors.scorpionGrey,
      muted: colors.greyMuted,
      inactive: colors.greyXLight,
      onDark: colors.white,
      onLight: colors.greyDark,
      error: colors.punchRed,
      info: colors.jellyBeanBlue,
      success: colors.killarneyGreen,
      warning: colors.zestOrange,
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
      semibold: 600,
      medium: 500,
      normal: 400,
      light: 300,
      xlight: 200,
    },
  },
  grid: {
    radius: {
      default: '8px',
      small: '4px',
      rounder: '16px',
    },
    unit: 4,
    mobile: 360,
    tablet: 768,
    smallDesktop: 1024,
    desktop: 1280,
    largeDesktop: 1920,
  },
  shadow: {
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.05)',
    dropShadow: '0 4px 9px 0 rgba(84, 83, 83, 0.3)',
  },
}
