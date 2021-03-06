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

import * as StyledComponents from 'styled-components'
import { Button, Colors, Elements, Font, Grid, Theme } from './types'

export { ThemedStyledProps } from 'styled-components'
export { themeAuthorea } from './themes/themeAuthorea'
export { themeConnect } from './themes/themeConnect'
export { themeDark } from './themes/themeDark'
export { theme } from './themes/themeDefault'
export { themeFusion } from './themes/themeFusion'
export { themeManuscripts } from './themes/themeManuscripts'
export { themeRemarq } from './themes/themeRemarq'
export { themeRemarqDark } from './themes/themeRemarqDark'
export { themeScitrus } from './themes/themeScitrus'
export { themeSubmissionDesk } from './themes/themeSubmissionDesk'

export const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  useTheme,
  withTheme,
  isStyledComponent,
  ServerStyleSheet,
  StyleSheetManager,
} = StyledComponents

export type ThemedProps<V> = StyledComponents.ThemedStyledProps<
  React.HTMLProps<V>,
  Theme
>

export {
  Button as ThemeButtonProperties,
  Colors as ThemeColorProps,
  Elements as ThemeButtonInterface,
  Font as ThemeFontProps,
  Grid as ThemeGridProps,
}
