/*!
 * © 2021 Atypon Systems LLC
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
// https://app.zeplin.io/project/5aeb0f38a177eceb0282d0cb/screen/5d948afd13bc23613dbf8d4c
export const themeManuscripts: Theme = {
  ...theme,
  name: 'Manuscripts',
  colors: {
    background: {
      ...theme.colors.background,
      tertiary: colors.greyCloud,
      fifth: colors.manuscriptsXLight2,
      dark: 'rgba(0,0,0,0.5)',
      error: colors.chablisRed,
      info: colors.manuscriptsXLight2,
      success: colors.peppermintGreen,
      warning: colors.butteryYellow,
    },
    border: {
      error: colors.mandysRed,
      info: colors.manuscriptsBlue,
      success: colors.springGreen,
      warning: colors.wheatYellow,
      primary: colors.manuscriptsLight,
      secondary: colors.greyCloud,
      tertiary: colors.seashellGrey,
      field: {
        active: colors.manuscriptsLight,
        default: colors.greyCloud,
        hover: colors.manuscriptsLight,
      },
    },
    brand: {
      dark: colors.manuscriptsBlueDark,
      medium: colors.manuscriptsIcons,
      default: colors.manuscriptsBlue,
      light: colors.manuscriptsLight,
      xlight: colors.manuscriptsXLight,
      secondary: colors.manuscriptsSecondary,
    },
    button: {
      ...theme.colors.button,
      actionColored: {
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
          default: colors.manuscriptsBlue,
          hover: colors.manuscriptsIcons,
        },
      },
      default: {
        // secondary
        background: {
          active: colors.white,
          default: colors.white,
          hover: colors.white,
        },
        border: {
          active: colors.greyCloud,
          default: colors.greyCloud,
          hover: colors.greyCloud,
        },
        color: {
          active: colors.manuscriptsBlue,
          default: colors.greyDark,
          hover: colors.manuscriptsBlue,
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
          active: colors.manuscriptsBlueDark,
          default: colors.manuscriptsBlue,
          hover: colors.manuscriptsBlueDark,
        },
        border: {
          active: colors.manuscriptsBlueDark,
          default: colors.manuscriptsBlue,
          hover: colors.manuscriptsBlueDark,
        },
        color: {
          active: colors.white,
          default: colors.white,
          hover: colors.white,
        },
      },
      secondary: {
        // tertiary
        background: {
          active: 'transparent',
          default: 'transparent',
          hover: colors.manuscriptsXLight2,
        },
        border: {
          active: 'transparent',
          default: 'transparent',
          hover: colors.manuscriptsXLight2,
        },
        color: {
          active: colors.manuscriptsBlue,
          default: colors.manuscriptsBlue,
          hover: colors.manuscriptsBlue,
        },
      },
      error: {
        background: {
          active: colors.punchRed,
          default: colors.punchRed,
          hover: colors.punchRedDark,
        },
        border: {
          active: colors.punchRed,
          default: colors.punchRed,
          hover: colors.punchRedDark,
        },
        color: {
          active: colors.white,
          default: colors.white,
          hover: colors.white,
        },
      },
    },
    text: {
      ...theme.colors.text,
      secondary: colors.greyMuted,
      tertiary: colors.manuscriptsBlue,
      muted: colors.greyMuted,
      error: colors.punchRed,
      info: colors.manuscriptsBlueDark,
      success: colors.killarneyGreen,
      warning: colors.zestOrange,
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
      semibold: 600,
      medium: 500,
      normal: 400,
      light: 300,
      xlight: 200,
    },
  },
  grid: {
    ...theme.grid,
    radius: {
      default: '8px',
      small: '4px',
      rounder: '16px',
    },
  },
  shadow: {
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.05)',
    dropShadow: '0 4px 9px 0 rgba(84, 83, 83, 0.3)',
  },
}
