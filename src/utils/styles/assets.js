import { css } from 'styled-components';

const fontFamily = css`
  font-family: 'Roboto Condensed', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
`;

const FONTS = {
  APP_TITLE: 'Decathlon font'
};

const flexCentering = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const absoluteCentering = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const FONTSIZES = {
  TITLE: {
    H1: 'calc(1.1rem + .5vw)',
    H2: 'calc(1rem + .5vw)',
    H3: 'calc(0.9rem + .5vw)',
    H4: 'calc(0.8rem + .5vw)',
    H5: 'calc(0.6rem + .5vw)',
    H6: 'calc(0.50rem + .5vw)'
  },
  FONT: {
    XXXSMALL: 'calc(0.28rem + .5vw)',
    XXSMALL: 'calc(0.55rem + .4vw)',
    XSMALL: 'calc(.7rem + .3vw)',
    SMALL: 'calc(0.80rem + .5vw)',
    MEDIUM: 'calc(1rem + .3vw)',
    LARGE: 'calc(1.15rem + .5vw)',
    XLARGE: 'calc(1.50rem + .5vw)',
    XXLARGE: 'calc(1rem + 1vw)',
    XXXLARGE: 'calc(2rem + 1.5vw)'
  },
  ICON: {
    SIZESMALL: 'calc(3.5rem + 1.5vw)',
    SIZEMEDIUM: 'calc(4rem + 2vw)'
  }
};

const COLORS = {
  BLUE: '#0082C3',
  BLUE_MID: '#0F79B5',
  BLUE_DARK: '#035F92',
  BLUE_NAVY: '#00253a',
  GREEN: '#02BE8A',
  GREEN_VALIDATE: '#62B608',
  GREEN_50: 'rgba(98,182,8,0.5)',
  GREEN_20: 'rgba(98,182,8,0.2)',
  YELLOW: '#FFEA28',
  YELLOW_DARK: '#FDD935',
  ORANGE: '#FE5800',
  RED: '#E53935',
  RED_50: 'rgba(229,57,53,0.5)',
  RED_20: 'rgba(229,57,53,0.2)',
  WHITE: '#FFFFFF',
  GREY_ULTRA_LIGHT: '#F9F9F9',
  GREY_LIGHT: '#F5F5F6',
  GREY_MEDIUM: '#EBEBEB',
  GREY: '#DCDCDC',
  GREY_MID: '#A7A7A7',
  GREY_DARK: '#6A6B6D',
  BLACK: '#262628',
  BLACK_20: 'rgba(38, 38, 40, .2)',
  BLACK_80: 'rgba(38, 38, 40, .8)'
};

const SIZES = {
  HOMEPAGE_PADDING: '40px',
  DEVICE_WIDTH_SM: '920px',
  DEVICE_WIDTH_MD: '1250px',
  DEVICE_WIDTH_LG: '1440px',
  DEVICE_WIDTH_XL: '1500px',
  CARD: {
    HEIGHT: '55px'
  },
  GRID: {
    COLUMNS_NB_SM: '3',
    COLUMNS_NB_MD: '4',
    COLUMNS_NB_LG: '5',
    GAP: '15px 22Px'
  },
  INPUT_HEIGHT: '3rem'
};

const EFFECTS = {
  SHADOW: '0 0 14px 0 rgba(0,0,0,0.11)',
  SHADOW_LG: `0 1px 1px rgba(0,0,0,0.08), 0 2px 2px rgba(0,0,0,0.12), 0 4px 4px rgba(0,0,0,0.16), 0 6px 6px rgba(0,0,0,0.12)`,
  TRANSITION: '.2s',
  RADIUS: '2px',
  LINEAR_GRADIENT: `linear-gradient(131.58deg, ${COLORS.BLUE} 0%, ${COLORS.GREEN} 100%, ${COLORS.GREEN} 100%)`
};

export { fontFamily, FONTSIZES, COLORS, SIZES, EFFECTS, FONTS, flexCentering, absoluteCentering };
