import { Color, Palette } from "./Theme";

// Colors generated from https://matieralpalettes.com
const lightPrimary: Color = {
  normal: '#385955',
  contrast: '#FFF8F2',
}

const lightSecondary: Color = {
  normal: '#482b30',
  contrast: '#FFF8F2',
}

const lightTextColor = '#2F3A4B';
const lightBackgroundColor = '#FFF8F2';

export const lightPalette: Palette = {
  background: {
    default: lightBackgroundColor,
    surface: '#faede4',
  },
  text: {
    default: lightTextColor,
    disabled: '#7185a3',
  },
  interactivity: {
    active: '#a0c0d5',
    selected: '#a0c0d5',
    hover: '#e2f0f8',
  },
  primary: lightPrimary,
  secondary: lightSecondary,
  divider: '#b9b9b9',
  border: '#b1b1b9',
}



// Colors generated from https://matieralpalettes.com
const darkPrimary: Color = {
  normal: '#385955',
  contrast: '#FFF8F2',
}

const darkSecondary: Color = {
  normal: '#482b30',
  contrast: '#FFF8F2',
}

const darkTextColor = '#FFF8F2';
const darkBackgroundColor = '#2F3A4B';

export const darkPalette: Palette = {
  background: {
    default: darkBackgroundColor,
    surface: '#424f63',
  },
  text: {
    default: darkTextColor,
    disabled: '#dab49a',
  },
  // #5a6b75
  interactivity: {
    active: '#a0c0d5', // 500
    selected: '#a0c0d5', // 500
    hover: '#7e97a7', // 700
  },
  primary: darkPrimary,
  secondary: darkSecondary,
  divider: '#b9b9b9',
  border: '#b1b1b9',
}