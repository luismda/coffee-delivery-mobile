export const THEME = {
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    transparent: 'transparent',

    yellow: {
      500: '#DBAC2C',
      700: '#C47F17',
    },

    purple: {
      300: '#EBE5F9',
      500: '#8047F8',
      700: '#4B2995',
    },

    gray: {
      100: '#FAFAFA',
      200: '#F3F2F2',
      300: '#EDEDED',
      400: '#E6E5E5',
      500: '#D7D5D5',
      600: '#8D8686',
      700: '#574F4D',
      800: '#403937',
      900: '#272221',
    },

    red: {
      300: '#F2DFD8',
      500: '#E8BAAB',
      700: '#C44117',
    },
  },

  fontFamily: {
    title: 'Baloo2_700Bold',

    'body-bold': 'Roboto_700Bold',
    'body-regular': 'Roboto_400Regular',
  },

  fontSize: {
    xxs: 10,
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
    '2xl': 36,
  },

  lineHeight: {
    normal: 1.3,
    large: 1.6,
  },
} as const
