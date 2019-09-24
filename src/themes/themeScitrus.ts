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

export const themeScitrus: Theme = {
  name: 'Scitrus',
  colors: {
    background: theme.colors.background,
    border: theme.colors.border,
    brand: {
      default: colors.scitrusPrimary,
      dark: colors.scitrusDark,
      medium: colors.scitrusPrimary,
      light: colors.scitrusLight,
      xlight: colors.scitrusLight,
      secondary: colors.scitrusSecondary,
    },
    button: {
      default: {
        background: {
          active: colors.white,
          default: colors.white,
          hover: colors.white,
        },
        border: {
          active: colors.scitrusDark,
          default: colors.scitrusDark,
          hover: colors.scitrusDark,
        },
        color: {
          active: colors.scitrusDark,
          default: 'rgba(13, 38, 60, 0.75)',
          hover: colors.scitrusDark,
        },
      },
      error: theme.colors.button.default,
      primary: {
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
    },
    text: theme.colors.text,
  },
  font: theme.font,
  grid: theme.grid,
  shadow: theme.shadow,
}
