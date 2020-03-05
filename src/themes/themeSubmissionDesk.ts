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

export const themeSubmissionDesk: Theme = {
  ...theme,
  name: 'Submission Desk',
  colors: {
    ...theme.colors,
    brand: {
      default: colors.submissionPrimary,
      dark: colors.submissionDark,
      medium: colors.submissionPrimary,
      light: colors.submissionLight,
      xlight: colors.submissionLight,
      secondary: colors.submissionSecondary,
    },
    button: {
      ...theme.colors.button,
      primary: {
        ...theme.colors.button.primary,
        background: {
          active: colors.submissionDark,
          default: colors.submissionPrimary,
          hover: colors.submissionDark,
        },
        border: {
          active: colors.submissionDark,
          default: colors.submissionPrimary,
          hover: colors.submissionDark,
        },
      },
      secondary: {
        ...theme.colors.button.secondary,
        border: {
          active: colors.submissionDark,
          default: colors.submissionPrimary,
          hover: colors.submissionDark,
        },
        color: {
          active: colors.submissionPrimary,
          default: colors.submissionPrimary,
          hover: colors.submissionPrimary,
        },
      },
    },
  },
}
