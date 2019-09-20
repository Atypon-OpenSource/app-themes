import * as StyledComponents from 'styled-components'
import { Theme } from './types'

export { themeAuthorea } from './themes/themeAuthorea'
export { themeConnect } from './themes/themeConnect'
export { themeDark } from './themes/themeDark'
export { theme } from './themes/themeDefault'
export { themeFusion } from './themes/themeFusion'
export { themeManuscripts } from './themes/themeManuscripts'
export { themeScitrus } from './themes/themeScitrus'
export { themeSubmissionDesk } from './themes/themeSubmissionDesk'

export const {
  default: styled,
  css,
  createGlobalStyle,
  ThemeProvider,
  withTheme,
} = StyledComponents as StyledComponents.ThemedStyledComponentsModule<Theme>

export type ThemedProps<V> = StyledComponents.ThemedStyledProps<
  React.HTMLProps<V>,
  Theme
>
