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

export const themeScitrus: Theme = {
  name: 'Scitrus',
  ...theme,
  colors: {
    ...theme.colors,
    border: {
      ...theme.colors.border,
      error: colors.scitrusPrimary,
      field: {
        active: colors.scitrusPrimary,
        default: colors.scitrusGrey,
        hover: colors.scitrusPrimary,
      },
    },
    brand: {
      default: colors.scitrusPrimary,
      dark: colors.scitrusDark,
      medium: colors.scitrusPrimary,
      light: colors.scitrusLight,
      xlight: colors.scitrusLight,
      secondary: colors.scitrusSecondary,
    },
    button: {
      ...theme.colors.button,
      default: {
        background: {
          active: colors.white,
          default: colors.white,
          hover: colors.white,
        },
        border: {
          active: colors.scitrusDark,
          default: colors.scitrusPrimary,
          hover: colors.scitrusDark,
        },
        color: {
          active: colors.scitrusDark,
          default: 'rgba(13, 38, 60, 0.75)',
          hover: colors.scitrusDark,
        },
      },
      primary: {
        ...theme.colors.button.primary,
        background: {
          active: colors.scitrusDark,
          default: colors.scitrusPrimary,
          hover: colors.scitrusDark,
        },
        border: {
          active: colors.scitrusDark,
          default: colors.scitrusPrimary,
          hover: colors.scitrusDark,
        },
      },
      secondary: {
        ...theme.colors.button.secondary,
        border: {
          active: colors.scitrusDark,
          default: colors.scitrusPrimary,
          hover: colors.scitrusDark,
        },
        color: {
          active: colors.scitrusPrimary,
          default: colors.scitrusPrimary,
          hover: colors.scitrusPrimary,
        },
      },
      social: {
        background: {
          active: colors.greyWhite,
          default: colors.white,
          hover: colors.greyWhite,
        },
        border: {
          active: colors.scitrusGrey,
          default: colors.scitrusGrey,
          hover: colors.scitrusGrey,
        },
        color: {
          active: colors.scitrusButtonColor,
          default: colors.scitrusButtonColor,
          hover: colors.scitrusButtonColor,
        },
      },
    },
    text: {
      ...theme.colors.text,
      primary: colors.scitrusDarkGrey,
      secondary: colors.scitrusButtonColor,
      muted: colors.scitrusCoolGrey,
      error: colors.scitrusPrimary,
    },
  },
}
