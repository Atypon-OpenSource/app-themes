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

export const theme: Theme = {
  name: 'Default',
  styles: {
    styleType: '',
    buttonStyle: '',
    inputStyle: '',
    footerStyle: '',
    fontFamily: '"Montserrat", sans-serif',
  },
  colors: {
    background: {
      primary: colors.white,
      secondary: colors.greyWhite,
      tertiary: colors.greyXLight,
      fifth: colors.greyLight,
      dark: colors.greyDark,
      darkBlue: colors.connectDarkBlue,
      error: colors.white,
      info: colors.white,
      success: colors.white,
      warning: colors.white,
    },
    border: {
      error: colors.danger,
      info: colors.info,
      success: colors.success,
      warning: colors.warning,
      primary: colors.greyXLight,
      secondary: colors.greyLight,
      tertiary: colors.greyCloud,
      field: {
        active: colors.connectDark,
        default: colors.greyMedium,
        hover: colors.connectDark,
        focus: colors.connectFocus,
      },
    },
    brand: {
      default: colors.connectSecondary,
      dark: colors.connectDark,
      medium: colors.connectButtons,
      light: colors.connectLight,
      xlight: colors.connectXLight,
      secondary: colors.connectSecondary,
      connect: colors.connectButtons,
    },
    button: {
      action: {
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
          active: colors.connectDark,
          default: colors.greyDark,
          hover: colors.connectDark,
        },
        dark: {
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
            active: colors.white,
            default: colors.white,
            hover: colors.white,
          },
        },
      },
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
          active: colors.connectDark,
          default: colors.connectButtons,
          hover: colors.connectDark,
        },
      },
      default: {
        background: {
          active: colors.greyXLight,
          default: colors.white,
          hover: colors.greyXLight,
          connect: colors.connectButtons,
          hoverConnect: colors.connectDark,
        },
        border: {
          active: colors.greyCloud,
          default: colors.greyCloud,
          hover: colors.greyCloud,
        },
        color: {
          active: colors.connectButtons,
          default: colors.greyMuted,
          hover: colors.connectButtons,
          white: colors.white,
        },
      },
      icon: {
        background: {
          active: colors.greyXLight,
          default: colors.white,
          hover: colors.greyXLight,
        },
        border: {
          active: colors.greyCloud,
          default: colors.greyCloud,
          hover: colors.greyCloud,
        },
        color: {
          active: colors.connectButtons,
          default: colors.greyMuted,
          hover: colors.connectButtons,
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
          active: colors.greyXLight,
          default: colors.white,
          hover: colors.greyXLight,
        },
        border: {
          active: colors.connectButtons,
          default: colors.connectButtons,
          hover: colors.connectButtons,
        },
        color: {
          active: colors.connectButtons,
          default: colors.connectButtons,
          hover: colors.connectButtons,
        },
      },
      social: {
        background: {
          active: colors.greyXLight,
          default: colors.white,
          hover: colors.greyXLight,
        },
        border: {
          active: colors.greyCloud,
          default: colors.greyCloud,
          hover: colors.greyCloud,
        },
        color: {
          active: colors.connectButtons,
          default: colors.greyMuted,
          hover: colors.connectButtons,
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
      error: colors.greyDark,
      info: colors.greyDark,
      success: colors.greyDark,
      warning: colors.greyDark,
    },
  },
  font: {
    family: {
      sans: '"Montserrat", sans-serif',
      serif: '"Roboto Slab", serif',
      open: '"Open Sans", sans-serif',
    },
    size: {
      xlarge: '24px',
      large: '18px',
      medium: '16px',
      normal: '14px',
      small: '12px',
    },
    lineHeight: {
      xlarge: '32px',
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
      default: '8px',
      small: '4px',
      rounder: '24px',
    },
    mobile: 360,
    tablet: 768,
    smallDesktop: 1024,
    desktop: 1280,
    largeDesktop: 1920,
  },
  shadow: {
    boxShadow:
      '0px 5px 12px rgba(203, 203, 203, 0.05), 0px 2px 2px rgba(194, 194, 194, 0.15)',
    dropShadow: '0px 5px 10px rgba(0, 0, 0, 0.15)',
  },
  logo: {
    displayPublisherName: true,
    publisherLogoSize: 42,
  },
  linkDecoration: 'none',
  linkHoverDecoration: 'none',
}
