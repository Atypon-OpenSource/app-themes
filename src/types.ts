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

interface Alerts {
  error: string
  info: string
  success: string
  warning: string
}
export interface Elements {
  background: States
  border: States
  color: States
  dark?: {
    background: States
    border: States
    color: States
  }
}
interface States {
  active: string
  default: string
  hover: string
  focus?: string
  connect?: string
  white?: string
  hoverConnect?: string
}
interface Variations {
  primary: string
  secondary: string
  tertiary: string
}

interface Background {
  fifth: string
  dark: string
  darkBlue: string
}
interface Border {
  field: States
}
interface Brand {
  dark: string
  default: string
  medium: string
  light: string
  xlight: string
  secondary: string
  connect?: string
}
export interface Button {
  action: Elements
  actionColored: Elements
  default: Elements
  primary: Elements
  secondary: Elements
  social: Elements
  icon: Elements
  error?: Elements
  success?: Elements
  warning?: Elements
}
interface Text {
  muted: string
  inactive: string
  onDark: string
  onLight: string
}

interface FontFamily {
  sans: string
  serif: string
  open: string
}
interface FontSize {
  xlarge: string
  large: string
  medium: string
  normal: string
  small: string
}
interface LineHeight {
  xlarge: string
  large: string
  normal: string
  small: string
}
interface FontWeight {
  xbold: number
  bold: number
  semibold: number
  medium: number
  normal: number
  light: number
  xlight: number
}
export interface styles {
  styleType: string
  buttonStyle: string
  inputStyle: string
  footerStyle: string
  fontFamily: string
}
export interface Colors {
  background: Background & Alerts & Variations
  border: Border & Alerts & Variations
  brand: Brand
  button: Button
  text: Text & Alerts & Variations
}
export interface Font {
  family: FontFamily
  lineHeight: LineHeight
  size: FontSize
  weight: FontWeight
}
interface Radius {
  default: string
  small: string
  rounder?: string
}
export interface Grid {
  radius: Radius
  unit: number
  mobile: number
  tablet: number
  smallDesktop: number
  desktop: number
  largeDesktop: number
}
interface Shadow {
  boxShadow: string
  dropShadow: string
}

interface Logo {
  displayPublisherName: boolean
  publisherLogoSize: number
}

export interface Theme {
  name: string
  colors: Colors
  font: Font
  grid: Grid
  shadow: Shadow
  linkDecoration: string
  linkHoverDecoration: string
  styles: styles
  logo: Logo
}
