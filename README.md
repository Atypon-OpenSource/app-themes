# Install

`yarn add app-themes`

# Usage

Exported are all the predefined themes used in the ©Atypon Apps ecosystem:
- `theme` (default styling)
- `themeAuthorea`
- `themeConnect`
- `themeDark`
- `themeFusion`
- `themeManuscripts`
- `themeRemarq`
- `themeRemarqDark`
- `themeScitrus`
- `themeSubmissionDesk`

as well as the `Theme` type, if you want to create your own but need a skeleton to base on.

### styled-components
Available exports are also the ``{default: styled, css, createGlobalStyle, ThemeProvider, withTheme }``  from `styled-components` so you will not need it as an extra dependency.

# Building

Run `yarn build` to generate the `dist` folder for publishing

# For publishing

Make sure to do:

`npm set @atypon:registry https://atypon-npm-registry.herokuapp.com`

`npm publish` will publish the package to the Atypon NPM registry, and cause it to be pulled from there 
