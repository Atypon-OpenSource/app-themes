# Install

Request access in `https://github.com/Atypon-OpenSource`
and ask to be given a role for `https://github.com/Atypon-OpenSource/app-themes`

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

Create an account in https://www.npmjs.com/

Make sure you are given maintainer access in npm (different from github!)
and then login in console with `npm login`.

Make sure that you've updated the version in package.json or else there will be an error.

Finally `npm publish` will publish the package to the Atypon NPM registry, and cause it to be pulled from there 
