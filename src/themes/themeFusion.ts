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

export const themeFusion: Theme = {
  ...theme,
  name: 'Fusion',
  colors: {
    ...theme.colors,
    brand: {
      default: colors.workspacePrimary,
      dark: colors.workspaceDark,
      medium: colors.workspaceMedium,
      light: colors.workspaceLight,
      xlight: colors.workspaceExtraLight,
      secondary: colors.workspaceSecondary,
    },
    button: {
      ...theme.colors.button,
      primary: {
        ...theme.colors.button.primary,
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
      },
      secondary: {
        ...theme.colors.button.secondary,
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
    },
  },
}
