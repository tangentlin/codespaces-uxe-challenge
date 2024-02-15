import { Color, Palette } from './Theme';

// Colors generated from https://materialpalettes.com/
const lightPrimary: Color = {
  normal: '#385955',
  contrast: '#FFF8F2'
};

const lightSecondary: Color = {
  normal: '#482b30',
  contrast: '#FFF8F2'
};

const lightTextColor = '#2F3A4B';
const lightBackgroundColor = '#FFF8F2';
const lightNeutral: Palette['neutral'] = {
  50: '#ebf0fd',
  100: '#d0dcec',
  200: '#b7c3d8',
  300: '#9babc4',
  400: '#8698b3',
  500: '#7185a3',
  600: '#637692',
  700: '#52627a',
  800: '#424f63',
  900: '#2f3a4b'
};

export const lightPalette: Palette = {
  background: {
    default: lightBackgroundColor,
    surface: '#faede4'
  },
  text: {
    default: lightTextColor,
    disabled: '#7185a3'
  },
  interactivity: {
    active: '#a0c0d5',
    selected: '#a0c0d5',
    hover: '#e2f0f8'
  },
  neutral: lightNeutral,
  primary: lightPrimary,
  secondary: lightSecondary,
  divider: '#b9b9b9',
  border: {
    default: lightNeutral[900],
    light: lightNeutral[200]
  }
};

// Colors generated from https://matieralpalettes.com
const darkPrimary: Color = {
  normal: '#385955',
  contrast: '#FFF8F2'
};

const darkSecondary: Color = {
  normal: '#482b30',
  contrast: '#FFF8F2'
};

const darkTextColor = '#FFF8F2';
const darkBackgroundColor = '#2F3A4B';

const darkNeutral: Palette['neutral'] = {
  50: '#2f3a4b',
  100: '#424f63',
  200: '#52627a',
  300: '#637692',
  400: '#7185a3',
  500: '#8698b3',
  600: '#9babc4',
  700: '#b7c3d8',
  800: '#d0dcec',
  900: '#ebf0fd'
};

export const darkPalette: Palette = {
  background: {
    default: darkBackgroundColor,
    surface: '#424f63'
  },
  text: {
    default: darkTextColor,
    disabled: '#dab49a'
  },
  neutral: darkNeutral,
  // #5a6b75
  interactivity: {
    active: '#a0c0d5', // 500
    selected: '#a0c0d5', // 500
    hover: '#7e97a7' // 700
  },
  primary: darkPrimary,
  secondary: darkSecondary,
  divider: '#b9b9b9',
  border: {
    default: darkNeutral[900],
    light: darkNeutral[200]
  }
};
