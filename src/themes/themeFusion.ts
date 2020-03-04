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

import * as colors from '../colors/colors'
import { Theme } from '../types'
import { theme } from './themeDefault'

export const themeFusion: Theme = {
  name: 'Fusion',
  colors: {
    background: theme.colors.background,
    border: theme.colors.border,
    brand: {
      default: colors.workspacePrimary,
      dark: colors.workspaceDark,
      medium: colors.workspaceMedium,
      light: colors.workspaceLight,
      xlight: colors.workspaceExtraLight,
      secondary: colors.workspaceSecondary,
    },
    button: {
      default: theme.colors.button.default,
      icon: theme.colors.button.icon,
      primary: {
        background: {
          active: colors.workspaceDark,
          default: colors.workspacePrimary,
          hover: colors.workspaceDark,
        },
        border: {
          active: colors.workspaceDark,
          default: colors.workspacePrimary,
          hover: colors.workspaceDark,
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
          active: colors.workspaceDark,
          default: colors.workspacePrimary,
          hover: colors.workspaceDark,
        },
        color: {
          active: colors.workspacePrimary,
          default: colors.workspacePrimary,
          hover: colors.workspacePrimary,
        },
      },
      social: theme.colors.button.social,
    },
    text: theme.colors.text,
  },
  font: theme.font,
  grid: theme.grid,
  shadow: theme.shadow,
}
